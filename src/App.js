import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";
import Result from "./Pages/Result/Result";

import { useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("aa");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    //
    const { data } = await axios.get(
      // `https://opentdb.com/api.php?amount=10${
      //   difficulty && `&difficulty=${difficulty}`
      // }&type=multiple`
      "https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple"
    );
    setQuestions(data.results);
  };
  return (
    <>
      <BrowserRouter>
        <div className=" bg-primary-gray">
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  name={name}
                  setName={setName}
                  fetchQuestions={fetchQuestions}
                />
              }
            ></Route>
            <Route
              path="/quiz"
              element={
                <Quiz
                  name={name}
                  questions={questions}
                  score={score}
                  setScore={setScore}
                  setQuestions={setQuestions}
                  fetchQuestions={fetchQuestions}
                />
              }
            ></Route>
            <Route path="/result" element={<Result />}></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
