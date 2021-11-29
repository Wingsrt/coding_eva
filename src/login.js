import { useState } from "react"

import save from "./action/action"
import {useSelector, useDispatch} from 'react-redux'
import { useHistory } from "react-router-dom";




function Login(){
    const d=useHistory()

    const dispatch=useDispatch()

    const [user,setuser]=useState('')
        
    
   

    function   handel(e){

        const {name,value}=e.target
        setuser(value)

    }

    var [see,setsee]=useState([]) 

    function submi(){ 

        fetch('http://localhost:3000/posts')
        .then(response => response.json())
        .then(data => 
            
          setsee(data)
            
            );


          
         see.map(function(el){

               if(el.user==user){

                localStorage.setItem('log',JSON.stringify( user))

                  d.push('/main')
               }

         })
              

      dispatch(save(user))
     
    }
    



    return(
        <>
   
    <div className='maindiv' >
       
        <input type='text' onChange={handel}  placeholder="user"  name='user'/>
        <input type='password'   placeholder="password" name='pass' />
        <button  onClick={submi}  >Login</button>
        
        </div>
        
        </>
    )
}



export default Login