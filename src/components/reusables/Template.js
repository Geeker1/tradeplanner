import React from "react"
import { Icon } from "semantic-ui-react"
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'


const ViewComponent = styled.div`
    @media screen and (min-width: 1024px){
        display: flex;
        height:100vh;
    }

    & .content{
        flex-grow:1;
    }
`


const Sidebar = styled.div`
    width:10vw;
    background-color:#110c11;
    color:#fff;
    display:none;
    flex-direction:column;

    .nav-links{
        padding: 15px;
        text-align:center;
        display:flex;
        flex-direction:column;
        align-items: center;
        color: #e5e5e5;

        :hover{
            background-color:#211a23;
            cursor:pointer;
            color:#cccccc;
        }
    }

    .logo{
        height:70px;
        background-color:#000;
    }

    @media screen and (min-width: 1024px){
        display: flex;
    }
`



export const DashBoard = ({children})=>{
    let history = useHistory()
    return (
        <ViewComponent>
            
            <Sidebar>
                <div className="logo">
                    Fx Journal
                </div>

                <div className="nav-links" onClick={()=>history.push("/dashboard")}>
                    <Icon name="edit" style={{marginBottom:"10px"}}/>
                    Trading Plans
                </div>
                <div className="nav-links" onClick={()=>history.push("/entry")}>
                    <Icon name="angle double right" style={{marginBottom:"10px"}}/>
                    View Entries
                </div>
                <div className="nav-links" onClick={()=>history.push("/statistic")}>
                    <Icon name="chart bar outline" style={{marginBottom:"10px"}}/>
                    Statistics
                </div>
                <div className="nav-links" onClick={()=>history.push("/")}>
                    <Icon name="bell" style={{marginBottom:"10px"}}/>
                    Notifications
                </div>
                <div className="nav-links" onClick={()=>history.push("/")}>
                    <Icon name="book" style={{marginBottom:"10px"}}/>
                    Journal Entries
                    <small>( Coming Soon )</small>
                </div>
            </Sidebar>

            { children }

        </ViewComponent>
    )
}