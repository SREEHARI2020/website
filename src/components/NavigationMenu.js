import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faInfo } from '@fortawesome/free-solid-svg-icons'

export const NavigationMenu = ({set}) => {
    return (
        <>
             <div className="menu"><h1>Menu</h1>

           
           <ul className="menu-elements">
               <li>
                   <Link className="link" to='/' onClick={()=>set(false)}>   <FontAwesomeIcon icon={faHome}/> <span>Home</span>
                    
                   </Link>
               </li>
               <li>
                   <Link to='/about' className="link"
                    onClick={()=>set(false)}> <FontAwesomeIcon icon={faInfo}/><span>About</span>
                   
                   </Link>
               </li>
           </ul>
           </div>

       </>
    )
}
