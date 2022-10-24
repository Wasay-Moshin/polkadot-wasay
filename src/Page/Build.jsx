import React from "react";
import Hero from "../Components/Elements/Build/Hero";
import Substrate from "../Components/Elements/Build/Substrate";
import Tools from "../Components/Elements/Build/Tools";
import Question from "../Components/Elements/Build/Question";
import Ecosystem from "../Components/Elements/Build/Ecosystem";
function Build() {
  return (
    <div>
      <Hero />
      <Substrate/>
      <Tools/>
      <Ecosystem/>
      <Question/>
    </div>
  );
}

export default Build;
