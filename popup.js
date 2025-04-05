document.getElementById('score').textContent = `${result.score}/100`;
result.concerns.forEach(c => {
  const el = document.createElement('li');
  el.textContent = `${severityIcon(c.severity)} ${c.label}`;
  list.appendChild(el);
});
