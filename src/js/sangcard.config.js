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
        this.attachShadow({ mode: 'close' }); // Bước 2 : Encapsulation
        this.shadowRoot.appendChild(template.content.cloneNode(true)); // Bước 3 : tạo template cho shadow - root  
    }
    toggleShow() {
       const img = document.createElement('img');
       img.src="https://dictionary.cambridge.org/vi/images/thumb/flower_noun_002_14403.jpg?version=5.0.234";
       this.shadowRoot.querySelector('#flowerdiv').appendChild(img);
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