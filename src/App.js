import React, { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function App() {
  const [result1, setResult1] = useState("");
  const [spinning1, setSpinning1] = useState(false);
  const [result2, setResult2] = useState("");
  const [spinning2, setSpinning2] = useState(false);

  const handleGacha1 = () => {
    const items = ["Super Rare", "Rare", "Normal"];
    setSpinning1(true);
    setResult1(""); // 結果をクリア
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * items.length);
      setResult1(items[randomIndex]);
      setSpinning1(false);
    }, 2000);
  };

  const handleGacha2 = () => {
    const items = ["Ultra Rare", "Common", "Basic"]; // 2つ目のガチャのアイテム（例として変更しています）
    setSpinning2(true);
    setResult2(""); // 結果をクリア
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * items.length);
      setResult2(items[randomIndex]);
      setSpinning2(false);
    }, 1000);
  };

  const getItemColor = (item) => {
    if (item === "Super Rare" || item === "Ultra Rare") {
      return "gold";
    } else if (item === "Rare" || item === "Common") {
      return "silver";
    } else if (item === "Normal" || item === "Basic") {
      return "gray";
    } else {
      return "black";
    }
  };

  return (
    <Box textAlign="center" mt={5}>
      <div className = "container">
      <Button variant="contained" color="primary" onClick={handleGacha1}>
        ガチャを引く
      </Button>
       <div className="box" onClick={handleGacha1}>
        {spinning1 && <div className="lid"></div>}
        <div className="result">{result1}</div>
       </div>
      </div>

      <Box mt={4}>
        {/* 2つ目のガチャ */}
        <Button variant="contained" color="secondary" onClick={handleGacha2}>
          ガチャ2を引く
        </Button>
        {spinning2 && <div className="spinner">Loading...</div>}
        {result2 && (
          <Typography variant="h4" style={{ color: getItemColor(result2), marginTop: "20px" }}>
            {result2}
          </Typography>
        )}
        </Box>
    </Box>
  );
}


export default App;