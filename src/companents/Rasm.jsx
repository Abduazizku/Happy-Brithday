import React, { useState, useEffect } from "react";
import "./index.css";

function Rasm() {
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
Janm tug'ilgan kuning bilan tabrikliman...
(To‘liq she’r matning shu yerda bo‘ladi)
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
      <div className="gallery">
        <h2>📸 Bizning xotiralar</h2>
        <div className="media-grid">
          {/* Bu yerga o‘zing rasm va video fayllarini qo‘yasan */}
          <img src="Rasm1.jpg" alt="Bizning rasm 1" />
          <img src="Rasm2.jpg" alt="Bizning rasm 2" />
          <img src="asm3.jpg" alt="Bizning rasm 3" />
          <video controls>
            <source src="video1.mp4" type="video/mp4" />
            Sizning brauzeringiz video formatini qo‘llab-quvvatlamaydi.
          </video>
        </div>
      </div>
    </div>
  );
}

export default Rasm;
