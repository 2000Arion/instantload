window.addEventListener('popstate', function (event) {
    if (event.state) {
        check();
    };
});

document.addEventListener('DOMContentLoaded', function check() {
    if (window.location.pathname == '/' || window.location.pathname == '/index.html' || window.location.pathname == '/index' || window.location.pathname == 'index.php') {
        loadHomePage();
        var link = document.querySelector("link[rel~='icon']");
        if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.head.appendChild(link);
        }
        link.href = '/public/favicon.ico';
    } else if (window.location.pathname == '/funktionen' || window.location.pathname == '/funktionen.html' || window.location.pathname == '/funktionen.php') {
        document.title = 'Funktionen | InstantLoad Test';
        var link = document.querySelector("link[rel~='icon']");
        if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.head.appendChild(link);
        }
        link.href = '/public/favicon.ico';
        loadFunktionenPage();
    } else if (window.location.pathname == '/kontakt' || window.location.pathname == '/kontakt.html' || window.location.pathname == '/kontakt.php') {
        document.title = 'Kontakt | InstantLoad Test';
        var link = document.querySelector("link[rel~='icon']");
        if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.head.appendChild(link);
        }
        link.href = '/public/favicon.ico';
        loadKontaktPage();
    };
});

function loadHomePage() {
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

            window.history.pushState({ page: 'home' }, 'Home | InstantLoad Test', '/');
            document.title = 'Home | InstantLoad Test';
        })
        .catch(error => {
            console.error('Error loading "Home" page:', error);
        });
};

function loadFunktionenPage() {
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

            window.history.pushState({ page: 'funktionen' }, 'Funktionen | InstantLoad Test', '/funktionen');
            document.title = 'Funktionen | InstantLoad Test';
        })
        .catch(error => {
            console.error('Error loading "Funktionen" page:', error);
        });
};

function loadKontaktPage() {
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

            window.history.pushState({ page: 'kontakt' }, 'Kontakt | InstantLoad Test', '/kontakt');
            document.title = 'Kontakt | InstantLoad Test';
        })
        .catch(error => {
            console.error('Error loading "Kontakt" page:', error);
        });  
};

function a2dataRef() {
    const url = "https://www.arion2000.xyz";
    window.open(url, "_blank");
}

function resetHistory() {
    window.history.go(-(window.history.length - 1));
}
