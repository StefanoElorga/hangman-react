import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import sixMistake from "../../imgs/sixmistake.png";
import noMistake from "../../imgs/nomistake.png";
import oneMistake from "../../imgs/onemistake.png";
import twoMistake from "../../imgs/twomistake.png";
import threeMistake from "../../imgs/threemistake.png";
import fourMistake from "../../imgs/fourmistake.png";
import fiveMistake from "../../imgs/fivemistake.png";
import { sumPoint, changeTurn } from "../../store/actions";
import next from "../../imgs/arrownext.png";
import { Link } from "react-router-dom";

export const InGame = () => {
  const { word, names, turn } = useSelector((state) => state);
  const [underscores, setUnderscores] = useState("_".repeat(word.length));
  const [mistakes, setMistakes] = useState(0);
  const [endGame, setEndGame] = useState(false);
  const opacity = endGame ? "opacity-100" : "opacity-0";
  const dispatch = useDispatch();
  let fontsize = word.length > 25 ? "text-[25px]" : "text-[35px]";
  let fontsizesm = word.length > 25 ? "text-[40px]" : "text-[45px]";
  let fontsizemd = word.length > 25 ? "text-[55px]" : "text-[60px]";
  let fontsizelg = word.length > 25 ? "text-[65px]" : "text-[75px]";
  let fontsizexl = word.length > 25 ? "text-[80px]" : "text-[85px]";

  const [letters, setLetters] = useState([
    { value: "A", status: false },
    { value: "B", status: false },
    { value: "C", status: false },
    { value: "D", status: false },
    { value: "E", status: false },
    { value: "F", status: false },
    { value: "G", status: false },
    { value: "H", status: false },
    { value: "I", status: false },
    { value: "J", status: false },
    { value: "K", status: false },
    { value: "L", status: false },
    { value: "M", status: false },
    { value: "N", status: false },
    { value: "Ñ", status: false },
    { value: "O", status: false },
    { value: "P", status: false },
    { value: "Q", status: false },
    { value: "R", status: false },
    { value: "S", status: false },
    { value: "T", status: false },
    { value: "U", status: false },
    { value: "V", status: false },
    { value: "W", status: false },
    { value: "X", status: false },
    { value: "Y", status: false },
    { value: "Z", status: false },
  ]);

  const handleLetterClick = (letter, word, event) => {
    if (endGame) {
      return;
    } else {
      const isLetterInWord = word.includes(letter);

      const updatedLetters = [...letters];

      const letterIndex = updatedLetters.findIndex(
        (item) => item.value === letter.value
      );

      updatedLetters[letterIndex] = {
        ...updatedLetters[letterIndex],
        status: true,
      };

      setLetters(updatedLetters);

      if (isLetterInWord) {
        event.target.style.color = "green";
      } else {
        event.target.style.color = "red";
        setMistakes(mistakes + 1);
      }
    }
  };

  const renderImg = () => {
    if (mistakes === 0) {
      return noMistake;
    } else if (mistakes === 1) {
      return oneMistake;
    } else if (mistakes === 2) {
      return twoMistake;
    } else if (mistakes === 3) {
      return threeMistake;
    } else if (mistakes === 4) {
      return fourMistake;
    } else if (mistakes === 5) {
      return fiveMistake;
    } else {
      return sixMistake;
    }
  };

  function replaceUnderscoresWithLetter(word, underscores, letter, event) {
    let newUnderscores = "";
    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        newUnderscores += letter;
      } else {
        newUnderscores += underscores[i];
      }
    }
    handleLetterClick(letter, word, event);
    setUnderscores(newUnderscores);
  }

  //-------------------RESPONDE A LOS CLICKS----------------------
  useEffect(() => {
    const text = document.getElementById("underscores");

    if (!underscores.includes("_") && mistakes < 6 && !endGame) {
      text.style.color = "green";
      dispatch(sumPoint(turn));
      setEndGame(true);
    }
  }, [underscores, mistakes]);

  //-------------------RESPONDE A LOS MISTAKES----------------------
  useEffect(() => {
    const text = document.getElementById("underscores");
    if (mistakes === 6 && !endGame) {
      setUnderscores(word);
      text.style.color = "red";
      setEndGame(true);
      dispatch(sumPoint(turn === 2 ? 1 : 2));
    }
  }, [mistakes]);

  //-------------------REPSONDE AL TECLADO----------------------
  useEffect(() => {
    if (endGame) {
      return;
    } else {
      const handleKeyDown = (event) => {
        const keyPressed = event.key.toUpperCase();

        const letterIndex = letters.findIndex(
          (item) => item.value === keyPressed
        );

        if (letterIndex !== -1 && !letters[letterIndex].status) {
          const updatedLetters = [...letters];
          updatedLetters[letterIndex] = {
            ...updatedLetters[letterIndex],
            status: true,
          };

          setLetters(updatedLetters);

          if (word.includes(keyPressed)) {
            document.getElementById(letters[letterIndex].value).style.color =
              "green";

            let newUnderscores = "";
            for (let i = 0; i < word.length; i++) {
              if (word[i] === keyPressed) {
                newUnderscores += keyPressed;
              } else {
                newUnderscores += underscores[i];
              }
            }
            setUnderscores(newUnderscores);
          } else {
            document.getElementById(letters[letterIndex].value).style.color =
              "red";

            setMistakes(mistakes + 1);
          }
        } else {
          return;
        }
      };

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [word, letters, mistakes, endGame]);

  return (
    <div className="w-full h-full items-center flex flex-col md:flex-row p-5 select-none xl:px-20">
      <div className="flex flex-col items-center w-fit">
        <div className="flex flex-row md:flex-col md:gap-5 ">
          {Object.keys(names).map((player, i) => (
            <div
              className="text-[25px] w-[120px] h-[70px] sm:text-[30px] sm:w-[150px] sm:h-[90px] md:text-[35px] md:w-[180px] md:h-[100px] xl:text-[40px] xl:w-[200px] xl:h-[120px] flex flex-col justify-center items-center bg-gray-200 m-1 border-2 border-black rounded-[5px]"
              key={i}
            >
              <h1>{names[player].name}</h1>
              <h1>{names[player].points}</h1>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-5 w-[200px] h-[310px] sm:w-[270px] sm:h-[360px]  md:w-[200px] md:h-[310px] xl:w-[230px] xl:h-[340px] bg-gray-200 my-5 border-2 border-black rounded-[5px]">
          {letters.map((l, i) => {
            return (
              <p
                className="text-center text-[30px] sm:text-[35px] md:text-[30px] xl:text-[35px] cursor-pointer"
                key={i}
                id={l.value}
                onClick={(event) =>
                  replaceUnderscoresWithLetter(
                    word,
                    underscores,
                    l.value,
                    event
                  )
                }
              >
                {l.value}
              </p>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col flex-1 items-center justify-center gap-2">
        <img
          src={renderImg()}
          alt=""
          className="w-[150px] h-[110px] sm:w-[200px] sm:h-[150px]  md:w-[240px] md:h-[190px]  lg:w-[230px] lg:h-[200px] xl:w-[290px] xl:h-[260px] pointer-events-none"
        />
        <p
          className={`tracking-widest ${fontsize} sm:${fontsizesm} md:${fontsizemd} lg:${fontsizelg} xl:${fontsizexl}`}
          id="underscores"
        >
          {underscores}
        </p>
      </div>

      <div className={`${opacity} flex flex-col justify-center items-center`}>
        <Link
          className={`w-full h-fit flex flex-col items-center  ${
            endGame ? "cursor-pointer" : "cursor-default"
          }`}
          onClick={() =>
            endGame ? dispatch(changeTurn(turn === 1 ? 2 : 1)) : null
          }
          to="/writeTheWord"
        >
          <img
            src={next}
            alt=""
            className="pointer-events-none  w-[100px] h-[40px] md:w-[120px] md:h-[60px] xl:w-[160px] xl:h-[80px]  "
          />
          <h1 className="text-[30px] md:text-[35px] xl:text-[45px]  ">NEXT</h1>
        </Link>
      </div>
    </div>
  );
};
