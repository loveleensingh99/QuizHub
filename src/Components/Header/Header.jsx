import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <Link to="/">
        <h1 className="text-primary-blue text-center text-5xl py-4">QuizHub</h1>
      </Link>
    </>
  );
}
