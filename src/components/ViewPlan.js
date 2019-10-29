import React from "react"
import { Grid, Button, Pagination } from "semantic-ui-react"
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {DashBoard} from "./reusables/Template"


const ContentBox = styled.div`
    padding:15px;

    & > p{
        font-size:15px;
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
        padding: "30px",
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

const ViewPlan = (props) => {
    return (

        <DashBoard>

            <section className="content">

                <header>
                    <nav style={style.nav}>
                        <Button primary>
                            New Trading Plan
                    </Button>
                    </nav>
                </header>

                <Grid container stackable columns={3} centered>
                    <Grid.Row>
                        <Grid.Column style={style.column}>
                            <ContentBox>
                                <h4>Binary Options</h4>
                                <p>A fast way to work with ema's and macd oscillator</p>
                                <Button as={Link} to="/" primary>View Conditions</Button>
                            </ContentBox>
                        </Grid.Column>

                        <Grid.Column style={style.column}>
                            <ContentBox>
                                <h4>Forex</h4>
                                <p>Monitor morning star pattern and engulfing candles</p>
                                <Button primary>View Conditions</Button>
                            </ContentBox>
                        </Grid.Column>

                        <Grid.Column style={style.column}>
                            <ContentBox>
                                <h4>Digital Options</h4>
                                <p>Master trading channels and see how far they work</p>
                                <Button primary>View Conditions</Button>
                            </ContentBox>
                        </Grid.Column>

                        <Grid.Column style={style.column}>
                            <ContentBox>
                                <h4>Crypto Currency</h4>
                                <p>Understand support and resistance</p>
                                <Button primary>View Conditions</Button>
                            </ContentBox>
                        </Grid.Column>

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

export default ViewPlan