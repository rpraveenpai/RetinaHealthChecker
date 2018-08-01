import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  Alert
} from 'react-native';
import styles from './CSS/css'; //importing custom external stylesheet.
import RNPickerSelect from 'react-native-picker-select';
import DataStore from '../DataStore/DataStore';
//Screen to select History of Coronory Artery Disease or stroke
export default class HistoryScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {HistoryVal:undefined,
            items:[
                {label:'No',value:'0',},
                {label:'Yes', value:'1',},
            ],
};
    }

    _validate=()=>{
        if(this.state.HistoryVal==undefined){
            Alert.alert("Choose a valid option");
        }
        else{
            DataStore.updateHistory(this.state.HistoryVal); //stores HistoryVal to Mobx DataStore.
            this.props.navigation.navigate('Followup'); //navigate to FollowupScreen.
        }
    }

    render(){
        return(
            <View style={styles.container}>

                <Text style={styles.paragraph}>
                    History of Coronary ARtery Diseases/ Stroke.
                </Text>
           
                {/* picker list for History of CAD or stroke */}
                <RNPickerSelect 
                    placeholder={{
                        label:'History of Coronary Artery Disease/Stroke',
                        value:null,
                    }}
                    items={this.state.items}
                    value={this.state.HistoryVal}
                    onValueChange={(value) => {this.setState({HistoryVal:value});}} />
                            
                {/* used to display Followup screen  */}
                <Button
                    title="Next" 
                    onPress={()=>{this._validate()}}/>
             
            </View>
        );
    }

}