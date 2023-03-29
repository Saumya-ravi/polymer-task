import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

/**
 * `LowerCaseDashedName` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class HeaderTop extends PolymerElement {
    static get properties() {
        return {

        }
    }

    static get template() {
        return html`
        <style>
        .rectangle {
  width: 1250px;
  height: 56px;
  padding: 10px 24px 10px 30px;
  box-shadow: 0 4px 14px 1px rgba(0, 0, 0, 0.05);
  background-color: #ffffff;
  align-content:right;
  align-items:right;
  justify-content:right;

}
.toplogo{
 
 padding:1rem 0.1rem;
 justify-content:space-between;
 margin-left:42.5rem;

}
.toplogos{
    margin-left: 17px;
    padding-left: 19px;
    font-family:EncodeSans-Medium;
    font-size:14px;
}

.bank{
 margin-left:6rem;
}
.bank>b{
    font-family:EncodeSans-SemiBold;
    font-size:14px;
}
.nav-img{
    margin-right:7px;
}
.rectangle>b{
    font-family:EncodeSans-SemiBold;
    width: 73px;
  height: 15px;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.58px;
  color: #1f1f20;
 
}
#grey{
    border-left:1px solid rgba(19, 27, 116, 0.1);
}
p{
    padding:0;
    margin:0;
}
@media screen and (max-width:500px){
    .rectangle{
        display:none;
    }
}
@media screen and (max-width:999px)and (min-width: 500px){
.rectangle{
    width:auto;
 height:37px;
}
.toplogo{
    margin-left:12rem;
    padding:0.3rem 0.1rem;
}
.toplogos{
    margin-left:2rem;
}
}

        </style>

        <div class="rectangle">
<iron-icon src="../../images/yourbank.png" class="bank nav-img"></iron-icon><b>YOUR BANK</b>
<iron-icon src="../../images/search.png" class="toplogo"></iron-icon>
<iron-icon src="../../images/notification-dot.png" class="toplogos"></iron-icon>
<iron-icon src="../../images/ssy.png" class="toplogos nav-img"></iron-icon><b>Prayag Jaikar</b>
<iron-icon src="../../images/logout.png" class="toplogos"  id="grey"></iron-icon>
</div>
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
    }
}

customElements.define('header-top', HeaderTop);