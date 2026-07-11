import whois
from urllib.parse import urlparse


def whois_lookup(url):
    try:
        hostname = urlparse(url).netloc

        if hostname == "":
            hostname = url

        hostname = hostname.replace("www.", "")

        data = whois.whois(hostname)

        return {
            "domain": data.domain_name,
            "registrar": data.registrar,
            "creation_date": str(data.creation_date),
            "expiration_date": str(data.expiration_date),
            "name_servers": data.name_servers,
        }

    except Exception as e:
        return {
            "error": str(e)
        }