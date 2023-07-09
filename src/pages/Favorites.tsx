import React from "react";
import Product from "../components/Product";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Favorites: React.FC = () => {
  const { itemsFavorites } = useSelector((state: RootState) => state.favorites);
  return (
    <div className="favorites">
      <div className="container">
        <h2>Избранное</h2>
        {itemsFavorites.length <= 0 ? (
          <div className="favorites__empty">
            <h3> Ничего не добавлено </h3>
            <p>К сожалению, Вы еще не выбрали любимый товар :(</p>
          </div>
        ) : (
          <div className="products__items">
            {itemsFavorites.map((obj) => (
              <Product key={obj.parentId} {...obj} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
