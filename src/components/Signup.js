import React from 'react'
import quote1 from '../components/img/quote1.png';
import arxena_logo from '../components/img/arxena-logo/arxena-logo.png';
import mannan_pacha_dp from '../components/img/mannan_pacha_dp.webp';
import quote from '../components/img/quote.png';
import { Link } from 'react-router-dom';


export default function Signup() {
  return (
    <>
    <div>
        <div class="desk" style={{height:"100%"}}>
            <div style={{display:"table", width:"100%", height:"100%"}}>
   <div style={{display:"table-cell", width:"70%", backgroundColor:"white", padding:"20px"}}>
   <Link to="/"><img style={{width:"10vw",marginTop:"5px",cursor:"pointer"}} onclick="new PageContents().changePage('/#')" src={arxena_logo}/></Link>
      <div class="shadow content_section" style={{width:"500px",padding:"30px", backgroundColor:"rgba(255,255,255)",borderRadius: "5px", textAlign:"center", left:"0", right:"0"}}>
         <div id="signup_form_content">
            <span style={{fontSize:"16pt",fontWeight:"300"}}>Get started with 10 free org-chart credits.<br/>No credit card is needed.</span>
            <br/>
            <br/>
            <div style={{width: "90%", left:"5%", position:"relative"}}>
               <div class="row">
                  <div class="col-sm-12">
                     <input id="full_name" type="text" class="form-control-custom" placeholder="Full Name" oninput="new SessionStorageUpdates().updateFullName(this)"/><br/>
                  </div>
                  <div class="col-sm-12 phone_number_input">
                     <input id="phone"  type="text" class="form-control-custom enter_click phone_number" placeholder="Mobile Number" oninput="new SessionStorageUpdates().updatePhone(this)"/><br/>
                  </div>
                  <div class="col-sm-12">
                     <input id="email" type="text" class="form-control-custom enter_click" placeholder="Business Email" oninput="new SessionStorageUpdates().updateEmail(this)"/><br/>
                  </div>
                  <div class="col-sm-12">
                     <input id="password" type="password" class="form-control-custom enter_click" placeholder="Password" oninput="new SessionStorageUpdates().updatePassword(this)"/><br/>
                  </div>
                  <div class="col-sm-12 dropdown show">
                     <button id="new_account_use_case" class="btn dropdown-toggle" type="button" style={{width:"100%",fontSize:"10pt",backgroundColor:"white",border:"1px solid rgb(210,210,210)",color:"#495057"}} data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">I work for a</button>
                     <div class="dropdown-menu " aria-labelledby="dropdownMenuButton" style={{width:"93%",fontSize: "10pt", position: "absolute", willChange: "transform", top: "0px", left: "0px", transform: "translate3d(0px, 34px, 0px)"}} x-placement="bottom-start">
                        <a class="dropdown-item" onclick="new Selections().selectNewAccountUseCase(this)" use_case="agency" label="Recruitment Agency">Recruitment Agency</a> 
                        <a class="dropdown-item" onclick="new Selections().selectNewAccountUseCase(this)" use_case="corporate" label="Corporate">Corporate</a>
                     </div>
                  </div>
                  </div>

               <div style={{width:"100%", textAlign:"center",position: "relative",padding:"20px", marginTop:"20px"}}>
                  <div id="signup_button_desktop" class="form_button enter_click" style={{margin: "auto",position: "absolute",left:"0",right:"0",top:"0",bottom:"0"}} onclick="new PageContents().signUp()">Create account</div>
               </div>
            </div>
            <div id="signup_error" style={{marginTop:"20px"}}></div>
            <div style={{color:"rgb(197,197,205)",cursor:"pointer"}} onclick="new PageContents().changePage('/login')">Already registered? <u style={{borderBottom: "1px dashed",textDecoration: "none"}}><Link to="/login">Log in instead</Link></u></div>
            <br/>
            <div style={{color:"rgb(197,197,205)"}}><u style={{borderBottom: "1px dashed",textDecoration: "none"}}>Account lock: </u>We discourage licence sharing. Your account will be accessible from this device only</div>
         </div>
      </div>
   </div>
   <div class="signup_lateral" style={{display:"table-cell", width:"30%",padding:"20px", textAlign:"left"}}>

      <br/><br/>
      <div style={{textAlign:"center"}}>
         <img id="testimonial_photo" src={mannan_pacha_dp} style={{width:"150px", borderRadius:"50%"}}/>
      </div>
      <div style={{textAlign:"left"}}>
         <img src={quote} style={{width:"40px", marginRight:"40px",marginBottom:"20px"}}/>
      </div>
      <i id="testimonial_quote">Arxena helps me map with large F100 accounts saving me hours of manual work for resourcing projects.</i>
      <br/>
      <span style={{fontSize:"13pt"}}><br/><br/><strong style={{fontWeight:"500"}} id="testimonial_name">Mannan Pacha</strong> | </span>
      <span id="testimonial_title" style={{fontSize:"13pt"}}>Manager - Ernst & Young</span>
      <br/>
      <img id="testimonial_logo" src="/static/img/EY_logo_2019.png" style={{height:"20px"}}/>
      <br/>
      <br/>
      <img id="linkedin_logo" src="/static/img/linkedin_logo.png" onclick="window.open('https://www.linkedin.com/in/mannanpacha1988')" style={{height:"20px",cursor:"pointer"}}/>
      <div style={{textAlign:"right"}}/>
         <img src={quote1} style={{width:"40px", marginRight:"40px"}}/>
      </div>
            </div>
        </div>
    </div>
    </>
  )
}

