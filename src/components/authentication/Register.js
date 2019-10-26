import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'semantic-ui-react'

const style = {
    containerDiv:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        paddingTop:"100px",
        width:"100%"
    },
    submitButton:{
        width:"100%"
    },
    signUpParagraph:{
        marginTop:"15px",
        fontSize:"13px",
        textAlign:"center"
    }
}



const Register = (props)=>{
    return (
        <div style={style.containerDiv}>
            <h1>Register</h1>
            
            <div className="ui card">
                <div className="content">
                    <form className="ui form">
                        <div className="field">
                            <label>Username</label>
                            <input placeholder="Username" />
                        </div>
                        <div className="field">
                            <label>Last Name</label>
                            <input placeholder="Password" />
                        </div>
                        <div className="field">
                            <label>Password</label>
                            <input placeholder="Password" />
                        </div>
                        <div className="field">
                            <label>Password</label>
                            <input placeholder="Password" />
                        </div>
                        <div className="field">
                            <label>Password</label>
                            <input placeholder="Password" />
                        </div>
                        <div className="field">
                            <label>Password</label>
                            <input placeholder="Password" />
                        </div>
                        <Button style={style.submitButton} type="submit" primary>Submit</Button>
                    </form>
                    <p style={style.signUpParagraph}>Not yet Registered ? SignUp <Link to="/">Here</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Register