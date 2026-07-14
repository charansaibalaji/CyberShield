import {
  FaLock,
  FaGlobe,
  FaDatabase,
  FaShieldAlt,
} from "react-icons/fa";

function Features() {
  const features = [
    {
      icon: <FaLock />,
      title: "SSL Certificate",
      color: "from-green-500 to-emerald-400",
      bg: "bg-green-50",
      text: "Checks SSL validity, issuer, encryption strength and certificate expiry.",
    },
    {
      icon: <FaGlobe />,
      title: "DNS Lookup",
      color: "from-blue-500 to-cyan-400",
      bg: "bg-blue-50",
      text: "Retrieves A, MX and NS records to inspect DNS configuration.",
    },
    {
      icon: <FaDatabase />,
      title: "WHOIS Information",
      color: "from-purple-500 to-pink-400",
      bg: "bg-purple-50",
      text: "Displays registrar, ownership details and domain registration dates.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Security Headers",
      color: "from-orange-500 to-amber-400",
      bg: "bg-orange-50",
      text: "Analyzes important HTTP security headers and provides recommendations.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

      {/* Heading */}

      <div className="text-center max-w-3xl mx-auto">

        <span className="inline-block bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold mb-4">
          Platform Features
        </span>

        <h2 className="text-5xl font-bold text-slate-900">
          Everything You Need
        </h2>

        <p className="mt-6 text-lg text-gray-600 leading-8">
          CyberShield performs multiple website security checks and presents
          them in one beautiful dashboard.
        </p>

      </div>

      {/* Cards */}

      <div className="mt-16 grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">

        {features.map((item, index) => (

          <div
            key={index}
            className={`${item.bg} rounded-3xl p-8 shadow-lg border border-white hover:-translate-y-3 hover:shadow-2xl transition duration-300`}
          >

            <div
              className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-4xl shadow-lg`}
            >
              {item.icon}
            </div>

            <h3 className="mt-8 text-3xl font-bold text-slate-900">
              {item.title}
            </h3>

            <p className="mt-5 text-gray-600 leading-8">
              {item.text}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Features;