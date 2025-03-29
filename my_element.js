// Создание своего html тэга

class MyElement extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback() {
        // вызывается браузером всегда когда этот элемент добавляетя в документ
    }

    disconectedCallback() {
        // вызывается браузером всегда когда этот элемент удаляется из документа
    }

    static get observedAttributes() {
        return [/* массив имен атрибутов для отслеживания их изменений */]
    }

    attributeChangeCallback(name, oldValue, newValue) {
        // вызывается при изменении одно из перечисленных выше атрибутов
    }

    adoptedCallback() {
        // вызывается когда наш элемент перемещается в новый элемент
    }
}

customElements.define('my-element', MyElement)