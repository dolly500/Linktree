import React from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css";  
import "primereact/resources/primereact.min.css";                  
import "primeicons/primeicons.css";    
import "primeflex/primeflex.css";                            
import {Avatar} from 'primereact/avatar';
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';
import './index.css';

function App() {
  return (
   <div className="p-m-4">
     <div className="p-d-flex p-jc-center p-ai-center">
      <Avatar image="profile__img.png" size="xlarge" className="p-overlay-badge">
      </Avatar>
    </div>

    <div className="twitter">
      <p><b style={{fontSize: 25, fontFamily: 'Arial'}}>Akamo Dolapo</b></p>
    </div>



    <div className="p-d-flex p-jc-center">
      <div className="p-d-flex p-flex-column" style={{width: 40 + "%"}}>
      <a href="https://twitter.com/Dolly_tech" style={{textDecoration: 'none'}}>
      <Button className="p-p-3 p-m-2" label="Twitter" style={{width: 100 + "%", backgroundColor: 'gray', color: 'black', border: '1px solid #EAECF0'}}>
        <span className="p-px-3">
        </span>
      </Button> 
      </a>

      <a href="http://books.zuri.team/" style={{textDecoration: 'none'}}>
      <Button className="p-p-3 p-m-2" label="Zuri Team" style={{width: 100 + "%", backgroundColor: 'gray', color: 'black', border: '1px solid #EAECF0'}}>
        <span className="p-px-3">
        </span>
      </Button>
      </a>
      
    <a href="http://books.zuri.team/" style={{textDecoration: 'none'}}>    
    <Button className="p-p-3 p-m-2" label="Zuri Books" style={{width: 100 + "%", backgroundColor: 'gray', color: 'black', border: '1px solid #EAECF0'}}>
        <span className="p-px-3">
        </span>
      </Button> 
    </a>

    <a href="https://books.zuri.team/" style={{textDecoration: 'none'}}>
    <Button className="p-p-3 p-m-2" label="Python Books" style={{width: 100 + "%", backgroundColor: 'gray', color: 'black', border: '1px solid #EAECF0'}}>
        <span className="p-px-3">
        </span>
      </Button> 
    </a>
    
    <a href="https://background.zuri.team/" style={{textDecoration: 'none'}}>
    <Button className="p-p-3 p-m-2" label="Background Checks for Coders" style={{width: 100 + "%", backgroundColor: 'gray', color: 'black', border: '1px solid #EAECF0'}}>
        <span className="p-px-3">
        </span>
      </Button> 
    </a>
    
    <a href="https://books.zuri.team/design-rules" style={{textDecoration: 'none'}}>
    <Button className="p-p-3 p-m-2" label="Design Books" style={{width: 100 + "%", backgroundColor: 'gray', color: 'black', border: '1px solid #EAECF0'}}>
        <span className="p-px-3">
        </span>
      </Button>
    </a>
       
      </div>
    </div>

    <div className="icons">
    <Image src="slack.png" alt="Image Text"/>
     <Image src="icon.png" alt="Image Text"/>
    </div>

    <div className="footer">
      <div className="footer1">Zuri<span>.</span>Internship</div>
      <div className="footer2">HNG Internship 9 Frontend Task</div>
      <div className="footer3"><Image src="I4G.png" alt="Image Text"/></div>
    </div>
    
   </div>

  
  );
}

export default App;
