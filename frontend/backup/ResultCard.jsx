import SSLCard from "../SSLCard";
import DNSCard from "../DNSCard";
import WhoisCard from "../WhoisCard";
import HeadersCard from "../HeadersCard";
import RecommendationCard from "../RecommendationCard";

function ResultCard({ result }) {
  if (!result) return null;

  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-12">

      {/* Heading */}

      <div className="text-center mb-10">

        <h2 className="text-4xl font-bold text-slate-900">
          🛡 Security Report
        </h2>

        <p className="mt-3 text-gray-500 text-lg">
          Complete Website Security Analysis
        </p>

      </div>

      {/* Cards */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        <SSLCard ssl={result.ssl} />

        <DNSCard dns={result.dns} />

        <WhoisCard whois={result.whois} />

        <HeadersCard headers={result.headers} />

      </div>

      {/* Recommendations */}

      <div className="mt-10">

        <RecommendationCard
          headers={result.headers}
        />

      </div>

    </section>
  );
}

export default ResultCard;