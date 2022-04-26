//Tạo template
const template = document.createElement('template');
template.innerHTML = `<style>
    h1{
        color:red;
    }
</style>
<h1>Xin chào thế giới</h1>
<button id="buttonshowevent">Show hidden content</button>
<div id="flowerdiv">
</div>`;
class WebApiComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' }); // Bước 2 : Encapsulation
        this.shadowRoot.appendChild(template.content.cloneNode(true)); // Bước 3 : tạo template cho shadow - root  
    }
    toggleShow() {
        const flowers =JSON.parse(this.getAttribute('picture')).key ;
        for (var i = 0; i < flowers.length; i++) {
            const img = document.createElement('img');
            img.src = flowers[i];
            this.shadowRoot.querySelector('#flowerdiv').appendChild(img);
        }

        // this.shadowRoot.querySelector('#flowerdiv').appendChild(img);
        // console.log(this.getAttribute('picture'))

    }
    //Bước 4 : đóng gói sự kiện
    connectedCallback() {
        this.shadowRoot.querySelector('#buttonshowevent').addEventListener('click', () => this.toggleShow())
    }
    disconnectCallback() {
        this.shadowRoot.querySelector('#buttonshowevent').removeEventListener();
    }
}


//Bước 1 :Tạo tên cho custom element
window.customElements.define('shadow-root-template', WebApiComponent);