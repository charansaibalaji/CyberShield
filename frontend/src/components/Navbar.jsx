function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#0f172a",
        color: "white",
        padding: "15px 40px",
      }}
    >
      <h2 style={{ margin: 0 }}>🛡 CyberShield</h2>

      <div>
        <button style={{ marginRight: "10px" }}>Home</button>

        <button style={{ marginRight: "10px" }}>
          Dashboard
        </button>

        <button>Login</button>
      </div>
    </nav>
  );
}

export default Navbar;