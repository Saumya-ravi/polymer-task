import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

/**
 * `LowerCaseDashedName` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class Navigation extends PolymerElement {
    static get properties() {
        return {
            iconList: {
                type: Array,
                value: [
                  { image: "home", title: "Home" },
                  { image: "bills", title: "Account" },
                  { image: "payee", title: "Bill" },
                  { image: "credit-cards", title: "Payee" },
                  { image: "ms", title: "Request" },
                  { image: "accounts", title: "Pending" },
                  { image: "savings", title: "tax" },
                  { image: "deposit", title: "ATM" },
             
                ],
              },
              toggle: {
                type: Boolean,
                value: false,
              },
            };
          }
        
    

    static get template() {
        return html`
        <style>
        .main-background {
            display:none;
       
  width: 100px;
  height: 598px;
  padding: 20px 16px 402px;
  background-color: #0d1251;
        }
  .sidelogo{
  display: grid;
  margin:0.5rem 2.5rem;
  padding:0 0 2.5rem 0.2rem;

}

.sidelogo:hover{
    background-color: rgba(255, 255, 255, 0.1);
          border-left: 4px solid #e6006b;
          padding: 12px 25px 15px 30px;  
          margin: 0px 10px 44px 10px;
}
.sidebar {
          display: flex;
          flex-direction: column;
          position: absolute;
          min-height: 173vh;
          width: 104px;
          padding: 20px 40px;
          background-color: #0D1251;
          box-sizing: border-box;
          align-items: center;
          overflow-y: scroll !important;
          overflow-x: hidden;
          z-index: 6;
          transition: width 0.5s ease;
        }
        .sidebar-expanded {
          width: 256px;
          align-items: flex-start;
        }
        ::-webkit-scrollbar {
          width: 5px;
        }
        ::-webkit-scrollbar-thumb {
          background: #3258CF;
          border-radius: 4px;
        }
        .menu {
          margin-bottom: 21px;
          margin-left:10px;
          /* align-self: stretch; */
        }
        .menu img {
          height: 24px;
          color: white;
        }
        .menu-items {
          list-style: none;
        }
        .menu-items li {
          margin-bottom: 19px;
          /* padding: 12px 0; */
        }
        .menu-items img {
          color: white;
        }
        .menu-items img:last-child {
          margin-bottom: 0;
        }
        .menu-items a {
          color: white;
          font-family: "Encodesans-Semibold";
          font-size: 14px;
          font-weight: 600;
          line-height: 1.57;
          letter-spacing: 0.2px;
        }
        .menu-toggle {
          box-sizing: border-box;
          padding: 14px;
          display: flex;
          align-items: center;
          gap: 17px;
          border-left: 2px solid transparent;
          border-radius: 8px;
          margin-right: 30px;
        }
        .menu-toggle:hover {
          background-color: rgba(255, 255, 255, 0.1);
          border-left: 2px solid #E6006B;
          border-radius: 8px;
        }
      
 
@media screen and (max-width:500px){
    .main-background{
        display:none;
    }
  
          .sidebar {
            display: none;
          }
    
}
@media screen and (max-width:999px)and (min-width: 821px){
    .main-background{
        height:800px;
    }
 .sidebar{
    height:800px;
 }
        
 #sideBarCall {
    height:800px;
 }   

}
@media screen and (max-width:820px)and (min-width: 500px){
    .sidebar{
        min-height: 138vh;
 }
 #sideBarCall {
    height:720px;
 }  
}
</style>
<div>
<div class$="{{_getSideBarClass(toggle)}}" id="sideBarCall">
        <div class="menu">
          <template is="dom-if" if="{{toggle}}">
            <div>
              <img
                src="/src/polymer-task-app/images/cancel.png"
                alt="cancel"
                on-click="change"
              />
            </div>
          </template>
          <template is="dom-if" if="{{!toggle}}">
            <div>
              <img
                src="/src/polymer-task-app/images/hamburger.png"
                alt="menu"
                on-click="change"
              />
            </div>
          </template>
        </div>
        <ul class="menu-items">
          <template is="dom-repeat" items="{{iconList}}">
            <li>
              <div class="menu-toggle">
                <img src="/src/polymer-task-app/images/{{item.image}}.png" />
                <template is="dom-if" if="{{toggle}}">
                  <a class="content">{{item.title}}</a>
                </template>
              </div>
            </li>
          </template>
        </ul>
      </div>
  
 
</div>
<!-- <div class="main-background" >
        <iron-icon src="../../images/hamburger.png" class="sidelogo"></iron-icon>
        <iron-icon src="../../images/home.png" class="sidelogo"></iron-icon>
        <iron-icon src="../../images/bills.png" class="sidelogo"></iron-icon>
        <iron-icon src="../../images/payee.png" class="sidelogo"></iron-icon>
        <iron-icon src="../../images/credit-cards.png" class="sidelogo"></iron-icon>
        <iron-icon src="../../images/loans.png" class="sidelogo"></iron-icon>
        <iron-icon src="../../images/ms.png" class="sidelogo"></iron-icon>
        <iron-icon src="../../images/deposit.png" class="sidelogo"></iron-icon>
        <iron-icon src="../../images/requests.png" class="sidelogo"></iron-icon>
    </div> -->
        `;
    }

    /**
     * Instance of the element is created/upgraded. Use: initializing state,
     * set up event listeners, create shadow dom.
     * @constructor
     */
    constructor() {
        super();
    }

    /**
     * Use for one-time configuration of your component after local
     * DOM is initialized.
     */
    ready() {
        super.ready();
        this.shadowRoot
  //     .querySelector("header-element")
  //     .addEventListener("menuClick", function (e) {
  //       console.log(e.detail.kicked);
  //     });
    }
    change() {
        this.toggle = !this.toggle;
      }
      _getSideBarClass(toggle) {
        return toggle ? "sidebar sidebar-expanded" : "sidebar";
      }
    }


customElements.define('navigation-bar', Navigation);