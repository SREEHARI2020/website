import React from 'react'
import spinner from './spinner.gif'
export const Loader = () => {
    return (
        <div>
            <img src={spinner} style={{width:'200px' ,
        margin:'auto', display:'block', alt:'loading' }}/>
        </div>
    )
}
