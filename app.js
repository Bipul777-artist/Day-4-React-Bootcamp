import React from "react";
import ReactDOM from "react-dom/client";


const heading2 = <h2>Heading</h2>
    
const root = ReactDOM.createRoot(document.getElementById("root"));
    
    
const HeaderComponent = () => {
  return <h1>React Functional Component</h1>


};

const HeaderComponent2 = () => {
  return <h1>React Functional Component2</h1>


};
    //passing a react element inside the root
    
    
    
    //async defer
root.render(<HeaderComponent />) ; 
root.render(<HeaderComponent2 />) ;
