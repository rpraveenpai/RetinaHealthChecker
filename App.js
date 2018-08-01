import React, { Component } from 'react';
import 'es6-symbol/implement';

import HomeScreen from './Screens/Homescreen';
import HbA1cScreen from './Screens/Hba1cScreen';
import SerCholesterolScreen from './Screens/SerCholestrolScreen';
import RenalInvolScreen from './Screens/RenalInvolScreen';
import Smokingscreen from './Screens/SmokingScreen';
import DurationScreen from './Screens/DurationScreen';
import HistoryScreen from './Screens/HistoryScreen';
import FollowupScreen from './Screens/FollowupScreen';
import OutputScreen from './Screens/OutputScreen';

//importing stack navigator to navigate across screens,
import { StackNavigator } from 'react-navigation';


export default class App extends Component {

render() {
   return <RootStack />;
    }
}

const RootStack = StackNavigator(
    {
      Home: {
        screen: HomeScreen,
      },
      HbA1c: {
        screen: HbA1cScreen,
      },
      SerCholesterol:{
        screen: SerCholesterolScreen,
      },
      RenalInvol:{
        screen: RenalInvolScreen,
        },
      Smoking:{
        screen: Smokingscreen,
      },
      Duration:{
        screen: DurationScreen,
      },
      History:{
        screen: HistoryScreen,
      },
      Followup:{
        screen:FollowupScreen,
    },
    Output:{
        screen:OutputScreen,
    },
  },
  {
      //setting initial route as Home.
    initialRouteName: 'Home',
  }
);