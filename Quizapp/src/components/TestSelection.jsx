import React from "react";
import { Questions } from "../data/question";

const TestSelection = ({onselectCategory}) => {
  // hardcoded values to test
  // let categories = ["HTML", "CSS", "Bootstrap", "Javascript"];

  // accessing the values dynamically
  let categories =Object.keys(Questions);

  return (
    <div className="container">
        <h2 className="text-center">Take the test To Ace Interviews </h2>
      <div className="card p-4 shadow">
        <div className=" d-flex justify-content-center">
          {categories.map((sub) => (
            <button
             key={sub}
            onClick={()=>onselectCategory(sub)}
             className="btn btn-success mx-2"
             >{sub}</button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestSelection;
