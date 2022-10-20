import React from "react";
import Hero from "../Components/Elements/Hero";
import Homenetwork from "../Components/Elements/Homenetwork";
import Polkadotnetwork from "../Components/Elements/Polkadotnetwork";
import Opensource from "../Components/Elements/Opensource";
import Polkadotteam from "../Components/Elements/Polkadotteam";
import Cards from "../Components/Elements/Cards";
import Involved from "../Components/Elements/Involved";

function Home() {
  return (
    <div>
      <Hero />
      <Homenetwork />
      <Polkadotnetwork />
      <Opensource />
      <Polkadotteam />
      <Cards />
      <Involved/>
    </div>
  );
}

export default Home;
