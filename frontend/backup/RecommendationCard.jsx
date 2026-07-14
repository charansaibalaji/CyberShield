function RecommendationCard({ headers }) {
  if (!headers) return null;

  const recommendations = [];

  Object.entries(headers).forEach(([key, value]) => {
    if (value === "Missing") {
      recommendations.push(`Enable ${key}`);
    }
  });

  return (
    <div className="bg-yellow-50 border border-yellow-300 rounded-2xl p-6">

      <h2 className="text-2xl font-bold mb-5">
        💡 Recommendations
      </h2>

      {recommendations.length === 0 ? (

        <p className="text-green-600 font-semibold">
          ✅ No recommendations. Your detected security headers are configured.
        </p>

      ) : (

        <ul className="space-y-3">

          {recommendations.map((item, index) => (

            <li
              key={index}
              className="text-red-600"
            >
              ❌ {item}
            </li>

          ))}

        </ul>

      )}

    </div>
  );
}

export default RecommendationCard;