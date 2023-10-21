import React from "react";
import underLineWhite from "../../imgs/underlinewhite.png";
import underLineBlack from "../../imgs/underlineblack.png";
import check from "../../imgs/check.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { chooseNames } from "../../store/actions";

export const ChooseNames = () => {
  const { names } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleNameChange = (event) => {
    const { name, value } = event.target;
    const updatedNames = {
      ...names,
      [name]: { name: value, points: 0 },
    };
    dispatch(chooseNames(updatedNames));
  };
  return (
    <div className="w-full h-full flex flex-col lg:flex-row relative">
      <Link
        to="/writeTheWord"
        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      >
        <img src={check} alt="" className="lg:w-[100px] lg:h-[100px]" />
      </Link>

      <div className="w-full h-1/2 bg-black flex flex-col justify-center items-center lg:h-full lg:w-1/2">
        <div className="w-[200px] sm:w-[300px] md:w-[400px]">
          <input
            type="text"
            className="bg-transparent w-full text-[50px] sm:text-[60px] md:text-[70px] placeholder:text-white outline-none text-white"
            maxLength={15}
            name="playerOneName"
            value={names.playerOneName.name}
            onChange={handleNameChange}
          />
          <img src={underLineWhite} alt="" />
        </div>
      </div>

      <div className=" w-full h-1/2 flex flex-col justify-center items-center lg:h-full lg:w-1/2">
        <div className="w-[200px] sm:w-[300px] md:w-[400px]">
          <input
            type="text"
            className="bg-transparent w-full text-[50px] sm:text-[60px] md:text-[70px] placeholder:text-black outline-none"
            maxLength={15}
            name="playerTwoName"
            value={names.playerTwoName.name}
            onChange={handleNameChange}
          />
          <img src={underLineBlack} alt="" />
        </div>
      </div>
    </div>
  );
};
