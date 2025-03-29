class FancyButton extends HTMLButtonElement {
    constructor() {
        super();
        this.style.background = 'blue';
        this.style.color = 'white';
        this.style.borderRadius = '8px';
        this.style.padding = '10px 20px';
        this.style.fontSize = '16px';
    }

    contentCallback() {
        this.addEventListener('click', () => console.log('Кнопка нажата!'))
    }

}

customElements.define('fancy-button', FancyButton, {extends: 'button'});