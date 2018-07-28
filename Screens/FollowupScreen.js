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

class FollowupScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={FollowVal:""};
    }

    _validate=()=>{
        if(this.state.FollowVal==''){
            Alert.alert("Choose a valid option");
        }
        else{
            this.props.navigation.navigate('Output');
        }
    }


    render(){
        let data =[{
            value: 'No',
        },{
            value: 'Yes'
        },
        ]
        return(
            <View style={styles.container}>
            <Text style={styles.paragraph}>
                 Good Follow-Up, once in 3 months.
           </Text>
           
            {/* select drop down list for FollowUp */}
            <Dropdown 
                label='Good Follow Up'
                data = {data}
            />
            
             {/* Button to display the retina from all the data.*/}
            <Button
            title="Submit" 
            onPress={this._validate}
            />

           </View>
        );
    }
}