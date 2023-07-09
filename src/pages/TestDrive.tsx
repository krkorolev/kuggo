import React from "react";

const TestDrive: React.FC = () => {
  return (
    <div className="testDrive">
      <div className="testDrive__backgroundImg"></div>
      <div className="container">
        <div className="testDrive__recording">
          <span>
            Восточно-Кругликовская улица, 86 <b>Вт - Сб 10:00 - 20:00</b>
          </span>
          <h2>Запишитесь на бесплатный тест-драйв электросамокатов</h2>
          <p>в Москве без ограничения по времени</p>
          <ul>
            <li className="zipper">Поймете, какая модель вам подходит</li>
            <li className="scooter">Проверите лучшие самокаты в деле</li>
          </ul>
          <button>Записаться</button>
        </div>
        <div className="testDrive__info">
          <h3>
            Определите максимально подходящую вам модель не теоретически, а на
            практике
          </h3>
          <span>Тест-драйв поможет:</span>
          <ul>
            <li>Понять подходит ли вам конкретная модель</li>
            <li>Испытать самокат в «реальной жизни»</li>
            <li>Оценить удобство хранения и эксплуатации</li>
            <li>Узнать реальные характеристики и возможности модели.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TestDrive;
