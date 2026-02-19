import React from "react";
import TeamCard from "./TeamCard";

const Team = () => {
  return (
    <section
      id="#team"
      className=" cont min-h-screen w-screen flex flex-col gap-8 items-center justify-around"
    >
      <div className="text-center mt-8">
        <h1 className="text-4xl font-bold">Our Team</h1>
        <p className="text-md mt-2">
          Meet the talented individuals who make our company great.
        </p>
      </div>
      <div className="cont flex md:flex-row flex-col items-center gap-10">
        <TeamCard />
      </div>
    </section>
  );
};

export default Team;
