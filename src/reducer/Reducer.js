const { Add_Found, Withdrow_Found } = require("../constant/Constant");

let rootReducer = (oldState,action)=>{
    let newState=oldState
     switch(action.type){
       case Add_Found:
         newState += action.amount;
       break;
       case Withdrow_Found:
         newState -= action.amount;
       break;
      default:
     }
   
   
     return newState
   }
   export default rootReducer;