import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  Image,
  TextInput,
} from 'react-native';

import styles from './CSS/css'; //importing custom external stylesheet.

//home screen--displays the retina in respect to the number chosen.
export default class HomeScreen extends React.Component{

    constructor(props){
        super(props);
            this._getRetina=this._getRetina.bind(this);
            this.state={input:""};
            //state to display the image and button.
            this.state={visible:false}; 
            //state to call the image from cloud.
            this.state={url:"https://res.cloudinary.com/praveenpi/image/upload/v1524920749/1.jpg"};
            
        }
        
        //function to make the image visible after button press in respect to the number given.
        _getRetina=()=>{
            this.setState({visible:true});
            this.setState({url:"https://res.cloudinary.com/praveenpi/image/upload/v1524920749/"+this.state.input+".jpg"});
        }
       
    render(){

        return(

            <View style={styles.container}>

                <Text style={styles.paragraph}>
                    Enter the Retina Number
                </Text>

                <TextInput
                    keyboardType = 'numeric'
                    onChangeText={(text)=>this.setState({input:text})}/>                  
 
                <Button
                    title="Submit" 
                    onPress={this._getRetina}/>
                
                {
                    //making the retina image visible.
                    this.state.visible?<Image style={{width: 300, height: 300, resizeMode:'contain'}}source={{uri: this.state.url}}/>:<Text></Text>   

                }

                {
                    //making the next button visible. Navigation is used to go to the given screen. 
                    this.state.visible?<Button title="Next" onPress={()=>this.props.navigation.navigate('HbA1c')}/>:<Text></Text>

                } 
            
            </View>
       

        );
        
    }
}