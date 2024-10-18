import React from 'react'
import './callForPapers.css'
import { useState } from "react";
import aipp from '../Assets/AIPP logo.png'
import pof from '../Assets/POF logo.png'

const callForPapers = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  const topics = [
    {
      title: 'Medicine',
      subtopics: [
        'Human Physiology',
        'Surgical Specialties',
        'Medical Sciences',
        'Medical Microbiology',
        'Social and Preventive Medicine',
        'Complimentary & Alternative Medicine',
        'Preventive Medicine',
        'Medical Ethics and Law',
        'Global Health Challenges',
        'Nutrition and Dietetics',
        'Health Psychology'
      ]
    },
    {
      title: 'Medical Devices',
      subtopics: [
        'Diagnostic Devices',
        'Monitoring Devices',
        'Therapeutic Devices',
        'Prosthetics',
        'Assistive Devices',
        'Rehabilitation Devices',
        'Surgical Tools',
        'Smart Devices',
        'Implantable Devices'
      ]
    },
    {
      title: 'Biomedical Signals',
      subtopics: [
        'Image Reconstruction',
        'Image Segmentation',
        'Feature Extraction',
        'Medical Image Fusion',
        'Bioinstrumentation',
        'Monitoring Devices',
        'Wearable Sensors',
        'Spectral Analysis',
        'Biosensors',
        'Patient Monitoring',
        'Clinical Data Analysis',
        'Clinical Decision Making'
      ]
    },
    {
      title: "Medical Imaging Systems",
    subtopics: [
      "Ultrasound Imaging",
      "Computed Tomography",
      "Magnetic Resonance Imaging",
      "X-ray Imaging",
      "Optical Imaging",
      "Molecular Imaging",
      "Positron Emission Tomography",
      "Single-Photon Emission Computed Tomography",
      "Photoacoustic Imaging",
      "Non-invasive Techniques",
      "Multimodal Imaging",
      "Biological Image Computing",
      "Neuroscience Image Computing",
      "Imaging Genetics",
      "Image-Guided Therapies",
      "Physician-Computer Interfaces"
    ]
  },
    {
      title: 'Healthcare Engineering',
      subtopics: [
        'Health Informatics',
        'Biomedical Data Analytics',
        'Predictive Modelling',
        'Security in Healthcare',
        'Computer Vision & VR',
        'Healthcare Data Visualization',
        'Telehealth and Remote Patient Monitoring',
        'Evolutionary Computing'
      ]
    },
    {
      title: "Biomechanics",
    subtopics: [
      "Gait Analysis",
      "Prosthetics",
      "Rehabilitation",
      "Assistive Technology",
      "Sports Biomechanics",
      "Biomechanics of Injury",
      "Injury Prevention",
      "Heart Mechanics",
      "Artery Mechanics",
      "Atherosclerosis",
      "Heart Valve Mechanics",
      "Hemodynamics",
      "Cardiovascular Devices",
      "Cardiovascular Modeling",
      "Spine Mechanics",
      "Soft Tissue Mechanics",
      "Muscle Mechanics",
      "Joint Mechanics",
      "Sport and Exercise Medicine",
      "Occupational Medicine",
      "Modelling and Simulation",
      "CAD Design & Testing"
    ]
  },
    {
      title: 'Artificial Organs',
      subtopics: [
        'Hearing Aids',
        'Cardiac Pacemakers',
        'Artificial Kidneys/Hearts',
        'Blood Oxygenators',
        'Synthetic Blood Vessels',
        'Artificial Joints Arms and Legs'
      ]
    },
    {
      title: 'Tissue Engineering',
      subtopics: [
        'Wound Healing',
        'Tissue Scaffolds',
        'Soft Tissue Mechanics'
      ]
    },
    {
      title: 'Drug Delivery',
      subtopics: [
        'Targeted Drug Delivery',
        'Controlled Release',
        'Nanoparticle Delivery',
        'Biodegradable Delivery',
        'Implantable Devices',
        'Oral Drug Delivery',
        'Transdermal Drug Delivery',
        'Inhalation Drug Delivery',
        'Injectable Drug Delivery'
      ]
    },
    {
      title: 'Biomaterials',
      subtopics: [
        'Bio-Ceramics',
        'Bio-Polymers',
        'Bio-Composites',
        'Hydrogels',
        'Surface Modification',
        'Biomaterials Design',
        'Intelligent Materials'
      ]
    },
    {
      title: 'Bionanotechnology',
      subtopics: [
        'Nanoparticles',
        'Nanofibers',
        'Nanocomposites',
        'Nanorobotics',
        'Nanotoxicology',
        'BioMEMS Biosensors',
        'Nano-Based Biosensors',
        'Nanoparticle Drug Delivery',
        'Nano Medicine',
        'Wearable Biosensors',
        'Implantable Biosensors',
        'Point-of-Care Biosensors'
      ]
    },
    {
      title: 'Pharmaceutical Sciences',
      subtopics: [
        'Pharmacology',
        'Toxicology',
        'Immunology',
        'Immunogenetics',
        'Allergy and Hypersensitivity',
        'Immunotherapy'
      ]
    },
    {
      title: 'Bioinformatics & Computational Biology',
      subtopics: [
        'Genomics',
        'Proteomics',
        'Gene Expression Analysis',
        'Computational Models',
        'Computer Simulation',
        'Systems Biology',
        'Computational Physiology'
      ]
    },
    {
      title: 'Bioprocess Engineering',
      subtopics: [
        'Bioreactor Design and Operation',
        'Fermentation Technology',
        'Cell Culture Techniques',
        'Metabolic Engineering',
        'Downstream Processing',
        'Bioprocess Optimization',
        'Bioprocess Control and Automation',
        'Bioprocess Economics and Sustainability',
        'Quality Assurance and Regulatory Affairs'
      ]
    },
    {
      title: "AI and Modelling in Bioengineering",
    subtopics: [
      "Forecasting",
      "Big Data Model",
      "Recommender systems",
      "Quantum Computing",
      "Pattern Recognition",
      "Reinforcement Learning",
      "Statistical Analysis",
      "Stochastic Modelling",
      "Bio-inspired algorithms",
      "Deep Learning",
      "Neural networks",
      "Machine learning",
      "Data visualization",
      "AI Algorithms"
      ]
    },
    {
      title: "Modelling and Simulation",
    subtopics: [
      "Agent-Based Simulation",
      "Hybrid Simulation",
      "Simulation and Optimization",
      "Biomathematics",
      "Mathematical Modelling",
      "Cyber-Physical Systems",
      "Cloud Computing",
      "Collaborative Systems",
      "Multi-Physics Simulation",
      "Visualization and Virtual Reality",
      "Green Technologies",
      "Internet of Things"
      ]
    },
    {
      title: 'Biofluid Mechanics',
  subtopics: [
    'Hemodynamics',
    'Blood Rheology',
    'Plasma Protein Dynamics',
    'Non-Newtonian Fluids',
    'Finite Element Analysis',
    'Cardiovascular Flow',
    'Microcirculation',
    'Flow visualization',
    'Vascular Mechanics',
    'Mathematical Simulation',
    'Biochemical Transport',
    'Multiphysics Modeling',
    'Particle Image Velocimetry',
    'Experimental Techniques',
    'Blood-Tissue Interaction',
    'Dialysis and Hemodynamics',
    'Physiological Fluid Models',
    'Interstitial fluid dynamics',
    'Fluid-Structure Interaction',
    'Computational Fluid Dynamics',
    'Respiratory Fluid Mechanics'
      ]
    },
    {
      title: 'Healthcare Engineering',
  subtopics: [
    'Workflow Analysis',
    'Health Systems Management',
    'Healthcare Logistics',
    'Surgical Robots',
    'Robotic-Assisted Surgery',
    'Robot-Assisted Therapy',
    'Rehabilitation Robots',
    'Medical Exoskeletons',
    'Wearable Health Technology',
    'Haptic Feedback in Robotics',
    'Patient Monitoring Systems',
    'Telemedicine and Telehealth',
    'Healthcare Data Management',
    'Machine Learning in Healthcare',
    'Data Mining in Healthcare',
    'Cloud Computing in Healthcare',
    'Ethical Issues in Medical Technology',
    'Regulatory Affairs in Healthcare'
      ]
    },
    {
      title: "Mathematical Bioscience",
    subtopics: [
      "Biostatistics",
      "Bioinformatics",
      "Systems biology",
      "Biomathematics",
      "Mathematical Biology",
      "Mathematics in Biomedicine",
      "Biomathematics and applications",
      "Dynamics of Disease Transmission",
      "Biological Population Modelling",
      "Controlling infectious diseases",
      "Mathematical modelling and simulation",
      "Modeling Cell and Molecular Biology",
      "Modeling Physiological Systems",
      "Stochastic Modelling in Biology",
      "Statistical modelling in biology",
      "Computational Biology"
      ]
    },
    {
      title: 'Others',
      subtopics: [
        'Carbon Capture Techniques',
        'Behavioral Ecology',
        'Evolutionary Ecology',
        'Vector-Borne Disease'
      ]
    }
  ];

  const Dropdown = ({ title, subtopics }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div className="dropdown">
        <div className={`dropdown-title ${isOpen ? 'open' : ''}`} onClick={toggleDropdown}>
          {title}
          <span className={`arrow ${isOpen ? 'down' : 'right'}`} />
        </div>
        <div className={`dropdown-content ${isOpen ? 'open' : ''}`}>
          <ul className="dropdown-list">
            {subtopics.map((subtopic, index) =>
              typeof subtopic === 'string' ? (
                <li key={index}>{subtopic}</li>
              ) : (
                <li key={index}>
                  <Dropdown title={subtopic.title} subtopics={subtopic.subtopics} />
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    );
  };
  return (
    <>
      <h1 className="heading">Key Topics BITES-2024</h1>
      <div className="App">
        <div className="horizontal-dropdown">
          {topics.map((topic, index) => (
            <Dropdown key={index} title={topic.title} subtopics={topic.subtopics} />
          ))}
        </div>
      </div>
      <div className='abstract'>
        <h1 className='head-abstract'>Submission of Abstract</h1>
        <p>
          Authors are invited to submit abstracts of original research work. The abstract should be submitted in the prescribed format through the online submission system. The abstract should clearly state the purpose, results, and conclusions of the work to be described in the final paper. The abstract should be submitted in the prescribed format through the online submission system.
        </p>
        <button onClick={() => openInNewTab('https://forms.gle/YjRAw5J5uQAPjPcUA')} className="btn btn-outline-warning btn-lg">Submit</button>
      </div>
      <div className="publications">
        <h1 className="head-publication">Publication of Extended Papers</h1>
        <p>
          1. Souvenir (conference proceedings)
        <br />
          2. Special Issue - "Fluid Dynamics of Life", Physics of Fluids
          <br />
          3. Journals/Book series (to be updated after consent from the publishers)
        </p>
        <div className="publication-logo">
          <div><img className='publication-logo_1' src={pof} alt="POF" /></div>
          <div><img className='publication-logo_2' src={aipp} alt="AIPP" /></div>
        </div>
      </div>
    </>
  )
}

export default callForPapers