import db from "../config/db";
export const createPost = async (post: any) => {
  try {
    const results = await db.promise().query(`INSERT INTO posts SET ?`, post);
    return results;
  } catch (error) {
    console.log(error);
  }
};
