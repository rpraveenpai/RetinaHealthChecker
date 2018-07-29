import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  TextInput,
  Alert
} from 'react-native';
import styles from './CSS/css'; //importing custom external stylesheet.


export default class SerCholesterolScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={SerCholInput:undefined};
    }

    _validate=()=>{
        if(this.state.SerCholInput==undefined){
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
                onChangeText={(text)=>this.setState({SerCholInput:text})}/>             

            {/* Button to go to RenalInvol Screen */}
            <Button 
                title="Next" 
                onPress={()=>{this._validate()}}/>
             
        </View>
        );
    }
}