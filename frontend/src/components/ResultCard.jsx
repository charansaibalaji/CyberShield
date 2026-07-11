function ResultCard({ result }) {
  if (!result) return null;

  return (
    <div
      style={{
        width: "900px",
        margin: "40px auto",
        padding: "20px",
        borderRadius: "12px",
        background: "#f8fafc",
        border: "1px solid #ddd",
      }}
    >
      <h2>🛡 Security Report</h2>

      <hr />

      <h3>📊 Security Score</h3>
      <h1 style={{ color: "#2563eb" }}>
        {result.security_score}/100
      </h1>

      <hr />

      <h3>🔒 SSL Certificate</h3>

      <p><b>Status:</b> {result.ssl.status}</p>
      <p><b>Issuer:</b> {result.ssl.issuer}</p>
      <p><b>Issued To:</b> {result.ssl.issued_to}</p>
      <p><b>Valid Until:</b> {result.ssl.valid_to}</p>

      <hr />

      <h3>🌐 DNS Records</h3>

      <p><b>A Records:</b></p>

      <ul>
        {result.dns.A.map((ip, index) => (
          <li key={index}>{ip}</li>
        ))}
      </ul>

      <hr />

      <h3>📋 WHOIS</h3>

      <p><b>Registrar:</b> {result.whois.registrar}</p>

      <p><b>Domain:</b> {result.whois.domain}</p>

      <hr />

      <h3>🛡 Security Headers</h3>

      <table style={{ width: "100%" }}>
        <tbody>
          {Object.entries(result.headers).map(([key, value]) => (
            <tr key={key}>
              <td><b>{key}</b></td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ResultCard;