

import {applyMiddleware,createStore,Middleware ,} from 'redux'
import { midle, rootreducer } from './reducer'




const store=createStore(rootreducer,applyMiddleware(midle));


export default store;
