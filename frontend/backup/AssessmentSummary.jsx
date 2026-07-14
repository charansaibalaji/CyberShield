function AssessmentSummary({ result }) {
  if (!result) return null;

  const totalHeaders = Object.keys(result.headers).length;

  const presentHeaders = Object.values(result.headers).filter(
    (value) => value !== "Missing"
  ).length;

  return (
    <div className="bg-white rounded-2xl shadow-md border p-6 mb-8">

      <h2 className="text-3xl font-bold mb-6">
        🛡 Website Assessment
      </h2>

      <div className="space-y-4">

        <div className="flex justify-between">
          <span>SSL Certificate</span>
          <span className="text-green-600 font-bold">
            {result.ssl.status}
          </span>
        </div>

        <div className="flex justify-between">
          <span>DNS Records</span>
          <span className="text-green-600 font-bold">
            Available
          </span>
        </div>

        <div className="flex justify-between">
          <span>WHOIS Information</span>
          <span className="text-green-600 font-bold">
            Available
          </span>
        </div>

        <div className="flex justify-between">
          <span>Security Headers</span>
          <span className="font-bold">
            {presentHeaders} / {totalHeaders}
          </span>
        </div>

      </div>

      <div className="mt-6 p-4 rounded-xl bg-blue-50 border border-blue-200">

        <p className="text-gray-700">

          This report evaluates the website's security configuration based on
          SSL, DNS, WHOIS information, and commonly used HTTP security headers.

          It is <strong>not</strong> a malware or fraud detection tool.

        </p>

      </div>

    </div>
  );
}

export default AssessmentSummary;