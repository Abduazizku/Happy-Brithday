import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prev) => [
        ...prev,
        { id: Date.now(), left: Math.random() * 100 }
      ]);
    }, 700);

    return () => clearInterval(interval);
  }, []);

  const poem = `
  Janm dogilgan guning bilan tabrikliman ilohim man bilan dang qarrishgisan hamisha yonimda oynab gulib bolalarimizni katta atib hamisha baxtli oynab gulib yurgimiz. Hayotimni eng gozal sahifasi butun bir kitoba aylanib hamisha yonimda bolgisan bir go’zal kinoga yarashadon hayotimiz bolsin janm sani bor vujudim qalbim bilan sevaman 🫶🏻❤️❤️ mani kulgularim mani baxtim sababchisi rangsiz hayotimni ranglara burkagan hayotimni mazmuna doldirgan ozingsan. Haqiqiy sevgini his attirgan 🫠🫠 hamisha yoninda bolgisan janm kyngi yil toy atib uya olib galib otrgiman😁🤲🏻. Yena bir marta tabrikliman janm❤️🫶🏻🫶🏻🫶🏻🥳🥳


  Dunyoyim quvonchim baxtimsan mening,
  Kulguyim sababi qalbi go’zalim.
  Yuzlari oyimsan baxtimsan maning,
  Tug’ilgan kuning muborak jonim..
  
  So’zlaring chiroyli yuzingga o’xshab,
  Yuz yil umr ko’rgin yonimda yashnab.
  Mayli eslab turgin xatoyim qashlab,
  Tavallud ayyoming muborak jonim..
  
  Birga yashashlikni nasib qil Robbim,
  Ul go’zal bag’rida erib ketayin. 
  Hattoki yuz yoshda aytib men takror,
  Tug’ilgan kuning muborak jonim..
  
  Kel endi cho’zmagin visol onlarin,
  Bag’rimga bosganda eritay takror. 
  Asta qulog’ingga aytay men bir bor,
  Tavallud ayyoming muborak jonim..
`;

  return (
    <div className="container">
      <div className="card">
        <h1>❤️ Tug‘ilgan kuning muborak, Jonim! ❤️</h1>
        <pre className="poem">{poem}</pre>
      </div>

      {/* Uchib chiqadigan yurakchalar */}
      {hearts.map((h) => (
        <span
          key={h.id}
          className="heart"
          style={{ left: `${h.left}%` }}
        >
          ❤️
        </span>
      ))}

      {/* Rasmlar va videolar galereyasi */}
      <div className="heart-shape">
        {/* Bu yerga o‘zing rasmlarni qo‘yasan */}
        <img src="./Rasmlar/Rasm1.jpg" alt="Bizning rasm 1" />
        <img src="./Rasmlar/Rasm2.jpg" alt="Bizning rasm 2" />
        <img src="./Rasmlar/Rasm3.jpg" alt="Bizning rasm 3" />
        <img src="./Rasmlar/Rasm4.jpg" alt="Bizning rasm 4" />
        <img src="./Rasmlar/Rasm5.jpg" alt="Bizning rasm 5" />
        <img src="./Rasmlar/Rasm6.jpg" alt="Bizning rasm 6" />
      </div>
    </div>
  );
}

export default App;
