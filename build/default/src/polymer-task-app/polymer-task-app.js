import { html, PolymerElement } from "../../node_modules/@polymer/polymer/polymer-element.js";
/**
 * @customElement
 * @polymer
 */

class PolymerTaskApp extends PolymerElement {
  static get template() {
    return html`
      <style>
      .main-background {
  width: 104px;
  height: 1042px;
  padding: 20px 16px 402px;
  background-color: #0d1251;
}
   
     

      </style>
      <div class="main-background"></div>
     
    `;
  }

  static get properties() {
    return {};
  }

}

window.customElements.define('nav-bar', PolymerTaskApp);