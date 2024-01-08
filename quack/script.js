const gooseImg = document.querySelector('#goose-img');
const container = document.querySelector('.content');

gooseImg.addEventListener('click', function () {
    // Play a quack sound from sound/quack.wav
    const quackSound = new Audio('sound/quack.wav');
    quackSound.play();
    // Make the goose-img element bounce when clicked
    gooseImg.classList.add('animate__animated', 'animate__bounce');
    // Remove the animation classes after the animation ends
    gooseImg.addEventListener('animationend', function () {
        gooseImg.classList.remove('animate__animated', 'animate__bounce');
    });

    // Change the background color of the container to a random color
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    container.style.backgroundColor = '#' + randomColor;
}
);