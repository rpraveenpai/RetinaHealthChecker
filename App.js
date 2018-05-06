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

//importing stack navigator to navigate across screens,
import { StackNavigator } from 'react-navigation';
//importing Picker to use select dropdown list.
import Picker  from 'react-native-picker';
import { Dropdown } from 'react-native-material-dropdown';
//home screen--displays the retina in respect to the number chosen.
class HomeScreen extends React.Component{

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

//screen to enter HbA1c value.
class HbA1cScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={HbA1cInput:""};
        
    }


    render(){
        return(
            <View style={styles.container}>
            <Text style={styles.paragraph}>
                Enter HbA1c
           </Text>
           <TextInput
             keyboardType = 'numeric'
            onChangeText={(text)=>this.setState({HbA1cInput:text})}
            />    
        
        {/*button to go to Serlum CHolesterol Screen.*/}
            <Button title="Next"
            onPress={()=>this.props.navigation.navigate('SerCholesterol')}
             />

           </View>
        );
    }
}

//screen to enter serum cholesterol value.
class SerCholesterolScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={SerCholInput:""};
    }


    render(){
        return(
            <View style={styles.container}>
            <Text style={styles.paragraph}>
                Enter Serum Cholesterol
           </Text>
           <TextInput
             keyboardType = 'numeric'
            onChangeText={(text)=>this.setState({SerCholInput:text})}
            /> 

             {/* Button to go to RenalInvol Screen */}
            <Button 
            title="Next" 
            onPress={()=>this.props.navigation.navigate('RenalInvol')}/>
             
         </View>
        );
    }
}

//screen to choose Renal involvement value.
class RenalInvolScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={RenalValue : ""};
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
           
             {/* used to displat smoking screen */}
            <Button
             title="Next" 
             onPress={()=>this.props.navigation.navigate('Smoking')}/> 
            
           </View>
        );
    }
}

//screen to select smoking value.
export class Smokingscreen extends React.Component{
    constructor(props){
        super(props);
        this.state={SmokeVal:""};
    }


    render(){
        let data =[{
            value: 'No',
        },{
            value: 'Yes'
        },{
            value: 'Related Lung Disease'
        }
        ]
        return(
            <View style={styles.container}>
            <Text style={styles.paragraph}>
                 Smoking
           </Text>
           
            {/* select drop down list for Smoking value */}
            <Dropdown 
                label='Smoking'
                data = {data}
            />
            
             {/* used to display DUration screen */}
            <Button 
            title="Next"
            onPress={()=>this.props.navigation.navigate('Duration')}/>
            
           </View>
        );
    }
}

//screen to select duration value.
export class DurationScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={DurationInput:""};
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
            onPress={()=>this.props.navigation.navigate('History')}/>
             
           </View>
        );
    }
}

//screen to select History of CAD/stroke value.
export class HistoryScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={HistoryVal:""};
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
            onPress={()=>this.props.navigation.navigate('Followup')}/>
             
           </View>
        );
    }
}


//screen to select Followup value.
export class FollowupScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={FollowVal:""};
    }

    _display(){
        alert("Values Submitted");
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
            onPress={this._display}
            />

           </View>
        );
    }
}

//rendering all the screen in rootstack
export default class RetinaApp extends React.Component {
    render() {
      return <RootStack />;
    }
  }

  //creating a stacknavigator to navigate through selected screens.
const RootStack = StackNavigator(
    {
      Home: {
        screen: HomeScreen,
      },
      HbA1c: {
        screen: HbA1cScreen,
      },
      SerCholesterol:{
        screen: SerCholesterolScreen,
      },
      RenalInvol:{
        screen: RenalInvolScreen,
        },
      Smoking:{
        screen: Smokingscreen,
      },
      Duration:{
        screen: DurationScreen,
      },
      History:{
        screen: HistoryScreen,
      },
      Followup:{
        screen:FollowupScreen,
    },
  },
  {
      //setting initial route as Home.
    initialRouteName: 'Home',
  }
);  
    
//creating styles for components.
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