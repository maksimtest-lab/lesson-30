// Сделайте самостоятельно компонент Dropdown

// Создаём кастомный элемент
class Dropdown extends HTMLElement {
    constructor() {
        super();

        this.menuItems = [
            {'link': '#', 'title': 'Menu 1'},
            {'link': '#', 'title': 'Menu 2'},
            {'link': '#', 'title': 'Menu 3'},
        ]
    }

    connectedCallback() {
        this.attachShadow({mode: 'open'});
        const button = document.createElement('button');
        const ul = document.createElement('ul');


        button.style.background = 'blue';
        button.style.color = 'white';
        button.style.borderRadius = '8px';
        button.style.padding = '10px 20px';
        button.style.fontSize = '16px';
        button.style.border = '1px solid #ccc';
        button.style.cursor = 'pointer';

        ul.style.display = 'none';

        for (let i = 0; i < this.menuItems.length; i++) {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = this.menuItems[i].link;
            a.textContent = this.menuItems[i].title;
            li.appendChild(a);
            ul.appendChild(li);
        }

        button.textContent = 'Dropdown';
        this.shadowRoot.appendChild(button);
        this.shadowRoot.appendChild(ul);

        button.addEventListener('click', () => {
            ul.style.display = ul.style.display === 'none' ? 'block' : 'none';
        })

        button.addEventListener('mouseover', () => {
            button.style.background = 'green';
        })
        button.addEventListener('mouseout', () => {
            button.style.background = 'blue';
        })
    }
}

customElements.define('dropdown-component', Dropdown);