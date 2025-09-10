
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
        iframe.src = 'https://vb.lossantos.cloud/';
        container.style.display = 'block';
        iframe.style.zoom = '60%';
    });


    // tombol buka, misal tombol dengan id "openWeather"
    document.getElementById('openWeather').addEventListener('click', () => {
        iframe.src = 'https://www.ventusky.com/los-angeles';
        container.style.display = 'block';
    });

    // tombol buka, misal tombol dengan id "openCalculator"
    document.getElementById('openCalculator').addEventListener('click', () => {
        iframe.src = 'https://frabjous-marigold-abe186.netlify.app/';
        container.style.display = 'block';
        iframe.style.zoom = '80%';
    });

    // tombol buka, misal tombol dengan id "openRadio"
    document.getElementById('openRadio').addEventListener('click', () => {
        iframe.src = 'https://powerhitz.com/1Power';
        container.style.display = 'block';
        iframe.style.zoom = '50%';
    });

    // tombol buka, misal tombol dengan id "openSafari"
    document.getElementById('openSafari').addEventListener('click', () => {
        iframe.src = 'https://yandex.com/';
        container.style.display = 'block';
    });

    // tombol buka, misal tombol dengan id "openNetflix"
    document.getElementById('openNetflix').addEventListener('click', () => {
        iframe.src = 'https://www.netflix.com/id-en/';
        container.style.display = 'block';
    });

    // tombol buka, misal tombol dengan id "openSpotify"
    document.getElementById('openSpotify').addEventListener('click', () => {
        iframe.src = 'https://open.spotify.com/';
        container.style.display = 'block';
    });

    // tombol buka, misal tombol dengan class "dinoGame"
    document.querySelector('.dinoGame').addEventListener('click', () => {
        iframe.src = 'https://precious-cassata-fda6b3.netlify.app/';
        container.style.display = 'block';
    });

    // tombol buka, misal tombol dengan id "openTetris"
    document.getElementById('openTetris').addEventListener('click', () => {
        iframe.src = 'https://heartfelt-bonbon-96a03c.netlify.app/';
        container.style.display = 'block';
        iframe.style.zoom = '70%';
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

    // Update elemen pertama
    document.querySelector('#time1 h1').textContent = timeString;
    document.querySelector('#time1 span').textContent = dateString;

    // Update elemen kedua
    document.querySelector('#time2 span').textContent = timeString;
}

setInterval(updateTime, 1000);
updateTime();
