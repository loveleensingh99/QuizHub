import React, { useEffect, useState } from "react";
import {
  H1,
  H2,
  H5,
  Question,
} from "../../Components/SubComponents/SubComponents";
import CircularProgress from "@mui/material/CircularProgress";

export default function Quiz({
  name,
  questions,
  score,
  setScore,
  setQuestions,
  fetchQuestions,
}) {
  const [options, setOptions] = useState();
  const [curQues, setCurQues] = useState(0);

  useEffect(() => {
    fetchQuestions();
  }, []);
  useEffect(() => {
    console.log(questions);

    setOptions(
      questions &&
        handleShuffle([
          questions[curQues]?.correct_answer,
          ...questions[curQues]?.incorrect_answers,
        ])
    );
  }, [questions]);
  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };
  return (
    <>
      <div className="">
        <H2
          className={
            "border-2 border-primary-green px-4 py-2 w-fit  shadow-[4px_4px_2px_#60ce80] mx-auto my-5 "
          }
        >
          {`Welcome, ${name || "NotSet"}`}
        </H2>

        {questions ? (
          <>
            <div className="">
              <div className=" justify-around items-center flex">
                <H5 className={"uppercase"}>{questions[curQues].category} </H5>
                <H5 className={"uppercase"}>Score:{score} </H5>
              </div>
              <Question
                curQues={curQues}
                setCurQues={setCurQues}
                questions={questions}
                options={options}
                setOptions={setOptions}
                correct={questions[curQues]?.correct_answer}
                score={score}
                setScore={setScore}
                setQuestions={setQuestions}
              />
            </div>
          </>
        ) : (
          <CircularProgress className="m-[100px] mx-auto" />
        )}
      </div>
    </>
  );
}
