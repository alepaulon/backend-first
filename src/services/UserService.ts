import db from "../config/db";
import bcrypt, { hash } from "bcrypt";

export const registerUser = async (user: any) => {
  try {
    const hash = await bcrypt.hash(user.password, 10);
    const results = await db
      .promise()
      .query(
        `INSERT INTO users (email, password, description, name) VALUES ('${user.email}', '${hash}', '${user.description}', '${user.name}')`
      );
    return results;
  } catch (error) {
    console.log(error);
  }
};
