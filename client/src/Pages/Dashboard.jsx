/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const { userData } = useSelector((state) => state.auth);
  const [quiz, setQuiz] = useState([]);
  const navigate = useNavigate();
  let role = userData.role;
  useEffect(() => {
    axios
      .get("https://dataquiz.herokuapp.com/quizes")
      .then(({ data }) => setQuiz(data));
  }, []);
  return (
    <div className="text-white">
      <div className="pt-24 m-auto text-center">
        {role === "admin" ? (
          <div>
            <button
              onClick={() => navigate("/create")}
              className=" p-4 text-lg font-bold transition-colors text-[#0c98c7] border-2 border-[#0c98c7]  hover:text-white hover:bg-[#0c98c7]"
            >
              Create Quiz
            </button>
            <div className="mt-5">
              {quiz.length > 0 ? (
                <button
                  onClick={() => navigate("/attemptquiz")}
                  className=" p-4 text-lg font-bold transition-colors text-[#0c98c7] border-2 border-[#0c98c7]  hover:text-white hover:bg-[#0c98c7]"
                >
                  View Quiz
                </button>
              ) : (
                <></>
              )}
            </div>
          </div>
        ) : (
          <>
            {quiz.length > 0 ? (
              <button
                onClick={() => navigate("/attemptquiz")}
                className=" p-4 text-lg font-bold text-[#0c98c7] border-2 border-[#0c98c7]  hover:text-white hover:bg-[#0c98c7]"
              >
                Attempt Quiz
              </button>
            ) : (
              <h2 className="text-[35px] pt-16 font-bold text-black">
                No quizes available
              </h2>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
