import { Component } from "react";
import "./Qty.css";
class Qty extends Component
 {
    constructor(){
        super();
        this.state={
            Qty:0,
        
        }
    }
    increment(){
        this.setState({qty:this.state.qty+1})
    }
    decrement(){
        this.setState({qty:this.state.qty-1})
    }

        handleClick(){
            this.setState({count:this.state.count+1})
            console.log(this.state.count)
            this.setState({action:"Clicked!"})
        }


    
    render()
    {
        return(
            <div className="counter">
            <div> Welcome to butto{this.greetings.props.name}Developers</div>
            +<button onClick={this.handleClick.bind(this)}>

            {this.state.count} </button>
            -<button onClick={this.handleClick.bind(this)}>
            {this.state.count} </button>
            <p>{this.state.action}</p>
         
            </div>)
    }
}
export default Counter;