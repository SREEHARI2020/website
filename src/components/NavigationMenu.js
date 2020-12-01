import React from 'react'
import { Link } from 'react-router-dom'


export const NavigationMenu = ({set}) => {
    return (
        <>
             <div className="menu">The menu</div>
            <div>
           <ul>
               <li>
                   <Link to='/' onClick={()=>set(false)}>Home
                    
                   </Link>
               </li>
               <li>
                   <Link to='/about'
                    onClick={()=>set(false)}>About
                   
                   </Link>
               </li>
           </ul>
           </div>

       </>
    )
}
