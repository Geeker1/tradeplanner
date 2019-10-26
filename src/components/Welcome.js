import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {Button, Icon} from 'semantic-ui-react'

// Styling for this component
const style = {
    div:{
        height:"100vh",
        backgroundColor:"rgb(36, 32, 32)",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        fontSize:"18px",
        color:"#fff",
        padding:"0 20px"
    },
    button:{
        width:"300px",
        maxWidth:"100%",
        paddingTop:"15px",
        paddingBottom:"15px",
        fontSize:"18px"
    },
    paragraph:{
        marginBottom:"20px"
    },
    h1:{
        fontSize:"40px",
        letterSpacing:"1px",
        textAlign:"center"
    }
}



const LandingPage = (props)=>{
    const [visible, toggleVisibility] = useState(false)

    const handleMouseChange = (event)=>{
        toggleVisibility(!visible)
    }
    
    return (
        <div style={style.div}>
            <h1 style={style.h1}>Create a Trading Plan and Stick to it....</h1>
            <p style={style.paragraph}>Fx planner lets you create trading plans for 
                different market categories and makes sure you abide by it.
            </p>

            <Button style={style.button} onMouseEnter={handleMouseChange} 
            onMouseLeave={handleMouseChange} primary as={Link} to="/login" 
            icon labelPosition={visible ? 'right':''}>
                Get Started{visible ? <Icon name='right arrow' />:''}
            </Button>
        </div>
    )
}

export default LandingPage