// src/components/Speakers.js
import React from 'react';
import './Speaker.css'
const plenarySpeakers = [
    {
        id: 1,
        name: 'Prof. Alan Jeffrey Giacomin',
        designation: 'Editor-in-Chief, Physics of Fluids',
        date: '18th - 20th December 2024',
        imageUrl: 'https://via.placeholder.com/100'
    },
    {
        id: 2,
        name: 'Dr. Sanjib Mohanty',
        designation: 'Ex Director, IGH Rourkela',
        imageUrl: 'https://via.placeholder.com/100'
    },
    {
        id: 3,
        name: 'Prof. Dhirendra S Katti',
        designation: 'Director, IIT Goa',
        imageUrl: 'https://via.placeholder.com/100'
    },
    {
        id: 4,
        name: 'Prof. Ashok Pandey',
        designation: 'Executive Director, Centre for Energy and Env. Sustainability, Lucknow',
        imageUrl: 'https://via.placeholder.com/100'
    },
    {
        id: 5,
        name: 'Prof. Sunil K. Khare',
        designation: 'Director, IISER Kolkata',
        imageUrl: 'https://via.placeholder.com/100'
    },
    {
        id: 6,
        name: 'Prof. Mukesh K. Gupta',
        designation: 'Director, ICMR-NARFBR, Hyderabad',
        imageUrl: 'https://via.placeholder.com/100'
    },
    // Add more people as needed
];
const keynoteSpeakersData = [
    {
        id: 1,
        name: 'Prof. Sashikanta Dash',
        designation: 'Dy. Director (Biotech.), S&T Odisha',
        imageUrl: 'https://via.placeholder.com/100'
    },
    {
        id: 2,
        name: 'Prof. Suman Chakraborty',
        designation: 'Shanti Swarup Bhatnagar Awardee, IIT Kharagpur',
        imageUrl: 'https://via.placeholder.com/100'
    },
    {
        id: 3,
        name: 'Prof. T. Bhaskar',
        designation: 'Scientist F, IIP Dehradun',
        imageUrl: 'https://via.placeholder.com/100'
    },
    {
        id: 4,
        name: 'Prof. Minakshi Prasad',
        designation: 'Editor-in-Chief, Indian J. of Microbiology',
        imageUrl: 'https://via.placeholder.com/100'
    },
    {
        id: 5,
        name: 'Prof. Luís Miguel Grilo',
        designation: 'Unv. of Evora, Portugal',
        imageUrl: 'https://via.placeholder.com/100'
    },
    {
        id: 6,
        name: 'Dr. Praveen Sahu',
        designation: 'Sr. Scientist, CWS Hospital, Rourkela',
        imageUrl: 'https://via.placeholder.com/100'
    },
    {
        id: 7,
        name: 'Dr. S. Venkata Mohan',
        designation: 'Chief Scientist, IICT Hyderabad',
        imageUrl: 'https://via.placeholder.com/100'
    },
    {
        id: 8,
        name: 'Prof. G. P. Raja Sekhar',
        designation: 'National Mathematician Awardee, IIT Kharagpur',
        imageUrl: 'https://via.placeholder.com/100'
    },
    {
        id: 9,
        name: 'Prof. Kolla Sreedevi',
        designation: 'Chief Editor, J. of Biological Control',
        imageUrl: 'https://via.placeholder.com/100'
    },
    {
        id: 10,
        name: 'Prof. Suresh Kumar Dubey',
        designation: 'BHU, Varanasi',
        imageUrl: 'https://via.placeholder.com/100'
    },
    {
        id: 11,
        name: 'Prof. M Sultan Mohamed Ali',
        designation: 'Qatar University',
        imageUrl: 'https://via.placeholder.com/100'
    },
    {
        id: 12,
        name: 'Prof. Kh S. Mekheimer',
        designation: 'Prof. & Ex-Vice Dean (PG), AlAzhar University, Cairo',
        imageUrl: 'https://via.placeholder.com/100'
    },
    {
        id: 13,
        name: 'Prof. Bidyut K Mohanty',
        designation: 'VCOM, USA',
        imageUrl: 'https://via.placeholder.com/100'
    },
    {
        id: 14,
        name: 'Prof. R. Vinu',
        designation: 'Professor, IIT Madras',
        imageUrl: 'https://via.placeholder.com/100'
    },
    {
        id: 15,
        name: 'Prof. Anuj Mubayi',
        designation: 'Illinois University, USA',
        imageUrl: 'https://via.placeholder.com/100'
    },
    {
        id: 16,
        name: 'Dr. Mona Kanso',
        designation: 'PostDoc Assoc, Massachusetts Institute of Technology',
        imageUrl: 'https://via.placeholder.com/100'
    },
    {
        id: 17,
        name: 'Prof. Singam Jayanthu',
        designation: 'National Mineral Awardee, NIT Rourkela',
        imageUrl: 'https://via.placeholder.com/100'
    },
    {
        id: 18,
        name: 'Mr. Dhiren Pattanayak',
        designation: 'Asst. Controller (P&D), IPO Kolkata',
        imageUrl: 'https://via.placeholder.com/100'
    }
];
const invitedSpeakersData = [{
    id: 1,
    name: "Vaibhav Mohanty",
    designation: "Harvard University and MIT",
    imageUrl: "https://via.placeholder.com/100"
},
{
    id: 2,
    name: "Anna Sappington",
    designation: "Harvard University and MIT",
    imageUrl: "https://via.placeholder.com/100"
},
{
    id: 3,
    name: "Prof. Yamini Sudha Sistla",
    designation: "Assoc. Prof. Shiv Nadar University",
    imageUrl: "https://via.placeholder.com/100"
},
{
    id: 4,
    name: "Prof. Dhruv Kumar",
    designation: "Prof. & Cluster Head, SoHST Dehradun",
    imageUrl: "https://via.placeholder.com/100"
},
{
    id: 5,
    name: "Dr. Rajashekhar V. Choudhari",
    designation: "MIT Bengaluru",
    imageUrl: "https://via.placeholder.com/100"
},
{
    id: 6,
    name: "Prof. Anurag Kumar Tiwari",
    designation: "Asst. Professor, NIT Jalandhar",
    imageUrl: "https://via.placeholder.com/100"
},
{
    id: 7,
    name: "Prof. Ruchi Mishra Tiwari",
    designation: "Asst. Prof. Symbiosis International",
    imageUrl: "https://via.placeholder.com/100"
},
{
    id: 8,
    name: "Prof. Jai Prakash Tripathi",
    designation: "Asst. Prof. Central Unv. Rajasthan",
    imageUrl: "https://via.placeholder.com/100"
},
{
    id: 9,
    name: "Prof. Rajesh Vasita",
    designation: "Asst. Prof. Central Unv. of Gujarat",
    imageUrl: "https://via.placeholder.com/100"
},
{
    id: 10,
    name: "Prof. Vivekanand",
    designation: "Asst. Professor, MNIT Jaipur",
    imageUrl: "https://via.placeholder.com/100"
},
{
    id: 11,
    name: "Dr. Neha Arya",
    designation: "Asst. Professor, AIIMS Bhopal",
    imageUrl: "https://via.placeholder.com/100"
},
{
    id: 12,
    name: "Prof. Chandan Goswami",
    designation: "Professor, NISER Bhubaneswar",
    imageUrl: "https://via.placeholder.com/100"
},
{
    id: 13,
    name: "Prof. Iswar Baitharu",
    designation: "Asst. Professor, Sambalpur Unv.",
    imageUrl: "https://via.placeholder.com/100"
},
{
    id: 14,
    name: "Prof. Anil Kumar Birru",
    designation: "Head & Assoc. Prof., NIT Manipur",
    imageUrl: "https://via.placeholder.com/100"
},
{
    id: 15,
    name: "Prof. Alok Jain",
    designation: "Asst. Professor, BIT Mesra",
    imageUrl: "https://via.placeholder.com/100"
},
{
    id: 16,
    name: "Prof. Danumjaya Palla",
    designation: "Professor, BITS Pilani, Goa",
    imageUrl: "https://via.placeholder.com/100"
},
{
    id: 17,
    name: "Prof. Tikam Chand Dakal",
    designation: "Asst. Prof., Mohanlal Sukhadia Unv.",
    imageUrl: "https://via.placeholder.com/100"
},
{
    id: 18,
    name: "Prof. Aradhana Mishra",
    designation: "Sr. Principal Sc., NBRI, Lucknow",
    imageUrl: "https://via.placeholder.com/100"
},
{
    id: 19,
    name: "Prof. Debasmita Dubey",
    designation: "Assoc. Professor, SOA Unv BBS",
    imageUrl: "https://via.placeholder.com/100"
},
{
    id: 20,
    name: "Prof. Raj Kumar Joshi",
    designation: "Prof. & Head, Rama Devi Women's Unv., Bhubaneswar",
    imageUrl: "https://via.placeholder.com/100"
},
{
    id: 21,
    name: "Prof. Era Jain",
    designation: "Asst. Prof., Syracuse University",
    imageUrl: "https://via.placeholder.com/100"
},
{
    id: 22,
    name: "Prof. Sirsendu Sekhar Ray",
    designation: "Professor, North-Eastern Hill University",
    imageUrl: "https://via.placeholder.com/100"
},
{
    id: 23,
    name: "Prof. Akhilesh K Shakya",
    designation: "Asst. Prof. of Prac., Texas T. Unv",
    imageUrl: "https://via.placeholder.com/100"
},
{
    id: 24,
    name: "Prof. Rakesh K. Mishra",
    designation: "Head & Asst. Prof., NIT UK",
    imageUrl: "https://via.placeholder.com/100"
}
];
const Speakers = () => {
    return (
        <div>
            <h1 className="heading">Speakers</h1>
            <h2 className="co-heading">Plenary Speakers</h2>
            <div className="section">
                <div className="card-container-speaker">
                    {plenarySpeakers.map(speaker => (
                        <div key={speaker.id} className="card-speaker">
                            <img src={speaker.imageUrl} alt={speaker.name} className="profile-image" />
                            <h3 className="name">{speaker.name}</h3>
                            <p className="designation">{speaker.designation}</p>
                            {speaker.date && <p className="date">{speaker.date}</p>}
                        </div>
                    ))}
                </div>
            </div>

            <h2 className="co-heading">Keynote Speakers</h2>
            <div className="section">
                <div className="card-container-speaker keynote">
                    {keynoteSpeakersData.map(speaker => (
                        <div key={speaker.id} className="card-speaker">
                            <img src={speaker.imageUrl} alt={speaker.name} className="profile-image" />
                            <h3 className="name">{speaker.name}</h3>
                            <p className="designation">{speaker.designation}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="section">
                <h2 className="co-heading">Invited Speakers</h2>
                <div className="card-container-speaker invited">
                    {invitedSpeakersData.map(speaker => (
                        <div key={speaker.id} className="card-speaker">
                            <img src={speaker.imageUrl} alt={speaker.name} className="profile-image" />
                            <h3 className="name">{speaker.name}</h3>
                            <p className="designation">{speaker.designation}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// const Speakers = () => {

//     return (

//         <>
//             <div className="heading">
//                 <h1 className='heading'>Speakers of BITES-2024</h1>
//             </div>
//             <div className="container-speaker">
//                 <div className="row-2">
//                     <div className="card">
//                         <div className="card-body p-3">
//                             <h1 className="card-title-address">Keynote Address</h1>


//                             <h5 className="card-title">Prof. Mohamed Sultan Mohamed Ali</h5>
//                             <p className="card-text">
//                             Universiti Teknologi Malaysia         
//                             </p>
//                             <h5 className="card-title">Prof. T Bhaskar </h5>
//                             <p className="card-text">
//                             Scientist F, IIP Dehradun         
//                             </p>
//                             <h5 className="card-title">Prof. Suman Chakraborty</h5>
//                             <p className="card-text">
//                                 Shanti Swarup Bhatnagar Awardee,
//                                 <p>Professor, IIT Kharagpur</p>
//                             </p>
//                             <h5 className="card-title">Prof. Sashikanta Dash</h5>
//                             <p className="card-text">
//                             Dy. Director (Biotech.),  
//                                 <p>S&T Odisha</p>          
//                             </p>
//                             <h5 className="card-title">Prof. Suresh Kumar Dubey</h5>
//                             <p className="card-text">
//                             Professor, BHU, Varanasi         
//                             </p>
//                             <h5 className="card-title">Prof. Alan Jeffrey Giacomin</h5>
//                             <p className="card-text">
//                             Editor-in-Chief, Physics of Fluids           
//                             </p>
//                             <h5 className="card-title">Prof. Mukesh K Gupta </h5>
//                             <p className="card-text">
//                                 Director, ICMR-NARFBR, Hyderabad
//                             </p>
//                             <h5 className="card-title">Prof. Luís Miguel Grilo</h5>
//                             <p className="card-text">
//                                 Professor, University of Evora, Portugal
//                             </p>
//                             <h5 className="card-title">Prof. Singam Jayanthu</h5>
//                             <p className="card-text">
//                             National Mineral Awardee 
//                             Professor, 
//                                 <p>NIT Rourkela </p>          
//                             </p>
//                             <h5 className="card-title">Dr. Mona Kanso</h5>
//                             <p className="card-text">
//                             PostDoc Assoc, Massachusetts,  
//                                 <p>Institute of Technology</p>          
//                             </p>
//                             <h5 className="card-title">Prof. Dhirendra S Katti</h5>
//                             <p className="card-text">
//                                 Director, IIT Goa
//                             </p>
//                             <h5 className="card-title">Prof. Kh S Mekheimer </h5>
//                             <p className="card-text">
//                                 Professor & Ex-Vice Dean (PG)
//                                 <p>Al-Azhar University, Cairo</p>
//                             </p>         
//                             <h5 className="card-title">Dr. Sanjib Mohanty</h5>
//                             <p className="card-text">
//                                 Ex Director
//                                 Ispat General Hospital (IGH), Rourkela
//                             </p>
//                             <h5 className="card-title">Prof. Anuj Mubayi</h5>
//                             <p className="card-text">
//                             Illinois University USA          
//                             </p>
//                             <h5 className="card-title">Prof. Sunil K Khare</h5>
//                             <p className="card-text">
//                                 Director, IISER Kolkata
//                             </p>
//                             <h5 className="card-title">Prof. Ashok Pandey </h5>
//                             <p className="card-text">
//                                 Exe. Director (Honorary)
//                                 xecutive Director, <p>Centre for Energy and Env. Sustainability, Lucknow</p>           
//                             </p>
//                             <h5 className="card-title">Mr. Dhiren Pattanayak</h5>
//                             <p className="card-text">
//                             Asst. Controller (P&D),
//                             <p>IPO Kolkata</p>         
//                             </p>
//                             <h5 className="card-title">Prof. Minakshi Prasad</h5>
//                             <p className="card-text">
//                             Editor-in-Chief, 
//                                 <p>Indian J. of Microbiology</p>          
//                             </p>
//                             <h5 className="card-title">Dr. Praveen Sahu</h5>
//                             <p className="card-text">
//                             Sr. Scientist, CWS Hospital, Rourkela          
//                             </p>
//                             <h5 className="card-title">Prof. Kolla Sreedevi</h5>
//                             <p className="card-text">
//                             Chief Editor, J. of Biological Control          
//                             </p>
//                             <h5 className="card-title">Dr. S Venkata Mohan</h5>
//                             <p className="card-text">
//                             Chief Scientist, IICT Hyderabad           
//                             </p>
//                             <h5 className="card-title">Prof. R Vinu </h5>
//                             <p className="card-text">
//                             Professor, IIT Madras          
//                             </p>
//                         </div>

//                     </div>

//                     <div className="card">
//                         <div className="card-body p-4">
//                             <h1 className="card-title-address" >Invited Address</h1>

//                             <h5 className="card-title">Ms. Anna Sappington</h5>
//                             <p className="card-text">
//                             Massachusetts Institute of Tech.  
//                             </p>
//                             <h5 className="card-title">Dr. Neha Arya </h5>
//                             <p className="card-text">
//                             Asst. Professor, AIIMS Bhopal 
//                             </p>
//                             <h5 className="card-title">Prof. Iswar Baitharu</h5>
//                             <p className="card-text">
//                             Asst. Professor, Sambalpur University 
//                             </p>
//                             <h5 className="card-title">Prof. Anil Kumar Birru</h5>
//                             <p className="card-text">
//                             Head & Assoc. Professor, NIT Manipur 
//                             </p>
//                             <h5 className="card-title">Dr. Tikam Chand Dakal</h5>
//                             <p className="card-text">
//                             Asst. Prof., Mohanlal Sukhadia Unv. 
//                             </p>
//                             <h5 className="card-title">Prof. Debasmita Dubey</h5>
//                             <p className="card-text">
//                             Assoc. Professor, SOA Unv BBS
//                             </p>
//                             <h5 className="card-title">Prof. Chandan Goswami</h5>
//                             <p className="card-text">
//                             Professor, NISER Bhubaneswar
//                             </p>
//                             <h5 className="card-title">Prof. Raj Kumar Joshi</h5>
//                             <p className="card-text">
//                             Prof. & Head, Rama Devi Women's Unv., Bhubaneswar  
//                             </p>
//                             <h5 className="card-title">Prof. Alok Jain</h5>
//                             <p className="card-text">
//                             Asst. Professor, BIT Mesra 
//                             </p>
//                             <h5 className="card-title">Prof. Era Jain</h5>
//                             <p className="card-text">
//                             Asst. Prof., Syracuse University 
//                             </p>
//                             <h5 className="card-title">Prof. Dhruv Kumar</h5>
//                             <p className="card-text">
//                             Prof. & Cluster Head, SoHST Dehradun 
//                             </p>
//                             <h5 className="card-title">Prof. Aradhana Mishra</h5>
//                             <p className="card-text">
//                             Sr. Principal Scientist, NBRI, Lucknow  
//                             </p>
//                             <h5 className="card-title">Prof. Aradhana Mishra </h5>
//                             <p className="card-text">
//                             Sr. Principal Sc., NBRI, Lucknow   
//                             </p>
//                             <h5 className="card-title">Prof. Rakesh K. Mishra</h5>
//                             <p className="card-text">
//                             Head & Asst. Prof., NIT UK  
//                             </p>
//                             <h5 className="card-title">Prof. Danumjaya Palla</h5>
//                             <p className="card-text">
//                             Professor, BITS Pilani, Goa 
//                             </p>
//                             <h5 className="card-title">Prof. Sirsendu Sekhar Ray </h5>
//                             <p className="card-text">
//                             Professor, North-Eastern Hill University, Shillong  
//                             </p>
//                             <h5 className="card-title">Prof. Akhilesh K Shakya</h5>
//                             <p className="card-text">
//                             Asst. Prof. of Prac., Texas Tech Unv. 
//                             </p>
//                             <h5 className="card-title">Prof. Yamini Sudha Sistla </h5>
//                             <p className="card-text">
//                             Assoc. Professor, Shiv Nadar University
//                             </p>
//                             <h5 className="card-title">Prof. Anurag Kumar Tiwari</h5>
//                             <p className="card-text">
//                             Asst. Professor, NIT Jalandhar
//                             </p>
//                             <h5 className="card-title">Prof. Ruchi Mishra Tiwari </h5>
//                             <p className="card-text">
//                             Asst. Professor, Symbiosis International (Deemed Unv.)
//                             </p>
//                             <h5 className="card-title">Prof. Jai Prakash Tripathi </h5>
//                             <p className="card-text">
//                             Asst. Professor, Central Unv. Rajasthan 
//                             </p>
//                             <h5 className="card-title">Prof. Rajesh Vasita</h5>
//                             <p className="card-text">
//                             Asst. Prof., Central Unv. of Gujarat
//                             </p>
//                              <h5 className="card-title">Dr. Vaibhav Mohanty </h5>
//                             <p className="card-text">
//                             Hertz Fellow (2023), Harvard University and MIT
//                             </p>
//                              <h5 className="card-title">Prof. Vivekanand </h5>
//                             <p className="card-text">
//                             Asst. Professor, MNIT Jaipur
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

export default Speakers;
