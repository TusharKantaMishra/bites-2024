// src/components/Speakers.js
import React from 'react';
import './Speaker.css'
const plenarySpeakers = [
    {
        id: 1,
        name: 'Prof. Alan Jeffrey Giacomin',
        designation: 'Editor-in-Chief, Physics of Fluids',
        imageUrl: 'https://www.unr.edu/main/images/colleges-schools/engineering/me/profile/alan-giacomin.jpg'
    },
    {
        id: 2,
        name: 'Dr. Sanjib Mohanty',
        designation: 'Ex Director, IGH Rourkela',
        imageUrl: 'https://scontent.fbbi7-1.fna.fbcdn.net/v/t31.18172-1/18768425_10213397989283589_5427625550832907743_o.jpg?stp=dst-jpg_s200x200&_nc_cat=108&ccb=1-7&_nc_sid=e4545e&_nc_ohc=nUEY0IHXiSEQ7kNvgFJCqxj&_nc_zt=24&_nc_ht=scontent.fbbi7-1.fna&_nc_gid=AS5XvcpNB_9Jhb7ragUmtbr&oh=00_AYBT8g29LW1PNSlrxbhcHaa1vOAhMirkzVubOuv7VaVgQA&oe=675974FD'
    },
    {
        id: 3,
        name: 'Prof. Dhirendra S Katti',
        designation: 'Director, IIT Goa',
        imageUrl: 'https://iitgoa.ac.in/wp-content/uploads/katti-scaled.jpg'
    },
    {
        id: 4,
        name: 'Prof. Ashok Pandey',
        designation: 'Executive Director, Centre for Energy and Env. Sustainability, Lucknow',
        imageUrl: 'https://iitr.res.in/Admin/Upload/a8dcfed0-a80a-472a-a781-7797f0df56dd.jpg'
    },
    {
        id: 5,
        name: 'Prof. Sunil K. Khare',
        designation: 'Director, IISER Kolkata',
        imageUrl: 'https://media.licdn.com/dms/image/v2/D4D03AQF-nSYN2eujIw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1682925093225?e=1736985600&v=beta&t=iwU-xTVl14xtksOp13NZiuGafwdVI16zcSlhkzDCXJA'
    },
    {
        id: 6,
        name: 'Prof. Mukesh K. Gupta',
        designation: 'Director, ICMR-NARFBR, Hyderabad',
        imageUrl: 'https://www.nitrkl.ac.in/docs/Faculty/Photo/1110995.jpg'
    },
    // Add more people as needed
];
const keynoteSpeakersData = [
    {
        id: 1,
        name: 'Prof. Sashikanta Dash',
        designation: 'Dy. Director (Biotech.), S&T Odisha',
        imageUrl: 'https://media.licdn.com/dms/image/v2/C5603AQFqg_wvEaIQrQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1516581987218?e=1736985600&v=beta&t=zvJ5nHGT6G8W63P7PMGKiCT8qEb9NbbZbpTyOEEfPZ4'
    },
    {
        id: 2,
        name: 'Prof. Suman Chakraborty',
        designation: 'Shanti Swarup Bhatnagar Awardee, IIT Kharagpur',
        imageUrl: 'https://ssbprize.gov.in/WriteReadData/AwardeePhotos/201406101227056514378chakrabortysuman.jpg'
    },
    {
        id: 3,
        name: 'Prof. T. Bhaskar',
        designation: 'Scientist F, IIP Dehradun',
        imageUrl: 'https://www.iip.res.in/biofuel-modelling/wp-content/uploads/sites/29/2020/09/Dr-Thallada-Bhaskar.jpg'
    },
    {
        id: 4,
        name: 'Prof. Minakshi Prasad',
        designation: 'Editor-in-Chief, Indian J. of Microbiology',
        imageUrl: 'https://naas.org.in/uploaded_files/member_image/prasad,_minakshi.jpg'
    },
    {
        id: 5,
        name: 'Prof. Luís Miguel Grilo',
        designation: 'Unv. of Evora, Portugal',
        imageUrl: 'https://siiue.uevora.pt/files/foto/284082/size:200'
    },
    {
        id: 6,
        name: 'Dr. Praveen Sahu',
        designation: 'Sr. Scientist, CWS Hospital, Rourkela',
        imageUrl: 'https://media.licdn.com/dms/image/v2/C4D03AQEiMEX-kMnR-g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1663177908163?e=1736985600&v=beta&t=rbuC7zHBhjyLZn1ZMQ7vXWiE-iRUA85mkEVK9Hdmbg4'
    },
    {
        id: 7,
        name: 'Dr. S. Venkata Mohan',
        designation: 'Chief Scientist, IICT Hyderabad',
        imageUrl: 'https://sciprofiles.com/profiles/1236787/S_Venkata_Mohan.png?1731338731'
    },
    {
        id: 8,
        name: 'Prof. G. P. Raja Sekhar',
        designation: 'National Mathematician Awardee, IIT Kharagpur',
        imageUrl: 'https://vaave.s3.amazonaws.com/content/151611131_1682783939_download.jpg'
    },
    {
        id: 9,
        name: 'Prof. Kolla Sreedevi',
        designation: 'Chief Editor, J. of Biological Control',
        imageUrl: 'https://www.nbair.res.in/sites/default/files/2018-12/sreedevi.jpg'
    },
    {
        id: 10,
        name: 'Prof. Suresh Kumar Dubey',
        designation: 'BHU, Varanasi',
        imageUrl: 'https://bhu.ac.in/Content/Photos/Faculties/FA000275.jpeg'
    },
    {
        id: 11,
        name: 'Prof. M Sultan Mohamed Ali',
        designation: 'Qatar University',
        imageUrl: 'https://media.licdn.com/dms/image/v2/C5603AQFLdKdzuEZr2A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1660435756993?e=1736985600&v=beta&t=1NX8yI091HFyz3W_ynsrlx2JzHZwiQ7qsg6O8i8GWoI'
    },
    {
        id: 12,
        name: 'Prof. Kh S. Mekheimer',
        designation: 'Prof. & Ex-Vice Dean (PG), AlAzhar University, Cairo',
        imageUrl: 'https://www.old.aasciences.africa/sites/default/files/Fellows/Kh%20Mekheimer_Photo_0.jpg'
    },
    {
        id: 13,
        name: 'Prof. Bidyut K Mohanty',
        designation: 'VCOM, USA',
        imageUrl: 'https://www.vcom.edu/sites/default/files/styles/headshot/public/2022-08/Mohanty-Bidyut.jpg.jpeg?itok=1yQmd6Hg'
    },
    {
        id: 14,
        name: 'Prof. R. Vinu',
        designation: 'Professor, IIT Madras',
        imageUrl: 'https://tlc2.iitm.ac.in/wp-content/uploads/2023/07/R_Vinu_-_Chem_Engg-removebg-preview.png'
    },
    {
        id: 15,
        name: 'Prof. Anuj Mubayi',
        designation: 'Illinois University, USA',
        imageUrl: 'https://media.licdn.com/dms/image/v2/D5603AQHe3-N4yF33Dw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1706704261013?e=1736985600&v=beta&t=YJ7rtqeufvbyN5gu2zFQx060kBv7vJmE9vFTSsjNwaE'
    },
    {
        id: 16,
        name: 'Dr. Mona Kanso',
        designation: 'PostDoc Assoc, Massachusetts Institute of Technology',
        imageUrl: 'https://media.licdn.com/dms/image/v2/D5603AQGE8JzmELiG_Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1678736458532?e=1736985600&v=beta&t=Fgh8vGJR7k-w7drUDwhlaDECw0OYnHwtvSYRu9IByJA'
    },
    {
        id: 17,
        name: 'Mr. Dhiren Pattanayak',
        designation: 'Asst. Controller (P&D), IPO Kolkata',
        imageUrl: 'https://media.licdn.com/dms/image/v2/C5103AQEfR_C-dQOPWw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1536234362146?e=1736985600&v=beta&t=sW9C6xfH93ZFngZhUebm6bNP2xqzklNa2EyxXdNHL0M'
    },
    {
        id: 18,
        name: 'Prof. Singam Jayanthu',
        designation: 'National Mineral Awardee, NIT Rourkela',
        imageUrl: 'https://www.nitrkl.ac.in/docs/Faculty/Photo/1060823.png'
    }
];
const invitedSpeakersData = [{
    id: 1,
    name: "Vaibhav Mohanty",
    designation: "Harvard University and MIT",
    imageUrl: "https://quincy.harvard.edu/sites/projects.iq.harvard.edu/files/styles/profile_full/public/quincyhouse/files/vaibhav_mohanty_headshot.png?m=1724084377&itok=i4tTwfCT"
},
{
    id: 2,
    name: "Anna Sappington",
    designation: "Harvard University and MIT",
    imageUrl: "https://quincy.harvard.edu/sites/projects.iq.harvard.edu/files/styles/profile_full/public/quincyhouse/files/sappington_anna_m1_001.jpeg?m=1729274266&itok=q_L21TGR"
},
{
    id: 3,
    name: "Prof. Yamini Sudha Sistla",
    designation: "Assoc. Prof. Shiv Nadar University",
    imageUrl: "https://snu.edu.in/site/assets/files/4737/yamini_340x340_1600x0-removebg-preview.1600x0.webp"
},
{
    id: 4,
    name: "Prof. Dhruv Kumar",
    designation: "Prof. & Cluster Head, SoHST Dehradun",
    imageUrl: "https://upes-production-cvb3e7frghdda0a4.z01.azurefd.net/drupal-data/2024-07/Dr.%20Dhruv%20Kumar_0.webp"
},
{
    id: 5,
    name: "Dr. Rajashekhar V. Choudhari",
    designation: "MIT Bengaluru",
    imageUrl: "https://www.manipal.edu/content/dam/manipal/mu/maheblr/mitblr/images/profile/supporting-department/Dr.%20Rajashekhar%20V.%20Choudhari.jpg.transform/manipal-edu-transform-width-height-528px/image.jpg"
},
{
    id: 6,
    name: "Prof. Anurag Kumar Tiwari",
    designation: "Asst. Professor, NIT Jalandhar",
    imageUrl: "https://nitj.ac.in/files/1724257451890-Picture1.jpg"
},
{
    id: 7,
    name: "Prof. Ruchi Mishra Tiwari",
    designation: "Asst. Prof. Symbiosis International",
    imageUrl: "https://media.licdn.com/dms/image/v2/D4D03AQEodkxLPyUt6Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1721039136592?e=1736985600&v=beta&t=E6c9L8A1Xp107V-MWFvlgkJXhHYQZu4rNHnvCclAUqM"
},
{
    id: 8,
    name: "Prof. Jai Prakash Tripathi",
    designation: "Asst. Prof. Central Unv. Rajasthan",
    imageUrl: "https://www.curaj.ac.in/sites/default/files/styles/150_150/public/Photo_Jai.jpg?itok=gTaTxRAh"
},
{
    id: 9,
    name: "Prof. Rajesh Vasita",
    designation: "Asst. Prof. Central Unv. of Gujarat",
    imageUrl: "https://cug.irins.org/assets/profile_images/86769.jpg"
},
{
    id: 10,
    name: "Prof. Vivekanand",
    designation: "Asst. Professor, MNIT Jaipur",
    imageUrl: "https://mnit.ac.in/PortalProfile/images/faculty/mnitjas214.jpg"
},
{
    id: 11,
    name: "Dr. Neha Arya",
    designation: "Asst. Professor, AIIMS Bhopal",
    imageUrl: "https://aiimsbhopal.edu.in/AIIMSFiles/staffImage/Dr._Neha_Arya_1.jpg"
},
{
    id: 12,
    name: "Prof. Chandan Goswami",
    designation: "Professor, NISER Bhubaneswar",
    imageUrl: "https://niser.irins.org/assets/profile_images/240955.png"
},
{
    id: 13,
    name: "Prof. Iswar Baitharu",
    designation: "Asst. Professor, Sambalpur Unv.",
    imageUrl: "https://www.suniv.ac.in/faculty/iswar-baitharu_photo1693368276.jpg"
},
{
    id: 14,
    name: "Prof. Anil Kumar Birru",
    designation: "Head & Assoc. Prof., NIT Manipur",
    imageUrl: "https://nitmanipur.ac.in/ImageGenerator.aspx?imgID=137&command=profile_pic&w=100&h=100"
},
{
    id: 15,
    name: "Prof. Alok Jain",
    designation: "Asst. Professor, BIT Mesra",
    imageUrl: "https://www.bitmesra.ac.in/UploadedDocuments/useralokjain/FacultyImage/FacImg45255e9d08b4441bad2c4a5e00ed2484AJ.png"
},
{
    id: 16,
    name: "Prof. Danumjaya Palla",
    designation: "Professor, BITS Pilani, Goa",
    imageUrl: "https://www.bits-pilani.ac.in/wp-content/uploads/Danu-Photo.jpg"
},
{
    id: 17,
    name: "Prof. Tikam Chand Dakal",
    designation: "Asst. Prof., Mohanlal Sukhadia Unv.",
    imageUrl: "https://www.mlsu.ac.in/profilepics/538_1043%20OK%20copy%20-%20Copy.jpg"
},
{
    id: 18,
    name: "Prof. Aradhana Mishra",
    designation: "Sr. Principal Sc., NBRI, Lucknow",
    imageUrl: "https://nbri.res.in/media/Dr_Aradhana.jpg"
},
{
    id: 19,
    name: "Prof. Debasmita Dubey",
    designation: "Assoc. Professor, SOA Unv BBS",
    imageUrl: "https://i1.rgstatic.net/ii/profile.image/11431281247091738-1716634969700_Q128/Debasmita-Dubey.jpg"
},
{
    id: 20,
    name: "Prof. Raj Kumar Joshi",
    designation: "Prof. & Head, Rama Devi Women's Unv., Bhubaneswar",
    imageUrl: "https://media.licdn.com/dms/image/v2/D5603AQGdk-HhAf9e2Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1669472619706?e=1736985600&v=beta&t=WkGpO0laVCHpaUzHowVYWN_0Ln-rs0j2_g8BSVPzFxY"
},
{
    id: 21,
    name: "Prof. Era Jain",
    designation: "Asst. Prof., Syracuse University",
    imageUrl: "https://ecs.syracuse.edu/wp-content/uploads/2021/10/era.jpg"
},
{
    id: 22,
    name: "Prof. Sirsendu Sekhar Ray",
    designation: "Professor, North-Eastern Hill University",
    imageUrl: "https://nehu.ac.in/public/assets/images/faculty/IMG_sirsendu_sekhar_ray.jpg"
},
{
    id: 23,
    name: "Prof. Akhilesh K Shakya",
    designation: "Asst. Prof. of Prac., Texas T. Unv",
    imageUrl: "https://media.licdn.com/dms/image/v2/C5103AQHZv7v7Tn_c2w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1516741336225?e=1736985600&v=beta&t=OO_PpTlTNY9HWJ12sxuRgAoxCXJnO5kf4K6gaoE1Ks0"
},
{
    id: 24,
    name: "Prof. Rakesh K. Mishra",
    designation: "Head & Asst. Prof., NIT UK",
    imageUrl: "https://portfolios.nituk.ac.in/uploads/users/16606499088070.jpeg"
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
