import React from 'react'
import './Submissions.css'

const Submissions = () => {
        const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
      };
    return (
        <>
            <div className="heading">
                <h1>Scope of Conference</h1>
            </div>
            <div className="topics">
                <p>
                    Biomedical Engineering
                    <br />
                    Biomedical Devices
                    <br />
                    Biofluid Mechanics
                    <br />
                    Biomaterials
                    <br />
                    Biomechanics
                    <br />
                    Biophotonics
                    <br />
                    Biosensors

                </p>
            </div>
            <div className='abstract'>
                <h1 className='head-abstract'>Abstract Submission</h1>
                <p>
                    Authors are invited to submit abstracts of original research work. The abstract should be submitted in the prescribed format through the online submission system. The abstract should clearly state the purpose, results, and conclusions of the work to be described in the final paper. The abstract should be submitted in the prescribed format through the online submission system.
                </p>
                <button onClick={() => openInNewTab('https://forms.gle/YjRAw5J5uQAPjPcUA')} class="btn btn-outline-warning btn-lg">Submit</button>
            </div>
        </>
    )
}

export default Submissions