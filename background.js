chrome.runtime.onInstalled.addListener(() => {
    // Add the webRequest listener when the extension is installed or updated
    chrome.webRequest.onBeforeSendHeaders.addListener(
        function (details) {
            for (var i = 0; i < details.requestHeaders.length; ++i) {
                if (details.requestHeaders[i].name === 'Origin') {
                    // Add necessary CSP directives to the request headers
                    details.requestHeaders.push({ name: 'Content-Security-Policy', value: "default-src 'self' https://wordpress.org" });
                    break;
                }
            }
            return { requestHeaders: details.requestHeaders };
        },
        { urls: ["<all_urls>"] },
        ["blocking", "requestHeaders"]
    );
});

chrome.runtime.onInstalled.addListener(() => {
    chrome.alarms.create('checkNewResponses', { periodInMinutes: 5 });
});

chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === 'checkNewResponses') {
        checkNewResponses();
    }
});

function checkNewResponses() {
    // Fetch new responses from WordPress.org
    fetch('https://wordpress.org/support/view/no-replies/')
        .then(response => response.text())
        .then(data => {
            // Parse the response to find the count of new responses
            let newResponseCount = parseNewResponses(data);
            updateBadge(newResponseCount);
        });
}

function parseNewResponses(html) {
    // Implement a parser to count new responses from the HTML
    let parser = new DOMParser();
    let doc = parser.parseFromString(html, 'text/html');
    let responseElements = doc.querySelectorAll('.bbp-topic-freshness');
    let newResponseCount = 0;

    responseElements.forEach(element => {
        if (element.textContent.includes('minute') || element.textContent.includes('hour')) {
            newResponseCount++;
        }
    });

    return newResponseCount;
}

function updateBadge(count) {
    chrome.action.setBadgeText({ text: count.toString() });
    chrome.action.setBadgeBackgroundColor({ color: '#4688F1' });
}
