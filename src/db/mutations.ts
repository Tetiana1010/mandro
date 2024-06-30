"use server"

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