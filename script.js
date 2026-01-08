const cards = document.querySelectorAll('.card');
const mainBg = document.getElementById('main-bg');
const subTitle = document.getElementById('sub-title');
const mainTitle = document.getElementById('main-title');
const description = document.getElementById('description');

cards.forEach(card => {
    // Behavior of Cursor
    card.addEventListener('mouseenter', () => {
        // For card appearance
        cards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');

        // BG Image Swap
        const bgImg = card.getAttribute('data-bg');
        mainBg.style.backgroundImage = `url('${bgImg}')`;

        // For Text Changing
        subTitle.textContent = card.getAttribute('data-sub');
        mainTitle.textContent = card.getAttribute('data-main');
        description.textContent = card.getAttribute('data-desc');
    });
});