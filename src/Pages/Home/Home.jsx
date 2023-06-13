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
      <div className="flex flex-col p-3 md:flex-row md:justify-around md:items-center ">
        <div className="flex w-full md:w-[50%] md:gap-4  order-2  ">
          <div className="flex flex-col content-center w-full px-5 space-y-4 md:px-10">
            <h2 className="text-2xl font-bold text-center text-primary-blue">
              Quiz Setting
            </h2>
            {error && (
              <ErrorMessage message="Please Fill all the Fields"></ErrorMessage>
            )}

            <TextField
              size="small"
              id="outlined-basic"
              label="Name"
              variant="outlined"
              className="w-full "
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
              onClick={() => handleSubmit()}
            >
              START QUIZ
            </Button>
          </div>
        </div>
        <div className="md:w-[50%] ">
          <img
            src="/QuizHub.png"
            alt="QuizHub"
            className="p-3 mx-auto  max-w-[300px] sm:max-w-sm md:max-w-md lg:max-w-xl md:p-12"
          />
        </div>
      </div>
    </>
  );
}
