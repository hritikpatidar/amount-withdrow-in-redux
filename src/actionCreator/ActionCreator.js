import { Add_Found, Withdrow_Found } from "../constant/Constant"

export const addFoundActionCreator = (addFound)=>{
    return {
        type:Add_Found,
        amount:addFound
    }
}

export const withdrowFoundActionCreator = (withdrowFound)=>{
    return{
        type:Withdrow_Found,
        amount:withdrowFound
    }
}

//module.exports = {addFoundActionCreator , withdrowFoundActionCreator}