import React from 'react';
import { Word } from "@/src/db/schema";
import { deteleWord } from '@/src/db/mutations';

import Skeleton from '../ui/training/skeleton';

import EditIcon from '../ui/icons/edit-icon';
import TrashIcon from '../ui/icons/trash-icon'

interface WordProps {
  word: Word
}

const DictionaryCard: React.FC<WordProps> = ({ word }) => {
  const handleDelete = () => {
    deteleWord(word.id);
  };

  return (
    <div className="flex gap-4 px-4 py-5 bg-light-violet bg-opacity-30 rounded-md">
      <Skeleton />
      <div className='flex flex-col text-left flex-1'>
        <h2>{word.word}</h2>
        <h3>{word.translation}</h3>
        <p>{word.example}</p>
      </div>
      <div className='flex gap-2 items-start'>
        <button>
          <EditIcon />
        </button>
        <button onClick={handleDelete}>
          <TrashIcon />
        </button>
      </div>
    </div>
  );
};

export default DictionaryCard;

