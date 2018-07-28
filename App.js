import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Alert
} from 'react-native';

//importing all screens.
import {home} from './screens/Homescreen';
import {HbA1c} from './Screens/Hba1cScreen';
import {SerCholesterol} from './Screens/SerCholestrolScreen';
import {RenalInvol} from './Screens/RenalInvolScreen';
import {Smoking} from './Screens/SmokingScreen';
import {Duration} from './Screens/DurationScreen';
import {History} from './Screens/HistoryScreen';
import {Followup} from './Screens/FollowupScreen';
import {Output} from './Screens/OutputScreen';


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
    
