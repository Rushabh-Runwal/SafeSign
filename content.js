const links = Array.from(document.querySelectorAll('a'));
const policyLinks = links.filter(link =>
  /privacy|terms|policy|conditions/i.test(link.textContent)
);

fetch(policyLinks[0].href).then(res => res.text()).then(text => {
    chrome.runtime.sendMessage({ type: 'policyText', text });
  });
  
