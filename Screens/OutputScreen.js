import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

import styles from './CSS/css'; //importing custom external stylesheet.

//screen to select Renal Involvement.
export default class RenalInvolScreen extends React.Component{
    constructor(props){
        super(props);
       
    }

  

    render(){
       
        return(
            <View style={styles.container}>

                <Text style={styles.paragraph}>
                    Renal Involvement
                </Text>
                
                
               
            
            </View>      
        );
    }
}