function Features() {
  return (
    <section
      style={{
        marginTop: "70px",
        textAlign: "center",
      }}
    >
      <h2>Security Features</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "30px",
        }}
      >
        <div style={cardStyle}>
          <h3>🔒 SSL Checker</h3>
          <p>Check SSL Certificate status.</p>
        </div>

        <div style={cardStyle}>
          <h3>🌐 DNS Lookup</h3>
          <p>View DNS Records.</p>
        </div>

        <div style={cardStyle}>
          <h3>📋 WHOIS</h3>
          <p>Get Domain Information.</p>
        </div>

        <div style={cardStyle}>
          <h3>🛡 Security Headers</h3>
          <p>Analyze HTTP Security Headers.</p>
        </div>
      </div>
    </section>
  );
}

const cardStyle = {
  width: "220px",
  padding: "20px",
  border: "1px solid #ddd",
  borderRadius: "10px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
};

export default Features;
