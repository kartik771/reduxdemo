import React, { useState } from "react";
import { connect } from "react-redux";

function Bat(props) {
    console.log(props);
//    const [bat, setBat] = useState(20);
  return (
    <div>
       <h1>Bats:{props.batss}</h1> 
      <button onClick={props.buyBat}>Buy Bat </button>  
    </div>
  );
}
//component ko global store se lake deta as props, isko ek state milta hai connect method se
const mapStateToProps = (state) =>{
    return{
        batss:state.bats
    };
};

//yae function ek action dispatch karta h , yaani reducer ke pass jaeya aur switch chalaega
const mapDispatchToProps = (dispatch) =>{
    return{
        buyBat:() => dispatch({type:"BUY_BAT"})
        //action object hai y dispatch(action)
    }
}

//higher order component
export default connect(mapStateToProps , mapDispatchToProps)(Bat);