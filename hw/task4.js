// Сделайте самостоятельно компонент поиска с встроенным меню подсказок (как в поисковых браузерах)

class Search extends HTMLInputElement {
    constructor() {
        super();

        this.suggestions = [
            'apple',
            'banana',
            'orange',
            'grape'
        ];
    }

    connectedCallback() {
        this.style.width = '300px';
        this.style.borderRadius = '8px';
        this.style.border = '1px solid #ccc';
        this.style.padding = '10px 20px';
        this.style.fontSize = '16px';

        const container = document.createElement('div');
        container.style.position = 'relative';
        container.style.visibility = 'hidden';
        // container.style.display = 'none';
        // container.textContent = 'inline-block';
        // this.addEventListener('input', () => {
        //     container.style.display = 'none';
        // })

        this.addEventListener('focus', () => {
            container.style.visibility = 'visible';
            // container.style.display = 'block';
        })

        this.addEventListener('blur', () => {
            setTimeout(() => {
                container.style.visibility = 'hidden';
            }, 150)
            // container.style.display = 'none';
        })

        const ul = document.createElement('ul');

        this.suggestions.forEach(suggestion => {
            const li = document.createElement('li');
            li.style.cursor = 'pointer';
            li.textContent = suggestion;
            li.addEventListener('click', () => {
                this.value = suggestion;
            })
            ul.appendChild(li);
        });

        container.appendChild(ul);

        this.after(container);


    }
}

customElements.define('search-component', Search, {extends: 'input'});