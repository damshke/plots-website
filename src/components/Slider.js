import React from 'react'
import { Carousel } from 'react-bootstrap';
import plots from '../plots.jpg'
import all from '../all.jpg'
import ng from '../ng.jpg'

export function Slider() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-fluid"
                    src={plots}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Сюжеты</h3>
                    <p>какой-то текст</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-fluid"
                    src={all}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Сюжеты</h3>
                    <p>какой-то текст</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-fluid"
                    src={ng}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Сюжеты</h3>
                    <p>какой-то текст</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}