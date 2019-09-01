import React from 'react';
import { PanelBar, PanelBarItem } from '@progress/kendo-react-layout';
import { panelBarData } from '../data/appData';

export const PanelBarContainer = () => (
  <PanelBar >
    <PanelBarItem expanded={true} title="Areas Of Interest">
      <div>
        {panelBarData.areasOfInterest.map((item, idx) => (
          <div className={idx === 0 ? 'teammate k-state-selected' : 'teammate'} id={item.aoi} key={idx}>
            <span className="mate-info">
              <h2>{item.aoi}</h2>
              <p>Sequence #{item.sequence}</p>
            </span>
          </div>
        ))}
      </div>
    </PanelBarItem>
  </PanelBar>
)