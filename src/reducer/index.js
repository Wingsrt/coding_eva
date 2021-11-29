import caretaker from "./prosave";

import {combineReducers,applyMiddleware} from 'redux'


const rootreducer=combineReducers({

    caretaker
})


const midle=(store)=>(next)=>(action)=>{
 


console.log(action)

    

   
}

export {midle,rootreducer}

