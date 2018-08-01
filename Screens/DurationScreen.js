import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  Alert
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
//importing custom external stylesheet.
import styles from './CSS/css'; 
import DataStore from '../DataStore/DataStore';

//screen to select Duration.
export default class DurationScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {DurationInput:undefined,
            items:[
                {label:'5 - 10 years',value:'2',},
                {label:'11 - 15 years', value:'1.5',},
                {label:'16 - 20 years', value:'1',},
                {label:'> 20 years', value:'0.5',},
            ],
        };
    }
    

    _validate=()=>{
        if(this.state.DurationInput==undefined){
            Alert.alert("Choose a valid option");
        }
        else{
            DataStore.updateDuration(this.state.DurationInput); //stores DurationInput to MobX DataStore
            this.props.navigation.navigate('History'); //navigate to HistoryScreen
        }
    }

    render(){

        return(
            <View style={styles.container}>

                <Text style={styles.paragraph}>
                     Duration
                </Text>
           
                {/* picker list for Duration */}
                <RNPickerSelect 
                    placeholder={{
                        label:'Duration',
                        value:null,
                        }}
                    items={this.state.items}
                    value={this.state.DurationInput}
                    onValueChange={(value) => {this.setState({DurationInput:value});}}/>              
            
                 {/* used to display History Screen */}
                <Button
                    title="Next" 
                    onPress={()=>{this._validate()}}
                    
                    />
             
            </View>
        );
    }

}