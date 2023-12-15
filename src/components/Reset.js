import React from 'react';
import quote1 from '../components/img/quote1.png';
import arxena_logo from '../components/img/arxena-logo/arxena-logo.png';
import mannan_pacha_dp from '../components/img/mannan_pacha_dp.webp';
import quote from '../components/img/quote.png';
import { Link } from 'react-router-dom';

export default function Reset() {
  return (
    <>
    <div>
        <div class="desk" style={{height:"100%"}}>
            <div style={{display:"table", width:"100%", height:"100%"}}>
                <div style={{display:"table-cell", width:"70%", backgroundColor:"white", padding:"20px"}}>
                   <Link to="/"><img style={{width:"10vw",marginTop:"5px",cursor:"pointer"}} alt='logo' onclick="new PageContents().changePage('/#')"  src={arxena_logo}/></Link>
                   <div class="shadow content_section" style={{width:"500px",padding:"30px", backgroundColor:"rgba(255,255,255)",borderRadius:" 5px", textAlign:"center", left:"0", right:"0", marginTop:"50px"}}>
                      <div id="reset_password_form_content">
                         <span style={{fontSize:"16pt",fontWeight:"300"}}>Reset your password</span>
                         <br/>
                         <br/>
                         <span style={{fontSize:"10pt"}}>Please enter below the email address you used to sign up for Arxena.</span>
                         <br/>
                         <br/>
                         <div style={{width: "90%", left:"5%", position:"relative"}}>
                              <div class="row">
                                 <div class="col-sm-12">
                                    <input id="email" type="text" class="form-control-custom" placeholder="Email" oninput="new SessionStorageUpdates().updateEmail(this)"/><br/>
                                 </div>
                              </div>
                              <br/>
                              <div style={{width:"100%", textAlign:"center",position: "relative",padding:"20px"}}>
                                 <div class="form_button" style={{margin: "auto",position: "absolute",left:"0",right:"0",top:"0",bottom:"0"}} onclick="new PageContents().sendResetLink()">Send reset link</div>
                              </div>
                         </div>
                         <div id="password_reset_error" style={{marginTop:"20px"}}></div>

                      </div>
                   </div>
                </div>
                <div class="signup_lateral" style={{display:"table-cell", width:"30%",padding:"20px", textAlign:"left"}}>
                   <br/><br/>
                   <div style={{textAlign:"center"}}>
                      <img id="testimonial_photo" src={mannan_pacha_dp} alt='testimonial' style={{width:"150px", borderRadius:"50%"}}/>
                   </div>
                   <div style={{textAlign:"left"}}>
                      <img src={quote} alt='quote' style={{width:"40px", marginRight:"40px",marginBottom:"20px"}}/>
                   </div>
                   <i id="testimonial_quote">Arxena helps me map in minutes large F100 accounts saving me hours of manual work for resourcing projects.</i>


                   <span style={{fontSize:"13pt"}}><br/><br/><strong style={{fontWeight:"500"}} id="testimonial_name">Mannan Pacha</strong> | </span>
                   <span id="testimonial_title" style={{fontSize:"13pt"}}>Manager - Consulting</span>
                   <br/>
                   <img id="testimonial_logo" alt='logo' src="/static/img/EY_logo_2019.png" style={{height:"20px"}}/>
                   <br/>
                   <br/>
                   <img id="linkedin_logo" alt='linkedin logo' src="/static/img/linkedin_logo.png" onclick="window.open('https://www.linkedin.com/in/mannanpacha1988')" style={{height:"20px",cursor:"pointer"}}/>
                   <div style={{textAlign:"right"}}>
                      <img src={quote1} alt='quote1' style={{width:"40px", marginRight:"40px"}}/>
                   </div>
                </div>
        </div>
</div>
    </div>
    </>
  )
}
