import { FC, useContext } from "react";
import { navItems } from "../utils/constants";
import Home from "./Home";
import AboutMe from "./AboutMe";
import StarWars from "./StarWars";
import Contacts from "./Contacts";
import { IPageContext, PageContext } from "../App";

const Main: FC = () => {
  const { page } = useContext(PageContext) as IPageContext;
  
  switch (page) {
    case navItems[0]:
    return <Home/>;
    case navItems[1]:
    return <AboutMe/>;
    case navItems[2]:
    return <StarWars/>;
    case navItems[3]:
    return <Contacts/>
  }
}

export default Main;
