import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getQuizData } from "../redux/quiz/action";
import Loading from "./loading/Loading";
import axios from "axios";
const CreateQuiz = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { quiz, loading, error } = useSelector((state) => state.quiz);
  useEffect(() => {
    dispatch(getQuizData());
  }, []);
  return (
    <div>
      {loading ? (
        <>
          <Loading />
        </>
      ) : error ? (
        <>Somethng Went Wrong...</>
      ) : (
        <>
          <div className="w-1/2 m-auto pt-20">
            {quiz &&
              quiz.map((e) => (
                <div key={e._id}>
                  <h3 className="font-bold">
                    Q. {e.question} <p>(Difficulty Level: {e.diff_level})</p>
                  </h3>
                  <h5>A. {e.op1}</h5>
                  <h5>B. {e.op2}</h5>
                  <h5>C. {e.op3}</h5>
                  <h5>D. {e.op4}</h5>
                  <h4>Answer: {e.answer}</h4>
                  <hr />
                  <br />
                </div>
              ))}
          </div>
          <div className="w-1/2 m-auto mb-5">
            <button
              onClick={() => {
                axios
                  .post("https://dataquiz.herokuapp.com/quizes", quiz)
                  .then((r) => {
                    alert("Quiz created successfully");
                    navigate("/dashboard");
                  });
              }}
              className="p-4 text-lg font-bold transition-colors text-[#0c98c7] border-2 border-[#0c98c7]  hover:text-white hover:bg-[#0c98c7]"
            >
              Create Quiz
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CreateQuiz;
