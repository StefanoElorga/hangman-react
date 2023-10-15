import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import underLineBlack from "../../imgs/underlineblack.png";
import sixMistake from "../../imgs/sixmistake.png";
import hangManDer from "../../imgs/hangmander.png";
import { writeWord } from "../../store/actions";
import check from "../../imgs/check.png";
import cancel from "../../imgs/cancel.png";
import { Link } from "react-router-dom";
export const WriteTheWord = () => {
  const { names, turn } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [isGreaterThanFive, setIsGreaterThanFive] = useState(false);

  const handlewordChange = (event) => {
    const { value } = event.target;
    if (value.length > 4) {
      setIsGreaterThanFive(true);
    } else {
      setIsGreaterThanFive(false);
    }
    const wordUpperCase = value.toUpperCase();
    dispatch(writeWord(wordUpperCase));
  };

  return (
    <div className="px-0 w-full h-full flex flex-col justify-center items-center">
      <div className="w-full text-center mb-5 ">
        <h1 className="text-[40px] sm:text-[45px] lg:text-[55px]">
          {turn === 2 ? names.playerOneName.name : names.playerTwoName.name},
          write the word for{" "}
          {turn === 2 ? names.playerTwoName.name : names.playerOneName.name}.
        </h1>
        <h1 className="text-[40px] sm:text-[45px] lg:text-[55px]">
          {turn === 2 ? names.playerTwoName.name : names.playerOneName.name},
          you can't see the screen.
        </h1>
      </div>

      <div className="flex flex-row items-center ">
        <div className="w-[200px] sm:w-[300px] my-5 md:w-[400px] lg:w-[500px] xl:w-[600px]">
          <input
            type="text"
            className="bg-transparent w-full text-[30px] sm:text-[40px] lg:text-[50px] placeholder:text-black outline-none text-black"
            maxLength={40}
            minLength={5}
            placeholder="WRITE HERE"
            onChange={handlewordChange}
          />
          <img src={underLineBlack} alt="" className="w-full" />
        </div>
        <Link to={isGreaterThanFive ? "/inGame" : null}>
          <img
            src={isGreaterThanFive ? check : cancel}
            alt=""
            className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px]  lg:w-[55px] lg:h-[55px]"
          />
        </Link>
      </div>

      <div className="flex flex-row  w-full justify-between mt-5 sm:px-10">
        <img
          src={sixMistake}
          alt=""
          className="w-[80px] h-[60px]  sm:w-[130px] sm:h-[110px] md:w-[160px] md:h-[140px] lg:w-[190px] lg:h-[170px] xl:w-[230px] xl:h-[210px]"
        />
        <img
          src={hangManDer}
          alt=""
          className="w-[80px] h-[60px]  sm:w-[130px] sm:h-[110px] md:w-[160px] md:h-[140px] lg:w-[190px] lg:h-[170px] xl:w-[230px] xl:h-[210px]"
        />
      </div>
    </div>
  );
};
