const template = document.createElement('template');
template.innerHTML = `
    <style>
    
  .card {
    /* Frame 21 */
    /* Auto layout */
    width: 327px;
    height: 208px;
    display: flex;
    flex-direction: row;
    padding: 24px;
    background: #fbfcff;
    border-radius: 16px;
    box-sizing: border-box;
    margin: 16px;
  }
  .card .card-img {
    /* Ellipse 1 */
    width: 97px;
    height: 97px;
    border-radius: 50%;
    /* Inside auto layout */
    margin: 0 16px;
  }
  .card .card-text-info {
    height: 100%;
    overflow: auto;
  }
  .card .card-text-info-name {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px 0px;
    color: #151b32;
  }
  .card .card-text-info-name .title {
    font-family: "Merriweather";
    font-style: normal;
    font-weight: 900;
    font-size: 18px;
    line-height: 23px;
    margin: 4px 0px;
  }
  .card .card-text-info-name .subtitle {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    margin: 4px 0px;
  }
  .card .card-text-info-hobbies {
    /* Frame 21 */
    /* Auto layout */
    display: flex;
    flex-flow: row wrap;
    padding: 0px;
    height: 22px;
    /* Inside auto layout */
  }
  .card .card-text-info-hobbies--hobby-label {
    /* Frame 8 */
    /* Auto layout */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 2px 8px;
    height: 22px;
    left: 0px;
    top: 0px;
    background: #ffffff;
    /* #BFC8E6 */
    border: 1px solid #bfc8e6;
    border-radius: 10px;
    /* Inside auto layout */
    margin: 0px 4px;
  }
  .card .card-text-info-hobbies--hobby-label a {
    /* clothes */
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    /* identical to box height */
    color: #516fd5;
    /* Inside auto layout */
    margin: 0px 10px;
  }
  .card:hover {
    background: #fbfcff;
    border: 1px solid #bfc8e6;
    box-shadow: 0px 8px 23px rgba(218, 224, 249, 0.7);
    border-radius: 16px;
  } 
    </style>
    <div class="card">
        <img class="card-img" src="img/zoesaldana.jpg" alt="zoesaldana">
        <div class="card-text-info">
            <div class="card-text-info-name">
                <h3 class="title">asdasdsa</h3>
                <p class="subtitle"></p>
            </div>
            <ul class="card-text-info-hobbies">
            </ul>
        </div>
    </div>
    
`
class SuperCardComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    let supperCardJSON = this.getAttribute('supercard');
    let supperCard = JSON.parse(supperCardJSON);
    if (!supperCard) {
      console.error('supperCard khong ton tai')
      return;
    }
    this.shadowRoot.querySelector('img').src = supperCard.src;
    this.shadowRoot.querySelector('img').alt = supperCard.alt;
    this.shadowRoot.querySelector('h3.title').innerText = supperCard.title;
    this.shadowRoot.querySelector('p.subtitle').innerText = supperCard.alt;
    const hobbies = supperCard.hobbies;
    const ulTagCardHobbies = this.shadowRoot.querySelector('ul.card-text-info-hobbies');
    if (!hobbies && !hobbies.length) {
      console.error('khong ton tai hobbies')
      return;
    }
    hobbies.forEach((hobbyString, index) => {
      const aTag = document.createElement('a');
      aTag.innerText = hobbyString;
      const liHobbyTag = document.createElement('li');
      liHobbyTag.className = 'card-text-info-hobbies--hobby-label';
      liHobbyTag.appendChild(aTag);
      ulTagCardHobbies.appendChild(liHobbyTag);
    });
  }
}
window.customElements.define('super-card', SuperCardComponent);