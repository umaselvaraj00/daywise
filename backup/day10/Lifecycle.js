import { Component } from "react";
class Lifecycle extends Component
{
    constructor()
    {
        super(); 
        this.state={message:""}
       // this.changeState=this.changeState.bind(this);
    }
    UNSAFE_componetWillMount(){console.log("UNSAFE_componentWillMount")}
    componentDidMount(){console.log("componentDidMount")}
    shouldComponentUpdate(){console.log("shouldComponentUpdate");return true}
    UNSAFE_componentWillUpdate(){console.log("UNSAFE_componentWillUpdate")}
    componentDidUpdate(){console.log("componentDidUpdate")}
    changeState(){
        this.setState({message:"Helloworld"});
    }
    render() {
        
        return(
            <div>
        
        <button onClick={this.changeState.bind(this)}>change state</button>
        <h2>{this.state.message}</h2>
        </div>
        );
       }
    
        
    
}
export default Lifecycle;