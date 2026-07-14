import {
  FaShieldAlt,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

function HeadersCard({ headers }) {
  if (!headers) return null;

  return (
    <div className="bg-gradient-to-br from-orange-50 to-amber-100 border border-orange-200 rounded-3xl p-7 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

      {/* Header */}

      <div className="flex items-center gap-4 mb-6">

        <div className="w-14 h-14 rounded-2xl bg-orange-500 flex items-center justify-center shadow-md">
          <FaShieldAlt className="text-white text-2xl" />
        </div>

        <div>

          <h2 className="text-2xl font-bold text-slate-800">
            Security Headers
          </h2>

          <p className="text-sm text-gray-500">
            HTTP Response Header Analysis
          </p>

        </div>

      </div>

      <div className="space-y-3">

        {Object.entries(headers).map(([key, value]) => {

          const present = value !== "Missing";

          return (

            <div
              key={key}
              className="bg-white rounded-2xl p-4 flex justify-between items-center shadow-sm hover:shadow-md transition"
            >

              <span className="font-medium text-slate-700">
                {key}
              </span>

              <span
                className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold ${
                  present
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >

                {present ? (
                  <>
                    <FaCheckCircle />
                    Present
                  </>
                ) : (
                  <>
                    <FaTimesCircle />
                    Missing
                  </>
                )}

              </span>

            </div>

          );

        })}

      </div>

    </div>
  );
}

export default HeadersCard;