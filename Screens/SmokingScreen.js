import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  Alert
} from 'react-native';
import styles from './CSS/css'; //importing custom external stylesheet.
import RNPickerSelect from 'react-native-picker-select';


export default class Smokingscreen extends React.Component{
    constructor(props){
        super(props); 
             
        this.state = {SmokeVal:undefined,
            items:[
                {label:'No',value:'0',},
                {label:'Yes', value:'1',},
                {label:'Related Lung Disease', value:'2',},
            ],
        };
    }

    _validate=()=>{
        if(this.state.SmokeVal==undefined){
            Alert.alert("Choose a valid option");
        }
        else{
            this.props.navigation.navigate('Duration'); //navigate to DurationScreen.
        }
    }

    render(){
        return(
            <View style={styles.container}>
          
                <Text style={styles.paragraph}>
                    Smoking
                </Text>
            
                {/* select drop down list for Smoking value */}
                <RNPickerSelect 
                    placeholder={{
                        label:'Smoking',
                        value:null,
                    }}
                    items={this.state.items}
                    value={this.state.SmokeVal}
                    onValueChange={(value) => {this.setState({SmokeVal:value});}} />
            
                {/* used to display DUration screen */}
                <Button 
                    title="Next"
                    onPress={()=>{this._validate()}}/>
            
           </View>
        );
    }
}
