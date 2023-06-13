import { Button } from "@mui/material";
import React, { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { TbArrowBack } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

export function ErrorMessage({ message }) {
  return (
    <>
      <div className="bg-red-500 my-3 py-2 w-full text-white rounded-[4px] px-3">
        {message}
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
  const [disable, setdisable] = useState(false);
  const navigate = useNavigate();

  const handleCheck = (item) => {
    setError(false);
    setSelected(item);
    setdisable(true);
    if (item === correct) {
      setScore(score + 1);
      setError(false);
    }
  };
  const handleSelect = (item) => {
    if (selected === item && selected === correct) {
      return "!bg-green-500 text-white";
    } else if (selected === item && selected !== correct) {
      return "!bg-red-500 text-white";
    } else if (item === correct) {
      return "!bg-green-500 text-white";
    }
  };

  const handleQuit = () => {
    if (curQues > 9) {
      navigate("/result");
    }
  };

  const handleNext = () => {
    if (curQues > 8) {
      navigate("/result");
    } else if (selected) {
      setCurQues(curQues + 1);
      setdisable(false);
      setSelected();
    } else {
      setError("Please select an option first");
    }
  };

  return (
    <div className="px-40 py-2">
      <H3 className={"text-primary-blue py-4"}>
        {curQues + 1}
        {"."}

        <span className="pl-2 ">{questions[curQues]?.question} </span>
      </H3>
      {/* Options */}
      <div className="">
        {error && <ErrorMessage message={error} />}
        <div className="flex px-12 md:grid md:grid-cols-2 md:gap-4 place-items-center ">
          {options &&
            options.map((item) => (
              <button
                type="button"
                className={`py-2.5 w-full mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200   hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700   ${
                  selected && handleSelect(item)
                } ${disable ? "hover:!none " : "hover:bg-gray-300 "}`}
                onClick={() => {
                  handleCheck(item);
                }}
                disabled={selected ? true : false}
              >
                {item}
              </button>
            ))}
          {/* </div> */}
        </div>
        <div className="flex items-center justify-center pt-8 md:gap-12">
          <Button
            variant="outlined"
            endIcon={<TbArrowBack />}
            className="!w-56 !text-primary-blue !border-primary-blue"
            onClick={() => {
              handleQuit();
            }}
          >
            Quit
          </Button>
          <Button
            variant="contained"
            endIcon={<AiOutlineRight />}
            className="!w-56 !bg-primary-blue"
            onClick={() => {
              handleNext();
            }}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

//
