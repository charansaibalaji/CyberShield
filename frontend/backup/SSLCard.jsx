import {
  FaLock,
  FaCheckCircle,
  FaTimesCircle,
  FaCertificate,
  FaBuilding,
  FaCalendarAlt,
} from "react-icons/fa";

function SSLCard({ ssl }) {
  if (!ssl) return null;

  const valid = ssl.status === "Valid";

  return (
    <div className="bg-white rounded-3xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">

      {/* Header */}

      <div className="bg-gradient-to-r from-green-500 to-emerald-400 text-white p-5">

        <div className="flex items-center gap-3">

          <div className="bg-white/20 p-3 rounded-xl">
            <FaLock size={28} />
          </div>

          <div>

            <h2 className="text-2xl font-bold">
              SSL Certificate
            </h2>

            <p className="text-green-100 text-sm">
              Certificate Security
            </p>

          </div>

        </div>

      </div>

      {/* Body */}

      <div className="p-6 space-y-5">

        {/* Status */}

        <div className="flex justify-between items-center">

          <span className="font-semibold text-gray-600">
            Status
          </span>

          {valid ? (

            <span className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">

              <FaCheckCircle />

              Valid

            </span>

          ) : (

            <span className="flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full font-semibold">

              <FaTimesCircle />

              Invalid

            </span>

          )}

        </div>

        <hr />

        <div className="flex items-start gap-3">

          <FaBuilding className="text-green-500 mt-1" />

          <div>

            <p className="text-gray-500 text-sm">
              Issuer
            </p>

            <p className="font-semibold">
              {ssl.issuer}
            </p>

          </div>

        </div>

        <div className="flex items-start gap-3">

          <FaCertificate className="text-green-500 mt-1" />

          <div>

            <p className="text-gray-500 text-sm">
              Issued To
            </p>

            <p className="font-semibold break-all">
              {ssl.issued_to}
            </p>

          </div>

        </div>

        <div className="flex items-start gap-3">

          <FaCalendarAlt className="text-green-500 mt-1" />

          <div>

            <p className="text-gray-500 text-sm">
              Valid Until
            </p>

            <p className="font-semibold">
              {ssl.valid_to}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default SSLCard;