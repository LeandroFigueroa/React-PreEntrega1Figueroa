import React, { useEffect, useState } from "react";

import Title from "../Title/Title";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export const ItemListContainer = ({texto}) => {


  const [data, setData] = useState([]);
  const { categoriaId } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "items");

    if (categoriaId) {
      const queryFilter = query(
        queryCollection,
        where("categoryId", "==", categoriaId)
      );
      getDocs(queryFilter).then((res) =>
        setData(res.docs.map((items) => ({ id: items.id, ...items.data() })))
      );
    } else {
      getDocs(queryCollection).then((res) =>
        setData(res.docs.map((items) => ({ id: items.id, ...items.data() })))
      );
    }
  }, [categoriaId]);

  return (
    <>
      <div>
     
        <h6>
          <Title greeting= 'Hola' />
        </h6>
        <div>
          <ItemList data={data} />
          
        </div>
        

        <div>  </div>
      </div>
    </>
  );
};

export default ItemListContainer;
