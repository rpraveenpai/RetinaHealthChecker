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

class HbA1cScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={HbA1cInput:''};
        
    }
    //checking to see if the HbA1cInput is above 5 and not null
    _validateHbA1c=()=>{
        if(this.state.HbA1cInput=='' || this.state.HbA1cInput < 5){
            Alert.alert("Enter a valid value");
        }
        else{
            this.props.navigation.navigate('SerCholesterol');
        }
    }

    render(){
        return(
            
            <View style={styles.container}>
            <Text style={styles.paragraph}>
                Enter HbA1c
           </Text>
           <TextInput
             keyboardType = 'numeric'
            onChangeText={(text)=>this.setState({HbA1cInput:text})}
            />    
        
        {/*button to go to Serlum CHolesterol Screen.*/}
            <Button title="Next"
            onPress={this._validateHbA1c}
             />

           </View>          
          
        );
    }
}