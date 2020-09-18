import React from 'react'

import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

import Cheeseburger from '../../assets/images/cheeseburger.png'
import Hamburger from '../../assets/images/hamburger.png'
import ChickenSandwhich from '../../assets/images/chickensandwhich.png'

const index = () => {
    return (
        <div>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={Cheeseburger} alt="cheeseburger" />
                    <Card.Body>
                        <Card.Title>Amazing Burgers!</Card.Title>
                        <Card.Text>
                            Nelson's Gourmet Burgers had some of the best burgers I ever had.
                            It was like unreal! - John Williams from San Francisco, CA
      </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={Hamburger} alt="hamburger" />
                    <Card.Body>
                        <Card.Title>Best Burgers in the whole Bay Area!</Card.Title>
                        <Card.Text>
                            If you are visiting San Francisco Bay Area you must stop by Nelson's
                            Gourmet Burgers. It was only a few blocks away from the BART station
                            off Market St in San Francisco. A definitely a must stop! - Chris Smith from Los Angeles, CA
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={ChickenSandwhich} alt="chickensandwhich" />
                    <Card.Body>
                        <Card.Title>Incredible Food!</Card.Title>
                        <Card.Text>
                            Been going to Nelson's Groumet Burgers for years now. Whenever I'm
                            close by it's a must stop always! Not only the burgers are delicious,
                            but the chicken sandwhiches. - Michael Johnson from San Jose, CA
      </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    )
}

export default index
