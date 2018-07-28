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

class RenalInvolScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={RenalValue : ''};
    }

    _validate=()=>{
        if(this.state.RenalValue==''){
            Alert.alert("Choose a valid option");
        }
        else{
            this.props.navigation.navigate('Smoking');
        }
    }

    render(){
        let data =[{
            value: 'Microalbumineuria',
        },{
            value: 'Creatinine > 1.6'
        },{
            value: 'Creatinine > 4'
        }
        ]
        return(
            <View style={styles.container}>
            <Text style={styles.paragraph}>
                 Renal Involvement
           </Text>
           
            
            <Dropdown 
                label='Renal Involvement'
                data = {data}
            />
           
             {/* used to display smoking screen */}
            <Button
             title="Next" 
             onPress={this._validate}/> 
            
           </View>
        );
    }
}