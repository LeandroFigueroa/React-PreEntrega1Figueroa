import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import Title from "../Title/Title";
const prodVenta = [
  {
    id: 1,
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-macbook-air-space-gray-m1-202010?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1634145627000",
    title: `Macbook pro 2022`,
    category: "notebooks",
    price: 300000,
    marca:'Apple',
    espec:"Notebook alta gama de la manzanita 16gb de ram",
  },
  {
    id: 2,
    image:
      "https://dlcdnwebimgs.asus.com/gain/f93bdd99-47d7-4f97-8800-5a83d0bd46a6/",
    title: "Asus TUF gaming",
    category: "notebooks",
    price: 300000,
    marca:'Asus',
    espec:"Notebook alta gama gamer 16gb de ram",
  },
  {
    id: 3,
    image:
      "https://images.samsung.com/is/image/samsung/assets/ar/smartphones/galaxy-s21-5g/buy/s21_ultra_group_kv_mo_img.png",
    title: "Galaxy S21 ultra 5G",
    category: "smartphones",
    price: 300000,
    marca:'Samsung',
    espec:"Smartphone alta gama, lo mejor en Android",
  },
  {
    id: 4,
    image:
      "https://itechstore.com.ar/wp-content/uploads/2022/12/EA199353-5C49-4CE8-98EF-59FCFCBF96A3.jpeg",
    title: "Iphone 14 pro max",
    category: "smartphones",
    price: 300000,
    marca:'Apple',
    espec:"Smartphone alta gama de la manzanita, lo mejor de lo mejor",
  },
  {
    id: 5,
    image:
      "https://itechstore.com.ar/wp-content/uploads/2022/12/EA199353-5C49-4CE8-98EF-59FCFCBF96A3.jpeg",
    title: "Iphone 14 pro max",
    category: "smartphones",
    price: 300000,
    marca:'Apple',
    espec:"Smartphone alta gama de la manzanita, lo mejor de lo mejor",
  },
  {
    id: 6,
    image:
      "https://itechstore.com.ar/wp-content/uploads/2022/12/EA199353-5C49-4CE8-98EF-59FCFCBF96A3.jpeg",
    title: "Iphone 14 pro max",
    category: "smartphones",
    price: 300000,
    marca:'Apple',
    espec:"Smartphone alta gama de la manzanita, lo mejor de lo mejor",
  },
];

export const ItemDetailContainer = () => {
  const [data, setData] = useState({});

  const { detalleId } = useParams();

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(prodVenta);
      }, 2000);
    });
    getData.then((res) =>
      setData(res.find((prodVenta) => prodVenta.id === parseInt(detalleId)))
    );
  }, []);

  return (
    <>
      <div>
        <h6>
          <Title greeting="Hola Usuario" />
        </h6>
        <div className="prodVenta">
        <ItemDetail data={data} />
      
        </div>

        <div>
        
        </div>
      </div>
    </>
  );


 
};

export default ItemDetailContainer;
