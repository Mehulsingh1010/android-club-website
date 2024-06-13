import React, { useState } from "react";

import { Link } from "react-router-dom";
import * as Components from './login_style.js';
import Model from 'react-modal';

const Login_popup = () => {
  
  const [signIn, toggle] = React.useState(true);
  const [visible,setVisible] = useState(false);
  return (
    
          
         
        <div>
        <button onClick={() => setVisible(true)}>Log In/Sign Up</button>
        <Model isOpen={visible} onRequestClose={() => setVisible(false)} style={{
           overlay:{
                background: "transparent",
                
                padding:"100px"
                
            },
            content:{
                background:"black",
                
                position:"fixed",
                
              
            }
            
            
        }}>
          <Components.PageWrapper>
         <Components.Container>
             <Components.SignUpContainer signinIn={signIn}>
                 <Components.Form>
                     <Components.Title>Create Account</Components.Title>
                     <Components.Input type='text' placeholder='Name' />
                     <Components.Input type='email' placeholder='Email' />
                     <Components.Input type='password' placeholder='Password' />
                     <Components.Button>Sign Up</Components.Button>
                 </Components.Form>
             </Components.SignUpContainer>

             <Components.SignInContainer signinIn={signIn}>
                  <Components.Form>
                      <Components.Title>Log in</Components.Title>
                      <Components.Input type='email' placeholder='Email' />
                      <Components.Input type='password' placeholder='Password' />
                      <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                      <Components.Button>Log In</Components.Button>
                  </Components.Form>
             </Components.SignInContainer>

             <Components.OverlayContainer signinIn={signIn}>
                 <Components.Overlay signinIn={signIn}>

                 <Components.LeftOverlayPanel signinIn={signIn}>
                     <Components.Title>Welcome Back!</Components.Title>
                     <Components.Paragraph>
                         Already have an account?
                     </Components.Paragraph>
                     <Components.GhostButton onClick={() => toggle(true)}>
                         Log in
                     </Components.GhostButton>
                     </Components.LeftOverlayPanel>

                     <Components.RightOverlayPanel signinIn={signIn}>
                       <Components.Title>Hello There!</Components.Title>
                       <Components.Paragraph>
                           Begin your journey with Android Club
                       </Components.Paragraph>
                           <Components.GhostButton onClick={() => toggle(false)}>
                               Sign Up
                           </Components.GhostButton> 
                     </Components.RightOverlayPanel>
 
                 </Components.Overlay>
             </Components.OverlayContainer>

         </Components.Container>
         </Components.PageWrapper>
         <button onClick={() => setVisible(false)}>Back to home page</button>
         </Model>
         
         </div> 
        
  );
};

export default Login_popup;
