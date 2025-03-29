const button = document.getElementById('button');

button.addEventListener('click', () => {
    button.attachShadow({ mode: 'open' });
    button.shadowRoot.appendChild(document.getElementById('tmpl').content.cloneNode(true));

    const p = button.shadowRoot.querySelector('#message');
    p.textContent = 'Привет из теней!';
})