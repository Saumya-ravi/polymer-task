import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import "@polymer/iron-ajax";
import "./actions-detail.js";
import "@polymer/paper-tabs/paper-tabs.js";
import "@polymer/paper-tabs/paper-tab.js";
/**
 * `LowerCaseDashedName` Description
 *
 * @customElement
 * @polymer
 * @demo
 *
 */
class TransactionDetail extends PolymerElement {
  static get properties() {
    return {
      detail: {
        type: Object,
      },
    };
  }

  static get template() {
    return html`
      <style>
        :root{
                  --paper-tabs-selection-bar-color: #e6006b;
                  width:400px;
                  --paper-tabs-selection-bar: {                  
                    border-bottom: 4px solid var(--paper-tabs-selection-bar-color);
                   
                  };
                }
        .view{
          display:flex;
          width: 800px;
          height: 62px;
          margin: 10px 0px 10px 0px;
          padding: 10px 30px 0px 24px;
          border-radius: 10px;
          box-shadow: 0 0px 0px 0px rgba(0, 0, 0, 0.05);
          background-color: rgba(230, 0, 107, 0.06);
          font-family: EncodeSans-SemiBold;
          font-size: 14px;
          font-weight:bolder;
          font-stretch: normal;
          font-style: normal;
         
          
        }
        
        .view1{
          display:flex;
          flex-direction:column;
          background-color:#ffffff;
         width:864px;
          <!-- margin-left:10px; -->
        }
        .small{
          width: 100px;
          height: 4px;
          margin: 8px 0 0;
          background-color:#FF1493;
          margin-top:12px;
        }
        .over{
          display: inline-flex;
        
            padding:10px 24px;
            margin-top: 10px;
            font-family: EncodeSans-SemiBold;
            font-size: 14px;
            margin-left: 10px;
           
        }
         .highlight{
          border-bottom:2px solid #e6006b;
           
         }
        .box{

          width: 840px;
          height: 550px;
          margin: 0px 16px 0 25px;
          <!-- padding: 8px; -->
          border-radius: 16px;

          background-color:#ffffff;
          font-family:EncodeSans-SemiBold;


        }
        .whole{
          font-family: EncodeSans-Bold;
          font-size: 20px;
          font-weight: 600;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.4;
          letter-spacing: 0.15px;
          color: rgba(0, 0, 0, 0.8);
        }
        .muted{
          font-family: EncodeSans-Regular;
          font-size: 12px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.67;
          letter-spacing: 0.4px;
          color: rgba(0, 0, 0, 0.6);

        }
        .current-reward{
          display:flex;
          flex-direction:row;
          justify-content:space-between;
          align-content:right;
          font-family:EncodeSans-SemiBold;
          font-size: 12px;
        }
        .amount{
          margin-left:10px;
          font-family:EncodeSans-Regular;
          font-size: 12px;
          <!-- margin-top:2rem; -->
          display:contents;
          margin-top:2rem;
        }

        .rewards{
          margin-left:45.5rem;
          position: absolute;
          margin-top:2rem;
          display:unset;
          text-align:right;
          font-size: 12px;
          font-family:EncodeSans-Regular;
        }
        .total-avail{
          display:flex;
          flex-direction:row;
          justify-content:space-between;
          align-content:right;
        }
        .avail{
          margin-left:10px;
          font-family:EncodeSans-Regular;
          font-size: 12px;
          <!-- margin-top:2rem; -->
          display:contents;

        }

        .total{
          margin-left:43rem;
          position: absolute;

          display:unset;
          text-align:right;
          font-size: 12px;
          font-family:EncodeSans-Regular;
        }
        .two-lines{
         display:flex;
         flex-direction:row;
        }
        .line{
          width: 490px;
          height: 4px;
          margin: 16px 0 8px 10px;
          border-radius: 2px;
          background-color: #008500;
        }
        .lines{
          width: 300px;
          height: 4px;
          margin: 16px 0 8px 0;
          border-radius: 2px;
          background-color: #ced2fb;
        }
        .card-details{
          margin-left:10px;
          font-family: EncodeSans-SemiBold;
          font-size:14px;
          margin-top:3rem;
        }
        .wholetext{
          font-family: EncodeSans-Regular;
          font-size: 12px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.67;
          letter-spacing: 0.4px;
          color: rgba(0, 0, 0, 0.6);
        }
        .mutedtext{
          font-family: EncodeSans-Medium;
          font-size: 14px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.57;
          letter-spacing: 0.2px;
          color: rgba(0, 0, 0, 0.8);
        }

        .cashes{
          display:flex;
          flex-direction:row;
        }
        .cash{
          display:flex;
          flex-direction:column;
          margin-left:10px;
          font-family: EncodeSans-Regular;
          font-size: 12px;
          <!-- margin-top:2rem; -->
          display:contents;
          margin-top:1rem;


        }
        .avail-cash{
          margin-left:2.5rem;
          font-family: EncodeSans-Regular;
          font-size: 12px;
          <!-- margin-top:2rem; -->
          display:contents;
          margin-top:1rem;

        }
        .expiry{
          margin-left:1.3rem;
          font-family: EncodeSans-Regular;
          font-size: 12px;
          <!-- margin-top:2rem; -->
          display:contents;
          margin-top:1.1rem;

        }
        .bills-date{
          display:flex;
          flex-direction:row;

        }
        .date{
          margin-left:10px;
          font-family: EncodeSans-Regular;
          font-size: 12px;
          <!-- margin-top:2rem; -->
          display:contents;
          margin-top:2rem;
        }
        .cycle{
          margin-left:1.4rem;
          font-family: EncodeSans-Regular;
          font-size: 12px;
          <!-- margin-top:2rem; -->
          display:contents;
          margin-top:2rem;
        }
        .type{
            margin-left:0.1rem;
          font-family: EncodeSans-Regular;
          font-size: 12px;
          <!-- margin-top:2rem; -->
          display:contents;
          margin-top:2rem;
        }
        .bill-details{
          margin-left:10px;
          font-family: EncodeSans-SemiBold;
          font-size:14px;
          margin-top:3rem;
        }
        .bills-dates{
          display:flex;
          flex-direction:row;
        }
        .duess{
          margin-left:10px;
          font-family: EncodeSans-Regular;
          font-size: 12px;
          <!-- margin-top:2rem; -->
          display:contents;
          margin-top:1.1rem;

        }
        .dues{
          margin-left:1.4rem;
          font-family: EncodeSans-Regular;
          font-size: 12px;
          <!-- margin-top:2rem; -->
          display:contents;
          margin-top:1.2rem;
        }
        .duedate{
            margin-left:0.1rem;
          font-family: EncodeSans-Regular;
          font-size: 12px;
          <!-- margin-top:2rem; -->
          display:contents;
          margin-top:1rem;
        }
        .avail>b{
            font-size:19px;

        }
        .amount>b,.total>b,.rewards>b{
            font-size:19px;
        }
        .view2{
          display:flex;
          flex-direction:row;
          background-color:#ffffff;
          margin-left:120px;
          width: 1140px;
          border-radius: 15px;
          margin-top:15px;
      
        }
        .vertical{
          width: 1px;
          height: 52px;
          background-color: rgba(19, 27, 116, 0.1);
          margin: 15px 0px 0px 160px;
          }
          .vertical1{
            width: 1px;
          height: 52px;
          background-color: rgba(19, 27, 116, 0.1);
          margin: 25px 20px 0px 163px;
          }
          .vertical2{
            width: 1px;
          height: 52px;
          background-color: rgba(19, 27, 116, 0.1);
          margin: 25px 20px 0px 107px;
          }
          .vertical3{
            width: 1px;
          height: 52px;
          background-color: rgba(19, 27, 116, 0.1);
          margin: 15px 20px 0px 170px;
          }
          .vertical4{
            width: 1px;
          height: 52px;
          background-color: rgba(19, 27, 116, 0.1);
          margin: 15px 20px 0px 190px;
          }
          .rupees{
                  width:10px;
                  height:24px;
                  font-family: EncodeSans-SemiBold;
                  font-size:16px;
                  margin-right:4px;
                }
        
        @media screen and (max-width:500px){
            .view{
                display:flex;
                flex-direction:row;
                margin:0;
                padding:0;
                <!-- background-color:#ffffff; -->
                width:90%;
            
            }
            #past{
                display:none;
            }

            .view{
                width:295px;
               margin-top:10px;
               padding:5px;
             
            }
            .card-details{
                display:flex;
                flex-direction:row;
                margin:10px 10px 10px 20px;

            }
            .cashes{
              display:flex;
                flex-direction:column;
                width:295px;
            }
            .bills-date{
              display:flex;
                flex-direction:column;
                width:295px;
            }
            .bills-dates{
              display:flex;
                flex-direction:column;
                width:295px;
            }
            .bill-details{
              display:flex;
                flex-direction:column;
            }
            .current-reward,.total-avail,{
                margin-left:0px;
                padding:0;
                width:290px;

            <!-- height:60px; -->
            }
            .total-avail{
              margin-top: 0.5rem;
            }
            .box{
                width:90%;
                margin:0;
                padding:0;
                height:700px;
            }

            .amount{

                width:160px;
                margin-top:1rem;
                padding-bottom:1rem;
                margin-left:20px;
            }
            .rewards{
                margin-left:9.5rem;
                width:140px;
              margin-top:15px;
            }
            .avail{

                width:160px;
                margin-left:20px;
            }
            .total{
                margin-left:9.5rem;
                width:140px;

            }
            .two-lines{
                margin-left:20px;
                width:290px;
                display:flex;
                padding:0;
            }
            .line{
                margin:0px;
                width:12rem;
            }
            .lines{
                margin:0px;
                width:5rem;
            }
            #pink{
                display:none;
            }
           .box{
            height:180px;
           }
           .view2{
            margin:5px auto;
          width:95%;
          display:flex;
            flex-direction:column-reverse;
            background-color:#f7f8fe;
           }
           .view1{
            width:90%;
            padding: 0px 7px 0 7px;
            height:850px;
           }
           .vertical{
            display:none;
           }
           .vertical1{
            display:none;
           }
           .vertical2{
            display:none;
           }
           .vertical3{
            display:none;
           }
           .vertical4{
            display:none;
           }
           .wholetext{
            flex-direction:row;
            width:  220px;
           }
           .cash{
            display:flex;
            flex-direction:row;
            justify-content:flex-start;
            margin:10px 10px 10px 20px;
           }

           .avail-cash{
            display:flex;
            flex-direction:row;
            justify-content:flex-start;
            margin:10px 10px 10px 20px;
           }
           .expiry{
            display:flex;
            flex-direction:row;
            justify-content:flex-start;
            margin:10px 10px 10px 20px;
           }
           .date{
            display:flex;
            flex-direction:row;
            justify-content:flex-start;
            margin:10px 10px 10px 20px;
           }
           .cycle{
            display:flex;
            flex-direction:row;
            justify-content:flex-start;
            margin:10px 10px 10px 20px;
           }
           .type{
            display:flex;
            flex-direction:row;
            justify-content:flex-start;
            margin:10px 10px 10px 20px;
           }
           .bill-details{
            display:flex;
            flex-direction:row;
            justify-content:flex-start;
            margin:10px 10px 10px 20px;
           }
           .duess{
            display:flex;
            flex-direction:row;
            justify-content:flex-start;
            margin:10px 10px 10px 20px;
           }
           .dues{
            display:flex;
            flex-direction:row;
            justify-content:flex-start;
            margin:10px 10px 10px 20px;
           }
           .duedate{
            display:flex;
            flex-direction:row;
            justify-content:flex-start;
            margin:10px 10px 10px 20px;
           }

           .table{
            height:0;
           }

           .mutedtext{
        display:flex;
        flex-direction:column;
        width:130px;
           }
           #mute{
            width:138px;
            align-items:right;
            align-content:right;
           }
          .texted{
         background-color: #ffffff;
         width:320px;
         margin: 10px 0px 10px -7px;
          }
        }
        
        @media screen and (max-width:999px)and (min-width: 500px){
          .view2{
            flex-direction:column;
            margin-left: 9.5rem;
        }
        .view1{
          width:550px;
        }
        .view{
          width:530px;
        }
        .current-reward{
          width:180px;
        }
        .rewards{
          margin-left:27rem;
        }
        .two-lines{
          width:515px;
        }
        .total{
          margin-left:24.7rem;
        }
        .card-details{
          width:530px;
        }
        .cashes{
          width:500px;
          justify-content:space-between;
        }
        .bills-date{
          width:530px;

        }
        .cycle{
        margin-left:7rem;
        }
        .type{
          margin-left:3.5rem;
        }
        .bills-dates{
          width:530px;

        }
        .dues{
        margin-left:7.5rem;
        }
        .duedate{
          margin-left:8.5rem;
        }
        .vertical{
            display:none;
           }
           .vertical1{
            display:none;
           }
           .vertical2{
            display:none;
           }
           .vertical3{
            display:none;
           }
           .vertical4{
            display:none;
           }
           .texted{
            width:530px;
           }
           .view2{
            width:600px;

           }
           .box{
            width:530px;
           }
        }
      </style>
      <iron-ajax
        auto
        url="http://localhost:3000/card-details-cash"
        handle-as="json"
        on-response="handleResponse"
      ></iron-ajax>
      <div class="action-view">
        <div class="view2">
          <div class="view1">
            <paper-tabs selected="0" autoselect autoselect-delay="1000" class="view">
            <paper-tab class="button" on-click="obanktab">Overview</paper-tab>
            <paper-tab class="button" on-click="mbanktab">Transaction History</paper-tab>
            <paper-tab class="button" on-click="mbanktab">Past Bills</paper-tab>
        </paper-tabs>
            <!-- <div class="overviewnav">
              <div class="view"  on-click="TochangeNav">
                <div class="over highlight">Overview</div>
                <div class="over">Transaction History</div>
                <div class="over" id="past">Past Bills</div>
              </div>
            </div> -->

            <div class="box">
              <div class="current-reward">
                <div class="amount">
                  <div class="whole"><span class="rupees">₹</span>38,909.76</div>
                  <div class="muted">Current Outstanding</div>
                </div>
                <div class="rewards">
                  <div class="whole">842</div>
                  <div class="muted">Reward points</div>
                </div>
              </div>

              <div class="two-lines">
                <div class="line"></div>
                <div class="lines"></div>
              </div>

              <div class="total-avail">
                <div class="avail">
                  <div class="whole"><span class="rupees">₹</span>1,75,090.24</div>
                  <div class="muted">Available credit limit</div>
                </div>
                <div class="total">
                  <div class="whole"><span class="rupees">₹</span>1,75,090.24</div>
                  <div class="muted">Total credit limit</div>
                </div>
              </div>
              <div class="texted">
                <div class="card-details"><h3>Card Details</h3></div>

                <div class="cashes">
                  <div class="cash">
                    <div class="wholetext">Cash limit</div>
                    <div class="mutedtext">[[detail.cl]]</div>
                  </div>
                  <div class="vertical"></div>
                  <div class="avail-cash">
                    <div class="wholetext">Available cash limit</div>
                    <div class="mutedtext">[[detail.acl]]</div>
                  </div>
                  <div class="vertical"></div>
                  <div class="expiry">
                    <div class="wholetext">Expiry date</div>
                    <div class="mutedtext">[[detail.ed]]</div>
                  </div>
                </div>

                <div class="bills-date">
                  <div class="date">
                    <div class="wholetext">Next bill date</div>
                    <div class="mutedtext">[[detail.bd]]</div>
                  </div>
                  <div class="vertical1"></div>
                  <div class="cycle">
                    <div class="wholetext">Next bill cycle</div>
                    <div class="mutedtext">[[detail.bc]]</div>
                  </div>
                  <div class="vertical2"></div>
                  <div class="type">
                    <div class="wholetext">Card type</div>
                    <div class="mutedtext" id="mute">[[detail.ct]]</div>
                  </div>
                </div>

                <div class="bill-details"><h3>Last Bill Details</h3></div>

                <div class="bills-dates">
                  <div class="duess">
                    <div class="wholetext">Payment due</div>
                    <div class="mutedtext">[[detail.pd]]</div>
                  </div>
                  <div class="vertical3"></div>
                  <div class="dues">
                    <div class="wholetext">Minimum due</div>
                    <div class="mutedtext">[[detail.md]]</div>
                  </div>
                  <div class="vertical4"></div>
                  <div class="duedate">
                    <div class="wholetext">Payment due date</div>
                    <div class="mutedtext">[[detail.pdd]]</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div><actions-detail></actions-detail></div>
        </div>
      </div>
    `;
  }
  handleResponse(event) {
    const response = event.detail.response;
    this.detail = response;
    console.log(response);
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
   TochangeNav() {
    const tabs =[...document.getElementsByClassName("view")];
    console.log(tabs)
     tabs.forEach((tab) =>{
          tab.addEventListener("on-click", tabSwitch);
     })
    function tabSwitch() {
      document.getElementsByClassName("highlight")[0].classList.remove("highlight");
      this.classList.add("highlight");
     
    }
  }
}

customElements.define("transaction-detail", TransactionDetail);
