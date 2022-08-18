import { Component } from "react";

class WelcomeCc extends Component
{
    constructor(props)
    {
        super(props);
        this.state={props};
    }
        render()
        {
            return(<div><h1>Welcome to {this.state.props.name}Developers!!!!</h1></div>);
        }
}
            export default WelcomeCc
        