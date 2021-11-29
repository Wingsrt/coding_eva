

import { useEffect, useState } from "react";

import { useHistory } from "react-router";





function Dashbord(){

    const g=useHistory()

   

    const [data,setdata]=useState([])

     
    useEffect(() => {
        
        fetch('http://localhost:3000/movies')
        .then(response => response.json())
        .then(data => 
            
          setdata(data))



      
      },[]);


      function handel(el){

       console.log(el)
        
        localStorage.setItem("movie",JSON.stringify(el))

            g.push('/detail')
      }

 
    return(
        <>
         
         <div>
             {
                 data.map(function(el){
             return(

                 <div className='box'  onClick={()=>handel(el)}>
                    
                    <h5>{el.title}</h5>
                    <h4>{el.postId}</h4>
                    <img className='pose' src={el.im} />
                    
                 </div>
                   
             )
                 })

             }
         </div>

         
        </>
    )



}

export default Dashbord