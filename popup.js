// chrome.runtime.onMessage.addListener((message) => {
//   if (message.type === "analysisResult") {
//     document.getElementById("score").textContent = `${message.score}/100`;
//     const ul = document.getElementById("concerns");
//     ul.innerHTML = "";

//     message.concerns.forEach((c) => {
//       const li = document.createElement("li");

//       // Assign class based on severity
//       if (c.severity >= 3) li.className = "bad";
//       else if (c.severity === 2) li.className = "warn";
//       else li.className = "good";

//       li.textContent = `${getIcon(c.severity)} ${c.label}`;
//       ul.appendChild(li);
//     });
//   }
// });

// function getIcon(severity) {
//   return severity >= 3 ? "❌" : severity === 2 ? "⚠️" : "✅";
// }

document.addEventListener("DOMContentLoaded", () => {
  const fakeAnalysis = {
    score: 72,
    concerns: [
      { label: "Shares data with third parties", severity: 3, icon: "❌" },
      { label: "Collects geolocation data", severity: 2, icon: "⚠️" },
      { label: "Mentions encryption", severity: 1, icon: "✅" },
      { label: "Allows opt-out of marketing", severity: 1, icon: "✅" },
    ],
  };

  const scoreEl = document.getElementById("score");
  const badge = document.getElementById("score-badge");

  scoreEl.textContent = `${fakeAnalysis.score}`;
  badge.classList.remove("low", "medium", "high");

  if (fakeAnalysis.score >= 80) badge.classList.add("high");
  else if (fakeAnalysis.score >= 50) badge.classList.add("medium");
  else badge.classList.add("low");

  const ul = document.getElementById("concerns");
  ul.innerHTML = "";

  fakeAnalysis.concerns.forEach((c) => {
    const li = document.createElement("li");

    if (c.severity >= 3) li.className = "bad";
    else if (c.severity === 2) li.className = "warn";
    else li.className = "good";

    li.textContent = `${c.icon} ${c.label}`;
    ul.appendChild(li);
  });
});
