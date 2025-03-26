document.addEventListener('DOMContentLoaded', () => {
    const ul = document.querySelector('ul');
    if (ul.children.length <= 3) {
        let count = ul.children.length;
        const li = document.createElement('li');
        li.textContent = 'Новый список';
        ul.replaceChild(li, ul.children[count - 1]);
    }
});

