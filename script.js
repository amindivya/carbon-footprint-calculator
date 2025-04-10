document
  .getElementById("calculatorForm")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    const distance = document.getElementById("distance").value;
    const mode = document.getElementById("mode").value;

    try {
      const res = await fetch("http://localhost:3000/calculate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ distance, mode }),
      });

      const data = await res.json();
      document.getElementById(
        "result"
      ).innerText = `Footprint: ${data.carbonFootprint}\nSuggestion: ${data.suggestion}`;
    } catch (err) {
      console.error("Error:", err);
      document.getElementById("result").innerText =
        "Failed to calculate. Please try again.";
    }
  });
