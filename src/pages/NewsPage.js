import React from "react"
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import all from '../all.jpg'

export const News = () => (
    <Container>
        <Row style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
            <Col>
                <Card style={{width: '18rem'}}>
                    <Card.Img variant="top" src={all}/>
                    <Card.Body>
                        <Card.Title>Новости</Card.Title>
                        <Card.Text>ляляля</Card.Text>
                        <Button variant="primary">Увидеть больше</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{width: '18rem'}}>
                    <Card.Img variant="top" src={all}/>
                    <Card.Body>
                        <Card.Title>Новости</Card.Title>
                        <Card.Text>ляляля</Card.Text>
                        <Button variant="primary">Увидеть больше</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{width: '18rem'}}>
                    <Card.Img variant="top" src={all}/>
                    <Card.Body>
                        <Card.Title>Новости</Card.Title>
                        <Card.Text>ляляля</Card.Text>
                        <Button variant="primary">Увидеть больше</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{width: '18rem'}}>
                    <Card.Img variant="top" src={all}/>
                    <Card.Body>
                        <Card.Title>Новости</Card.Title>
                        <Card.Text>ляляля</Card.Text>
                        <Button variant="primary">Увидеть больше</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    
)