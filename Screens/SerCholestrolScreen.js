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

class SerCholesterolScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={SerCholInput:''};
    }

    _validateSerChol=()=>{
        if(this.state.SerCholInput==''){
            Alert.alert("Enter a valid value");
        }
        else{
            this.props.navigation.navigate('RenalInvol');
        }
    }

    render(){
        return(
            <View style={styles.container}>
            <Text style={styles.paragraph}>
                Enter Serum Cholesterol
           </Text>
           <TextInput
             keyboardType = 'numeric'
            onChangeText={(text)=>this.setState({SerCholInput:text})}
            /> 

             {/* Button to go to RenalInvol Screen */}
            <Button 
            title="Next" 
            onPress={this._validateSerChol}/>
             
         </View>
        );
    }
}