class User extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `
            <div>Name:
                <slot name="username"></slot>
            </div>
            <div>Birthday:
                <slot name="userbirthday"></slot>
            </div>
        `;
    }
}

customElements.define('user-card', User);