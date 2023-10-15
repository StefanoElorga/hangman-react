import React from "react";
import play from "../../imgs/play.png";
import settings from "../../imgs/settings.png";
import sixMistake from "../../imgs/sixmistake.png";
import hangManDer from "../../imgs/hangmander.png";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        <h1 className="text-[50px] sm:text-[60px] lg:text-[70px] xl:text-[80px]">
          HANGMAN
        </h1>

        <Link to="/chooseNames" className="flex flex-row gap-5 items-center">
          <h1 className="text-[30px] sm:text-[40px] lg:text-[50px] xl:text-[60px]">
            PL_Y
          </h1>
          <img
            src={play}
            alt=""
            className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] lg:w-[50px] lg:h-[50px] xl:w-[60px] xl:h-[60px]"
          />
        </Link>

        <Link className="flex flex-row gap-5 items-center">
          <h1 className="text-[30px] sm:text-[40px] lg:text-[50px] xl:text-[60px]">
            S_TTINGS
          </h1>
          <img
            src={settings}
            alt=""
            className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] lg:w-[50px] lg:h-[50px] xl:w-[60px] xl:h-[60px]"
          />
        </Link>
      </div>

      <div className="flex flex-row gap-5 items-end mt-5">
        <img
          src={sixMistake}
          alt=""
          className="w-[70px] h-[50px] sm:w-[120px] sm:h-[100px] md:w-[150px] md:h-[130px] lg:w-[180px] lg:h-[160px] xl:w-[220px] xl:h-[200px]"
        />
        <h1 className="text-[18px] sm:text-[35px] md:text-[45px] lg:text-[50px] xl:text-[65px]">
          H A _ G _ A _{" "}
        </h1>
        <img
          src={hangManDer}
          alt=""
          className="w-[70px] h-[50px]  sm:w-[120px] sm:h-[100px] md:w-[150px] md:h-[130px] lg:w-[180px] lg:h-[160px] xl:w-[220px] xl:h-[200px]"
        />
      </div>
    </div>
  );
};
