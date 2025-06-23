import crypto from "crypto";

export function hashPassword(password: string, salt: string): Promise<string> {
  return new Promise((resolve, reject) => {
    //ШИФРУЕМ ПАРОЛЬ
    crypto.scrypt(password.normalize(), salt, 64, (error, hash) => {
      if (error) reject(error);
      resolve(hash.toString("hex").normalize());
    });
  });
}

export function generateSalt() {
  //ГЕНЕРИРУЕМ СОЛЬ
  return crypto.randomBytes(16).toString("hex").normalize();
}

export async function comparePassword({
  password,
  salt,
  hashedPassword,
}: {
  password: string;
  salt: string;
  hashedPassword: string;
}) {
  //ХЭШИРУЕМ ПАРОЛЬ ИЗ ФОРМЫ
  const inputHashedPassword = await hashPassword(password, salt);

  //СРАВНИВАЕМ ПАРОЛЬ ИЗ БД И ИЗ ФОРМЫ
  return crypto.timingSafeEqual(
    Buffer.from(inputHashedPassword, "hex"),
    Buffer.from(hashedPassword, "hex")
  );
}
