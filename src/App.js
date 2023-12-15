import React,{useState} from 'react';
import arxena_logo from '../src/components/img/arxena-logo/arxena-logo.png';
import powered_by_gpt4 from '../src/components/img/powered_by_gpt4.png';
import tw from '../src/components/img/tw.png';
import new_upload from '../src/components/img/new_upload.png';
import { Link } from 'react-router-dom';


export default function Home() {

   const [searchInput, setSearchInput] = useState("");

  return (
      <>
        
        {/*<!-- desk version -->*/}
     <div class="desk" id="main_container">
       <div style={{padding:"20px", height:"85vh"}}>
          <div style={{display:"table", width:"100%"}}>
            
             <div style={{display:"table-cell", verticalAlign:"middle"}}></div>
             <div id = "sign_up_button_front_page" style={{display:"table-cell", verticalAlign:"middle", width: "190px", textAlign:"right"}}>
                <div class="landing_white_button" style={{display:"inline-block", backgroundColor:"rgb(36,116,204)",borderColor:"rgb(36,116,204)", color:"white", width:"150px"}} onclick="new PageContents().changePage('/signup')"><Link to="/signup" style={{color:"white"}}>Sign up</Link></div>
             </div>
             <div id = "log_in_button_front_page" style={{display:"table-cell", verticalAlign:"middle", width:" 190px", textAlign:"right", paddingRight:"20px"}}>
                <div class="landing_white_button" style={{display:"inline-block", backgroundColor:"white",border:"1px solid rgb(36,116,204)", color:"rgb(36,116,204)", width:"150px"}} onclick="new PageContents().changePage('/login')"><Link to="/login">Log in</Link></div>
             </div>
          </div>

          <div style={{display:"table", width:"100%",paddingLeft:"20px",paddingRight:"20px",height:"100%"}}>
             <div style={{display:"table", width:"40%", marginLeft:"30%", textAlign:"center", verticalAlign: "middle", paddingTop:"8%"}}>
              
             <Link to="/"><img style={{width:"15vw",marginTop:"5px",cursor: "pointer"}} onclick="new PageContents().changePage('/#')" alt='arxena logo' src={arxena_logo}/></Link>
                <input id="search_bar_front_page" value={searchInput}  onChange={(e)=>{setSearchInput(e.target.value);}} class="search-bar-front" autocomplete="new-company-entered-by-user" onblur="new SearchBarLoadersDropdowns().homePageInputElemOnblur(this)" onfocus= "new SearchBarLoadersDropdowns().homeInputElemOnfocus(this)" placeholder="🔍 Search any company's org chart" style={{display:"table", width:"100%",borderColor:"rgb(232,232,232)", placeholderColor:"rgb(232,232,232)",height:"3rem", marginTop:"8%"}} oninput="new SearchBarLoadersDropdowns().updateHomePageSearchKeyword(this)" onkeypress="if (event.keyCode === 13) homePageSearch()" />

                  <p id="error_home_page" style={{fontSize:"12px", float:"left", marginLeft:"20px",display:"none"}}></p>

                  <div id = "front_page_search_bar_loader" style ={{textAlign:"right", marginTop:"-6.5%",marginBottom:"2%", width:"10%", marginLeft:"85%"}}>
                  <div id="button_dropdown_search_jd" onclick="new SearchBarLoadersDropdowns().placeDropdownBelowSearchforJDInput()" style={{cursor:"pointer", textAlign:"right", marginTop: "-6.25%"}}><img style={{width:"25px"}} alt='upload img' src={new_upload}/></div>
                  </div>
               
                
                </div>
                <div style={{marginTop:"5%"}}>
                <center><img src={powered_by_gpt4} alt="Open AI Logo" width="200" /></center>
                </div>
             </div>

        </div>
       <div style={{width:"100%", bottom:"0%", textAlign:"center"}}>
          <div style={{display:"table", width:"100%"}}>
             <div style={{display:"table-cell", width:"100%", paddingLeft:"20px",paddingTop:"2%", textAlign:"left"}}>
                <div style={{paddingLeft:"25px", display:"inline-block"}}>OrgGPT - Talent Identification Software for Ambitious Companies<br/>
                   <a style={{fontSize:"10pt"}} href="/#">Pricing</a> | <a style={{fontSize:"10pt"}} href="/#">Terms of Service</a> | <a style={{fontSize:"10pt"}} href="/#">Privacy Policy</a> | <a style={{fontSize:"10pt"}} href= "/#"onclick="new UtilityFunctions().openHelpModal()">How to Use</a> | <a style={{fontSize:"10pt"}} href= "/#" onclick="new UtilityFunctions().openHelpModal()">Download Extension</a><br/>

                   <br/>
                </div>
                <div style={{display:"table-cell",  paddingLeft:"25px", float:"right", marginRight:"5%"}}>
                   <div style={{display:"table-cell", width:"70px"}}>
                      <a href="https://www.linkedin.com/company/arxena" target="_blank" rel="noreferrer"><img style={{width:"35px", cursor:"pointer"}} alt='linkedin img' src="static/img/linkedin-icon-png-circle-2.png"/></a>
                   </div>
                   <div style={{display:"table-cell", width:"70px"}}>
                      <a href="https://twitter.com/arxenainc" target="_blank" rel="noreferrer"><img style={{width:"43px", cursor:"pointer"}} alt='twitter img' src={tw}/></a>
                   </div>
                   <div style={{display:"table-cell", width:"70px"}}>
                      <a href="https://facebook.com/arxenainc" target="_blank" rel="noreferrer"><img style={{width:"35px", cursor:"pointer"}} alt='facebook img' src="static/img/facebook.png"/></a>
                   </div>
                   <div style={{display:"table-cell", width:"70px"}}>
                      <a href="https://www.youtube.com/channel/UCpaPM7iFg9D309FUaIVeRpA" target="_blank" rel="noreferrer"><img style={{width:"35px", cursor:"pointer"}} alt='youtube img' src="static/img/youtube.png"/></a>
                   </div>
                </div>
                <br/>
             </div>
          </div>
       </div>
    </div>

      </>
      ); 

}

