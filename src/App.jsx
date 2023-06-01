import { useState } from "react";
import { TbGenderMale, TbGenderFemale, TbMinus, TbPlus } from "react-icons/tb";

export default function App() {
  const [male, setMale] = useState(true);
  const [height, setHeight] = useState(120);
  const [weight, setWeight] = useState(50);
  const [age, setAge] = useState(14);
  const [bmi, setBmi] = useState(0);

  const [showResult, setShowResult] = useState(true);
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setBmi((weight / Math.pow(height / 100, 2)).toFixed(2));
    console.log(bmi);
    setShowResult((sr) => !sr);
    if (bmi >= 18.5 && bmi <= 25) {
      setMessage("normal");
    } else if (bmi < 18.5) {
      setMessage("underweight");
    } else if (bmi > 25 && bmi <= 29.9) {
      setMessage("overweight");
    } else if (bmi >= 30) {
      setMessage("obese");
    }
  };

  return (
    <div className="bg-slate-900 text-white lg:max-w-2xl min-h-screen mx-auto pb-4">
      <div>
        <nav className="bg-slate-800 p-3 text-center mb-4  py-4">
          <h1 className="font-bold text-lg bold md:text-4xl">BMI CALCULATOR</h1>
        </nav>
        <div className="container mx-auto px-6 ">
          {showResult ? (
            <form onSubmit={onSubmit}>
              <div className="flex justify-between gap-2 items-center">
                <div className="flex flex-col  justify-center w-1/2 text-center items-center bg-slate-700 p-6 py-2 rounded-md text-slate-400">
                  <button
                    type="button"
                    className={male ? "text-white" : ""}
                    onClick={(e) => {
                      setMale(true);
                    }}
                  >
                    <TbGenderMale className="font-semibold text-5xl w-12" />
                    <h3>MALE</h3>
                  </button>
                </div>
                <div className="flex flex-col  justify-center w-1/2 items-center bg-slate-700 p-6 py-2 rounded-md text-slate-400">
                  <button
                    type="button"
                    className={male ? "" : "text-white"}
                    onClick={(e) => {
                      setMale(false);
                    }}
                  >
                    <TbGenderFemale className="font-semibold text-5xl w-12 rotate-45	" />
                    <h3>FEMALE</h3>
                  </button>
                </div>
              </div>
              <div className="py-4 bg-slate-800 my-6 text-center ">
                <h3 className=" text-lg">HIGHT</h3>
                <p className="font-bold text-3xl">
                  {height}
                  <span className="font-thin">cm</span>
                </p>
                <input
                  type="range"
                  min="120"
                  max="220"
                  step="1"
                  onChange={(e) => {
                    setHeight(e.target.value);
                  }}
                  className="w-4/5 lg:w-4/6 h-[0.1rem] bg-gray-200 rounded-lg appearance-none focus:outline-none focus:bg-gray-300"
                />
              </div>
              <div className="flex justify-between items-center gap-2 my-6">
                <div className="flex flex-col  justify-center items-center w-1/2 bg-slate-700  p-6 rounded-md">
                  <h3 className=" text-lg mb-4">WEIGHT</h3>
                  <span className="font-bold text-5xl">{weight}</span>
                  <div className=" w-full flex justify-center mt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setWeight((w) => (w <= 1 ? w : w - 1));
                      }}
                      className="p-2 rounded-full bg-slate-800 mx-2 text-5xl "
                    >
                      <TbMinus className="m-auto "></TbMinus>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setWeight((w) => (w <= 220 ? w + 1 : w));
                      }}
                      className="p-2 rounded-full bg-slate-800 mx-2 text-5xl flex place-content-center"
                    >
                      <TbPlus className="m-auto"></TbPlus>
                    </button>
                  </div>
                </div>
                <div className="flex flex-col  justify-center items-center w-1/2 bg-slate-700  p-6 rounded-md">
                  <h3 className=" text-lg mb-4">AGE</h3>
                  <span className="font-bold text-5xl">{age}</span>
                  <div className=" w-full flex justify-center mt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setAge((a) => (a <= 1 ? a : a - 1));
                      }}
                      className="p-2 rounded-full bg-slate-800 mx-2 text-5xl flex place-content-center"
                    >
                      <TbMinus className="m-auto"></TbMinus>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setAge((a) => (a <= 90 ? a + 1 : a));
                      }}
                      className="p-2 rounded-full bg-slate-800 mx-2 text-5xl flex place-content-center"
                    >
                      <TbPlus className="m-auto"></TbPlus>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex place-content-center">
                <button
                  type="submit"
                  className="tracking-2 mx-auto my-4 bg-red-600 p-4 font-medium rounded text-center w-full"
                >
                  CALCULATE YOUR BMI
                </button>
              </div>
            </form>
          ) : (
            <div className=" min-h-full">
              <h1 className="text-2xl font-bold my-6">YOUR RESULT</h1>
              <div className=" text-center w-full bg-slate-700   p-6 rounded-md">
                <p className="text-lg mb-4  text-lime-500 uppercase font-6xl ">
                  {message}
                </p>
                <p className="font-bold text-5xl mb-4">{bmi}</p>
                <div>
                  <p className="text-xl text-gray-400 font-medium mb-1">
                    Normal BMI range:
                  </p>
                  <p className="text-2xl font-medium mb-8">18.5 - 25 kg/m2</p>
                  <p className="text-lg mb-1">You have a {message} body</p>
                  {message === "normal" ? (
                    <p className="text-lg mb-8">weight. Good job!</p>
                  ) : (
                    <p className="text-lg mb-8">weight.be attension</p>
                  )}
                  <button
                    type="button"
                    className="uppercase tracking-wide bg-slate-900 text-center p-4 w-3/4 mx-auto rounded-sm mb-8"
                  >
                    save result
                  </button>
                </div>
              </div>
              <div className="flex place-content-center">
                <button
                  type="submit"
                  onClick={() => {
                    setShowResult((sr) => !sr);
                  }}
                  className="tracking-2 mx-auto my-4 bg-red-600 p-4 font-medium rounded text-center w-full"
                >
                  ReCalculate YOUR BMI
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
