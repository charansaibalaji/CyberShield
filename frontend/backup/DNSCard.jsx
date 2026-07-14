import {
  FaGlobe,
  FaServer,
  FaEnvelope,
  FaNetworkWired,
} from "react-icons/fa";

function DNSCard({ dns }) {
  if (!dns) return null;

  return (
    <div className="bg-white rounded-3xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">

      {/* Header */}

      <div className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white p-5">

        <div className="flex items-center gap-3">

          <div className="bg-white/20 p-3 rounded-xl">
            <FaGlobe size={28} />
          </div>

          <div>

            <h2 className="text-2xl font-bold">
              DNS Records
            </h2>

            <p className="text-blue-100 text-sm">
              Domain Name System Information
            </p>

          </div>

        </div>

      </div>

      {/* Body */}

      <div className="p-6 space-y-6">

        {/* A Records */}

        <div>

          <div className="flex items-center gap-2 mb-3">

            <FaServer className="text-blue-500" />

            <span className="font-semibold text-gray-700">
              A Records
            </span>

          </div>

          <div className="flex flex-wrap gap-2">

            {dns.A?.length ? (
              dns.A.map((ip, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-700 px-3 py-2 rounded-full text-sm font-medium"
                >
                  {ip}
                </span>
              ))
            ) : (
              <span className="text-gray-400">
                No A Records
              </span>
            )}

          </div>

        </div>

        <hr />

        {/* MX Records */}

        <div>

          <div className="flex items-center gap-2 mb-3">

            <FaEnvelope className="text-blue-500" />

            <span className="font-semibold text-gray-700">
              MX Records
            </span>

          </div>

          <div className="flex flex-wrap gap-2">

            {dns.MX?.length ? (
              dns.MX.map((mx, index) => (
                <span
                  key={index}
                  className="bg-green-100 text-green-700 px-3 py-2 rounded-full text-sm font-medium"
                >
                  {mx}
                </span>
              ))
            ) : (
              <span className="text-gray-400">
                No MX Records
              </span>
            )}

          </div>

        </div>

        <hr />

        {/* NS Records */}

        <div>

          <div className="flex items-center gap-2 mb-3">

            <FaNetworkWired className="text-blue-500" />

            <span className="font-semibold text-gray-700">
              NS Records
            </span>

          </div>

          <div className="flex flex-wrap gap-2">

            {dns.NS?.length ? (
              dns.NS.map((ns, index) => (
                <span
                  key={index}
                  className="bg-purple-100 text-purple-700 px-3 py-2 rounded-full text-sm font-medium"
                >
                  {ns}
                </span>
              ))
            ) : (
              <span className="text-gray-400">
                No NS Records
              </span>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}

export default DNSCard;