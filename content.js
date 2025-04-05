const links = Array.from(document.querySelectorAll('a'));
const policyLinks = links.filter(link =>
  /privacy|terms|conditions/i.test(link.textContent)
);

if (policyLinks.length > 0) {
  fetch(policyLinks[0].href)
    .then(res => res.text())
    .then(text => {
      const checks = [
        { regex: /share.*third parties/i, severity: 3, label: "Shares data with third parties" },
        { regex: /store.*location/i, severity: 2, label: "Collects your location" },
        { regex: /encrypted/i, severity: -2, label: "Mentions encryption" },
        { regex: /opt[- ]?out/i, severity: -1, label: "Allows opting out" },
      ];

      let score = 100;
      const concerns = [];

      for (const check of checks) {
        if (check.regex.test(text)) {
          score -= check.severity * 10;
          concerns.push({ label: check.label, severity: check.severity });
        }
      }

      score = Math.max(0, Math.min(100, score));
      chrome.runtime.sendMessage({ type: "analysisResult", score, concerns });
    });
}
