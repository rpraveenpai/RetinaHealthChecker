import React, { Component } from 'react';

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


//importing stack navigator to navigate across screens,
import { StackNavigator } from 'react-navigation';

//rendering all the screen in rootstack
export default class RetinaApp extends React.Component {
    render() {
      return <RootStack />;
    }
  }

  //creating a stacknavigator to navigate through selected screens.
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
    
