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



const Login = (props)=>{
    return (
        <div style={style.containerDiv}>
            <h1>Login</h1>
            
            <div className="ui card">
                <div className="content">
                    <form className="ui form">
                        <div className="field">
                            <label>Username</label>
                            <input placeholder="Username" />
                        </div>
                        <div className="field">
                            <label>Password</label>
                            <input placeholder="Password" />
                        </div>
                        <Button style={style.submitButton} type="submit" primary>Submit</Button>
                    </form>
                    <p style={style.signUpParagraph}>Not yet Registered ? SignUp <Link to="/register">Here</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login