import React, {useState} from "react"
import { DashBoard } from "./reusables/Template";
import { Grid, Button, Label, Pagination, Icon } from "semantic-ui-react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import classnames from "classnames"
import _ from "lodash"

const ContentBox = styled.div`
    padding:15px;
    position:relative;

    .deleteIcon{
        position:absolute;
        top:-5px;
        right:-5px;
    }


    & > p{
        font-size:13px;
    }

    & > button{
        font-size:13px !important;
    }
    

    & {
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
      }
      
    &:hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        cursor:pointer;
    }

    
`


const style = {
    nav: {
        padding: "20px",
        textAlign: "right"
    },
    column: {
        padding: "15px",
        margin: "10px 0"
    },
    pagination: {
        padding: "0"
    }
}

const Alert = styled.div`
    padding:10px 20px;
    background-color:${props => props.success ? "#cdedcc" : "#bf324c"};
    text-align:center;
    margin-bottom:10px;
`

const AlertHeader = styled.div`
    text-align:center;
    margin-top:40px;

    .createBtn{
        text-align:right;
        margin-bottom:15px;
    }

    & i{
        color:#fff;
        margin-left:5px !important;
    }
`


const ViewEntry = (props) => {
    const [hidden, setVisibility] = useState(true)
    return (

        <DashBoard>
            <section className="content">
                <AlertHeader>
                    <h2>Your Trading Entries</h2>
                    <div className="createBtn">
                        <Button size="small" color="blue">
                            New Entry <Icon name="add circle" />
                        </Button></div>
                </AlertHeader>

                <Grid container stackable columns={3} centered>
                    <Grid.Row>
                        {_.range(5).map(val =>{
                            return <Grid.Column style={style.column}>
                            <ContentBox onMouseEnter={()=>{setVisibility(!hidden)}} onMouseLeave={()=>setVisibility(!hidden)}>
                                <Label className={classnames({hidden},'deleteIcon')} circular color={"red"}>
                                    X
                                </Label>
                                <h4>Aug 30, 2019 ( Monday )</h4>
                                <Alert success>
                                    You successfully executed all Conditions
                                    <p><strong>Score : 80%</strong></p>

                                </Alert>
                                <p>Date: September 30, 2018</p>
                                <p><strong>Trading Plan</strong>: Middle Candlestick</p>
                                <p>
                                    <strong>Market Option</strong> :
                                 <Label as='a' color='teal'>
                                        <strong>Digital Options</strong>
                                    </Label>
                                </p>
                                <Button size="mini" as={Link} to="/" primary>View More</Button>
                            </ContentBox>
                        </Grid.Column>
                        })}
                    </Grid.Row>

                    <Pagination
                        style={style.pagination}
                        boundaryRange={0}
                        defaultActivePage={1}
                        ellipsisItem={null}
                        firstItem={null}
                        lastItem={null}
                        siblingRange={1}
                        totalPages={10}
                    />

                </Grid>

            </section>
        </DashBoard>
    )
}

export default ViewEntry