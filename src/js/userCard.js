const template = document.createElement('template');

template.innerHTML = `
    <style>
        h3{
            color: black;
        }
        .user-card img{
            width: 100%;
            border-radius: 50%;
            border: 1px solid #c4c4c4;
        }
        .user-card {
            font-family: 'Arial', sans-serif;
            display:grid;
            grid-template-columns: 1fr 2fr;
            grid-gap: 10px;
            width: 500px;
            background: #f4f4f4;
            margin-bottom: 15px;
            border-bottom: darkorchid 5px solid;
        }
        .user-card button{
            cursor: pointer;
            background: darkorchid;
            color: #fff;
            border:0;
            border-radius: 5px;
            padding: 5px 10px;
        }
    </style>
    <div class="user-card">
        <img/>
        <div>
            <h3></h3>
            <div class="info">
                <p><slot name="email"/></p>
                <p><slot name="phone"/></p>
            </div>
            <button id="toggle-info">Hide info</button>
        </div>
    </div>
`;

class UserCard extends HTMLElement {
    constructor() {
        super();
        this.showInfo = true;
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
        this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');
        
    };
    toggleInfo() {
        this.showInfo = !this.showInfo;
        const info = this.shadowRoot.querySelector('.info');
        const toggleBtn = this.shadowRoot.querySelector('#toggle-info');
        if (this.showInfo) {
            info.style.display = 'block';
            toggleBtn.innerText = 'Show info';
        } else {
            info.style.display = 'none';
            toggleBtn.innerText = 'Hide info';
        }
    }
    connectedCallback() {
        this.shadowRoot.querySelector('#toggle-info').addEventListener('click', () => this.toggleInfo())
    }
    disconnectCallback() {
        this.shadowRoot.querySelector('#toggle-info').removeEventListener();
    }
}
window.customElements.define('user-card', UserCard);

function openCity(evt, cityName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " w3-red";
}

function openCity1(evt, cityName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("city1");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink1");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " w3-red";
}