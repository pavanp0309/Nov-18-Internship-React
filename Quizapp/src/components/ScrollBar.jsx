import React from "react";

const PrograssBar = ({ currentQuestion, totalQuestion }) => {
  let prograss = ((currentQuestion + 1) / totalQuestion) * 100;
  return (
    <div className="mt-3 mx-2">
      <div class="progress" style={{ height: "2%" }}>
        <div
          class="progress-bar"
          role="progressbar"
          style={{ width: `${prograss}%`, background: "green" }}
          aria-valuenow={prograss}
          aria-valuemin="0"
          aria-valuemax="100"
        />
        <p className="text-center mt-2">{Math.round(prograss)}% complete</p>
      </div>
    </div>
  );
};

export default PrograssBar;
