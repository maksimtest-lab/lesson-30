class ShadowElement extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadow = this.attachShadow({mode: 'open'}); // closed
        shadow.innerHTML = `<p>Hello ${this.getAttribute('name')}</p>`;

    }
}

// article
// aside
// h1, ...
// header
// main
// nav
// p
// section
// span

customElements.define('shadow-element', ShadowElement);