class HelloWorld extends HTMLElement {
    constructor() {
        super();
    }

    connectedCollback() {
        this.innerHTML = '<h1>Hello world</h1>';
    }
}

customElements.define('hello-world', HelloWorld);