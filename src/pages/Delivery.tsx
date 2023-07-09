import React, { useState } from "react";

const regions = [
  "Москва и МО",
  "Санкт-Петербург и Ленобласть",
  "Краснодар",
  "Регионы России",
  "Казахстан, РБ, Армения, Киргизия",
];

const Delivey:React.FC = () => {
  const [activeRegion, setActiveRegion] = useState(0);
  return (
    <div className="delivery">
      <div className="delivery__backgroundImg"></div>
      <div className="container">
        <div className="delivery__title">
          <h1>Оплата и доставка любыми удобными способами</h1>
        </div>
        <div className="delivery__info">
          <h2>Отправляем по России в день заказа</h2>
          <p>Выберите свой регион</p>
          <ul>
            {regions.map((el, i) => (
              <li
                key={i}
                onClick={() => setActiveRegion(i)}
                className={activeRegion === i ? "active" : ""}
              >
                {el}
              </li>
            ))}
          </ul>
          <div className="delivery__info-msk">
            <dl>
              <dt>Способ доставки</dt>
              <dd>Курьером</dd>
              <dd>Срочная доставка</dd>
            </dl>
            <dl>
              <dt>Время доставки</dt>
              <dd>В течение дня при заказе до 11:00</dd>
              <dd>
                За 2-4 часа в день заказа. Заказы на срочную доставку
                принимаются до 17:00, в пятницу — до 13:00.
              </dd>
            </dl>

            <dl>
              <dt>Стоимость</dt>
              <dd>Бесплатная доставка</dd>
              <dd>Стоимость срочной доставки уточняйте у менеджера</dd>
            </dl>

            {/* <div>
              <p>
                Самовывоз из магазина ул. Ткацкая, 5 стр. 16. (Пн - Вс 10:00 -
                20:00)
              </p>
              <p>
                Перед посещением магазина уточняйте наличие рассматриваемой вами
                модели по телефону +7 (499) 406-15-79
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivey;

{
  /* <table>
              <tbody>
                <tr>
                  <th>Способ доставки</th>
                  <th>Время доставки</th>
                  <th>Стоимость</th>
                </tr>
                <tr>
                  <td>Курьером</td>
                  <td>В течение дня при заказе до 11:00</td>
                  <td>Бесплатная доставка</td>
                </tr>
                <tr>
                  <td>Срочная доставка</td>
                  <td>
                    За 2-4 часа в день заказа. Заказы на срочную доставку
                    принимаются до 17:00, в пятницу — до 13:00.
                  </td>
                  <td>Стоимость срочной доставки уточняйте у менеджера</td>
                </tr>
              </tbody>
            </table> */
}
