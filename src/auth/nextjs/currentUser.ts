import { cookies } from "next/headers";
import { cache } from "react";
import { getUserFromSession } from "../core/session";
import { db } from "@/drizzle/db";
import { eq } from "drizzle-orm";
import { UserTable } from "@/drizzle/schema";
import { redirect } from "next/navigation";

export interface fullUserProps {
  fullUser: {
    id: string;
    role: "admin" | "user";
    name: string;
    email: string;
  };
}
async function _getCurrentUser() {
  const user = await getUserFromSession(await cookies());
  // await new Promise((resolve) => setTimeout(resolve, 2000));

  if (user == null) {
    return redirect("/sign-in");
  }

  const fullUser = await getUserFromDb(user.id);
  if (fullUser == null) throw new Error("User not found in database");
  return fullUser;
}

export const getCurrentUser = cache(_getCurrentUser);

function getUserFromDb(id: string) {
  return db.query.UserTable.findFirst({
    columns: { id: true, email: true, role: true, name: true },
    where: eq(UserTable.id, id),
  });
}
