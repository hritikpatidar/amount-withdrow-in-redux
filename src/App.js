import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import {addFoundActionCreator,withdrowFoundActionCreator} from "./actionCreator/ActionCreator"

function App() {
  //1 state

  let state = useSelector((storeObject)=>{

    return storeObject
  });
  const dispatch = useDispatch();

  //2 function defination
  let addFound =()=>{ 
    
    let addFound = parseInt(prompt("Enter the amount for add"));
    //alert(addFound);
    dispatch(addFoundActionCreator(addFound));
    //i have to dispacth action
  }

  let withdrowFound =()=>{ 
    //alert("withdrow")
    let withdrowFound = parseInt(prompt("Enter the amount for withdrow"));
    //alert(withdrowFound);
    dispatch(withdrowFoundActionCreator(withdrowFound));
  }

  //3 return
  return (
    <div className="App">
        <h1>Amount {state}</h1>

        <div>
          <button onClick={ ()=>{ addFound() } }>Add Found</button>
          <button onClick={ ()=>{ withdrowFound() }}> withdrow Found</button>
        </div>
       
    </div>
  );
}

export default App;
