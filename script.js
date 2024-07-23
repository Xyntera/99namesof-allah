const names = [
    { arabic: "الرَّحْمَنُ", english: "Ar-Rahmaan", translation: "The Beneficent" },
    { arabic: "الرَّحِيمُ", english: "Ar-Raheem", translation: "The Merciful" },
    { arabic: "الْمَلِكُ", english: "Al-Malik", translation: "The King" },
    // ... Add the rest of the 99 names here
];

const swiperWrapper = document.querySelector('.swiper-wrapper');

async function fetchNatureImages() {
    const apiKey = 'etGL44sHlofOXSmibQjtEemB0WJn9HTdqR3t66aPpY3Ltnlbjc6G9SZv';
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
