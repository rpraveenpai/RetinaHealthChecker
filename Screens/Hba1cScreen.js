import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  TextInput,
  Alert
} from 'react-native';
import styles from './CSS/css'; //importing custom external stylesheet. 
import { observer } from 'mobx-react';
import DataStore from '../DataStore/DataStore';

//screen to enter Hba1c Value
@observer
export default class HbA1cScreen extends React.Component{
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
            DataStore.updateHBA1C(this.state.HbA1cInput); //Stores HbA1cInput to Mobx DataStore.
            this.props.navigation.navigate('SerCholesterol'); //navigate to SerCholesterolScreen
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
                    onChangeText={(text)=>this.setState({HbA1cInput:text})}/>                    
        
                {/*button to go to Serlum CHolesterol Screen.*/}
                <Button title="Next"
                    onPress={()=>{this._validateHbA1c()}}/>                

            </View>          
          
        );
    }
}