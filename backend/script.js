window.addEventListener('popstate', function (event) {
    const path = window.location.pathname;

    if (path === '/' || path === '/index.html' || path === '/index' || path === '/index.php') {
        loadHomePage(true);
    } else if (path === '/funktionen' || path === '/funktionen.html' || path === '/funktionen.php') {
        loadFunktionenPage(true);
    } else if (path === '/kontakt' || path === '/kontakt.html' || path === '/kontakt.php') {
        loadKontaktPage(true);
    }
});

document.addEventListener('DOMContentLoaded', function check() {
    const path = window.location.pathname;

    if (path === '/' || path === '/index.html' || path === '/index' || path === '/index.php') {
        loadHomePage(true);
    } else if (path === '/funktionen' || path === '/funktionen.html' || path === '/funktionen.php') {
        loadFunktionenPage(true);
    } else if (path === '/kontakt' || path === '/kontakt.html' || path === '/kontakt.php') {
        loadKontaktPage(true);
    }
});

function loadHomePage(skipPush = false) {
    fetch('../home.html')
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
            setFavicon('/public/favicon.ico');
        })
        .catch(error => {
            console.error('Error loading "Home" page:', error);
        });
}

function loadFunktionenPage(skipPush = false) {
    fetch('../funktionen.html')
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
            setFavicon('/public/favicon.ico');
        })
        .catch(error => {
            console.error('Error loading "Funktionen" page:', error);
        });
}

function loadKontaktPage(skipPush = false) {
    fetch("../kontakt.html")
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
            setFavicon('/public/favicon.ico');
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
