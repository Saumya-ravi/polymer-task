import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import "@polymer/paper-toggle-button/paper-toggle-button.js";

/**
 * `LowerCaseDashedName` Description
 *
 * @customElement
 * @polymer
 * @demo
 *
 */
class CardDetails extends PolymerElement {
  static get properties() {
    return {
      toggle:{
        type: Boolean,
        value: false,
      },
      toshownum:{
        type: Boolean,
        value: false,
      },
      accnum:{
        type: Boolean,
        value: false,
      }
    };
   
  }

  static get template() {
    return html`
      <style>


                .card-detail{
                  display:flex;
                  flex-direction:row;
                  align-items:center;
                  font-family: EncodeSans-Medium;


                }
                .arrow{
                  margin-left:8rem;
                  margin-top:1rem;

                }
                .card{
                  margin-left:1rem;
                  padding-top:1rem;
                  font-style:EncodeSans-Medium;
                  font-size:18px;
                }
                .show{
                    display:flex;
                  margin-left:66.5rem;
                  font-family: EncodeSans-Medium;
                 padding-right:0.1rem;
                 width:186px;
                 justify-content:space-between;
                margin-top:1rem;
                }
                .card-images{
                  display: flex;
    width: 88%;
    margin-left: auto;
    gap: 17px;
    margin-right: 2.5rem;
    overflow: hidden;

                }
                .mask {
                  position: relative;
                  width: 240px;
                  height: 130px;
                  margin: 15px 0px 0 3px;
                  padding: 6px 16px 16px 0;
                  border-radius: 16px;

                  box-shadow: 0 8px 16px 0 rgba(230, 0, 107, 0.6);
                  background-image: linear-gradient(119deg, #660378,#e6006b);
                  background-color:rgba(230, 0, 107, 0.6);
                  <!-- margin-left:8.3rem; -->
                  display:flex;
                  flex-direction:column;
                  <!-- justify-content:space-between; -->


                }
                .mask-bg{
                  
                  box-shadow: 0 8px 16px 0 rgba(230, 0, 107, 0.6);
                  background-image: linear-gradient(119deg, #660378,#e6006b);
                  background-color:rgba(230, 0, 107, 0.6);
                }
                .username1{
                 color:#ffffff;
                 display: flex;
                   <!-- flex-direction:row;  -->
                  font-family: EncodeSans-Regular;
                }
                .name1{
                    width:188px;
                    font-family: EncodeSans-SemiBold;
                  padding:2px 0px 0 0;
                  margin-left:18px;
                    color:#ffffff;

                }
                .mute{
                  font-family: EncodeSans-Medium;
                  font-size: 12px;
                  font-weight: 500;
                  font-stretch: normal;
                  font-style: normal;
                  line-height: 1.67;
                  letter-spacing: 0.4px;
                  text-align:right;
                }
                .whle{
                  font-family: EncodeSans-Bold;
                  font-size: 20px;
                  font-weight: 600;
                  font-stretch: normal;
                  font-style: normal;
                  line-height: 1.4;
                  letter-spacing: 0.15px;

                }
                .accnum1{
                    margin:0px 2px 5px 17px;
                    color:#ffffff;
                    font-family: EncodeSans-Regular;
                }
                .amounts1{
                    color:#ffffff;
                    display:flex;
                   justify-content:space-between;
                }
                .due1{
                  padding:0 0 0 10px;
                  <!-- margin:0px 0px 5px 10px; -->
                  font-size:12px;



                }
                .limit1{
                  padding:0 0 0 15px;
                  <!-- margin:0px 2px 10px 19px; -->
                  text-align:right;
                  font-size:12px;

                }
                .username{
                  display: flex;
                  flex-direction:row;
                  color:black;
                  font-family: EncodeSans-Regular;
                  <!-- padding:10px; -->

                }
                .name{
                  width:188px;
                  font-family: EncodeSans;
                  padding:2px 2px 0 0;
                  margin-left:0px;
                  color:black;
                  font-family: EncodeSans-SemiBold;
                  <!-- margin:10px 2px 5px 10px; -->

                }
                .accnum{
                  margin:5px 2px 5px 0px;
                  color:black;
                  font-family: EncodeSans-Regular;
                }
                 #visa{
                  padding-top:1rem;
                  padding-left:0px;
                  width:36px;
                  height:24px;
                  margin-right:10px;
                 }
                .visa{
                  padding-top:1rem;
                  padding-left:13px;
                  width:36px;
                  height:24px;
                  margin-right:10px;
                }
                p{
                  margin:5px;
                  padding:5px 0px;
                }
                .amounts{
                  display:flex;
                  color:black;
                  justify-content:space-between;
                }
                .due{
                  padding:0 0 0 0px;
                  <!-- margin:00px 22px 5px 0px; -->
                  font-size:12px;

                }
                .limit{
                  padding:0 0 0 25px;
                  <!-- margin:0px 2px 7px 7px; -->
                  text-align:right;
                  font-size:12px;
                }
                .mask1 {
                    <!-- position: absolute; -->
                    width: 240px;
                    height: 125px;
                    margin: 18px 0px 0 0px;
                    padding: 6px 16px 16px 16px;
                    border-radius: 16px;
                    background-color: #ced2fb;
                    <!-- margin-left: 25.5rem; -->
                  z-index:1;
                }
                .mask2{
                  display:none;
                  position: relative;
                    width: 235px;
                    height: 125px;
                    margin: 18px 3px 0px 3px;
                    padding: 6px 16px 16px 16px;
                    border-radius: 16px;
                    background-color: #ced2fb;
                    <!-- margin-left: 19.4rem; -->
                }
                .rupees{
                  width:10px;
                  height:24px;
                  font-family: EncodeSans-SemiBold;
                  font-size:16px;
                  margin-right:4px;
                }

                .mask3{
                    width: 240px;
                    height: 125px;
                    margin: 18px 3px 12px 3px;
                    padding: 6px 16px 16px 16px;
                    border-radius: 16px;
                    background-color: #ced2fb;
                    <!-- margin-left: 1.2rem; -->

                }
                .due1>b{
                font-size:20px;
                font-family: EncodeSans-SemiBold;
                }
                .limit1>b,.due>b,.limit>b{
                    font-size:20px;
                    font-family: EncodeSans-SemiBold;

                }
                .arrow1{
                    display:none;
                }
                .overdue{
                  position:absolute;
                  width: 66px;
                  height: 24px;
                  padding: 3px 8px 0px;
                  border-radius: 12px;
                  background-color: #f9b3b3;
                  font-family: EncodeSans-Medium;
                  font-size: 12px;
                  font-weight: 500;
                  font-stretch: normal;
                  font-style: normal;
                  line-height: 1.67;
                  text-align:center;
                  align-items:center;
                  justify-content:center;
                  right: 14px;
                  bottom: 8.5rem;
                }
                .due5{
                  position:absolute;
                  width: 94px;
                  height: 24px;
                  padding: 3px 8px 0px;
        border-radius: 12px;
        background-color: #e7bc99;
        font-family: EncodeSans-Medium;
        font-size: 12px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.67;
        text-align: center;
        right: 16px;
        bottom: 8.4rem;

                }

                .mask>p{
                  padding:10px;
                  margin-top:12px;
                }
                .circle{
                 position:absolute;
                  width: 24px;
                  height: 24px;
                
                  padding: 4px;
                  border-radius: 20px;
                  -webkit-backdrop-filter: blur(2px);
                  backdrop-filter: blur(2px);
                  box-shadow: 0 8px 24px 0 rgba(82, 84, 95, 0.16);
                  background-color: rgba(255, 255, 255, 0.7);
                  z-index: 5;
                  top: 4.5rem;

                }
                .circle-left{
                
                left: 6.6rem;
                }
                .slider{
                  position: relative;
                }
                .circle-right{
                  right:2.5rem;
               
                }
             .active{
              display:block;
             }
             .hider-num{
    display: none;
}
                @media screen and (max-width:500px){
                    .card-detail{
                        background-color:#131b74;
                        width:360px;
                        height:50px;
                        color:#ffffff;
                        justify-content:flex-start;

                    }
                    .overdue{
                      margin:0px 175px;
                    }
                    .show{
                        margin: 15px 10rem 15px !important;
                    }
                    .card{
                        margin-bottom:30px;
                        padding-top: 1.6rem;
                    }
                    .card-images{
                        display:flex;
                        flex-direction:row;
                        margin-left:10px;
                        width:360px;
                        height:600px;
                        <!-- justify-content:space-evenly; -->
                        padding:10px;
                    }
                    .arrow1{
                        margin:1rem;
                        align-items:center;
                        display:block;
                    }
                    .arrow{
                        display:none;
                    }
                    .mask,.mask1,.mask2,.mask3{
                       margin:10px;

                    }
                    .card-images{
                        height:190px;
                     overflow: hidden;

                    width:340px;

                    }
                   .mask1{
                        position:relative;
                    }
                  .due5{
                    display:none;
                  }
                }
                @media screen and (max-width:999px)and (min-width: 500px){
                .show{
                 display:none;
                }
              
                  .card-images {
    display: flex;
    width: 76%;
    margin-left: auto;
    gap: 13px;
    margin-right: 2rem;
    overflow: auto;
    padding-bottom:0.7rem;
                }
                <!-- .mask2{
                  margin-left:10.8rem;
                } -->
                .card-detail{
                  margin-bottom:10px;
                }
                .mask{
                  margin-left:11rem;
                  width:250px;
                  margin-bottom:10px;
                }
                .mask1{
                  margin-left:29rem;
                  margin-bottom:10px;
                }
                }
      </style>
      <div class="card-detail">
        <iron-icon src="../../images/arrow-left.png" class="arrow"></iron-icon>
        <iron-icon src="../../images/white-left.png" class="arrow1"></iron-icon>
        <div class="card">Credit Card Details</div>
      </div>
      <div class="show">
        Show card number
        <paper-toggle-button on-change={{toshownum}} on-click="change"></paper-toggle-button>
      </div>
      <div class="slider">
      <div class="card-images">
         <div class="circle circle-left" id="circle_left">
         <iron-icon src="../../images/leftarr.png" class="leftarr"></iron-icon>
         </div>
         <div class="circle circle-right" id="circle-right">
         <iron-icon src="../../images/arrow.png" class="leftarr"></iron-icon>
         </div>
        <!-- <div class="overdue">Overdue</div> --> 
    
         
        <!-- card-1 -->

        <div class="mask2 mask-bg active">
          <div class="overdue">Overdue</div>
          <div class="username">
            <div class="acc">
              <div class="name"><p>PRAYAG JAIKAR</p></div>
            <template is="dom-if" if="{{!toshownum}}">
            <div class="accnum"><p><span class="accno-hidden">XXXX</span>4566</p></div>
            </template>
              <template is="dom-if" if="{{toshownum}}">
              <div class="accnum"><p><span class="accno-hidden">7878</span>4566</p></div>
              </template>
             
            </div>
            <div>
              <iron-icon src="../../images/visa.png" class="visa"></iron-icon>
            </div>
          </div>
          <div class="amounts">
            <div class="due">
              <div class="whle"><span class="rupees">₹</span>530</div>
              <div class="mute">Amount due</div>
            </div>
            <div class="limit">
              <div class="whle"><span class="rupees">₹</span>39,400.00</div>
              <div class="mute">Available limit</div>
            </div>
          </div>
        </div>

        <!-- card-2 -->
        <div class="mask2 active">
          <div class="due5">Due in 5 days</div>
          <div class="username">
            <div class="acc">
              <div class="name"><p>PRAYAG JAIKAR</p></div>
              <template is="dom-if" if="{{!toshownum}}">
            <div class="accnum"><p><span class="accno-hidden">XXXX</span>4566</p></div>
            </template>
              <template is="dom-if" if="{{toshownum}}">
              <div class="accnum"><p><span class="accno-hidden">7878</span>4566</p></div>
              </template>
            </div>
            <div>
              <iron-icon src="../../images/visa.png" class="visa"></iron-icon>
            </div>
          </div>
          <div class="amounts">
            <div class="due">
              <div class="whle"><span class="rupees">₹</span>530</div>
              <div class="mute">Amount due</div>
            </div>
            <div class="limit">
              <div class="whle"><span class="rupees">₹</span>39,400.00</div>
              <div class="mute">Available limit</div>
            </div>
          </div>
        </div>

        <!-- card-3 -->
        <div class="mask2 active">
          <div class="username">
            <div class="acc">
              <div class="name"><p>PRAYAG JAIKAR</p></div>
              <template is="dom-if" if="{{!toshownum}}">
            <div class="accnum"><p><span class="accno-hidden">XXXX</span>4566</p></div>
            </template>
              <template is="dom-if" if="{{toshownum}}">
              <div class="accnum"><p><span class="accno-hidden">7878</span>4566</p></div>
              </template>
            </div>
            <div>
              <iron-icon src="../../images/visa.png" class="visa"></iron-icon>
            </div>
          </div>
          <div class="amounts">
            <div class="due">
              <div class="whle"><span class="rupees">₹</span>530</div>
              <div class="mute">Amount due</div>
            </div>
            <div class="limit">
              <div class="whle"><span class="rupees">₹</span>39,400.00</div>
              <div class="mute">Available limit</div>
            </div>
          </div>
        </div>
        <!-- <div class="circle1"></div> -->

        <!-- card-4 -->
        <div class="mask2 active">
          <div class="username">
            <div class="acc">
              <div class="name"><p>PRAYAG JAIKAR</p></div>
              <template is="dom-if" if="{{!toshownum}}">
            <div class="accnum"><p><span class="accno-hidden">XXXX</span>4566</p></div>
            </template>
              <template is="dom-if" if="{{toshownum}}">
              <div class="accnum"><p><span class="accno-hidden">7878</span>4566</p></div>
              </template>
            </div>
            <div>
              <iron-icon src="../../images/visa.png" class="visa"></iron-icon>
            </div>
          </div>
          <div class="amounts">
            <div class="due">
              <div class="whle"><span class="rupees">₹</span>530</div>
              <div class="mute">Amount due</div>
            </div>
            <div class="limit">
              <div class="whle"><span class="rupees">₹</span>39,400.00</div>
              <div class="mute">Available limit</div>
            </div>
          </div>
        </div>

        <!-- card-5 -->
        <div class="mask2">
          <div class="username">
            <div class="acc">
              <div class="name"><p>PRAYAG JAIKAR</p></div>
              <div class="accnum"><p>XXXX7878</p></div>
            </div>
            <div>
              <iron-icon src="../../images/visa.png" class="visa"></iron-icon>
            </div>
          </div>
          <div class="amounts">
            <div class="due">
              <div class="whle"><span class="rupees">₹</span>530</div>
              <div class="mute">Amount due</div>
            </div>
            <div class="limit">
              <div class="whle"><span class="rupees">₹</span>39,400.00</div>
              <div class="mute">Available limit</div>
            </div>
          </div>
        </div>

        <!-- card-6 -->
        <div class="mask2">
          <div class="username">
            <div class="acc">
              <div class="name"><p>PRAYAG JAIKAR</p></div>
              <div class="accnum"><p>XXXX7878</p></div>
            </div>
            <div>
              <iron-icon src="../../images/visa.png" class="visa"></iron-icon>
            </div>
          </div>
          <div class="amounts">
            <div class="due">
              <div class="whle"><span class="rupees">₹</span>530</div>
              <div class="mute">Amount due</div>
            </div>
            <div class="limit">
              <div class="whle"><span class="rupees">₹</span>39,400.00</div>
              <div class="mute">Available limit</div>
            </div>
          </div>
        </div>

        <!-- card-7 -->
        <div class="mask2">
          <div class="username">
            <div class="acc">
              <div class="name"><p>PRAYAG JAIKAR</p></div>
              <div class="accnum"><p>XXXX7878</p></div>
            </div>
            <div>
              <iron-icon src="../../images/visa.png" class="visa"></iron-icon>
            </div>
          </div>
          <div class="amounts">
            <div class="due">
              <div class="whle"><span class="rupees">₹</span>530</div>
              <div class="mute">Amount due</div>
            </div>
            <div class="limit">
              <div class="whle"><span class="rupees">₹</span>39,400.00</div>
              <div class="mute">Available limit</div>
            </div>
          </div>
        </div>
      </div>
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
    this.slider();
  }

  /**
   * Use for one-time configuration of your component after local
   * DOM is initialized.
   */
  ready() {
    super.ready();
   
  }
  click(){
    console.log("x");
  }
  change() {
    this.toshownum = !this.toshownum;
  }
    toshownum(){
    var  x =  [...document.getElementsByClassName("accno-hidden")];
    var num = [...document.getElementsByClassName("accno-show")];
   console.log(x);
    x.forEach((item , index)=>{
          item.classList.toggle("hider-num");
          num[index].classList.toggle("hider-num");

    });
}
  slider(){
    this.toggle=!this.toggle;
  var leftbutton = document.querySelector("#circle_left");
  let rightbutton = document.querySelector("#circle-right");
  
  let slideritems = [...document.getElementsByClassName("mask2")];
  console.log(leftbutton);
  let toleft = 0;
  let toright = 3;
  
  leftbutton.style.display = "none";
  
  rightbutton.addEventListener("click", () => {
    toleft++;
    toright++;
    if (toright <= slideritems.length - 1){
      slideshow(toleft, toright);
    }
    if (toright == slideritems.length - 1) {
      rightbutton.classList.remove("active");
      rightbutton.style.display = "none";
      leftbutton.classList.add("active");
    }
    if (toleft > 0) {
      leftbutton.classList.add("active");
    }
  });
  
  leftbutton.addEventListener("click", () => {
    if (toleft > 0) {
      toleft--;
      toright--;
      slideshow(toleft, toright);
    }
    if (toleft == 0) {
      rightbutton.classList.add("active");
      leftbutton.classList.remove("active");
    }
    if (toright < slideritems.length - 1) {
      rightbutton.classList.add("active");
    }
  });
  
  function slideshow(toleft, toright) {      //1,4
    slideritems.forEach((cards, index) => {             //to iterate each cards in card images
      if (index <= toright && index >= toleft) {            //0<=4&&0>=1
        cards.classList.add("active");                      //1 add 2 add 3 add 4 add 5 remove 6 remove
      } else {
        cards.classList.remove("active");               //0 remove
      }
    });
  }
  }
}

customElements.define("card-details", CardDetails);
