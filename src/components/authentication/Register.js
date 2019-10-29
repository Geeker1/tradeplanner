import React from 'react'
import {Link} from 'react-router-dom'
import {Button, Form} from 'semantic-ui-react'

const style = {
    containerDiv:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
        margin:"0",
        paddingTop:"40px"
    },
    submitButton:{
        width:"300px",
        maxWidth:"100%"
    },
    signUpParagraph:{
        marginTop:"15px",
        fontSize:"13px",
        textAlign:"center"
    },
    form:{
        paddingRight:"20px",
        paddingLeft:"20px",
        maxWidth:"100%",
        textAlign:"center"
    },
    input:{
        marginBottom:"10px"
    },
    centerEmail:{
        justifyContent:"center"
    },
    registerHeader:{
        marginTop:"20px"
    }
}



const Register = (props)=>{

    let handleSubmit = (event)=>{
        event.preventDefault();
        alert("Submited")
    }

    return (
        <div className="ui grid centered" style={style.containerDiv}>
            <h1 style={style.registerHeader}>Register</h1>
            <Link to="/dashboard">
            Dashboard
            </Link>
            <div className="row">
                <Form style={style.form} onSubmit={handleSubmit} className="five wide computer sixteen wide mobile eight wide tablet column">
                    <Form.Input style={style.input} placeholder='Full Name' width={16} />
                    
                    <Form.Input style={style.input} placeholder='Username' width={16} />
                    <Form.Input style={style.input} placeholder='Email Address' width={16} />
                    <Form.Input style={style.input} type="password" placeholder='Password' width={16} />
                    <Form.Input style={style.input} type="password" placeholder='Confirm Password' width={16} />
                    <Button style={style.submitButton} type="submit" primary>Submit</Button>
                <p style={style.signUpParagraph}>Not yet Registered ? SignUp <Link to="/">Here</Link></p>
                </Form>
            </div>
               
        </div>
    )
}

export default Register