import { userRoles } from "@/drizzle/schema";
import { redisClient } from "@/redis/redis";
import crypto from "crypto";
import z from "zod";

//Seven days in secnds
const SESSION_EXPIRATION_SECONDS = 60 * 60 * 24 * 7;
const COOKIE_SESSION_KEY = "auth-session";

//СХЕМА ДЛЯ СЕССИИ
const sessionSchema = z.object({
  id: z.string(),
  role: z.enum(userRoles),
});

//ТИП ДАННЫХ ДЛЯ СЕССИИ
type UserSession = z.infer<typeof sessionSchema>;

//ТИП ДАННЫХ ДЛЯ КУКИ
export type Cookies = {
  set: (
    key: string,
    value: string,
    options: {
      secure?: boolean;
      httpOnly?: boolean;
      sameSite?: "strict" | "lax";
      expires?: number;
    }
  ) => void;
  get: (key: string) => { name: string; value: string } | undefined;
  delete: (key: string) => void;
};

export async function getUserFromSession(cookies: Pick<Cookies, "get">) {
  //ПОЛУЧАЕМ ID СЕССИИ С КУКИ
  const sessionId = cookies.get(COOKIE_SESSION_KEY)?.value;

  //ЕСЛИ ОШИБКА ПРИ ПОЛУЧЕНИИ
  if (sessionId == null) return null;

  //ПОЛУЧАЕМ ДАННЫЕ ПРО ПОЛЬЗОВАТЕЛЯ ЧЕРЕЗ ID
  return getUserSessionById(sessionId);
}

export async function createUserSession(user: UserSession, cookies: Cookies) {
  //ГЕНЕРИРУЕМ ID СЕССИЮ
  const sessionId = crypto.randomBytes(512).toString("hex").normalize();

  //СОХРАНЯЕМ СЕССИЮ В REDIS
  await redisClient.set(`session:${sessionId}`, sessionSchema.parse(user), {
    ex: SESSION_EXPIRATION_SECONDS,
  });

  //УСТАНОВКА КУКИ
  setCookie(sessionId, cookies);
}

export async function updateUserSessionExpiration(
  cookies: Pick<Cookies, "get" | "set">
) {
  //ПОЛУЧАЕМ ID СЕССИИ С КУКИ
  const sessionId = cookies.get(COOKIE_SESSION_KEY)?.value;

  //ЕСЛИ ОШИБКА ПРИ ПОЛУЧЕНИИ
  if (sessionId == null) return null;

  const user = await getUserSessionById(sessionId);

  await redisClient.set(`session:${sessionId}`, user, {
    ex: SESSION_EXPIRATION_SECONDS,
  });

  setCookie(sessionId, cookies);
}

export async function updateUserSessionData(
  user: UserSession,
  cookies: Pick<Cookies, "get" | "delete">
) {
  const sessionId = cookies.get(COOKIE_SESSION_KEY)?.value;
  if (sessionId == null) return null;

  await redisClient.set(`session:${sessionId}`, sessionSchema.parse(user), {
    ex: SESSION_EXPIRATION_SECONDS,
  });
}

export async function removeUserSession(
  cookies: Pick<Cookies, "get" | "delete">
) {
  //ПОЛУЧАЕМ ID СЕССИИ С КУКИ
  const sessionId = cookies.get(COOKIE_SESSION_KEY)?.value;

  //ЕСЛИ ОШИБКА ПРИ ПОЛУЧЕНИИ
  if (sessionId == null) return null;

  //УДАЛЯЕМ СЕССИИ ИЗ REDIS
  await redisClient.del(`session:${sessionId}`);

  //УДАЛЯЕМ СЕССИИ ИЗ КУКИ
  cookies.delete(COOKIE_SESSION_KEY);
}

// устанавливает HTTP-куку для управления сессией пользователя
function setCookie(sessionId: string, cookies: Pick<Cookies, "set">) {
  cookies.set(COOKIE_SESSION_KEY, sessionId, {
    secure: true,
    httpOnly: true,
    sameSite: "lax",
    expires: Date.now() + SESSION_EXPIRATION_SECONDS * 10000,
  });
}

async function getUserSessionById(sessionId: string) {
  //ПОЛУЧАЕМ ДАННЫЕ С REDIS
  const rawUser = await redisClient.get(`session:${sessionId}`);

  //ВАЛИДАЦИЯ ДАННЫХ
  const { success, data: user } = sessionSchema.safeParse(rawUser);

  //ВОЗВРАЩАЕМ ИНФОРМАЦИЮ О ПОЛЬЗОВАТЕЛЯ ЕСЛИ УСПЕХ
  return success ? user : null;
}
