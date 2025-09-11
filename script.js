
function left() {
    document.querySelector('.applications').classList.remove('active-slide');
    document.querySelector('.span1').classList.add('active-screen');
    document.querySelector('.span2').classList.remove('active-screen');
}

function right() {
    document.querySelector('.applications').classList.add('active-slide');
    document.querySelector('.span1').classList.remove('active-screen');
    document.querySelector('.span2').classList.add('active-screen');
}

const openMenu = document.querySelector('.open-button');
if (openMenu) {
    openMenu.addEventListener("click", OpenAppScreen);
} else {
    console.error('open-button element not found!');
}

// function OpenAppScreen() {
//     const lockScreen = document.querySelector('.lock-screen');
//     const appMenu = document.querySelector('.application-menu');

//     if (lockScreen && appMenu) {
//         lockScreen.classList.replace('active', 'animate-lock-screen');
//         appMenu.classList.add('active');
//     } else {
//         console.error('Lock screen or application menu not found!');
//     }
// }

const closeMenu = document.querySelector('.button');
if (closeMenu) {
    closeMenu.addEventListener("click", CloseIframe);
} else {
    console.error('button element not found!');
}

function CloseIframe() {
    // Only close iframe, not the app
    const iframeContainer = document.getElementById('iframe-container');
    if (iframeContainer && iframeContainer.style.display === 'block') {
        // Close all iframes and reset everything
        closeAllIframes();
        console.log('Iframe closed via button');
    } else {
        console.log('No iframe to close');
    }
}

// Separate function to close the app (if needed elsewhere)
function CloseApp() {
    const lockScreen = document.querySelector('.lock-screen');
    const appMenu = document.querySelector('.application-menu');

    if (lockScreen && appMenu) {
        lockScreen.classList.remove('animate-lock-screen');
        lockScreen.classList.add('active');
        appMenu.classList.remove('active');
        console.log('App closed');
    }
}

// Function to close all iframes and reset the interface
function closeAllIframes() {
    const iframeContainer = document.getElementById('iframe-container');
    const iframe = document.getElementById('website-iframe');

    if (iframeContainer && iframe) {
        // Add closing animation
        iframeContainer.style.opacity = '0';

        setTimeout(() => {
            // Completely reset iframe
            iframe.src = 'about:blank'; // More thorough reset
            iframe.style.zoom = '100%'; // Reset zoom level
            iframe.style.marginTop = '20px'; // Reset margin

            // Hide container
            iframeContainer.style.display = 'none';
            iframeContainer.style.opacity = '1';

            // Show all hidden elements again
            showElementsWhenIframeClose();

            // Clear any potential iframe history
            try {
                iframe.contentWindow.location.replace('about:blank');
            } catch (e) {
                // Cross-origin restrictions may prevent this
                console.log('Cross-origin iframe, using src reset only');
            }

            console.log('All iframes closed and completely reset');
        }, 200);
    }
}

// Function to force close all iframes (emergency close)
function forceCloseAllIframes() {
    const iframeContainer = document.getElementById('iframe-container');
    const iframe = document.getElementById('website-iframe');

    if (iframeContainer && iframe) {
        // Immediate close without animation
        iframe.src = 'about:blank';
        iframe.style.zoom = '100%';
        iframe.style.marginTop = '20px';
        iframeContainer.style.display = 'none';
        iframeContainer.style.opacity = '1';

        console.log('All iframes force closed');
    }
}

// function slideLeft() {
//     document.querySelector('.applications').classList.remove('active-slide');
//     document.querySelector('.span1').classList.add('active-screen');
//     document.querySelector('.span2').classList.remove('active-screen');
// }

// function slideRight() {
//     document.querySelector('.applications').classList.add('active-slide');
//     document.querySelector('.span1').classList.remove('active-screen');
//     document.querySelector('.span2').classList.add('active-screen');
// }

// window.addEventListener('wheel', (e) => {
//     if (e.deltaY > 0) {
//         slideRight();  // geser ke kanan saat scroll down
//     } else if (e.deltaY < 0) {
//         slideLeft();   // geser ke kiri saat scroll up
//     }
// });


document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('iframe-container');
    const iframe = document.getElementById('website-iframe');

    console.log('DOM loaded - checking elements:');
    console.log('container:', container);
    console.log('iframe:', iframe);

    // Function to hide unnecessary elements when iframe opens (keep indicators and applications visible)
    function hideElementsWhenIframeOpen() {
        const elementsToHide = document.querySelectorAll('.time-nav, .right');
        elementsToHide.forEach(el => {
            el.style.setProperty('display', 'none', 'important');
            el.style.setProperty('visibility', 'hidden', 'important');
            el.style.setProperty('opacity', '0', 'important');
        });
        console.log('Elements hidden:', elementsToHide.length);
    }

    // Function to show elements when iframe closes
    function showElementsWhenIframeClose() {
        const elementsToShow = document.querySelectorAll('.time-nav, .right');
        elementsToShow.forEach(el => {
            el.style.setProperty('display', '', 'important');
            el.style.setProperty('visibility', '', 'important');
            el.style.setProperty('opacity', '', 'important');
        });
        console.log('Elements shown again:', elementsToShow.length);
    }

    // tombol buka, misal tombol dengan id "openVibebook"
    document.getElementById('openVibebook').addEventListener('click', () => {
        openIframe('https://vb.lossantos.cloud/');
        iframe.style.zoom = '60%';
    });

    // tombol buka, misal tombol dengan id "openTV"
    document.getElementById('openTV').addEventListener('click', () => {
        openIframe('https://moviebypass.pro/');
        iframe.style.zoom = '60%';
    });

    // tombol buka, misal tombol dengan id "openCalculator"
    document.getElementById('openCalculator').addEventListener('click', () => {
        openIframe('https://frabjous-marigold-abe186.netlify.app/');
        iframe.style.zoom = '80%';
    });

    // tombol buka, misal tombol dengan id "openRadio"
    document.getElementById('openRadio').addEventListener('click', () => {
        openIframe('https://powerhitz.com/1Power');
        iframe.style.zoom = '50%';
    });

    // tombol buka, misal tombol dengan id "openSafari"
    document.getElementById('openSafari').addEventListener('click', () => {
        openIframe('https://google.com/');
    });

    // tombol buka, misal tombol dengan id "openApplemusic"
    document.getElementById('openApplemusic').addEventListener('click', () => {
        openIframe('https://music.youtube.com/');
    });

    // tombol buka, misal tombol dengan class "dinoGame"
    document.getElementById('openDinogame').addEventListener('click', () => {
        openIframe('https://precious-cassata-fda6b3.netlify.app/');
        iframe.style.zoom = '60%';
    });


});

function updateTime() {
    const now = new Date();

    // Format jam dan menit
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}`;

    // Format hari dan tanggal
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', options);

    // Update elemen pertama (jika ada)
    const time1 = document.querySelector('#time1 h1');
    const date1 = document.querySelector('#time1 span');
    if (time1) time1.textContent = timeString;
    if (date1) date1.textContent = dateString;

    // Update elemen kedua (jika ada)
    const time2 = document.querySelector('#time2 span');
    if (time2) time2.textContent = timeString;
}

// Jalankan langsung sekali saat load
updateTime();

// Update setiap 1 detik
setInterval(updateTime, 1000);


//Loading spinner
const container = document.getElementById("iframe-container");
const iframe = document.getElementById("website-iframe");
const loader = document.getElementById("iframe-loader");

// ✅ fungsi buka iframe
function openIframe(url) {
    container.style.display = "block";
    loader.style.display = "flex";          // tampilkan spinner SETIAP kali buka
    iframe.setAttribute("src", url);
    // reset posisi iframe sebelum dipakai lagi
    iframe.style.margin = "0";
    iframe.style.padding = "0";
    iframe.style.transform = "none";
    iframe.style.top = "0";
    iframe.style.left = "0";
    iframe.style.zoom = "100%";    // default zoom biar tidak geser
    iframe.scrollTop = 0;          // reset scroll
    iframe.scrollLeft = 0;

    // tampilkan container
    container.style.display = "block";
    loader.style.display = "flex";   // tampilkan spinner SETIAP kali buka

    // load url baru
    iframe.setAttribute("src", url);        // load url baru
}

// ✅ fungsi tutup iframe
function closeIframe() {
    const container = document.getElementById("iframe-container");
    const iframe = document.getElementById("website-iframe");

    iframe.src = ""; // reset src
    container.style.display = "none"; // sembunyikan container
}

// ✅ saat iframe selesai load
iframe.addEventListener("load", () => {
    loader.style.display = "none";          // sembunyikan spinner
});


// Make the DIV element draggable:
const iphone = document.querySelector(".iphone-frame");
const nav = document.querySelector(".bottom-navigation");

let shiftX = 0, shiftY = 0;

nav.addEventListener("mousedown", (e) => {
    e.preventDefault();

    // ambil posisi awal elemen
    const rect = iphone.getBoundingClientRect();

    // hitung selisih antara cursor dan posisi elemen
    shiftX = e.clientX - rect.left;
    shiftY = e.clientY - rect.top;

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
});

function onMove(e) {
    // elemen tetap mengikuti titik awal klik, bukan geser ke kanan bawah
    iphone.style.left = (e.clientX - shiftX) + "px";
    iphone.style.top = (e.clientY - shiftY) + "px";
}

function onUp() {
    document.removeEventListener("mousemove", onMove);
    document.removeEventListener("mouseup", onUp);
}

// cegah efek drag default browser
nav.ondragstart = () => false;