import React from 'react'
import { Link } from 'react-router-dom'


export const NavigationMenu = ({set}) => {
    return (
        <>
             <div className="menu"><h1>The menu</h1>

           
           <ul>
               <li>
                   <Link className="link" to='/' onClick={()=>set(false)}>Home
                    
                   </Link>
               </li>
               <li>
                   <Link to='/about' className="link"
                    onClick={()=>set(false)}>About
                   
                   </Link>
               </li>
           </ul>
           </div>

       </>
    )
}
