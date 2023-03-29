import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-collapse/iron-collapse.js';
/**
 * `LowerCaseDashedName` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class ActionsDetail extends PolymerElement {
    static get properties() {
        return {

        }
    }

    static get template() {
        return html`

<style>
.content{
  
  width:230px;
  border-radius: 10px;
  background-color: #f7f8fe;
  align-items:left;
  padding:10px;
  text-align:left;
}
.content{
  padding:0 20px 0 20px;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items: center;
  border-bottom:2px solid rgba(19, 27, 116, 0.04);
  
  
}
.content1{
  
  width:230px;
  border-radius: 10px;
  <!-- background-color: #f7f8fe; -->
  align-items:center;
  padding:10px;
}
.content1{
    padding: 2px 10px 7px 20px;
  display:flex;
  flex-direction:row;
  justify-content:flex-start;
  align-items: center;
  border-bottom:2px solid rgba(19, 27, 116, 0.04);
 
 color: #131b74;

}
.contents{
    font-size: 14px;
    font-family: EncodeSans-Medium;
    text-align:left;
    margin-right:20px;
    width:160px;
}
#action{

    font-family: EncodeSans-Regular;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: 0.15px;
  color: rgba(0, 0, 0, 0.7);
  background-color: rgba(19, 27, 116, 0.04);
  border-radius:10px 10px 10px 10px;
  padding-top:10px;
  padding-bottom:5px;

 
}
.content-icon{
  padding:20px 10px;
}
.table{
display:flex;
flex-direction:row;
background-color:rgba(19, 27, 116, 0.04);
height:625px;
width:270px;
margin:10px 10px 0 0;
}
.down-icon{
        display:none;
    }
.table-mob{
    display:none;
}

@media screen and (max-width:500px){
    .rightflex{
      display:none;
    }
    .content{
        width: 265px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0px 0 0 10px;
    }
    .down-icon{
        display: block;
    }
    .table{
        height:80px;
        margin:0;
        width:320px;
        display:none;
    }
 .table{
    background-color:#ffffff;
 }
    .table-mob{
        <!-- height:80px;
        margin:0;
        width:320px;
        background-color:#ffffff;
        display: block; -->
        display:flex;
flex-direction:row;
background-color:rgba(19, 27, 116, 0.04);
height:auto;
width:95%;
margin:5px 10px 15px 10px;
background-color:#ffffff;
padding:7px 0;
border-radius:10px;
    }
    .contents{
        margin-left:10px;
        width:100%;
    }
    .content1{
        width:90%;
    }
    #lst-item{
        border-bottom:0;
    }
    .rotate{
        transform:rotate(180deg);
    }
}
@media screen and (max-width:999px)and (min-width: 500px){
    .table{
        width:580px;
        margin:20px 0 10px 10px;
        height:auto;
    }
    .content{
        width:540px;
    }
    .rightflex{
        width:550px;
    }

    .contents{
        width:550px;
    }
    .content1{
        width:550px;
    }
   
}
</style>

<div class="table">
<div class="rightflex">
            <div class="content" id="action"><div><p>Actions</p></div>
            <div class="down-icon">
            <iron-icon src="../../images/down.png"></div></div>
                    <div class="content1">
                
                        <div class="content-icon">
                        <iron-icon src="../../images/blue1.png"></iron-icon>
                        </div>
                        <div class="contents"><p>Pay Bill</p></div>
                        <div class="content-icon">
                        <iron-icon src="../../images/blue-right.png"></iron-icon>
                      </div>
                        </div>
                    <div class="content1">
                        <div class="content-icon">
                        <iron-icon src="../../images/blue2.png"></iron-icon>
                        </div>
                        <div class="contents"><p>Block Card</p></div>
                        <div class="content-icon">
                        <iron-icon src="../../images/blue-right.png"></iron-icon>
                        </div>
                    </div>
                    <div class="content1">
                        <div class="content-icon">
                        <iron-icon src="../../images/b3.png"></iron-icon>
                        </div>
                        <div class="contents"><p>Change Pin</p></div>
                        <div class="content-icon">
                        <iron-icon src="../../images/blue-right.png"></iron-icon>
                        </div>
                    </div>
                    <div class="content1">
                        <div class="content-icon">
                        <iron-icon src="../../images/b4.png"></iron-icon>
                        </div>
                        <div class="contents"><p>My Rewards</p></div>
                        <div class="content-icon">
                        <iron-icon src="../../images/blue-right.png"></iron-icon>
                        </div>
                    </div>
                    <div class="content1" id="lst-item">
                        <div class="content-icon">
                        <iron-icon src="../../images/b5.png"></iron-icon>
                        </div>
                        <div class="contents"><p>Manage Limits</p></div>
                        <div class="content-icon">
                        <iron-icon src="../../images/blue-right.png"></iron-icon>
                        </div>
                    </div>
</div>
</div>
<div class="table-mob">
<div class="rightflex-mob">
            <div class="content" id="action"><div><p>Actions</p></div>
            <div class="down-icon">

            <iron-icon src="../../images/down.png" on-click="click" id="arrowrotate"></div>
</div>
<iron-collapse id="collapse"> 
                    <div class="content1">
                
                        <div class="content-icon">
                        <iron-icon src="../../images/blue1.png"></iron-icon>
                        </div>
                        <div class="contents"><p>Pay Bill</p></div>
                        <div class="content-icon">
                        <iron-icon src="../../images/blue-right.png"></iron-icon>
                      </div>
                        </div>
                    <div class="content1">
                        <div class="content-icon">
                        <iron-icon src="../../images/blue2.png"></iron-icon>
                        </div>
                        <div class="contents"><p>Block Card</p></div>
                        <div class="content-icon">
                        <iron-icon src="../../images/blue-right.png"></iron-icon>
                        </div>
                    </div>
                    <div class="content1">
                        <div class="content-icon">
                        <iron-icon src="../../images/b3.png"></iron-icon>
                        </div>
                        <div class="contents"><p>Change Pin</p></div>
                        <div class="content-icon">
                        <iron-icon src="../../images/blue-right.png"></iron-icon>
                        </div>
                    </div>
                    <div class="content1">
                        <div class="content-icon">
                        <iron-icon src="../../images/b4.png"></iron-icon>
                        </div>
                        <div class="contents"><p>My Rewards</p></div>
                        <div class="content-icon">
                        <iron-icon src="../../images/blue-right.png"></iron-icon>
                        </div>
                    </div>
                    <div class="content1" id="lst-item">
                        <div class="content-icon">
                        <iron-icon src="../../images/b5.png"></iron-icon>
                        </div>
                        <div class="contents"><p>Manage Limits</p></div>
                        <div class="content-icon">
                        <iron-icon src="../../images/blue-right.png"></iron-icon>
                        </div>
                    </div>

</iron-collapse>
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
    click(){
        this.$.collapse.toggle();
        if (this.shadowRoot.querySelector("#arrowrotate").classList.contains('rotate')) {
            this.shadowRoot.querySelector("#arrowrotate").classList.remove('rotate');
          } else {
            this.shadowRoot.querySelector("#arrowrotate").classList.add('rotate');
          }

    }

}

customElements.define('actions-detail', ActionsDetail);