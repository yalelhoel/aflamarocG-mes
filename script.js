const htmlContent = `
    <h1>KEEP ME OPEN!</h1>
    <title>KEEP ME OPEN!</title>
    <script>
        window.onbeforeunload = function() {
            console.log("log to enable onbeforeunload")
            return "Are you sure you want to leave?";
        };
    </script>
    `;
const blob = new Blob([htmlContent], { type: 'text/html' });
const url = URL.createObjectURL(blob);

function blank3r(furl = document.getElementById('blank3rVal').value) {
    var win = window.open();
    win.document.body.style.margin = '0';
    win.document.body.style.height = '100vh';
    var title = win.document.createElement('title');
    var div = win.document.createElement('div');
    var iframe = win.document.createElement('iframe');
    var favicon = win.document.createElement("link");
    title.innerHTML = "Home | Schoology";
    favicon.rel = 'shortcut icon';
    favicon.type = 'image/x-icon';
    favicon.href = 'https://asset-cdn.schoology.com/sites/all/themes/schoology_theme/favicon.ico';
    iframe.style.border = 'none';
    iframe.style.width = '100vw';
    iframe.style.height = '100vh';
    iframe.style.margin = '0';
    console.log('furl: ' + furl);
    iframe.src = furl;
    div.appendChild(iframe);
    div.appendChild(favicon);
    win.document.head.appendChild(favicon);
    win.document.head.appendChild(title);
    win.document.body.appendChild(div);
    win.onbeforeunload = function () {
        return false;
    }
    win.focus();
}

function b4unload() {
    var num = document.getElementById("b4num").value;
    for (let i = num; i >= 0; i--) {
        window.open(url);
    }
}

function ytun() {
    const base = "https://www.youtube-nocookie.com/embed/";
    const end = "?wmode=transparent&amp;iv_load_policy=3&amp;autoplay=0&amp;html5=1&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=0&amp;theme=light";
    const strip_timestamps = /\?t=\d+/;
    var url = document.getElementById('ytval');
    var link;
    var id;
    link = url.value;
    id = link.replace(strip_timestamps, "");
    id = id.substr(id.length - 11, 11);
    var code = base + id + end;
    console.log(link + " " + id + " " + code);
    var win = window.open();
    win.document.body.style.margin = '0';
    win.document.body.style.height = '100vh';
    var title = win.document.createElement('title');
    var div = win.document.createElement('div');
    var iframe = win.document.createElement('iframe');
    var favicon = win.document.createElement("link");
    title.innerHTML = "Home | Schoology";
    favicon.rel = 'shortcut icon';
    favicon.type = 'image/x-icon';
    favicon.href = 'https://asset-cdn.schoology.com/sites/all/themes/schoology_theme/favicon.ico';
    iframe.style.border = 'none';
    iframe.style.width = '100vw';
    iframe.style.height = '100vh';
    iframe.style.margin = '0';
    iframe.allowFullscreen = 'true';
    iframe.src = code;
    div.appendChild(iframe);
    win.document.head.appendChild(favicon);
    win.document.body.appendChild(div);
    win.onbeforeunload = function () {
        return false;
    }
    win.focus();
}

addEventListener("load", (event) => {
    const checkbox = document.getElementById('blank3rBox');
    const checkboxState = localStorage.getItem('blank3rChecked');
    checkbox.checked = checkboxState === 'true';
    if (checkbox.checked && window.parent == window) {
        blank3r(window.location.href);
        window.location.href = "https://docs.google.com/";
    }
    checkbox.addEventListener('change', function () {
        localStorage.setItem('blank3rChecked', checkbox.checked);
        if (window.parent != window) {
            window.parent.location.href = window.location.href;
            return;
        }
        window.location.reload();

    });

});

function winder(gurl) {
    var gVar = "/g-mes/" + gurl;
    window.location.href = "/gLoader?gload=" + gVar;
}
function gloader() {
    const mURL = new URL(window.location.href);
    var loadURL = mURL.searchParams.get("gload");
    console.log(loadURL);
    var frame = document.getElementById("gframe");
    frame.src = loadURL;
}

function fullscreen() {
    var gframe = document.getElementById("gframe");
    gframe.requestFullscreen();
}