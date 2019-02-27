import React from "react";

import "./Header.css";

import HeaderTitle from "./HeaderTitle";

const HeaderContent = () => {
  return (
    <section className="headerContent">
      <div>
        <h1>Lambda School</h1>
        <HeaderTitle />
      </div>

      <p>
        Let's learn React by building simple interfaces with components. Dont
        try to
        <br /> overthink it, just keep it simple and have fun. Once you feel
        comfortable using
        <br /> components you are well on your way to mastering React!
      </p>
    </section>
  );
};

export default HeaderContent;
