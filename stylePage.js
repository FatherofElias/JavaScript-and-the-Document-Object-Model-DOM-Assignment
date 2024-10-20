// Task 2
function changeColor() {
    const box = document.getElementById('box');
    box.style.backgroundColor = box.style.backgroundColor === 'lightblue' ? 'lightgreen' : 'lightblue';
}
// Task 3
document.addEventListener('DOMContentLoaded', () => {
    const hoverBox = document.getElementById('hover-box');

    hoverBox.addEventListener('mouseover', () => {
        hoverBox.style.backgroundColor = 'yellow';
        hoverBox.style.color = 'red';
    });

    hoverBox.addEventListener('mouseout', () => {
        hoverBox.style.backgroundColor = '';
        hoverBox.style.color = '';
    });
});

function changeColor() {
    const box = document.getElementById('box');
    box.style.backgroundColor = box.style.backgroundColor === 'lightblue' ? 'lightgreen' : 'lightblue';
}

function toggleBox() {
    const toggleBox = document.getElementById('toggle-box');
    toggleBox.style.display = toggleBox.style.display === 'none' ? 'block' : 'none';
}

function changeBorder() {
    const focusInput = document.getElementById('focus-input');
    focusInput.style.border = focusInput.style.border === '2px solid blue' ? '1px solid #ccc' : '2px solid blue';
}

