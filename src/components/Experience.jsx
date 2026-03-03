import React from "react";
import doctorData from "../data/doctorData";
import "./styles.css";
import TabbedPanel from "./tabbed-pannel/TabbedPannel";

const Experience = () => {
  const experienceData = doctorData.experience;

  // Convert currentRole into tab structure
  const tabs = [
    {
      label: experienceData.currentRole.position,
      responsibilities: experienceData.currentRole.responsibilities,
    },
  ];

  return (
    <section className="experience" id="experience">
      <h2 className="experience__title">
        {experienceData.title}
      </h2>

      <TabbedPanel
        tabs={tabs}
        tabClass="experience__tab"
        panelClass="experience__panel"
        renderContent={(tab) => (
          <div className="experience__card">
            <h3 className="experience__position">{tab.label}</h3>

            <ul className="experience__list">
              {tab.responsibilities.map((item, index) => (
                <li key={index} className="experience__item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      />
    </section>
  );
};

export default Experience;