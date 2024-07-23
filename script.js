// script.js

const namesOfAllah = [
    "Ar-Rahman", "Ar-Raheem", "Al-Malik", "Al-Quddus", "As-Salam", "Al-Mu’min", "Al-Muhaymin", "Al-Aziz",
    "Al-Jabbar", "Al-Mutakabbir", "Al-Khaliq", "Al-Bari", "Al-Musawwir", "Al-Ghaffar", "Al-Qahhar", "Al-Wahhab",
    "Ar-Razzaq", "Al-Fattah", "Al-Alim", "Al-Qabid", "Al-Basit", "Al-Khafid", "Ar-Rafi", "Al-Mu’izz", "Al-Mudhill",
    "As-Sami", "Al-Basir", "Al-Hakam", "Al-Adl", "Al-Latif", "Al-Khabir", "Al-Halim", "Al-Azim", "Al-Ghafur",
    "Ash-Shakur", "Al-Ali", "Al-Kabir", "Al-Hafiz", "Al-Muqit", "Al-Hasib", "Al-Jalil", "Al-Karim", "Ar-Raqib",
    "Al-Mujib", "Al-Wasi", "Al-Hakim", "Al-Wadud", "Al-Majid", "Al-Baith", "Ash-Shahid", "Al-Haqq", "Al-Wakil",
    "Al-Qawiyy", "Al-Matin", "Al-Waliyy", "Al-Hamid", "Al-Muhsi", "Al-Mubdi", "Al-Muid", "Al-Muhyi", "Al-Mumit",
    "Al-Hayy", "Al-Qayyum", "Al-Wajid", "Al-Majid", "Al-Wahid", "Al-Ahad", "As-Samad", "Al-Qadir", "Al-Muqtadir",
    "Al-Muqaddim", "Al-Mu’akhkhir", "Al-Awwal", "Al-Akhir", "Az-Zahir", "Al-Batin", "Al-Wali", "Al-Muta’ali",
    "Al-Barr", "At-Tawwab", "Al-Muntaqim", "Al-Afuww", "Ar-Rauf", "Malik-ul-Mulk", "Dhul-Jalal wal-Ikram",
    "Al-Muqsit", "Al-Jami", "Al-Ghaniyy", "Al-Mughni", "Al-Mani", "Ad-Darr", "An-Nafi", "An-Nur", "Al-Hadi",
    "Al-Badi", "Al-Baqi", "Al-Warith", "Ar-Rashid", "As-Sabur"
];

const accessKey = 'z-qy0S5-_DkAGVty5ejLLu7ZYoop42_8imotzKDjerM';

async function fetchRandomNatureImage() {
    const response = await fetch(`https://api.unsplash.com/photos/random?query=nature&client_id=${accessKey}`);
    const data = await response.json();
    return data.urls.regular;
}

const cardContainer = document.querySelector('.card-container .swiper-wrapper');

namesOfAllah.forEach(async (name) => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('swiper-slide');
    cardElement.textContent = name;
    const imageUrl = await fetchRandomNatureImage();
    cardElement.style.backgroundImage = `url(${imageUrl})`;
    cardContainer.appendChild(cardElement);
});

const swiper = new Swiper('.card-container', {
    direction: 'horizontal',
    loop: false,
    speed: 1500,
    slidesPerView: 4,
    spaceBetween: 60,
    mousewheel: true,
    parallax: true,
    centeredSlides: true,
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 40,
        slideShadows: true
    },
    autoplay: {
        delay: 2000,
        pauseOnMouseEnter: true
    },
    scrollbar: {
        el: '.swiper-scrollbar'
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 60
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 60
        },
        1000: {
            slidesPerView: 3,
            spaceBetween: 60
        },
        1400: {
            slidesPerView: 4,
            spaceBetween: 60
        },
        2300: {
            slidesPerView: 5,
            spaceBetween: 60
        },
        2900: {
            slidesPerView: 6,
            spaceBetween: 60
        }
    }
});

