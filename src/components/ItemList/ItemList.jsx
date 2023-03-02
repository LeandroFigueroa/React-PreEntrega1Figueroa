import Item from "../Item/Item";
import React from "react";

const ItemList = ({data = []}) => {
  return (
    data.map(prodVenta => <Item key={prodVenta.id} info = {prodVenta}/>)
  )
};

export default ItemList;
