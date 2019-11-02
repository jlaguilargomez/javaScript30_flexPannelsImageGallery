// From DOM to JS
const panels = document.querySelectorAll('.panels__panel');
const text = document.querySelectorAll('.panels__text');

// Script
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        panel.classList.toggle('flexFive');
        panel.children[1].classList.toggle('bigText');
        panel.children[0].classList.toggle('outsideUp');
        panel.children[2].classList.toggle('outsideDown');
    });
    
});


