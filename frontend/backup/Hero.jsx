import { useState } from "react";
import axios from "axios";
import ResultCard from "./ResultCard";
import { FaShieldAlt, FaSearch } from "react-icons/fa";

function Hero() {
  const [websiteURL, setWebsiteURL] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  async function analyzeWebsite() {
    if (!websiteURL.trim()) {
      alert("Please enter a website URL.");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "http://127.0.0.1:8000/analyze",
        {
          url: websiteURL,
        }
      );

      setResult(response.data);
    } catch (err) {
      alert("Unable to connect to backend.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="max-w-6xl mx-auto px-6 pt-10">

      <div className="bg-white rounded-[30px] shadow-xl border border-blue-100 px-10 py-10">

        {/* Logo + Title */}

        <div className="flex justify-center">

          <div className="flex items-center gap-6">

            <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-400 flex items-center justify-center shadow-lg">

              <FaShieldAlt className="text-white text-5xl" />

            </div>

            <div>

              <h1 className="text-6xl font-extrabold text-slate-900 leading-none">
                CyberShield
              </h1>

              <p className="mt-3 text-2xl text-gray-600">
                Professional Website Security Assessment Platform
              </p>

              <p className="mt-2 text-gray-500">
                SSL • DNS • WHOIS • HTTP Security Headers
              </p>

            </div>

          </div>

        </div>

        {/* Search */}

        <div className="mt-10 flex flex-col lg:flex-row gap-4">

          <input
            type="text"
            value={websiteURL}
            onChange={(e) => setWebsiteURL(e.target.value)}
            placeholder="Enter Website URL (https://example.com)"
            className="flex-1 rounded-2xl border border-gray-300 px-6 py-4 text-lg shadow-md focus:outline-none focus:ring-4 focus:ring-blue-200"
          />

          <button
            onClick={analyzeWebsite}
            className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:scale-105 transition duration-300"
          >
            <FaSearch />
            {loading ? "Analyzing..." : "Analyze Website"}
          </button>

        </div>

      </div>

      {result && (
        <div className="mt-12">
          <ResultCard result={result} />
        </div>
      )}

    </section>
  );
}

export default Hero;