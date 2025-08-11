
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
openMenu.addEventListener("click", OpenAppScreen);
function OpenAppScreen() {
    document.querySelector('.lock-screen').classList.replace('active', 'animate-lock-screen');
    document.querySelector('.application-menu').classList.add('active');
}

const closeMenu = document.querySelector('.button');
closeMenu.addEventListener("click", CloseAppScreen)
function CloseAppScreen() {
    document.querySelector('.lock-screen').classList.remove('animate-lock-screen');
    document.querySelector('.lock-screen').classList.add('active');
    document.querySelector('.application-menu').classList.remove('active')
}

function slideLeft() {
    document.querySelector('.applications').classList.remove('active-slide');
    document.querySelector('.span1').classList.add('active-screen');
    document.querySelector('.span2').classList.remove('active-screen');
}

function slideRight() {
    document.querySelector('.applications').classList.add('active-slide');
    document.querySelector('.span1').classList.remove('active-screen');
    document.querySelector('.span2').classList.add('active-screen');
}

window.addEventListener('wheel', (e) => {
    if (e.deltaY > 0) {
        slideRight();  // geser ke kanan saat scroll down
    } else if (e.deltaY < 0) {
        slideLeft();   // geser ke kiri saat scroll up
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('iframe-container');
    const iframe = document.getElementById('website-iframe');
    const backBtn = document.getElementById('backBtn');
    const forwardBtn = document.getElementById('forwardBtn');

    backBtn.addEventListener('click', () => {
        iframe.contentWindow.history.back();
    });

    forwardBtn.addEventListener('click', () => {
        iframe.contentWindow.history.forward();
    });


    // tombol buka, misal tombol dengan id "openVibebook"
    document.getElementById('openVibebook').addEventListener('click', () => {
        iframe.src = 'https://vb.lossantos.cloud/';
        container.style.display = 'block';
        iframe.style.zoom = '50%';
    });

    // tombol buka, misal tombol dengan id "openYoutube"
    document.getElementById('openYoutube').addEventListener('click', () => {
        iframe.src = 'https://youtube.com/';
        container.style.display = 'block';
    });

    // tombol buka, misal tombol dengan id "openApplemusic"
    document.getElementById('openApplemusic').addEventListener('click', () => {
        iframe.src = 'https://music.apple.com/';
        container.style.display = 'block';
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
    });

    // tombol buka, misal tombol dengan id "openSafari"
    document.getElementById('openSafari').addEventListener('click', () => {
        iframe.src = 'www.google.com';
        container.style.display = 'block';
    });

    // tombol buka, misal tombol dengan id "openBooks"
    document.getElementById('openBooks').addEventListener('click', () => {
        iframe.src = 'https://openlibrary.org/';
        container.style.display = 'block';
    });

    // tombol buka, misal tombol dengan id "openNetflix"
    document.getElementById('openNetflix').addEventListener('click', () => {
        iframe.src = 'https://www.netflix.com/id-en/';
        container.style.display = 'block';
    });

    // tombol buka, misal tombol dengan id "openNetflix"
    document.getElementById('openSpotify').addEventListener('click', () => {
        iframe.src = 'https://open.spotify.com/';
        container.style.display = 'block';
    });

    // tombol buka, misal tombol dengan id "openDinogame"
    document.getElementById('openDinogame').addEventListener('click', () => {
        iframe.src = 'https://precious-cassata-fda6b3.netlify.app/';
        container.style.display = 'block';
        iframe.style.zoom = '80%';
    });

    // tombol buka, misal tombol dengan id "openTetris"
    document.getElementById('openTetris').addEventListener('click', () => {
        iframe.src = 'https://heartfelt-bonbon-96a03c.netlify.app/';
        container.style.display = 'block';
        iframe.style.zoom = '70%';
    });


    // tombol close dan minimize
    const closeButtons = document.querySelectorAll('.close-iframe');
    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            iframe.src = '';
            container.style.display = 'none';
            console.log('Iframe Reset');
        });
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
