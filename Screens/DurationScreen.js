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
class DurationScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={DurationInput:""};
    }

    _validate=()=>{
        if(this.state.DurationInput==''){
            Alert.alert("Choose a valid option");
        }
        else{
            this.props.navigation.navigate('History');
        }
    }

    render(){
        let data =[{
            value: '5-10 Years'
        },{
            value: '11-15 Years'
        },{
            value: '16-20 Years'
        },{
            value: '>20 Years'
        }
        
        ]
        return(
            <View style={styles.container}>
            <Text style={styles.paragraph}>
                 Duration
           </Text>
           
            {/* select drop down list for Duration */}
            <Dropdown 
                label='Duration'
                data = {data}
            />
            
             {/* used to display History Screen */}
            <Button
            title="Next" 
            onPress={this._validate}/>
             
           </View>
        );
    }
}