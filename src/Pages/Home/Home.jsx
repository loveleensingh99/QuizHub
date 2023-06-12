import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { difficultyCategory, Categories } from "../../Data/Categories";
import { useNavigate } from "react-router-dom";
import { ErrorMessage } from "../../Components/SubComponents/SubComponents";

export default function Home({ name, setName, fetchQuestions }) {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!category || !difficulty || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      navigate("/quiz");
    }
  };
  return (
    <>
      <div className="flex flex-col md:justify-around md:items-center  p-3">
        <div className="flex w-full md:w-[40%] md:gap-4  order-2 ">
          <div className="w-full space-y-4 flex flex-col content-center px-5">
            <h2 className="font-bold text-primary-blue text-2xl text-center">
              Quiz Setting
            </h2>
            {error && <ErrorMessage>Please Fill all the Fields</ErrorMessage>}

            <TextField
              size="small"
              id="outlined-basic"
              label="Name"
              variant="outlined"
              className=" w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <FormControl fullWidth size="small">
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                label="Category"
                onChange={(e) => setCategory(e.target.value)}
              >
                {Categories.map(({ category, value }, index) => (
                  <MenuItem value={value} key={index}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth size="small">
              <InputLabel id="demo-simple-select-label">
                Select Difficulty
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={difficulty}
                label="Select Difficulty"
                onChange={(e) => setDifficulty(e.target.value)}
              >
                {difficultyCategory.map(({ category, value }, index) => (
                  <MenuItem value={value} key={index}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Button
              variant="contained"
              className="!bg-primary-blue"
              onClick={handleSubmit}
            >
              START QUIZ
            </Button>
          </div>
        </div>
        <div className="md:w-[60%]">
          <img
            src="/QuizHub.png"
            alt="QuizHub"
            className="max-w-sm md:max-w-lg p-3 md:p-12 mx-auto"
          />
        </div>
      </div>
    </>
  );
}
