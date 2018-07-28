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
import { StackNavigator } from 'react-navigation';

import { Dropdown } from 'react-native-material-dropdown';
import styles from './CSS/css';

export default class Smokingscreen extends React.Component{
    constructor(props){
        super(props);
        this.state={SmokeVal:""};
    }

    _validate=()=>{
        if(this.state.SmokeVal==''){
            Alert.alert("Choose a valid option");
        }
        else{
            this.props.navigation.navigate('Duration');
        }
    }

    render(){
        let data =[{
            value: 'No',
        },{
            value: 'Yes'
        },{
            value: 'Related Lung Disease'
        }
        ]
        return(
            <View style={styles.container}>
            <Text style={styles.paragraph}>
                 Smoking
           </Text>
           
            {/* select drop down list for Smoking value */}
            <Dropdown 
                label='Smoking'
                data = {data}
            />
            
             {/* used to display DUration screen */}
            <Button 
            title="Next"
            onPress={this._validate}/>
            
           </View>
        );
    }
}
