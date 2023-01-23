import * as React from "react";
// import Site from "../types/Site";
//import Header from "../compo/Header";
//import Footer from "../Footer";
//import Header from "../Header";

type Props = {
 
  children?: React.ReactNode;
};

const PageLayout = ({  children }: Props) => {
  return (
    <div>
     
      {children}
      
    </div>
  );
};

export default PageLayout;
