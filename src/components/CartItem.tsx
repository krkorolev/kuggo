import React from "react";
import { GoTrash } from "react-icons/go";
import { useDispatch } from "react-redux";
import { removeItemScooter } from "../redux/slices/cartSlice";

type CartItemProps = {
  parentId: string;
  tittle: string;
  priceNew: number;
  img: string;
};

const CartItem: React.FC<CartItemProps> = ({
  parentId,
  tittle,
  priceNew,
  img,
}) => {
  const dispatch = useDispatch();

  const removeItemCart = (parentId: string) => {
    dispatch(removeItemScooter(parentId));
  };
  return (
    <div className="item">
      <img src={img} alt="самокат" width="40px" height="40px" />
      <div className="item__info">
        <h4>{tittle}</h4>
        <p>{priceNew} ₽</p>
      </div>
      <GoTrash onClick={() => removeItemCart(parentId)} />
    </div>
  );
};

export default CartItem;
