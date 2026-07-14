function Footer() {
  return (
    <footer className="mt-16 bg-slate-900 text-white">

      <div className="max-w-7xl mx-auto px-8 py-10">

        <h2 className="text-3xl font-bold">
          🛡 CyberShield
        </h2>

        <p className="mt-3 text-slate-400">
          Professional Website Security Assessment Platform
        </p>

        <hr className="my-6 border-slate-700" />

        <div className="flex flex-col md:flex-row justify-between items-center">

          <p className="text-slate-400">
            © 2026 CyberShield. All rights reserved.
          </p>

          <a
            href="https://github.com/charansaibalaji/CyberShield"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:text-blue-300"
          >
            View on GitHub →
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;