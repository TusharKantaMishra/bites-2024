import React, { useState } from 'react'
import './Places.css'

const Places = () => {
  const places = [
    {
      name: 'Hanuman Vatika',
      description: 'Hanuman Vatika named after one of the highest statue of Hanuman. Inaugurated in the year 1994 by the then Chief Minister of Orissa, Biju Patnaik. Here a statue of Hanuman is constructed with the height of 75 feet. There are also a number of temples named as Bata Managla, Binayak, Vaishnodevi, Sarala, Dwadash Linga, Siva, Santoshi Maa, Maa Laxmi etc constructed here for the devotees. Because of beauty scenario and green area, number of general visitors came to this place every day here.',
      distance: '6.5 km',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Hanuman_Vatika_Rourkela.JPG?20110619183425' 
    },
    {
      name: 'Vedvyas Temple',
      description: 'Vedyas temple is situated just after sangam of river shanka and koel from were it is called river Bramhani, maharshi vedvyas written Mahabharat here only below sitting a rock. One can see that place here worshipped by devotees. Ghat nearby temple is also very scenic and beautiful. ',
      distance: '19.7 km',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS85Ngamsx2zxCgtw4h4tBcKqODkaEvZQgzw&s'
    },
    {
      name: 'IG Park',
      description: 'This is a perfect place to spend time with family, particularly kids. They can enjoy at the park’s mini zoo and aquarium, spot animals like deer, crocodile, black bear and varieties of colourful fish. One can also visit the fascinating doll museum, rose garden, Japanese garden, and fountain. Children can even enjoy the toy train ride and boating.',
      distance: '4.2 km',
      image: 'https://im.hunt.in/cg/Rourkela/City-Guide/ParksRKL.png'
    },
    {
      name: 'Uditnagar Market',
      description: 'Built in 1960, the VIP market is one of the oldest marketplaces in Rourkela. The market has got this name owing to its high-profile customers visiting this shopping area. VIP market has 36 big and 32 low-profile shops located close to each other, run by local Odisha traders who have their home on the first floor of the shops. From daily need items, knick-knacks to local handicrafts; one can get everything here while exploring this age-old VIP market.',
      distance: '5 km',
      image: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Karol_Bagh%2C_2008_%286%29.JPG'
    },
    {
      name: 'Darjing Waterfall',
      description: 'A family picnic at Darjing is one of the most amazing things to do in Rourkela. Nestled on the bank of river Brahmani, Darjing is a popular scenic spot. Known for its picturesque charm and serenity, this is one of the best romantic places in Rourkela. For couples, a leisure walk is one of the most sought-after things to do in Rourkela. One can even plan a day picnic with friends and families or can spend the day at the Inspection Bungalow located there. ',
      distance: '50 km',
      image: 'https://live.staticflickr.com/3871/32861108973_b2cd39a9b3_b.jpg' 
    },
    {
      name: 'Vaishno Devi Temple',
      description: 'Visit to believe that Mata Vaishno Devi Mandir in Rourkela is exactly the replica of the one at Jammu. Located on a hilltop, this temple was constructed in 2003 and attracts devotees round the year particularly during Navaratri Festival. Besides offering prayers and seeking blessings from Mata Rani, this place offers a jaw dropping view of the entire city.',
      distance: '4.4 km',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxV95rkaCuOY1Lfzi6bM0U9YQTcTwlhGg6Kg&s'
    },
    {
      name: 'Jagannath Temple',
      description: 'Devoted to Lord Jagannath, Lord Balarama and Goddess Subhadra, this is a sparkling white temple in Rourkela. Constructed in 1975, this 90 m high temple showcases splendid architectural wonders. Visiting here for some peaceful time and worship is one of the most rejuvenating things to do in Rourkela, Odisha. Located in Ahirabandh, this is also known as Ahirabandh Jagannath Temple and the place attracts visitors from different parts of India throughout the year, particularly during Rath Yatra.',
      distance: '3.4 km',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS6DQZ2ggbqopN30d3XqJvVxtqJoZ5yikWow&s'
    },
    {
      name: 'Badaghagra Falls',
      description: 'An offbeat yet exceptionally beautiful waterfall in Kendujhar district. Badaghagra attracts tourists with its serenity and scenic aura. Plunging from a height of 200 feet, Badaghagra Falls is a perfect place for a fun-filled day picnic. Those who are planning to trek, do not miss your trekking shoes as the trail is quite undulating.',
      distance: '161 km',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4A6c010GcBMkCxf_tzvEcCFNtG7F8qjNxNQ&s'
    },
    {
      name: 'Khandadhar Waterfall',
      description: 'Located on the outskirts of Rourkela in the Nandapani region, Khandadhar Falls is one of the major scenic attractions of the place. Trekking up to the Khandadhar Falls is one of the most exciting things to do in Rourkela. Korapani Nala plunges from an altitude of 240 m to form Khandadhar Falls which is one of the highest waterfalls in Odisha.',
      distance: '129 km',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp8vIxqvEzBZhfhkUhyROU1KGqp8q-cnKXgg&s'
    },
    {
      name: 'Hirakud Dam',
      description: 'Hirakud Dam is one of the longest dams of the world, located at a distance of 15km from the main city of Sambalpur in Odisha. It is world’s longest earthen dam of about 16 miles, around 26 km in length. Built on the River Mahanadi at a cost of Rs.1000 millions, the Hirakud Dam project is one of its kinds in the entire country. After India’s independence it is said to one of the first major multi-use river valley project.',
      distance: '192 km',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Hirakud_Dam_Panorama_%28cropped%29.jpg/1200px-Hirakud_Dam_Panorama_%28cropped%29.jpg?20200523104111'
    },
  ];
  const [expanded, setExpanded] = useState(places.map(() => false));

  const toggleReadMore = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  return (
    <div className="places-container">
      <h1 className='heading'>Places to Visit</h1>
      <div className="places-list">
        {places.map((place, index) => (
          <div className="place-card" key={index}>
            <img src={place.image} alt={place.name} className="place-image" />
            <h4>{place.name}</h4>
            <p>
              {expanded[index] ? place.description : place.shortDescription}
            </p>
            <p><strong>Distance:</strong> {place.distance}</p>
            <button className='read-more' onClick={() => toggleReadMore(index)}>
              {expanded[index] ? 'Read Less' : 'Read More'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
  //return (
  //   <div>
  //     <h1 className='heading'>Places to Visit</h1>
  //     <div className="places-body">
  //       <CardGroup>
  //         <Card className='places-each'>
  //           <Card.Img variant="top" src="https://www.gosahin.com/go/p/i/t1/1565504238_hanuman-vatika-rourkela1.jpg" />
  //           <Card.Body>
  //             <Card.Title className='places-title'>Hanuman Vatika</Card.Title>
  //             <Card.Text className='places-about'>
  //               Hanuman Vatika, or the garden belonging to Lord Hanuman, is situated in Civil Township, Rourkela. The garden houses one of the world's tallest statue of Hanuman. Other temples inside the premises are 12 Jyotirlingas, Batta Mangala Devi, Sarala Devi Temple, Jagannath Temple, Lakshmi, and Santoshi Mata Temple.
  //             </Card.Text>
  //           </Card.Body>
  //         </Card>
  //         <Card className='places-each'>
  //           <Card.Img variant="top" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/29/89/f8/img-20160930-095020-largejpg.jpg?w=2000&h=-1&s=1" />
  //           <Card.Body>
  //             <Card.Title className='places-title'>Vaishno Devi Temple</Card.Title>
  //             <Card.Text className='places-about'>
  //               A replica of that of original one in Jammu, Vaishno Devi Temple in Rourkela was established back in the year 2000. Perched atop of Durgapur Hill, this shrine is engirdled by thick green forests and scenic surrounding. A climb of around 600 stairs takes tourists to this sacred site in Rourkela. Pilgrims can be seen enchanting prayers and holy verses while climbing up to the temple.
  //             </Card.Text>
  //           </Card.Body>
  //         </Card>
  //       </CardGroup>
  //       <CardGroup>
  //         <Card className='places-each'>
  //           <Card.Img variant="top" src="https://www.gosahin.com/go/p/i/t1/1565504238_hanuman-vatika-rourkela1.jpg" />
  //           <Card.Body>
  //             <Card.Title className='places-title'>Hanuman Vatika</Card.Title>
  //             <Card.Text className='places-about'>
  //               Hanuman Vatika, or the garden belonging to Lord Hanuman, is situated in Civil Township, Rourkela. The garden houses one of the world's tallest statue of Hanuman. Other temples inside the premises are 12 Jyotirlingas, Batta Mangala Devi, Sarala Devi Temple, Jagannath Temple, Lakshmi, and Santoshi Mata Temple.
  //             </Card.Text>
  //           </Card.Body>
  //         </Card>
  //         <Card className='places-each'>
  //           <Card.Img variant="top" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/ec/63/86/the-most-state-of-the.jpg?w=1400&h=800&s=1" />
  //           <Card.Body>
  //             <Card.Title className='places-title'>Birsa Munda International Hockey Stadium</Card.Title>
  //             <Card.Text className='places-about'>
  //               The Birsa Munda Hockey Stadium is an international field hockey stadium situated at Rourkela, India. The stadium has been named after the tribal leader, Birsa Munda, who was a famous freedom fighter from Khunti, Jharkhand. With a seating capacity of 20,011 permanent seats, it is officially recognised by the Guinness World Records as the largest fully seated hockey arena in the world on January 29, 2023.
  //             </Card.Text>
  //           </Card.Body>
  //         </Card>
  //         </CardGroup>
  //     </div>
  //   </div>
  // )
//}

export default Places