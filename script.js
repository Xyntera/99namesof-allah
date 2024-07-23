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

const swiperWrapper = document.querySelector('.swiper-wrapper');

async function fetchNatureImages() {
    const apiKey = 'YOUR_PEXELS_API_KEY';
    const url = `https://api.pexels.com/v1/search?query=nature&per_page=99`;

    try {
        const response = await axios.get(url, {
            headers: {
                Authorization: apiKey
            }
        });
        return response.data.photos;
    } catch (error) {
        console.error('Error fetching images from Pexels:', error);
        return [];
    }
}

async function createCards() {
    const images = await fetchNatureImages();

    names.forEach((name, index) => {
        const image = images[index % images.length].src.large;

        const card = document.createElement('div');
        card.className = 'swiper-slide card';
        card.style.backgroundImage = `url(${image})`;

        const nameElement = document.createElement('div');
        nameElement.className = 'name';
        nameElement.innerHTML = `<strong>${name.arabic}</strong><br>${name.english}`;

        const translationElement = document.createElement('div');
        translationElement.className = 'translation';
        translationElement.textContent = name.translation;

        card.appendChild(nameElement);
        card.appendChild(translationElement);

        swiperWrapper.appendChild(card);
    });

    new Swiper('.swiper', {
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
}

createCards();
