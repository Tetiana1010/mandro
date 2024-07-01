"use client"

import React, { useState } from "react";
import AddWordForm from "../ui/training/add-word-form";
import DictionaryCards from './dictionary-cards';
import { Word } from "@/src/db/schema";
import PlusIcon from "../ui/icons/plus-icon";

interface MyWordsProps {
  words: Word[]
}

const MyWords: React.FC<MyWordsProps> = ({ words }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => setIsFormOpen(!isFormOpen);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center my-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold mb-4">Dictionary</h1>
          <div>
            <button
              className="bg-green text-white p-2 rounded"
              onClick={toggleForm}
            >
              <PlusIcon />
            </button>
          </div>
        </div>
        <DictionaryCards words={words} />
        {isFormOpen && <AddWordForm handleToggle={toggleForm} />}
      </div>
    </div>
  );
};

export default MyWords;