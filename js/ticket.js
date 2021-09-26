let blocks = document.querySelectorAll('.can__open');
blocks.forEach((el) => {
    el.onclick = () => {
        if (el.classList.contains('open__block')) {
            el.classList.remove('open__block');
        } else {
            el.classList.add('open__block');
        }
    }
});