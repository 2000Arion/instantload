function check() {
    if (window.location.pathname == '/' || window.location.pathname == '/index.html' || window.location.pathname == '/index' || window.location.pathname == 'index.php') {
        loadHomePage();
        var link = document.querySelector("link[rel~='icon']");
        if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.head.appendChild(link);
        }
        link.href = 'https://img.arion2000.xyz/r/opera_tV46BsJtvR.png';
    } else if (window.location.pathname == '/funktionen' || window.location.pathname == '/funktionen.html' || window.location.pathname == '/funktionen.php') {
        document.title = 'Funktionen | InstantLoad Test';
        var link = document.querySelector("link[rel~='icon']");
        if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.head.appendChild(link);
        }
        link.href = 'https://img.arion2000.xyz/r/opera_tV46BsJtvR.png';
        loadFunktionenPage();
    } else if (window.location.pathname == '/kontakt' || window.location.pathname == '/kontakt.html' || window.location.pathname == '/kontakt.php') {
        document.title = 'Kontakt | InstantLoad Test';
        var link = document.querySelector("link[rel~='icon']");
        if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.head.appendChild(link);
        }
        link.href = 'https://img.arion2000.xyz/r/opera_tV46BsJtvR.png';
        loadKontaktPage();
    }
}

    function loadHomePage() {
        document.title = 'Lade... | InstantLoad Test';
        document.getElementById('body').innerHTML = `
    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column form-group">
    <header class="mb-auto">
  <div>
    <h3 class="float-md-start mb-0"><svg onclick="" style="background-color: rgba(6, 63, 218, 0.552); padding: 3px; cursor: pointer;"  xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
      <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
    </svg></h3>
    <nav class="nav nav-masthead justify-content-center float-md-end">
      <a style="cursor: context-menu" class="nav-link fw-bold py-1 px-0 active" aria-current="page" onclick=""><b>Home</b>&nbsp;</a>
      <a style="cursor: pointer;" class="nav-link fw-bold py-1 px-0" onclick="loadFunktionenPage()">Funktionen&nbsp;</a>
      <a style="cursor: pointer;" class="nav-link fw-bold py-1 px-0" onclick="loadKontaktPage()">Kontakt</a>
    </nav>
  </div>
</header>

<main class="px-3">
  <h1><b>InstantLoad</b> Testpage.</h1>
  <p class="lead">Auf dieser Seite wird mit schnellem Laden bzw. Wechseln zwischen Seiten getestet.</p>
  <p class="lead">
    <a onclick="loadFunktionenPage()" class="btn btn-lg btn-light fw-bold border-white bg-white">Mehr erfahren</a>
  </p>
</main>

<footer class="mt-auto text-white-50">
  <br>
  <p class="fixed-bottom" style="cursor: pointer;" onclick="a2dataRef()">a2data</p>
</footer>
</div>
<script src="./backend/bootstrap/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
    `
        window.history.pushState('new', 'title', '/');
        document.title = 'Home | InstantLoad Test';
    }

    function loadFunktionenPage() {
        document.title = 'Lade... | InstantLoad Test';
        document.getElementById('body').innerHTML = `
    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column form-group">
        <header class="mb-auto">
            <div>
                <h3 class="float-md-start mb-0"><svg onclick="loadHomePage()"
                        style="background-color: rgba(6, 63, 218, 0.552); padding: 3px; cursor: pointer;"
                        xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor"
                        class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                        <path
                            d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                    </svg></h3>
                <nav class="nav nav-masthead justify-content-center float-md-end">
                    <a style="cursor: pointer;" class="nav-link fw-bold py-1 px-0 active"
                        onclick="loadHomePage()">Home&nbsp;</a>
                    <a style="cursor: context-menu;" class="nav-link fw-bold py-1 px-0" aria-current="page" onclick=""><b>Funktionen</b>&nbsp;</a>
                    <a style="cursor: pointer;" class="nav-link fw-bold py-1 px-0" onclick="loadKontaktPage()">Kontakt</a>
                </nav>
            </div>
        </header>

        <main class="px-3">
            <h1>Funktionen</h1>
            <br>
            <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </main>

        <footer class="mt-auto text-white-50">
            <br>
            <p class="fixed-bottom" style="cursor: pointer;" onclick="a2dataRef()">a2data</p>
        </footer>
    </div>
    <script src="./backend/bootstrap/js/bootstrap.bundle.min.js"
        integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
        crossorigin="anonymous"></script>
    `
        window.history.pushState('new', 'title', '/funktionen');
        document.title = 'Funktionen | InstantLoad Test';
    }

    function loadKontaktPage() {
        document.title = 'Lade... | InstantLoad Test';
        document.getElementById('body').innerHTML = `
    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column form-group">
        <header class="mb-auto">
            <div>
                <h3 class="float-md-start mb-0"><svg onclick="loadHomePage()"
                        style="background-color: rgba(6, 63, 218, 0.552); padding: 3px; cursor: pointer;"
                        xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor"
                        class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                        <path
                            d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                    </svg></h3>
                <nav class="nav nav-masthead justify-content-center float-md-end">
                    <a style="cursor: pointer;" class="nav-link fw-bold py-1 px-0 active"
                        onclick="loadHomePage()">Home&nbsp;</a>
                    <a style="cursor: pointer;" class="nav-link fw-bold py-1 px-0"
                        onclick="loadFunktionenPage()">Funktionen&nbsp;</a>
                    <a style="cursor: context-menu;" class="nav-link fw-bold py-1 px-0" aria-current="page"
                        onclick=""><b>Kontakt</b></a>
                </nav>
            </div>
        </header>

        <main class="px-3">
            <h1>Kontakt</h1>
            <div style="color:black;" class="modal modal-sheet position-static d-block p-4 py-md-5" tabindex="-1"
                role="dialog" id="modalSignin">
                <div class="modal-dialog" role="document">
                    <div class="modal-content rounded-4 shadow">
                        <div class="modal-header p-5 pb-4 border-bottom-0">
                            <h1 class="fw-bold mb-0 fs-2">Sende uns eine Nachricht</h1>
                        </div>

                        <div class="modal-body p-5 pt-0">
                            <form class="" data-bitwarden-watching="1">
                                <div class="form-floating mb-3">
                                    <input type="email" class="form-control rounded-3" id="floatingInput"
                                        placeholder="name@example.com">
                                    <label for="floatingInput">E-Mail Adresse</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control rounded-3" id="floatingPassword"
                                        placeholder="Nachricht">
                                    <label for="floatingInput">Nachricht</label>
                                </div>
                                <button id="submit_button" class="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
                                    onclick="submitMessage()">Senden</button>
                            </form>
                            <div id="feedback">
                            <div class="container mt-5">
                            <div class="rounded bg-danger p-4">
                                Dies ist noch nicht verfügbar...
                            </div>
                        </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <footer class="mt-auto text-white-50">
            <br>
            <p class="fixed-bottom" style="cursor: pointer;" onclick="a2dataRef()">a2data</p>
        </footer>
    </div>
    <script src="./backend/bootstrap/js/bootstrap.bundle.min.js"
        integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
        crossorigin="anonymous"></script>
    `
        window.history.pushState('new', 'title', '/kontakt');
        document.title = 'Kontakt | InstantLoad Test';
    }

    function a2dataRef() {
        const url = "https://www.arion2000.xyz";
        window.open(url, "_blank");
    }
