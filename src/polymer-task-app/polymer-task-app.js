import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import './navigation.js';
import './header-top.js';
import './card-details.js';
import './transaction-detail.js';
import './actions-detail.js';
/**
 * @customElement
 * @polymerpo
 */
class PolymerTaskApp extends PolymerElement {
  static get template() {
    return html`
      <style>
  

.bg {
  width: 1296px;
  height: 973px;
  <!-- margin: 64px 0 0; -->
  padding: 32px 8px 30px;
  background-color: #f7f8fe;
}
.trans{
  display:flex;
  flex-direction:row;
}
@media screen and (max-width:500px){
  .trans{
    display:flex;
    flex-direction:column-reverse;
  }
  .bg{
    height:1180px;
    width:380px;
  }
}
@media screen and (max-width:999px)and (min-width: 500px){
  .bg{
    width:100%;
    height:100%;
  }
}



       

</style>
          <navigation-bar></navigation-bar>
     
          <div class="bg"> 
<header-top></header-top>

<card-details></card-details>
<div class="trans">
<transaction-detail></transaction-detail>



 
     
<div class="table">


          </div>
          </div>
    `;
  }
  static get properties() {
    return {
   
    };
  }
}

window.customElements.define('nav-bar', PolymerTaskApp);
