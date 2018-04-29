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
  TouchableOpacity
} from 'react-native';



export default class RetinaApp extends Component{

    constructor(props){
        super(props);
            this._getRetina=this._getRetina.bind(this);
            this.state={input:""};
            this.state={visible:false};
            this.state={url:"https://res.cloudinary.com/praveenpi/image/upload/v1524920749/1.jpg"};
            
        }
        
        _getRetina(){
     
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
            onChangeText={(text)=>this.setState({input:text})}
            />      
 
            <Button
            title="Submit" 
            onPress={this._getRetina}           
            />
            {
                    this.state.visible?<Image style={{width: 300, height: 300, resizeMode:'contain'}}source={{uri: this.state.url}}/>:<Text></Text>
                               
            }
                
            
        </View>
       

        );
        
    }
}



   
 
const styles=StyleSheet.create({
    container:{
        justifyContent:'center',
        marginTop:50,
        padding:20,
        backgroundColor:'#ffffff',
        },
        paragraph:{
            margin:24,
            fontSize:18,
            fontWeight:'bold',
            textAlign:'center',
            color:'#34495e',
        },
        MainContainer:{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFF8E1',
        },
      
});