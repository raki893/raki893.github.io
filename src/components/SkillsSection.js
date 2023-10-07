import React from 'react';

const SkillsSection = () => {
  return (
    <section>
      <h2>Skills</h2>
      <div className="skills">

        <div className="charts">
          <div className="chart chart--dev">
            <span className="chart__title">Development</span>
            <ul className="chart--horiz">
              <li className="chart__bar" style={{ width: '90%' }}>
                <span className="chart__label">
                  React
                </span>
              </li>
              <li className="chart__bar" style={{ width: '98%' }}>
                <span className="chart__label">
                  HTML & CSS 
                </span>
              </li>
              <li className="chart__bar" style={{ width: '95%' }}>
                <span className="chart__label">
                  JavaScript
                </span>
              </li>
              {/* Add other development-related chart bars here */}
            </ul>
          </div>

          <div className="chart chart--prod">
            <span className="chart__title">Productivity</span>
            <ul className="chart--horiz">
              <li className="chart__bar" style={{ width: '75%' }}>
                <span className="chart__label">
                  Git + Github
                </span>
              </li>
              <li className="chart__bar" style={{ width: '80%' }}>
                <span className="chart__label">
                  Microsoft Office
                </span>
              </li>
              {/* Add other productivity-related chart bars here */}
            </ul>
          </div>

          <div className="chart chart--design">
            <span className="chart__title">Design</span>
            <ul className="chart--horiz">
              <li className="chart__bar" style={{ width: '80%' }}>
                <span className="chart__label">
                  Figma
                </span>
              </li>
              <li className="chart__bar" style={{ width: '80%' }}>
                <span className="chart__label">
                  Photoshop
                </span>
              </li>
              {/* Add other design-related chart bars here */}
            </ul>
          </div>
        </div>
      </div>

    </section>
  );
}

export default SkillsSection;
