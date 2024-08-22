import React from "react";
import Section1 from "../../components/Section1/Section1";
import Section2 from "../../components/Section2/Section2";
import SalesCounter from "../../components/SalesCounter/SalesCounter";
import Section3 from "../../components/Section3/Section3";
import Section4 from "../../components/Section4/Section4";

const Home = () => {
    const targetDate = new Date(Date.now() + 24 * 60 * 60 * 1000);
  return (
    <>
      <Section1 />
      <Section2 />
      <SalesCounter targetDate={targetDate} />
      <Section3/>
      <Section4/>
    </>
  );
};

export default Home;
