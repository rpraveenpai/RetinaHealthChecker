import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  Alert,
  Picker
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import styles from './CSS/css'; //importing custom external stylesheet.

//Screen to select Follow Up.
export default class FollowupScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {FollowVal:undefined,
            items:[
                {label:'No',value:'5',},
                {label:'Yes', value:'0',},
            ],
        };
    }

    _validate=()=>{
        if(this.state.FollowVal==undefined){
            Alert.alert("Choose a valid option");
        }
        else{
            this.props.navigation.navigate('Output'); //navigate to OutputScreen
        }
    }


    render(){       
        return(
            <View style={styles.container}>

                <Text style={styles.paragraph}>
                    Good Follow-Up, once in 3 months.
                </Text>
           
                {/* picker list for FollowUp */}
                <RNPickerSelect 
                    placeholder={{
                        label:'Good Follow-up, Once in 3 Months',
                        value:null,
                    }}
                    items={this.state.items}
                    value={this.state.FollowVal}
                    onValueChange={(value) => {this.setState({FollowVal:value});}} />               
            
                {/* Button to display the retina from all the data.*/}
                <Button
                    title="Submit" 
                    onPress={this._validate}
                />

            </View>
        );
    }
}