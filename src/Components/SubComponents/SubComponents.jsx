import { Button } from "@mui/material";
import React, { useState } from "react";

export function ErrorMessage() {
  return (
    <>
      <div className="bg-red-500 py-2 w-full text-white rounded-[4px] px-3">
        Components
      </div>
    </>
  );
}

export const H1 = ({ className, text = "TEXT IS NOT SET YET", children }) => (
  <h1 className={`text-5xl font-extrabold dark:text-white ${className}`}>
    {text || children}
  </h1>
);

export const H2 = ({ className, children }) => (
  <h2 className={`text-4xl font-bold dark:text-white ${className}`}>
    {children}
  </h2>
);

export const H3 = ({ className, children }) => (
  <h3 className={`text-3xl font-bold dark:text-white ${className}`}>
    {children}
  </h3>
);

export const H4 = ({ className, children }) => (
  <h4 className={`text-2xl font-bold dark:text-white ${className}`}>
    {children}
  </h4>
);

export const H5 = ({ className, children }) => (
  <h5 className={`text-xl font-bold dark:text-white ${className}`}>
    {children}
  </h5>
);

export const H6 = ({ className, children }) => (
  <h6 className={`text-lg font-bold dark:text-white ${className}`}>
    {children}
  </h6>
);

export function Question({
  curQues,
  setCurQues,
  questions,
  options,
  setOptions,
  correct,
  score,
  setScore,
  setQuestions,
}) {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);

  return (
    <div className="px-40 py-2">
      <H3 className={"text-primary-blue py-4"}>
        {curQues + 1}
        {"."}

        <span
          className="pl-2
          
        "
        >
          {questions[curQues]?.question}{" "}
        </span>
      </H3>
      {/* Options */}
      <div className=" ">
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <div className="flex md:grid md:grid-cols-2 md:gap-4 place-items-center	px-12 ">
          {options &&
            options.map((item) => (
              <button
                type="button"
                class="py-2.5 w-full mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                onClick={() => {}}
              >
                {item}
              </button>
            ))}
          {/* </div> */}
        </div>
        <H3> {curQues}</H3>
      </div>
    </div>
  );
}
