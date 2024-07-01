import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';
import { createWord } from "@/src/db/mutations";
import { toast } from "sonner";
import XIcon from "../icons/x-icon";

interface AddWordFormProps {
  handleToggle: () => void;
}

interface FormValues {
  word: string;
  translation: string;
  usageExample?: string;
}

const newWordSchema = Yup.object().shape({
  word: Yup.string()
    .min(1, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  translation: Yup.string()
    .min(1, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  usageExample: Yup.string()
    .min(1, 'Too Short!')
    .max(100, 'Too Long!')
});

const AddWordForm: React.FC<AddWordFormProps> = ({ handleToggle }) => {
  const initialValues: FormValues = {
    word: '',
    translation: '',
    usageExample: ''
  };

  const renderField = (label: string, name: keyof FormValues, type: string, placeholder: string, errors: any, touched: any) => (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block text-gray-700 text-sm font-bold mb-2 text-left"
      >
        {label}
      </label>
      <Field
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      {errors[name] && touched[name] ? (
        <div>{errors[name]}</div>
      ) : null}
    </div>
  );

  return (
    <div className="absolute inset-0 bg-white flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-1/2">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-center">Add a New Word</h1>
          <button
            className="bg-pink hover:bg-red-700 text-white font-bold p-2 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleToggle}
          >
            <XIcon />
          </button>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={newWordSchema}
          onSubmit={async ({translation, word, usageExample}) => {
            toast.promise(
              createWord(word, translation, usageExample ?? ""),
              {
                loading: "Creating word",
                success: data => `Word ${data.word} created!`,
                error: err => `Error: ${err.message}`
              }
            )
          }}
        >
          {({ errors, touched }) => (
            <Form>
              {renderField("Word", "word", "text", "Enter the word", errors, touched)}
              {renderField("Translation", "translation", "text", "Enter the translation", errors, touched)}
              {renderField("Example of usage", "usageExample", "text", "Enter the example of usage", errors, touched)}

              <div className="flex items-center justify-between">
                <button
                  className="bg-light-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Add Word
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddWordForm;
