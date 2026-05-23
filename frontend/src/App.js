import React, { useState } from "react";
import { predictCost, saveProject } from "./api";

function App() {
  const [form, setForm] = useState({
    laborCost: "",
    materialCost: "",
    duration: ""
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePredict = async () => {
    const res = await predictCost(form);
    setResult(res.data.estimatedCost);

    await saveProject(form);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Construction Cost Predictor</h1>

      <input name="laborCost" placeholder="Labor Cost" onChange={handleChange} />
      <input name="materialCost" placeholder="Material Cost" onChange={handleChange} />
      <input name="duration" placeholder="Duration (days)" onChange={handleChange} />

      <button onClick={handlePredict}>Predict Cost</button>

      {result && <h2>Estimated Cost: ₦{result}</h2>}
    </div>
  );
}

export default App;