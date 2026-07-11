def calculate_score(ssl_result, dns_result, whois_result, headers_result):

    score = 0

    # SSL
    if ssl_result.get("status") == "Valid":
        score += 25

    # DNS
    if dns_result.get("A"):
        score += 20

    # WHOIS
    if whois_result.get("registrar"):
        score += 15

    # Security Headers
    security_headers = [
        "Strict-Transport-Security",
        "Content-Security-Policy",
        "X-Frame-Options",
        "X-Content-Type-Options",
        "Referrer-Policy",
        "Permissions-Policy",
    ]

    header_score = 40 / len(security_headers)

    for header in security_headers:
        if headers_result.get(header) != "Missing":
            score += header_score

    return round(score)