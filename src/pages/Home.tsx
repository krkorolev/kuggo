import React, { useContext, useEffect, useState } from "react";
import Skeleton from "../components/Skeleton";
import Product from "../components/Product";

import { searchContext } from "../App";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../redux/slices/itemsSlice";
import { RootState } from "../redux/store";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();
  const { items, status } = useSelector((state: RootState) => state.items);
  const [activeCategories, setActiveCategories] = useState(0);
  const { searchValue } = useContext<any>(searchContext);
  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  const changeInput = items.filter((obj) =>
    obj.tittle.toLowerCase().includes(searchValue.toLowerCase())
  );

  const categogories = ["Хиты продаж", "По скорости", "По мощности", "По цене"];
  return (
    <div className="home">
      <div className="home__backgroundImg"></div>
      <div className="container">
        <div className="home__info">
          <span>Новинка</span>
          <h1>Электросамокаты Kugoo Kirin от официального дилера</h1>
          <p>с бесплатной доставкой по РФ от 1 дня</p>
          <button>
            <Link to="products">Перейти в католог</Link>
          </button>
        </div>
        <div className="home__advantages">
          <dl>
            <dt>Гарантия 1 год</dt>
            <dd>на весь ассортимент</dd>
          </dl>
          <dl>
            <dt>рассрочка</dt>
            <dd>от 6 месяцев</dd>
          </dl>
          <dl>
            <dt>Подарки</dt>
            <dd>и бонусам к покупкам </dd>
          </dl>
          <div className="yandex__reviews">
            <b>Яндекс отзывы</b>
            <span>4,9</span>
          </div>
        </div>
        <div id="products" className="products">
          <h2>Электросамокаты</h2>
          <div className="products__categories">
            <ul>
              {categogories.map((el, i) => (
                <li
                  key={i}
                  className={activeCategories === i ? "active" : ""}
                  onClick={() => setActiveCategories(i)}
                >
                  {el}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="products__items">
          {status === "loading"
            ? [...Array(6)].map((_, i) => <Skeleton key={i} />)
            : changeInput.map((obj) => <Product key={obj.parentId} {...obj} />)}
        </div>
      </div>
    </div>
  );
};

export default Home;
