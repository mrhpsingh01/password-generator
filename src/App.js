// import "./main.scss";
import { useState, useRef, useEffect } from "react";
import { FaClipboard } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  upperCaseLetters,
  lowerCaseLetters,
  specialCharacters,
  numberList,
} from "./Characters";

toast.configure();

function App() {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(20);
  const [upperCase, setUpperCase] = useState(true);
  const [lowerCase, setLowerCase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const copyBtn = useRef();
  const Alert = "You must select at least one option";

  const handlePasswordGenerator = (e) => {
    if (!upperCase && !lowerCase && !numbers && !symbols) {
      notify(Alert, true);
      // alert("You must select at least one option");
      return;
    }

    let characterList = "";

    if (upperCase) {
      characterList += upperCaseLetters;
    }
    if (lowerCase) {
      characterList += lowerCaseLetters;
    }
    if (numbers) {
      characterList += numberList;
    }
    if (symbols) {
      characterList += specialCharacters;
    }

    setPassword(passwordCreator(characterList));
  };

  const passwordCreator = (characterList) => {
    let password = "";
    const characterListLength = characterList.length;

    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = getRandomIndex(characterListLength);
      password += characterList.charAt(characterIndex);
    }
    return password;
  };

  const getRandomIndex = (charactersLength) => {
    return Math.round(Math.random() * charactersLength);
  };

  useEffect(() => {
    handlePasswordGenerator();
    // eslint-disable-next-line
  }, []);

  const copyToClipboard = () => {
    const newTextArea = document.createElement("textarea");
    newTextArea.innerText = password;
    document.body.appendChild(newTextArea);
    newTextArea.select();
    document.execCommand("copy");
    newTextArea.remove();

    copyBtn.current.disabled = true;
    setTimeout(() => {
      copyBtn.current.disabled = false;
    }, 3000);
  };

  const notify = (message, hasError = false) => {
    if (hasError) {
      toast.error(message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.info(message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleCopyPassword = (e) => {
    copyToClipboard();

    notify("Password successfully copied to clipboard");
  };

  return (
    <div className="bg-blue-300  m-0 pt-[200px] h-full w-full min-h-screen">
      <div className="rounded-[3px] bg-blue-800 hover:bg-blue-900 shadow-[0px_2px_10px_rgba(255,255,255,0.2)] p-[20px] max-w-[350px] min-w-fit mx-auto ">
        <h1 className="text-center text-3xl text-[#fff] mb-[20px]">
          Password Generator
        </h1>
        <div className="relative bg-[rgba(0,0,0,0.4)] py-[13px] px-[10px] text-white h-[46px] mb-[15px]">
          {password}
          <button
            className="py-1.5 px-3 text-base rounded absolute h-[40px] top-1 right-1 bg-[#3b3b98] border-none p-[10px] cursor-pointer text-white hover:text-cyan-300 "
            onClick={handleCopyPassword}
            ref={copyBtn}
          >
            <FaClipboard className="w-[20px] h-[20px] " />
          </button>
        </div>
        <div className="form-group">
          <label className="label" htmlFor="password-length">
            Password Length
          </label>
          <input
            name="password-length"
            className="w-[40px] text-black"
            id="password-length"
            type="number"
            max="20"
            min="7"
            defaultValue={passwordLength}
            onChange={(e) => {
              setPasswordLength(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="uppercase-letters">
            Include UpperCase
          </label>
          <input
            name="uppercase-letters"
            id="uppercase-letters"
            type="checkbox"
            checked={upperCase}
            onChange={(e) => {
              setUpperCase(e.target.checked);
            }}
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="lowercase-letters">
            Include LowerCase
          </label>
          <input
            name="lowercase-letters"
            id="lowercase-letters"
            type="checkbox"
            checked={lowerCase}
            onChange={(e) => {
              setLowerCase(e.target.checked);
            }}
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="include-numbers">
            Include Numbers
          </label>
          <input
            name="include-numbers"
            id="include-numbers"
            type="checkbox"
            checked={numbers}
            onChange={(e) => {
              setNumbers(e.target.checked);
            }}
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="include-symbols">
            Include Symbols
          </label>
          <input
            name="include-symbols"
            id="include-symbols"
            type="checkbox"
            checked={symbols}
            onChange={(e) => {
              setSymbols(e.target.checked);
            }}
          />
        </div>
        <button
          className="[transform:translateZ(0)] px-6 py-3 rounded-lg overflow-hidden bg-blue-600 relative before:absolute before:bg-cyan-300 before:top-1/2 before:left-1/2 before:h-8 before:w-8 before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full before:scale-[0] before:opacity-0 hover:before:scale-[6] hover:before:opacity-100 before:transition before:ease-in-out before:duration-500 mx-14"
          // className="py-1.5 px-3 text-base rounded inline-block font-normal leading-[1.5] text-cyan-300 bg-[#0d6efd] border-[#0d6efd] cursor-pointer"
          onClick={handlePasswordGenerator}
        >
          <span className="relative z-0 text-black group-hover:text-gray-200 transition ease-in-out duration-500">
            Generate Password
          </span>
        </button>
      </div>
    </div>
  );
}

export default App;
