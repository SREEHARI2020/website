import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { NavigationMenu } from './NavigationMenu';

export const Navigation = () => {
   const [showMenu,setShowMenu]=useState(false);
   let menu

   

    return (
        
        <div className="navbar">
            <h1>Best Sellers</h1>
        <nav >
            <FontAwesomeIcon className="nav-icon" onClick={()=>setShowMenu(!showMenu)}  icon={faBars}/>
            
        </nav>
      
     {showMenu?<NavigationMenu set={setShowMenu}/>:null }
    </div>
        
    )
}
