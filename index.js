const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post("/calculate", (req, res) => {
  const { distance, mode } = req.body;
  const emissionRates = {
    car: 0.21,
    bus: 0.089,
    train: 0.041,
    flight: 0.25,
  };

  const rate = emissionRates[mode] || 0.2;
  const carbonFootprint = distance * rate;

  let suggestion = "Great job!";
  if (carbonFootprint > 300) {
    suggestion = "Try taking public transport or carpooling!";
  }

  res.json({
    carbonFootprint: `${carbonFootprint.toFixed(2)} kg CO2`,
    suggestion,
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
