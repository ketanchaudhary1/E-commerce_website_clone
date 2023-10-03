let initialState={islogin:'N',total:0,pids:[],member:{}};
export function appReducer(state=initialState,action)
{
    if(action.type=='setLogin')
    {
        return {...state,islogin:action.value};
    }
    else if(action.type=='addInTotal')
    {
        let n=parseFloat(state.total)+parseFloat(action.value);
        return {...state,total:n};
    }
    else if(action.type=='addInBasket')
    {
        return {...state,pids:[...state.pids,action.value]};
    }
    else if(action.type=='setMember')
    {
        return {...state,member:action.value};
    }
    else
        return state;
}
/*
setLogin
addInTotal
addInBasket
setMember
 */

