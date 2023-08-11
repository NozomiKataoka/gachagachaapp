import React, { useState } from "react";

const gachaItems = [
  { name: "アイテム1", rarity: "★" },
  { name: "アイテム2", rarity: "★★" },
  { name: "アイテム3", rarity: "★★★" },
  // ... 他のアイテム
];

function drawGacha() {
  const randomIndex = Math.floor(Math.random() * gachaItems.length);
  return gachaItems[randomIndex];
}

function Gacha() {
  const [result, setResult] = useState(null);

  const handleDraw = () => {
    const drawnItem = drawGacha();
    setResult(drawnItem);
  };

  return (
    <div>
      <button onClick={handleDraw}>Draw Gacha</button>
      {result && (
        <div>
          <h2>{result.name}</h2>
          <p>Rarity: {result.rarity}</p>
        </div>
      )}
    </div>
  );
}

export default Gacha;