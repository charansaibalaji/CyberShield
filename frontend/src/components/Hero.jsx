import { useState } from "react";
import API from "../services/api";
import ResultCard from "./ResultCard";

function Hero() {
  const [websiteURL, setWebsiteURL] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  async function analyzeWebsite() {
    if (!websiteURL) {
      alert("Please enter a website URL");
      return;
    }

    setLoading(true);

    try {
      const response = await API.post("/analyze", {
        url: websiteURL,
      });

      setResult(response.data);
    } catch (error) {
      alert("Failed to connect to backend");
      console.error(error);
    }

    setLoading(false);
  }

  return (
    <section
      style={{
        textAlign: "center",
        marginTop: "50px",
      }}
    >
      <h1>🛡 CyberShield</h1>

      <p>Website Security Assessment Platform</p>

      <input
        type="text"
        placeholder="https://google.com"
        value={websiteURL}
        onChange={(e) => setWebsiteURL(e.target.value)}
        style={{
          width: "500px",
          padding: "12px",
          fontSize: "16px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      />

      <br />
      <br />

      <button
        onClick={analyzeWebsite}
        style={{
          padding: "12px 25px",
          fontSize: "16px",
          cursor: "pointer",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#2563eb",
          color: "white",
        }}
      >
        {loading ? "Analyzing..." : "Analyze Website"}
      </button>

      <ResultCard result={result} />
    </section>
  );
}

export default Hero;