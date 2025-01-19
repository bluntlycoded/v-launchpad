
    document.addEventListener("DOMContentLoaded", () => {
        const sliderContainer = document.getElementById("sliderContainer");
        const slides = sliderContainer.children;
        const totalSlides = slides.length;
        let currentIndex = 0;

        const updateSlider = () => {
            sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        };

        const nextSlide = () => {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateSlider();
        };

        const prevSlide = () => {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateSlider();
        };

        document.getElementById("prevSlide").addEventListener("click", prevSlide);
        document.getElementById("nextSlide").addEventListener("click", nextSlide);

        // Auto-slide every 5 seconds
        setInterval(nextSlide, 5000);
    });


    document.addEventListener("DOMContentLoaded", () => {
        const slider = document.getElementById("trackSlider");
        const slides = slider.children;
        const totalSlides = slides.length;
        let currentIndex = 0;

        const updateSlider = () => {
            slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        };

        document.getElementById("prevTrack").addEventListener("click", () => {
            currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
            updateSlider();
        });

        document.getElementById("nextTrack").addEventListener("click", () => {
            currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
            updateSlider();
        });
    });

