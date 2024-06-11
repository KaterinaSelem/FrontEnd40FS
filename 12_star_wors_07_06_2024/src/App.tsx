
import { createContext, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";

import Header from "./components/Header";
import Main from "./components/Main";
import { navItems } from "./utils/constants";

export interface IPageContext {
  page: string,
  setPage: (newValue: string) => void
}

export const PageContext = createContext<IPageContext | null>(null);

function App() { 
  const [page, setPage] = useState( navItems[0] ); // это массив из constants
  console.log( page );
  return (
   <>
   <PageContext.Provider value={{page, setPage}}>
   <Header />
   <Main/>
   </PageContext.Provider>
   <Footer/>
   </>
  );
}

export default App;