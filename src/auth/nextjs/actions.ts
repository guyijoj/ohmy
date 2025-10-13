"use server";

import { redirect } from "next/navigation";
import { profileUpdateSchema, signInSchema, signUpSchema } from "./schemas";
import z from "zod";
import { db } from "@/drizzle/db";
import { eq } from "drizzle-orm";
import { UserTable } from "@/drizzle/schema";
import {
  comparePassword,
  generateSalt,
  hashPassword,
} from "../core/passwordHasher";
import { cookies } from "next/headers";
import { createUserSession, removeUserSession } from "../core/session";

export async function signIn(unsafeData: z.infer<typeof signInSchema>) {
  //ДЕЛАЕМ ВАЛИДАЦИЮ ДАННЫХ
  const { success, data } = signInSchema.safeParse(unsafeData);

  //ЕСЛИ ВАЛИДАЦИЯ НЕ ПРОШЛА
  if (!success) return "Unable to log you in";

  //ИЩЕМ ТАКОГО ПОЛЬЗОВАТЕЛЯ В БД ПО ПОЧТЕ
  const user = await db.query.UserTable.findFirst({
    columns: { password: true, salt: true, id: true, email: true, role: true },
    where: eq(UserTable.email, data.email),
  });

  //ЕСЛИ ТАКОГО ПОЛЬЗОВАТЕЛЯ НЕТ
  if (user == null || user.password == null || user.salt == null) {
    return "User doesn't exist";
  }

  //ПРОВЕРКА НА КОРРЕКНОСТИ ПАРОЛЕЙ
  const isCorrectPassword = await comparePassword({
    hashedPassword: user.password,
    password: data.password,
    salt: user.salt,
  });

  //ЕСЛИ ПАРОЛЬ НЕПРАВИЛЬНАЯ
  if (!isCorrectPassword) return "The password is incorrect";

  //СОЗДАНИЯ СЕССИИ
  await createUserSession(user, await cookies());

  //НАПРАВИТЬ НА НУЖНУЮ СТРАНИЦУ
  redirect("/dashboard");
}

export async function signUp(unsafedata: z.infer<typeof signUpSchema>) {
  //ДЕЛАЕМ ВАЛИДАЦИЮ ДАННЫХ
  const { success, data } = signUpSchema.safeParse(unsafedata);
  //ЕСЛИ ВАЛИДАЦИЯ НЕ ПРОШЛА
  if (!success) return "Unable to create a account";

  //ПРОВЕРКА НА СУЩЕСТВУЮЩЕГО ПОЛЬЗОВАТЕЛЯ
  const existingUser = await db.query.UserTable.findFirst({
    where: eq(UserTable.email, data.email),
  });

  //ЕСЛИ ПОЛЬЗОВАТЕЛЯ УЖЕ СУЩЕСТВУЕТ
  if (existingUser != null) return "Account already exists for this email";

  try {
    //ГЕНЕРИРУЕМ СОЛЬ
    const salt = generateSalt();

    //ХЭШИРУЕМ ПАРОЛЬ С СОЛЬЮ
    const hashedPassword = await hashPassword(data.password, salt);

    //СОЗДАЕМ НОВЫЙ ПОЛЬЗОВАТЕЛЬ В БД
    const [user] = await db
      .insert(UserTable)
      .values({
        firstName: data.firstname,
        lastName: data.lastname,
        email: data.email,
        password: hashedPassword,
        salt: salt,
      })
      .returning({ id: UserTable.id, role: UserTable.role });

    // ЕСЛИ НЕ СОЗДАЕТСЯ ПОЛЬЗОВАТЕЛЬ
    if (user == null) return "Unable to create account";

    // СОЗДАЕМ СЕССИЮ
    await createUserSession(user, await cookies());
  } catch {
    return "Unable to create account";
  }
  //НАПРАВИТЬ НА НУЖНУЮ СТРАНИЦУ
  redirect("/dashboard");
}

export async function logOut() {
  //УДАЛЯЕМ СЕССИЮ
  await removeUserSession(await cookies());
  //НАПРАВИТЬ НА НУЖНУЮ СТРАНИЦУ
  redirect("/");
}

export async function EditProfile(
  UserEmail: string,
  unsafeData: z.infer<typeof profileUpdateSchema>
) {
  const { success, data } = profileUpdateSchema.safeParse(unsafeData);

  if (!success) return "Unable to edit profile";
  try {
    await db
      .update(UserTable)
      .set({
        firstName: data.firstname,
        lastName: data.lastname,
        contactNumber: data.contactNumber,
      })
      .where(eq(UserTable.email, UserEmail));
  } catch {
    return "Unable to create account";
  }
  redirect("/dashboard/profile");
}
