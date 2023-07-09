import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import CartEmpty from "./CartEmpty";
import { RootState } from "../redux/store";
import { addItemBuy } from "../redux/slices/buySlice";
import { removeCart } from "../redux/slices/cartSlice";

// interface CartProps {
//   setOpenCart: (value: boolean) => void;
// }

const Cart: React.FC = () => {
  const dispatch = useDispatch();

  const { items, totalPrice } = useSelector((state: RootState) => state.cart);

  const onMakePurchases = () => {
    dispatch(addItemBuy(items))
    dispatch(removeCart())
  }
  // const cartRef = useRef<HTMLDivElement>(null);
  // useEffect(() => {
  //   const onClickCart = (event: MouseEvent) => {
  //     if (
  //       cartRef.current ? !event.composedPath().includes(cartRef.current) : null
  //     ) {
  //       setOpenCart(false);
  //     }
  //   };
  //   document.body.addEventListener("click", onClickCart);
  //   return () => document.body.removeEventListener("click", onClickCart);
  // }, []);

  return (
    <div className="cart">
      {items.length <= 0 ? (
        <CartEmpty />
      ) : (
        <>
          <div className="cart__header">
            <h3>В вашей корзине:</h3>
            <span>{items.length}</span>
          </div>
          <div className="cart__items">
            {items.map((obj) => (
              <CartItem key={obj.parentId} {...obj} />
            ))}
          </div>
          <div className="cart__footer">
            <div className="cart__footer-price">
              <span>Суммы</span>
              <p>{totalPrice} ₽</p>
            </div>
            <button onClick={()=> onMakePurchases()}>Оформить заказ</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
