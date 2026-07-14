import { FaGithub, FaShieldAlt } from "react-icons/fa";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-blue-100">

      <div className="max-w-7xl mx-auto px-6">

        <div className="h-20 flex items-center justify-between">

          {/* Logo */}

          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center shadow-lg">

              <FaShieldAlt className="text-white text-3xl"/>

            </div>

            <div>

              <h1 className="text-3xl font-extrabold text-slate-900">
                CyberShield
              </h1>

              <p className="text-gray-500 text-sm">
                Website Security Assessment Platform
              </p>

            </div>

          </div>

          {/* GitHub */}

          <a
            href="https://github.com/charansaibalaji/CyberShield"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 bg-slate-900 hover:bg-blue-600 text-white px-6 py-3 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105"
          >

            <FaGithub size={22}/>

            <span className="font-semibold">
              GitHub
            </span>

          </a>

        </div>

      </div>

    </header>
  );
}

export default Navbar;