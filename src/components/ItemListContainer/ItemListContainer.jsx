import React, { useEffect, useState } from "react";
import Title from "../Title/Title";
import ItemList from "../ItemList/ItemList";
import {useParams} from "react-router-dom"

const prodVenta = [
  {
    id: 1,
    image:
      "https://asset.msi.com/resize/image/global/product/product_16201127169d70bb52999eb66f11d2121f2c879bd6.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
    title: "Msi Gs 65 Stealth",
    category: "notebooks",
    price: 300000,
  },
  {
    id: 2,
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-macbook-air-space-gray-m1-202010?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1634145627000",
    title: `Macbook pro 2022`,
    category: "notebooks",
    price: 300000,
  },
  {
    id: 3,
    image:
      "https://dlcdnwebimgs.asus.com/gain/f93bdd99-47d7-4f97-8800-5a83d0bd46a6/",
    title: "Asus TUF gaming",
    category: "notebooks",
    price: 300000,
  },
  {
    id: 4,
    image:
      "https://images.samsung.com/is/image/samsung/assets/ar/smartphones/galaxy-s21-5g/buy/s21_ultra_group_kv_mo_img.png",
    title: "Galaxy S21 ultra 5G",
    category: "smartphones",
    price: 300000,
  },
  {
    id: 5,
    image:
      "https://itechstore.com.ar/wp-content/uploads/2022/12/EA199353-5C49-4CE8-98EF-59FCFCBF96A3.jpeg",
    title: "Iphone 14 pro max",
    category: "smartphones",
    price: 300000,
  },
];

export const ItemListContainer = ({ texto }) => {
  const [data, setData] = useState([]);

  const {categoriaId} = useParams();



  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(prodVenta);
      }, 1000);
    });

    if(categoriaId){
      getData.then(res => setData(res.filter(prodVenta => prodVenta.category === categoriaId)));
    }else{
    getData.then((res) => setData(res));
    }
  }, [categoriaId]);

  return (
    <>
      <div>
        <h6>
          <Title greeting="Hola Usuario" />
        </h6>
        <ItemList data={data} />
      </div>
    </>
  );
};

export default ItemListContainer;
