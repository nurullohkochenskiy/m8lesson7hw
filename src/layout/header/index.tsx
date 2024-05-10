import ThemeSwitch from "@/components/Themeswitch";
import React from "react";


const Header = () => {
  return (
    <div className="headmainwrapper">
      <div className="container flex header_items ">
        <div className="namesite">Where in the world?</div>
        <div></div>
        <ThemeSwitch/>
      </div>
    </div>
  );
};

export default Header;
