import React from 'react'
import './Places.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Places = () => {
  return (
    <div>
      <h1 className='heading'>Places to Visit</h1>
      <div className="places-body">
        <CardGroup>
          <Card>
            <Card.Img variant="top" src="https://www.gosahin.com/go/p/i/t1/1565504238_hanuman-vatika-rourkela1.jpg" />
            <Card.Body>
              <Card.Title className='places-title'>Hanuman Vatika</Card.Title>
              <Card.Text className='places-about'>
                Hanuman Vatika, or the garden belonging to Lord Hanuman, is situated in Civil Township, Rourkela. The garden houses one of the world's tallest statue of Hanuman. Other temples inside the premises are 12 Jyotirlingas, Batta Mangala Devi, Sarala Devi Temple, Jagannath Temple, Lakshmi, and Santoshi Mata Temple.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/29/89/f8/img-20160930-095020-largejpg.jpg?w=2000&h=-1&s=1" />
            <Card.Body>
              <Card.Title className='places-title'>Vaishno Devi Temple</Card.Title>
              <Card.Text className='places-about'>
                A replica of that of original one in Jammu, Vaishno Devi Temple in Rourkela was established back in the year 2000. Perched atop of Durgapur Hill, this shrine is engirdled by thick green forests and scenic surrounding. A climb of around 600 stairs takes tourists to this sacred site in Rourkela. Pilgrims can be seen enchanting prayers and holy verses while climbing up to the temple.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/ec/63/86/the-most-state-of-the.jpg?w=1400&h=800&s=1" />
            <Card.Body>
              <Card.Title className='places-title'>Birsa Munda International Hockey Stadium</Card.Title>
              <Card.Text className='places-about'>
                The Birsa Munda Hockey Stadium is an international field hockey stadium situated at Rourkela, India. The stadium has been named after the tribal leader, Birsa Munda, who was a famous freedom fighter from Khunti, Jharkhand. With a seating capacity of 20,011 permanent seats, it is officially recognised by the Guinness World Records as the largest fully seated hockey arena in the world on January 29, 2023.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </div>
  )
}

export default Places