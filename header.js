class Header {
    constructor(title, navItems = []) {
        this.title = title;
        this.navItems = navItems;
    }

    createHeader() {
        const header = document.createElement('header');
        header.style.display = 'flex';
        header.style.justifyContent = 'space-between';
        header.style.alignItems = 'center';
        header.style.padding = '10px 20px';
        header.style.backgroundColor = '#333';
        header.style.color = '#fff';

        const titleElement = document.createElement('h1');
        titleElement.textContent = this.title;
        // header.appendChild(title);

        const nav = document.createElement('nav');
        const ul = document.createElement('ul');
        ul.style.listStyle = 'none';
        ul.style.display = 'flex';
        ul.style.gap = '15px';
        ul.style.padding = '0';
        ul.style.margin = '0';

        this.navItems.forEach(navItem => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = navItem.link;
            a.textContent = navItem.text;
            a.style.color = '#fff';
            a.style.textDecoration = 'none';

            li.appendChild(a);
            ul.appendChild(li);
        });

        nav.appendChild(ul);
        header.appendChild(titleElement);
        header.appendChild(nav);

        return header;
    }

    render(targetElement) {
        const target = document.querySelector(targetElement);

        if(target) {
            target.appendChild(this.createHeader());
        } else {
            console.error(`Target element ${targetElement} not found`);
        }

    }
}

