import React,{ Component } from "react";
class Create extends Component 
{
    constructor(props)
    {
        super(props);
        // this.greetings={props};
        this.state={
            email:"",
            password:"",
            country:"",
            terms:false,
        }

        //    this.email =React.createRef();
        //    this.password =React.createRef();
        //     this.country =React.createRef();
    } 
    onSubmit(e){
        e.preventDefault();
        alert("Inputted values are....:" 
        +this.state.email +"\n"+ 
        // +this.state.password +"\n"+
         +this.state.country +"\n"
         +this.state.terms);
    }
    handleEmail(e)
{
    this.setState({email:e.target.value})
    console.log(this.state.email)
}
handlePassword(e){
    this.setState({password:e.target.value})
    console.log(this.state.password)
}
handleCountry(e){
    this.setState({country:e.target.value})
    console.log(this.state.country)
}
handleTerms(e){
    this.setstate({terms:this.state.terms})
    console.log(this.state.terms)
}
    render(){
        return(<form onSubmit={this.onSubmit.bind(this)}>
        <h2>Create Account</h2>
        <div><label>Email id:</label>
        <input type="text"  value={this.state.email} onChange={this.handleEmail.bind(this)}></input><br></br>
        </div>
        <div><label>Password:</label>
        <input type="password" value={this.state.password} onChange={this.handlePassword.bind(this)}></input>
        </div>
        <div><label>Country:</label>
        <select value={this.state.country} onChange={this.handleCountry.bind(this)}>
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
        </select>
        </div>
        <div>
        <input type="checkbox" value={this.state.terms} checked={this.state.terms} onChange={this.handleTerms.bind(this)}></input>
        <label>I agree the terms</label>
        </div>
        <button type="submit">submit</button>

        </form>)
    }
}  
export default Create   

    