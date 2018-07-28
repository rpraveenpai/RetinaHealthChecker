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

class HistoryScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={HistoryVal:""};
    }

    _validate=()=>{
        if(this.state.HistoryVal==''){
            Alert.alert("Choose a valid option");
        }
        else{
            this.props.navigation.navigate('Followup');
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
                 History of Coronary ARtery Diseases/ Stroke.
           </Text>
           
            {/* select drop down list for History of CAD or stroke */}
            <Dropdown 
                label='History of Coronary Artery Disease/Stroke'
                data = {data}
            />
            
             {/* used to display Followup screen  */}
            <Button
            title="Next" 
            onPress={this._validate}/>
             
           </View>
        );
    }
}