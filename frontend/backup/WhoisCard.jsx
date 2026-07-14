import {
  FaGlobe,
  FaBuilding,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";

function WhoisCard({ whois }) {
  if (!whois) return null;

  return (
    <div className="bg-gradient-to-br from-purple-50 to-violet-100 border border-purple-200 rounded-3xl p-7 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

      {/* Header */}

      <div className="flex items-center gap-4 mb-6">

        <div className="w-14 h-14 rounded-2xl bg-purple-500 flex items-center justify-center shadow-md">
          <FaGlobe className="text-white text-2xl" />
        </div>

        <div>

          <h2 className="text-2xl font-bold text-slate-800">
            WHOIS Information
          </h2>

          <p className="text-sm text-gray-500">
            Domain Registration Details
          </p>

        </div>

      </div>

      <div className="space-y-5">

        <div className="flex justify-between items-center">

          <span className="flex items-center gap-2 text-gray-600">
            <FaGlobe />
            Domain
          </span>

          <span className="bg-white px-3 py-1 rounded-xl shadow font-semibold">
            {whois.domain || "N/A"}
          </span>

        </div>

        <div className="flex justify-between items-center">

          <span className="flex items-center gap-2 text-gray-600">
            <FaBuilding />
            Registrar
          </span>

          <span className="font-semibold text-slate-800 text-right">
            {whois.registrar || "N/A"}
          </span>

        </div>

        <div className="flex justify-between items-center">

          <span className="flex items-center gap-2 text-gray-600">
            <FaCalendarAlt />
            Created
          </span>

          <span className="text-right text-slate-700">
            {whois.creation_date || "N/A"}
          </span>

        </div>

        <div className="flex justify-between items-center">

          <span className="flex items-center gap-2 text-gray-600">
            <FaClock />
            Expires
          </span>

          <span className="bg-purple-600 text-white px-3 py-1 rounded-full font-semibold">
            {whois.expiration_date || "N/A"}
          </span>

        </div>

      </div>

    </div>
  );
}

export default WhoisCard;