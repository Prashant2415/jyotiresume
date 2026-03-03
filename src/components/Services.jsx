import React from "react";
import doctorData from "../data/doctorData";
import "./styles.css";
import TabbedPanel from "./tabbed-pannel/TabbedPannel";

const Services = () => {
  const servicesData = doctorData.services;

  const tabs = servicesData.categories.map((category) => ({
    label: category.categoryName,
    description: category.description,
    items: category.items,
  }));

  return (
    <section className="services" id="services">
      <h2 className="services__title">{servicesData.title}</h2>

      <TabbedPanel
        tabs={tabs}
        tabClass="services__tab"
        panelClass="services__panel"
        renderContent={(tab) => (
          <>
            <div className="services__panel-div">
              <h3 className="services__card-title">{tab.label}</h3>
              <p className="services__category-description">
                {tab.description}
              </p>
            </div>

            <ul className="services__list">
              {tab.items.map((item, i) => (
                <li key={i} className="services__list-item">
                  {item}
                </li>
              ))}
            </ul>
          </>
        )}
      />
    </section>
  );
};

export default Services;