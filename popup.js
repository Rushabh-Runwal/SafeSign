chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "analysisResult") {
    document.getElementById("score").textContent = `${message.score}/100`;
    const ul = document.getElementById("concerns");
    ul.innerHTML = "";
    message.concerns.forEach(c => {
      const li = document.createElement("li");
      li.textContent = `${getIcon(c.severity)} ${c.label}`;
      ul.appendChild(li);
    });
  }
});

function getIcon(severity) {
  return severity >= 3 ? "❌" : severity === 2 ? "⚠" : "✅";
}
