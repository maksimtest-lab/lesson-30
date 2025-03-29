// Сделайте самостоятельно компонент Tooltip

class TooltipComponent extends HTMLElement {
    constructor() {
        super();
        this._text = this.textContent;
    }
    connectedCallback() {
        this.attachShadow({mode: 'open'});

        const container = document.createElement('div');
        const text = document.createElement('div');
        const tooltip = document.createElement('div');
        const style = document.createElement('style');

        style.innerHTML = `
            .container {
                position: relative;
                display: inline-block;
            }

            .text {

            }

            .tooltip {
                visibility: hidden;
                min-width: 120px;
                white-space: nowrap;
                background-color: black;
                color: #fff;
                text-align: center;
                border-radius: 6px;
                padding: 5px 10px;

                position: absolute;
                top: 0;
                left: 50%;
                transform: translate(-50%, -100%);
                z-index: 1;

                &::before {
                    content: "";
                    position: absolute;
                    top: 100%;
                    left: 50%;
                    margin-left: -5px;
                    border-width: 5px;
                    border-style: solid;
                    border-color: black transparent transparent transparent;
                }
            }

            .tooltip.active {
                visibility: visible;
            }
        `;

        container.appendChild(style);

        container.classList.add('container');
        this.shadowRoot.appendChild(container);

        text.classList.add('text');
        text.textContent = this._text;

        tooltip.classList.add('tooltip');
        tooltip.textContent = this.title;

        container.appendChild(tooltip);
        container.appendChild(text);

        container.addEventListener('mouseover', () => {
            tooltip.classList.add('active');
        });

        container.addEventListener('mouseout', () => {
            tooltip.classList.remove('active');
        });

    }
}

customElements.define('tooltip-component', TooltipComponent);