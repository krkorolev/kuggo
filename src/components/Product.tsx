import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemScooter } from "../redux/slices/cartSlice";
import { addItemFavorites } from "../redux/slices/favoritesSlice";
import { RootState } from "../redux/store";

type ProductProps = {
  parentId: string;
  tittle: string;
  power: number;
  time: string;
  volume: number;
  speed: number;
  priceNew: number;
  priceOld: string;
  img: string;
  rating: number;
};

const Product: React.FC<ProductProps> = ({
  parentId,
  tittle,
  power,
  time,
  volume,
  speed,
  priceNew,
  priceOld,
  img,
  rating,
}) => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootState) => state.cart);
  const { itemsFavorites } = useSelector((state: RootState) => state.favorites);
  const item = {
    parentId,
    tittle,
    power,
    time,
    volume,
    speed,
    priceNew,
    priceOld,
    img,
    rating,
  };
  const addItemInCart = () => {
    dispatch(addItemScooter(item));
  };

  const addInFavorites = () => {
    dispatch(addItemFavorites(item));
  };
  const findCartItem = items.find((obj) => {
    return obj.parentId === parentId;
  });
  const findFavoritesItem = itemsFavorites.find((obj) => {
    return obj.parentId === parentId;
  });

  return (
    <div className="item">
      <img width="250px" height="231px" src={img} alt="самокат" />
      <h3>{tittle}</h3>
      <div className="item__info">
        <ul>
          <li className="item__info-volume">{volume}</li>
          <li className="item__info-power">{power} л.с</li>

          <li className="item__info-speed">{speed} км/ч</li>
          <li className="item__info-time">{time}</li>
        </ul>
      </div>
      <div className="item__footer">
        <div className="item__price">
          <span>{priceOld} ₽</span>
          <p>{priceNew} ₽</p>
        </div>
        <button
          // className="item__btn item__btn-cart"
          className={
            findCartItem
              ? "item__btn item__btn-cart active"
              : "item__btn item__btn-cart"
          }
          onClick={() => addItemInCart()}
        ></button>
        <button
          className={
            findFavoritesItem
              ? "item__btn item__btn-favorites active"
              : "item__btn item__btn-favorites"
          }
          onClick={() => addInFavorites()}
        ></button>
      </div>
      <button className="item__button">Купить</button>
    </div>
  );
};

export default Product;

// type ProductProps = {
//   parentId: "string";
//   tittle: "string";
//   power: "number";
//   time: "string";
//   volume: "number";
//   speed: "number";
//   priceNew: "number";
//   priceOld: "number";
//   img: "string";
//   rating: "number";
// };
