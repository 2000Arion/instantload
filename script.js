window.addEventListener('popstate', function (event) {
    const path = window.location.pathname;

    if (path === '/' || path === '/index.html' || path === '/index' || path === '/home' || path === '/home.html') {
        loadHomePage(true);
    } else if (path === '/funktionen' || path === '/funktionen.html') {
        loadFunktionenPage(true);
    } else if (path === '/kontakt' || path === '/kontakt.html') {
        loadKontaktPage(true);
    } else {
        this.window.location.replace('/');
    }
});

document.addEventListener('DOMContentLoaded', function check() {
    const path = window.location.pathname;

    if (path === '/' || path === '/index.html' || path === '/index' || path === '/home' || path === '/home.html') {
        loadHomePage(true);
    } else if (path === '/funktionen' || path === '/funktionen.html') {
        loadFunktionenPage(true);
    } else if (path === '/kontakt' || path === '/kontakt.html') {
        loadKontaktPage(true);
    } else {
        window.location.replace('/');
    }
});

// Check for Ctrl + click or other modifiers, e.g. to open a page in a new tab
function isModifiedClick(event) {
    return event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0;
}

function loadHomePage(skipPush = false) {
    if (event && isModifiedClick(event)) return;
    event.preventDefault();
    
    fetch('/home.html')
        .then(response => response.text())
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const bodyContent = doc.body.innerHTML;

            document.getElementById('body').innerHTML = bodyContent;

            const yearEl = document.getElementById('year');
            if (yearEl) {
                yearEl.textContent = new Date().getFullYear();
            }

            if (!skipPush) {
                window.history.pushState({ page: 'home' }, 'Home | InstantLoad Test', '/');
            }

            document.title = 'Home | InstantLoad Test';
            setFavicon('/favicon.ico');
        })
        .catch(error => {
            console.error('Error loading "Home" page:', error);
        });
}

function loadFunktionenPage(skipPush = false) {
    if (event && isModifiedClick(event)) return;
    event.preventDefault();
    
    fetch('/funktionen.html')
        .then(response => response.text())
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const bodyContent = doc.body.innerHTML;

            document.getElementById('body').innerHTML = bodyContent;

            const yearEl = document.getElementById('year');
            if (yearEl) {
                yearEl.textContent = new Date().getFullYear();
            }

            if (!skipPush) {
                window.history.pushState({ page: 'funktionen' }, 'Funktionen | InstantLoad Test', '/funktionen');
            }

            document.title = 'Funktionen | InstantLoad Test';
            setFavicon('/favicon.ico');
        })
        .catch(error => {
            console.error('Error loading "Funktionen" page:', error);
        });
}

function loadKontaktPage(skipPush = false) {
    if (event && isModifiedClick(event)) return;
    event.preventDefault();
    
    fetch("/kontakt.html")
        .then(response => response.text())
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const bodyContent = doc.body.innerHTML;

            document.getElementById('body').innerHTML = bodyContent;

            const yearEl = document.getElementById('year');
            if (yearEl) {
                yearEl.textContent = new Date().getFullYear();
            }

            if (!skipPush) {
                window.history.pushState({ page: 'kontakt' }, 'Kontakt | InstantLoad Test', '/kontakt');
            }

            document.title = 'Kontakt | InstantLoad Test';
            setFavicon('/favicon.ico');
        })
        .catch(error => {
            console.error('Error loading "Kontakt" page:', error);
        });
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
