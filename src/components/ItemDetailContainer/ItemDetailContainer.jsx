import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import Title from "../Title/Title";
import { getFirestore, doc, getDoc } from "firebase/firestore";



export const ItemDetailContainer = () => {
  const [data, setData] = useState({});

  const { detalleId } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, "items", detalleId);
    getDoc(queryDoc).then(res => setData ({ id: res.id, ...res.data()}));
  }, [detalleId] );

  return (
    <>
      <div>
        <h6>
          <Title greeting="Hola Usuario" />
        </h6>
        <div className="prodVenta">
          <ItemDetail data={data} />
        </div>

        <div></div>
      </div>
    </>
  );
};

export default ItemDetailContainer;
