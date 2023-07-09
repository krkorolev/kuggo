import React from "react";
import { Link } from "react-router-dom";

const CartEmpty: React.FC = () => {
  return (
    <div className="cart__empty">
      <div className="cart__empty-img"></div>
      <h1>Ваша корзина пуста </h1>
      <p>Добавьте в нее товары из каталога</p>
      <button>
        <Link to="/#products">Перейти в католог</Link>
      </button>
    </div>
  );
};

export default CartEmpty;
