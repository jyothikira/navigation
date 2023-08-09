import React,{Component} from 'react';
import {View,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../Screens/HomeScreen';
import AboutScreen from '../Screens/AboutScreen';
import ContactScreen from '../Screens/ContactScreen';
import {createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons'; 

const Stack = createNativeStackNavigator();

interface props{
  navigation:any;
  route:string;
   }

interface state{}
export default class App extends Component<props,state> {
  constructor(props:any){
    super(props);
   }
  render() {
    return (
     <NavigationContainer>                 
       <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen}/>
        <Stack.Screen name="Contact" component={ContactScreen}/>
      </Stack.Navigator>
     </NavigationContainer>
    );
  }
}

