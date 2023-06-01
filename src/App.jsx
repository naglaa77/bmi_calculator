import { useState } from "react";
import { useForm } from "react-hook-form";
import { TbGenderMale, TbGenderFemale } from "react-icons/tb";

export default function App() {
  const form = useForm();
  const { register, handleSubmit } = form;

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-slate-900 text-white lg:max-w-2xl h-screen mx-auto pb-4">
      <div>
        <nav className="bg-slate-800 p-3  mb-4 ">
          <h1 className="font-bold text-sm bold md:text-4xl">BMI CALCULATOR</h1>
        </nav>
        <div className="container mx-auto px-6 ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex justify-between gap-2 items-center  ">
              <div className="flex flex-col  justify-center w-1/2 text-center items-center bg-slate-700   px-10 py-10 rounded-md">
                <label>
                  <input
                    type="redio"
                    className="sr-only"
                    {...register("male")}
                  />
                  <TbGenderMale className="font-semibold text-5xl w-12" />
                  <h3>MALE</h3>
                </label>
              </div>
              <div className="flex flex-col  justify-center w-1/2 items-center bg-slate-700  px-10 py-10 rounded-md">
                <label>
                  <input
                    type="radio"
                    {...register("female")}
                    className=" sr-only"
                  />
                  <TbGenderFemale className="font-semibold text-5xl w-12 rotate-45	" />
                  <h3>FEMALE</h3>
                </label>
              </div>
            </div>
            <div className="py-4 bg-slate-800 mt-6">
              <h3 className=" text-lg">HIGHT</h3>
              <p className="font-bold text-3xl">
                183 <span className="font-thin">cm</span>
              </p>
              <input
                type="range"
                min="0"
                max="400"
                step="1"
                {...register("height")}
                className="w-4/5 lg:w-4/6 h-2 bg-gray-200 rounded-lg appearance-none focus:outline-none focus:bg-gray-300"
              />
            </div>
            <div className="mt-6 flex justify-between items-center gap-2">
              <div className="flex flex-col  justify-center items-center w-1/2 bg-slate-700  px-10 py-10 rounded-md">
                <h3 className=" text-lg mb-4">WEIGHT</h3>
                <span className="font-bold text-3xl">74</span>
                <div className=" w-full flex justify-around mt-4">
                  <button
                    type="button"
                    className="w-6 h-6 rounded-full bg-slate-800 leading-6"
                  >
                    -
                  </button>
                  <button
                    type="button"
                    className="w-6 h-6 rounded-full bg-slate-800 leading-6"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex flex-col  justify-center items-center w-1/2 bg-slate-700  px-10 py-10 rounded-md">
                <h3 className=" text-lg mb-4">AGE</h3>
                <span className="font-bold text-3xl">19</span>
                <div className=" w-full flex justify-around mt-4 ">
                  <button
                    type="button"
                    className="w-6 h-6 rounded-full bg-slate-800 leading-6"
                  >
                    -
                  </button>
                  <button
                    type="button"
                    className="w-6 h-6 rounded-full bg-slate-800 leading-6"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="my-4 bg-red-600 p-4 font-medium">
              <button type="submit" className="tracking-2">
                CALCULATE YOUR BMI
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
