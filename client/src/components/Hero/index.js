import React from 'react'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

const index = () => {
    return (
        <Jumbotron>
            <h1>Hello there!</h1>
            <p>
                Nelson's Gourmet Burgers resturants have some of the best burger around the San Francisco bay area!
                </p>
            <p>
                Come see why, click below!
                </p>
            <p>
                <Button variant="primary">Learn more</Button>
            </p>
        </Jumbotron>
    )
}

export default index
