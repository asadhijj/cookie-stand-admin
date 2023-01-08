import React from "react";
import { useState } from "react";
import ReportTable from './ReportTable'

export default function Form() {
  const [userInput, setUserInput] = useState({
    Location: "",
    Max: 0,
    Min: 0,
    Average: 0,
  });

  const [fullReplyState, setFullReplyState] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserInput((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setFullReplyState([...fullReplyState, userInput]);
  };

  return (
    <>
      <section className="bg-[#FFD495] py-4 px-4 text-center ">
      <form className="bg-[#FAAB78] m-6" onSubmit={submitHandler}>
          <label className="block font-bold text-2xl mb-2 text-[#270D0B] text-center" > Cookies Stand </label>
          <br></br>
          <label className="block font-bold  text-xl mb-2 text-[#270D0B]"> Location </label>
          <input
            onChange={handleChange}
            placeholder="Location"
            name="Location"
            className="border border-gray-400 rounded-md py-2 px-4 w-1/5 focus:outline-none focus:border-[#270D0B] bg-[#EFE2B2] "
          />
          <br></br>
          <div className="flex justify-between mt-7">
            <div className="w-1/3">
              <label className="block font-bold text-xl mb-2 text-[#270D0B]"> Maximum Customers per hour </label>
              <input
                onChange={handleChange}
                placeholder="Maximum"
                name="Max"
                className="border border-gray-400 rounded-md py-2 px-4 w-1/2 focus:outline-none focus:border-[#270D0B] bg-[#EFE2B2]"
              />
            </div>
            <br></br>
            <div className="w-1/3">
              <label className="block font-bold text-xl mb-2 text-[#270D0B]"> Minimum Customers per hour </label>
              <input
                onChange={handleChange}
                placeholder="Minimum"
                name="Min"
                className="border border-gray-400 rounded-md py-2 px-4 w-1/2 focus:outline-none focus:border-[#270D0B] bg-[#EFE2B2]"
              />
            </div>
            <br></br>
            <div className="w-1/3">
              <label className="block font-bold text-xl mb-2 text-[#270D0B]"> Average Cookies per sale </label>
              <input
                onChange={handleChange}
                placeholder="Average"
                name="Average"
                className="border border-gray-400 rounded-md py-2 px-4 w-1/2 focus:outline-none focus:border-[#270D0B] bg-[#EFE2B2]"
              />
            </div>
          </div>
          <br></br>
          <button className="bg-[#FAAB78] py-3 my-3 px-6 rounded-md text-[#270D0B] font-bold hover:bg-[#FF7B54] focus:outline-none focus:shadow-outline ">
            Create
          </button>
        </form>
      </section>
      <section className="w-full pt-10 text-center shadow-lg shadow-black-50 text-xl bg-[#FFD495] text-[#270D0B] ">
        {/*fullReplyState.length > 0 &&
          fullReplyState.map((item, index) => {
            return(
              <p className="py-2">{JSON.stringify(item)}</p>
            );
          })*/}
                {fullReplyState.length > 0 && <ReportTable 
                report = {fullReplyState}
                />}
                {fullReplyState.length == 0 && <h2>No Cookie Stands Available</h2>}
      </section>
  



    </>
  );
}