import { Component } from "react";
import "./Counter.css";
class Counter extends Component
 {
    constructor(props){
        super(props);
        this.greetings={props};
        this.state={
            count:0,
            action:""
        }
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
            <div> Welcome to {this.greetings.props.name}Developers</div>
            <button onClick={this.handleClick.bind(this)}>
            {this.state.count} </button>
            <p>{this.state.action}</p>
         
            </div>)
    }
}
export default Counter;