import React from "react";
import ExplodingButton from "./ui/explotion";

const App = () => {
  const handleAction1 = () => {
    console.log("Action 1 performed!");
    // Perform any action you want
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4 bg-gray-900">
      <ExplodingButton onAction={handleAction1}>
        Click to Explode 1
      </ExplodingButton>
    </div>
  );
};

export default App;
