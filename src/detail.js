import { useState } from "react"
import { useEffect } from "react"

import { useHistory } from "react-router"


function Detail(){

    const z=useHistory()
    const [data,setdata]=useState([])
    function handel(){

        var item = JSON.parse( localStorage.getItem("movie") )

        setdata(item)

        console.log(data)


    }
    useEffect(() => {
        
       handel()
      
      },[]);

    return (
        <>
        
        

                 <div>
                    
                    <h5>{data.title}</h5>
                    <h4>{data.postId}</h4>
                    <p>{data.de}</p>
                    <img src={data.im}  />
                    <button onClick={()=>z.push('/main') } >back</button>
                

                 </div>
                   
             
        </>

    )



}

export default Detail