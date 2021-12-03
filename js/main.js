'use strict'

const state = {
  mode: 'processed',
  query: '',
  value: [],
};

const form = document.querySelector('[data-form="find-books"]');
const container = document.querySelector('.result');

function render(state, container) {
    if (state.mode === 'processing') {
        container.innerHTML = '';
        let loader = document.createElement('img');
        loader.classList.add('search__spinner')
        loader.src = 'img/spinner.svg';
        container.append(loader);
    }

    if (state.mode === 'processed') {
        if (state.query === '') {
            container.innerHTML = '';
            const message = document.createElement('div');
            message.innerText = 'введите название книги или автора';
            container.append(message);
        }
        if (state.value.length === 0 && state.query !== '') {
            container.innerHTML = '';
            const message = document.createElement('div');
            message.innerText = 'по данному запросу книги не найдены, попробуйте позже';
            container.append(message);
        }
    }

    if (state.mode === 'failed') {}
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const value = formData.get('query').trim();
    state.query = value;
    state.mode = value ? 'processing' : 'processed';
    render(state, container);
});

render(state, container);


