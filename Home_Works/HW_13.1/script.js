const date = document.querySelector('input[type="date"]');
const text = document.querySelector('input[type="text"]');
const notesArr = [];

document.querySelector('button').addEventListener('click', () => {
    const note = document.createElement('p');
    if (!date.value || !text.value) {
        return alert('Заполните все поля!');
    }
    notesArr.push({date: date.value, text: text.value});
    note.innerHTML = `${date.value} - ${text.value}`;
    document.querySelector('div').appendChild(note);
    localStorage.setItem('notes', JSON.stringify(notesArr));
    date.value = '';
    text.value = '';
});

document.addEventListener('DOMContentLoaded', () => {
    const notes = JSON.parse(localStorage.getItem('notes'));
    notes.forEach(note => {
        const noteElement = document.createElement('p');
        noteElement.innerHTML = `${note.date} - ${note.text}`;
        document.querySelector('div').appendChild(noteElement);
    });
});

document.querySelector('button:last-child').addEventListener('click', () => {
    localStorage.clear();
    document.querySelector('div').innerHTML = '';
});