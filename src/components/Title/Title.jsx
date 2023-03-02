import React from "react";
import ItemList from "../ItemList/ItemList";

export const Title = (props) => {
  console.log(props);
return(
  <>
    <a> {props.greeting}</a>
  
  </>
)


  //return <h3>{props.greeting} </h3>;
};

export default Title;
