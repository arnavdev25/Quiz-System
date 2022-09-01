import axios from "axios";
import React, { useEffect, useState } from "react";
const AttemptQuiz = () => {
  const [quiz, setQuiz] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios
      .get(`https://dataquiz.herokuapp.com/quizes/?_limit=1&_page=1`)
      .then(({ data }) => {
        console.log(data[0][0]);
        setQuiz(data[0][0]);
      });
  }, []);
  return (
    <div className="grid grid-cols-1 gap-8 m-auto justify-center pt-28">
      <div className="container max-w-full w-3/4 align-middle ml-10 mt-6 text-base font-sans">
            <div className="flex flex-col align-middle border-1 w-full border border-gray-400 shadow-lg overflow-hidden m-auto pb-4">
              <div className="justify-around flex flex-row items-baseline align-middle">
                <h1 className="font-semibold text-lg mt-2 ml-3">
                  Q. {quiz.question}
                </h1>   
              </div>
              <span className="select-none">
                Difficulty : {quiz.diff_level}
              </span>
              <label className="custom-label flex mt-2 ml-3">
                <div className="bg-white shadow w-6 h-6 p-1 flex justify-center items-center mr-2">
                  <input type="checkbox" className="hidden" />
                  <svg
                    className="hidden w-4 h-4 text-green-600 pointer-events-none"
                    viewBox="0 0 172 172"
                  ></svg>
                </div>
                <span className="select-none"> {quiz.op1}</span>
              </label>
             <label className="custom-label flex mt-2 ml-3">
                <div className="bg-white shadow w-6 h-6 p-1 flex justify-center items-center mr-2">
                  <input type="checkbox" className="hidden" />
                  <svg
                    className="hidden w-4 h-4 text-green-600 pointer-events-none"
                    viewBox="0 0 172 172"
                  ></svg>
                </div>
                <span className="select-none"> {quiz.op2}</span>
              </label>
            <label className="custom-label flex mt-2 ml-3">
                <div className="bg-white shadow w-6 h-6 p-1 flex justify-center items-center mr-2">
                  <input type="checkbox" className="hidden" />
                </div>
                <span className="select-none">{quiz.op3}</span>
              </label>
              <label className="custom-label flex mt-2 ml-3">
                <div className="bg-white shadow w-6 h-6 p-1 flex justify-center items-center mr-2">
                  <input type="checkbox" className="hidden" />
                </div>
                <span className="select-none">{quiz.op4}</span>
              </label>
            </div>
          </div>
        </div>
     );
};
export default AttemptQuiz;
