import React from 'react'
import doctorData from '../data/doctorData'

const Research = () => {
    const researchData = doctorData.research;

    const SubCard = ({ title, items }) => {
        return (
            <div className="subcard-container">
                <h3>{title}</h3>
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        );
    };

    return (
        <section className='research' id='research'>
            <h2>{researchData.title}</h2>

            <div className="research-container">
                <div className="research-thesis-container">
                <h3>Thesis</h3>
                    <h4>{researchData.thesis.title}</h4>
                    <p>{researchData.thesis.description}</p>
                </div>

                <div className="research-sub-container">
                    <SubCard
                        title="Publications"
                        items={researchData.publications}
                    />

                    <SubCard
                        title="Presentations"
                        items={researchData.presentations}
                    />

                    <SubCard
                        title="Academic Activities"
                        items={researchData.academicActivities}
                    />
                </div>

            </div>
        </section>
    )
}

export default Research