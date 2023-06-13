import React, { useEffect, useState } from "react";
import {
  H1,
  H2,
  H3,
  H5,
  Question,
} from "../../Components/SubComponents/SubComponents";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();
  // useEffect(() => {
  //   fetchQuestions();
  // }, []);
  useEffect(() => {
    console.log(questions);
    if (!name) {
      navigate("/");
    }
    setOptions(
      questions &&
        handleShuffle([
          questions[curQues]?.correct_answer,
          ...questions[curQues]?.incorrect_answers,
        ])
    );
  }, [questions, curQues]);
  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };
  return (
    <>
      <div className="">
        <H3
          className={
            "border-2 border-primary-green px-4 py-2 w-fit  shadow-[4px_4px_2px_#60ce80] mx-auto my-5 "
          }
        >
          {`Welcome, ${name || "NotSet"}`}
        </H3>

        {questions ? (
          <>
            <div className="">
              <div className="flex flex-col items-center justify-start my-12 md:justify-around md:flex-row">
                <H5 className={"uppercase"}>
                  Category:{questions[curQues].category}{" "}
                </H5>
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
          <div className="flex items-center justify-center">
            <CircularProgress className="m-[100px] mx-auto" />
          </div>
        )}
      </div>
    </>
  );
}
