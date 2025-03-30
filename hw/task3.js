// Сделайте самостоятельно компонент Textarea с динамической высотой, которая подстраивается под текст

class TextAreaComponent extends HTMLTextAreaElement {
    constructor() {
        super();

        this.style.borderRadius = '8px';
        this.style.border = '1px solid #ccc';
        this.style.padding = '10px 20px';
        this.style.fontSize = '16px';
        this.style.width = '300px';
        this.style.height = '20px';
    }

    connectedCallback() {
        // Переинициализация высоты, т.к. браузер запоминает введенные ранее данные
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px';

        this.addEventListener('input', () => {
            // Тут просто меняем высоту когда вводятся данные
            this.style.height = 'auto';
            this.style.height = this.scrollHeight + 'px';
        })

    }
}

customElements.define('textarea-component', TextAreaComponent, {extends: 'textarea'});
