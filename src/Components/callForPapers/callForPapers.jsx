import React from 'react'
import './callForPapers.css'
import { useState } from "react";

const callForPapers = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  const topics = [
    // Inserted the provided topics array here
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
        'Implantable Devices',
        'Automated Patient Monitoring (during surgery, intensive care, astronauts in space, underwater divers)',
        'Advanced Therapeutic and Surgical Devices (laser eye surgery systems, automated insulin delivery)'
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
        'Artificial Joints, Arms, and Legs'
      ]
    },
    {
      title: 'Blood Chemistry Sensors',
      subtopics: [
        'Potassium',
        'Sodium',
        'O2',
        'CO2',
        'pH'
      ]
    },
    {
      title: 'Biomedical Signals',
      subtopics: [
        'Monitoring Devices',
        'Wearable Sensors',
        'Biosensing (Biosensors)',
        'Automated Patient Monitoring'
      ]
    },
    {
      title: 'Biomechanics',
      subtopics: [
        {
          title: 'Biomechanics of Injury and Wound Healing',
          subtopics: [
            'Injury Prevention and Health Protection',
            'Gait Analysis',
            'Biomechanics of Prosthetics',
            'Rehabilitation Biomechanics',
            'Sports Biomechanics',
            'Biomechanics of Injury'
          ]
        },
        {
          title: 'Cardiovascular Mechanics',
          subtopics: [
            'Blood Flow',
            'Heart Mechanics',
            'Artery Mechanics',
            'Atherosclerosis',
            'Heart Valve Mechanics',
            'Hemodynamics',
            'Cardiovascular Devices',
            'Cardiovascular Modeling'
          ]
        },
        {
          title: 'Joint Mechanics and Muscle Mechanics',
          subtopics: [
            'Spine Mechanics',
            'Soft Tissue Mechanics',
            'Biomechanics of Injury',
            'Muscle Mechanics',
            'Joint Mechanics'
          ]
        },
        {
          title: 'Tissue Engineering Mechanics',
          subtopics: [
            'Tissue Scaffolds',
            'Soft Tissue Mechanics'
          ]
        }
      ]
    },
    {
      title: 'Biomaterials and Bionanotechnology',
      subtopics: [
        {
          title: 'Biomaterials',
          subtopics: [
            'Metals',
            'Ceramics',
            'Polymers',
            'Composites',
            'Hydrogels',
            'Surface Modification',
            'Biocompatibility',
            'Biodegradability',
            'Tissue Scaffolds',
            'Biomaterials Design'
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
        }
      ]
    },
    {
      title: 'Computational Biology and Medical Engineering',
      subtopics: [
        {
          title: 'Computational Biology',
          subtopics: [
            'Computational Models',
            'Data Analysis',
            'Simulation',
            'Optimization',
            'Machine Learning',
            'Artificial Intelligence',
            'Computational Systems Biology',
            'Systems Biology',
            'Computational Physiology'
          ]
        },
        {
          title: 'Medical Engineering Systems & Applications',
          subtopics: [
            'Bioinstrumentation',
            'Biomedical Intelligence & Clinical Data Analysis',
            'Computer Modelling of Physiologic Systems (blood pressure control, renal function, visual and auditory nervous circuits)',
            'Design of Optimal Clinical Laboratories (computerized analyzers, cardiac catheterization)',
            'Application of Expert Systems and AI to Clinical Decision Making'
          ]
        },
        {
          title: 'Bioinformatics of Diseases',
          subtopics: [
            'Genomics',
            'Proteomics'
          ]
        }
      ]
    },
    {
      title: 'Bioimaging and Medical Image Computing',
      subtopics: [
        {
          title: 'Medical Imaging Systems',
          subtopics: [
            'Ultrasound Imaging',
            'Computed Tomography (CT)',
            'Magnetic Resonance Imaging (MRI)',
            'X-ray Imaging',
            'Optical Imaging',
            'Molecular Imaging',
            'Positron Emission Tomography (PET)',
            'Single-Photon Emission Computed Tomography (SPECT)',
            'Photoacoustic Imaging',
            'Non-invasive Techniques',
            'Multimodal Imaging',
            'Biological Image Computing',
            'Neuroscience Image Computing',
            'Imaging Genetics'
          ]
        },
        {
          title: 'Medical Image Computing',
          subtopics: [
            'Visualisation and Interaction',
            'Imaging and Analysis Methods for Image-Guided Therapies',
            'Imaging Equipment',
            'Computational Anatomy',
            'Computer-Aided Modelling and Evaluation of Surgical Procedures',
            'Physician-Computer Interfaces (using virtual/mixed/augmented reality)'
          ]
        }
      ]
    },
    {
      title: 'Drug Delivery and Therapeutics',
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
      title: 'Neural and Tissue Engineering',
      subtopics: [
        {
          title: 'Neural Engineering',
          subtopics: [
            'Cell Mechanics Modeling',
            'Cell Adhesion',
            'Cell Migration',
            'Cell Signaling',
            'Cell Stiffness',
            'Cell Differentiation',
            'Cell-Material Interactions',
            'Mechanobiology',
            'Cytoskeleton Mechanics'
          ]
        },
        {
          title: 'Cellular, Tissue and Genetic Engineering',
          subtopics: [
            'Tissue Engineering',
            'Tissue Engineering Mechanics',
            'Cell Mechanics'
          ]
        }
      ]
    },
    {
      title: 'Sports Medicine and Rehabilitation',
      subtopics: [
        'Sports and Exercise Medicine',
        'Rehabilitation Engineering'
      ]
    },
    {
      title: 'Clinical and Biological Applications',
      subtopics: [
        'Medical Robotics',
        'Robotic Vision',
        'Surgical and Interventional Systems',
        'Novel Surgical Devices and Sensors',
        'Advanced Therapeutic Devices',
        'Medical Robots',
        'Rehabilitation Devices'
      ]
    },
    {
      title: 'Toxicology, Immunology, and Social Medicine',
      subtopics: [
        'Toxicology',
        'Immunology',
        'Social and Preventive Medicine'
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
        <button onClick={() => openInNewTab('https://forms.gle/YjRAw5J5uQAPjPcUA')} class="btn btn-outline-warning btn-lg">Submit</button>
      </div>
    </>
  )
}

export default callForPapers