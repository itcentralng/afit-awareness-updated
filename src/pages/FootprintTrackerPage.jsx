import React from 'react';
import CarbonFootprintTracker from '../components/CarbonFootprintTracker';
import OnlineFootprintTracker from '../components/CarbonFootprintTracker';

const FootprintTrackerPage = () => {
  return (
    <div>
      <CarbonFootprintTracker />
      <OnlineFootprintTracker />
    </div>
  );
};

export default FootprintTrackerPage;
