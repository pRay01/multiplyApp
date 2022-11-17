import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

const Home: NextPage = () => {
  const [input, setInput] = useState<number>(0);
  const [output, setOutput] = useState<number[]>([]);

  function Multiply() {
    let tempArr = [];
    for (let i = 1; i <= 100; i++) {
      let j = input * i;
      tempArr.push(j);
    }
    console.log(tempArr);
    //@ts-ignore
    setOutput(tempArr||[]);
  }
console.log(output,'output')

  return (
    <div className="flex bg-black min-h-screen flex-col items-center justify-center py-2">
      <div className="py-8">
        <input
          className="px-10 py-2 rounded-lg"
          type="number"
          value={input}
          placeholder="Type a number"
          onChange={(e) => setInput(Number(e.target.value))}
        />
        <button
          onClick={Multiply}
          className="bg-green-400 ml-8 rounded-xl px-6 py-2 text-lg font-bold"
        >
          Multiples
        </button>
      </div>
      <div className="w-8/12 my-6 flex  items-center justify-center bg-white text-black text-lg rounded-xl">
        <div className="px- flex flex-wrap  justify-center py-2">{output.map((item:any,index)=>{
        if((index+1)%10==0)
        return (
          <div className="w-60 h-full rounded-xl py-4 font-semibold text-lg bg-green-400 m-2 ">
            {new Array(10).fill(1).map((multiple:any, pos)=>{
              return(
                <div className="flex justify-center items-center">{input} X {(index+1)-(10-(pos+1))} = {output[((index+1)-(10-(pos+1))-1)]}</div>
              )
            }) }
          </div>
         )
        })}</div>
      </div>
    </div>
  );
};

export default Home;
