import React, { Component } from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

//importing all screens.
import HomeScreen from './Screens/Homescreen';
import HbA1cScreen from './Screens/Hba1cScreen';
import SerCholesterolScreen from './Screens/SerCholestrolScreen';
import RenalInvolScreen from './Screens/RenalInvolScreen';
import Smokingscreen from './Screens/SmokingScreen';
import DurationScreen from './Screens/DurationScreen';
import HistoryScreen from './Screens/HistoryScreen';
import FollowupScreen from './Screens/FollowupScreen';
import OutputScreen from './Screens/OutputScreen';




//rendering all the screen in router
const App = () => (
  <Router>
    <Stack key="root">
      <Scene key="Home" component={HomeScreen} title="Home"/>
      <Scene key="HbA1c" component={HbA1cScreen} title="HbA1c"/>
      <Scene key="SerCholesterol" component={SerCholesterolScreen} title="SerCholesterol"/>
      <Scene key="RenalInv" component={RenalInvolScreen} title="Renal Involvement"/>
      <Scene key="Smoking" component={Smokingscreen} title="Smoking"/>
      <Scene key="Duration" component={DurationScreen} title="Duration"/>
      <Scene key="History" component={HistoryScreen} title="History"/>
      <Scene key="Followup" component={FollowupScreen} title="Followup"/>
      <Scene key="Output" component={OutputScreen} title="Output"/>

    </Stack>
  </Router>
);



  export default App;