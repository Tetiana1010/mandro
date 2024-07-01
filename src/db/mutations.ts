"use server"

import { eq } from "drizzle-orm";
import { db } from ".";
import { wordsTable } from "./schema";

export async function createWord(
  word: string,
  translation: string,
  example: string
) {
  const [inserted] = await db.insert(wordsTable).values({
    word, example, translation
  }).returning();
  return inserted
}

export async function deteleWord(id: number){
  const deletedWord = await db.delete(wordsTable)
  .where(eq(wordsTable.id, id))
  .returning();
  return deletedWord;
}
