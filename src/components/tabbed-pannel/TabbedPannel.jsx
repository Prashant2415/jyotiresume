import React, { useState } from "react";
import "./tabbedpannel.css"
const TabbedPanel = ({
  tabs = [],
  renderContent,
  defaultIndex = 0,
  tabClass = "",
  panelClass = "",
}) => {
  const [activeTab, setActiveTab] = useState(defaultIndex);

  return (
    <div className="tabbed-panel">
      {/* Tabs */}
      <div className="tabs-container">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-button ${activeTab === index ? "active" : ""} ${tabClass}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Panel */}
      <div key={activeTab} className={`tab-panel ${panelClass}`}>
        {renderContent(tabs[activeTab], activeTab)}
      </div>
    </div>
  );
};

export default TabbedPanel;