let loadingTimeout = null;

const pageCache = {};

window.addEventListener('popstate', function (event) {
    const path = window.location.pathname;

    if (path === '/' || path === '/index.html' || path === '/index' || path === '/home' || path === '/home.html') {
        loadHomePage(null, true);
    } else if (path === '/funktionen' || path === '/funktionen.html') {
        loadFunktionenPage(null, true);
    } else if (path === '/kontakt' || path === '/kontakt.html') {
        loadKontaktPage(null, true);
    } else {
        window.location.replace('/');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const path = window.location.pathname;

    if (path === '/' || path === '/index.html' || path === '/index' || path === '/home' || path === '/home.html') {
        loadHomePage(null, true);
    } else if (path === '/funktionen' || path === '/funktionen.html') {
        loadFunktionenPage(null, true);
    } else if (path === '/kontakt' || path === '/kontakt.html') {
        loadKontaktPage(null, true);
    } else {
        window.location.replace('/');
    }
});

function isModifiedClick(event) {
    return event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0;
}

function loadPage(path, title, historyState, skipPush = false) {
    if (pageCache[path]) {
        updatePage(pageCache[path], title, historyState, skipPush);
    } else {
        loadingTimeout = setTimeout(() => NProgress.start(), 200);

        fetch(path)
            .then(response => response.text())
            .then(html => {
                clearTimeout(loadingTimeout);
                NProgress.done();

                pageCache[path] = html;
                updatePage(html, title, historyState, skipPush);
            })
            .catch(error => {
                clearTimeout(loadingTimeout);
                NProgress.done();
                console.error(`Error loading "${title}" page:`, error);
            });
    }
}

function updatePage(html, title, historyState, skipPush) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const bodyContent = doc.body.innerHTML;

    document.getElementById('body').innerHTML = bodyContent;

    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    if (!skipPush) {
        window.history.pushState({ page: historyState }, title, historyState === 'home' ? '/' : '/' + historyState);
    }

    document.title = title;
    setFavicon('/favicon.ico');
}

function loadHomePage(event = null, skipPush = false) {
    if (event && isModifiedClick(event)) return;
    if (event) event.preventDefault();

    loadPage('/home.html', 'Home | InstantLoad Test', 'home', skipPush);
}

function loadFunktionenPage(event = null, skipPush = false) {
    if (event && isModifiedClick(event)) return;
    if (event) event.preventDefault();

    loadPage('/funktionen.html', 'Funktionen | InstantLoad Test', 'funktionen', skipPush);
}

function loadKontaktPage(event = null, skipPush = false) {
    if (event && isModifiedClick(event)) return;
    if (event) event.preventDefault();

    loadPage('/kontakt.html', 'Kontakt | InstantLoad Test', 'kontakt', skipPush);
}

function setFavicon(path) {
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
    }
    link.href = path;
}

function a2dataRef() {
    const url = "https://www.arion2000.xyz";
    window.open(url, "_blank");
}

function resetHistory() {
    window.history.go(-(window.history.length - 1));
}
