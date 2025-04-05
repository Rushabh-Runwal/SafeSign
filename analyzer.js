function analyzePolicy(text) {
    const checks = [
      { regex: /share.*third parties/i, severity: 3, label: "Shares data with third parties" },
      { regex: /store.*location/i, severity: 2, label: "Collects your location" },
      { regex: /encrypted/i, severity: -2, label: "Mentions encryption" },
      { regex: /opt[- ]?out/i, severity: -1, label: "Allows opting out" },
    ];
  
    let score = 100;
    const concerns = [];
  
    for (let check of checks) {
      if (check.regex.test(text)) {
        score -= check.severity * 10;
        concerns.push({ label: check.label, severity: check.severity });
      }
    }
  
    score = Math.max(0, Math.min(100, score));
    return { score, concerns };
  }
  