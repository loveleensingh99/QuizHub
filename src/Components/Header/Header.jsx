import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <Link to="/">
        <h1 className="py-5 text-5xl text-center text-primary-blue">QuizHub</h1>
      </Link>
    </>
  );
}
