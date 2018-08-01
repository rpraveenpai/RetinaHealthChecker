import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import styles from './CSS/css'; //importing custom external stylesheet.
import DataStore from '../DataStore/DataStore';

export default class OutputScreen extends React.Component{
  
    render(){
       
        return(
            <View style={styles.container}>

                <Text style={styles.paragraph}>
                HbA1c:
                <Text style={styles.output}> {DataStore.hlthparams.hba1c} </Text> 
                </Text>

                <Text style={styles.paragraph}>
                Serum Cholesterol:
                <Text style={styles.output}> {DataStore.hlthparams.serchol} </Text> 
                </Text>

                <Text style={styles.paragraph}>
                Renal Involvement: 
                <Text style={styles.output}> {DataStore.hlthparams.renalinv} </Text>
                </Text>

                <Text style={styles.paragraph}>
                Smoking:
                <Text style={styles.output}> {DataStore.hlthparams.smoke} </Text>
                </Text>

                <Text style={styles.paragraph}>
                Duration:
                <Text style={styles.output}> {DataStore.hlthparams.duration} </Text>
                </Text>

                <Text style={styles.paragraph}>
                History of COD/Stroke:
                <Text style={styles.output}> {DataStore.hlthparams.history} </Text>
                </Text>

                <Text style={styles.paragraph}>
                Good Follow-Up:
                <Text style={styles.output}> {DataStore.hlthparams.follow} </Text>
                </Text>            
             
           
            </View>      
        );
    }
}