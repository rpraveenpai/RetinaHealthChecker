import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  Alert
} from 'react-native';
import DataStore from '../DataStore/DataStore';
import styles from './CSS/css'; //importing custom external stylesheet.
import RNPickerSelect from 'react-native-picker-select';

//screen to select Renal Involvement.
export default class RenalInvolScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {RenalValue:undefined,
            items:[
                {label:'No',value:'0',},
                {label:'Microalbumineuria', value:'1',},
                {label:'Creatinine > 1.6', value:'2',},
                {label:'Creatinine > 4', value:'3',},
            ],
        };
    }

    _validateInput = () =>{
        if(this.state.RenalValue == undefined){
            Alert.alert("Invalid input");
        }
        else{
            DataStore.updateRenalInv(this.state.RenalValue); //stores RenalValue to Mobx Datastore.
            this.props.navigation.navigate('Smoking');  //navigate to Smokingscreen.
        }
        
    }   

    render(){
        return(
            <View style={styles.container}>

                <Text style={styles.paragraph}>
                    Renal Involvement
                </Text>
                       
                <RNPickerSelect 
                    placeholder={{
                        label:'Renal Involvement',
                        value:null,
                    }}
                    items={this.state.items}
                    value={this.state.RenalValue}
                    onValueChange={(value) => {this.setState({RenalValue:value});}} />

                {/* used to display smoking screen */}                
                 
                <Button
                    title="Next" 
                    onPress={()=>{this._validateInput()}}/>
            
            </View>      
        );
    }
  
}