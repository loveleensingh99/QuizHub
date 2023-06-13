import { Button } from "@mui/material";
import { H2 } from "Components";
import React, { useEffect } from "react";
import { AiFillHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function Result({ name, score, setScore }) {
  const handlehome = () => {
    navigate("/");
    setScore(0);
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (!name) {
      navigate("/");
    }
  }, [name, navigate]);
  return (
    <>
      <div className="flex flex-col items-center justify-center md:justify-normal  h-screen md:h-[50vh] md:!mt-48 space-y-4">
        <H2 className={"mx-auto text-primary-green text-xl md:text-3xl "}>
          {name}, Your Final Score is {score}
        </H2>

        <Button
          variant="contained"
          endIcon={<AiFillHome />}
          className="!w-56 !bg-primary-blue"
          onClick={() => {
            handlehome();
          }}
        >
          Go To HomePage
        </Button>
      </div>
    </>
  );
}
