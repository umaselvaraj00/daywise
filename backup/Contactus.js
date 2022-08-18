import  React, { Component } from "react";
import styles,'./Contactus.module.css';
class Contactus extends Component{

    constructor(){
        
        super();
        this.name =React.createRef();
        this.mobileno =React.createRef();
        this.message =React.createRef();
    }
    onSubmit(e){
        e.preventDefault();
        alert("Inputted values are....:" +this.name.current.value +"\n"+ 
        +this.mobileno.current.value +"\n"+
         +this.message.current.value);

    }
    
    render(){
        return(<div className="contact-form">
            <form onSubmit={this.onSubmit.bind(this)}>
            <div className="form-container">
            <h2 className="header">Contact us:</h2><br></br>
            <div className="input-container">
            <label>Name:</label><br></br>
            <input className="input" type="text" ref={this.name}></input><br></br></div>
            <div className="input-container">
            <label>MobileNo:</label><br></br>
            <input className="input" type="text" ref={this.mobileno}></input><br></br></div>
            <div className="input-container">
            <label>Message:</label><br></br>
            <textarea  className={styles.textarea} type="text" ref={this.message}></textarea><br></br><br></br></div>
            <div className="button-container">
            <button className="button" type="submit">submit</button><br></br>
            </div>
            </div>
            </form>
            </div>
        );
          
    }
}

export default Contactus.module;