import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import BuyingItem from "./BuyingItem";

const Buying: React.FC = () => {
  const { purchase } = useSelector((state: RootState) => state.buy);

  return (
    <div className="buying">
      <div className="container">
        <h2>Мои покупки</h2>
        {purchase.length <= 0 ? (
          <div className="buying__empty">
            <h3> Ничего не куплено </h3>
            <p>К сожалению, Вы еще не покупали товар в нашем магазине :(</p>
          </div>
        ) : (
          <div className="products__items">
            {purchase.map((obj) => (
              <BuyingItem key={obj.parentId} {...obj} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Buying;
