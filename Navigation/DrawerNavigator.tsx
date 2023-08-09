import React,{Component} from 'react';
import {Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../Screens/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import Icon from 'react-native-vector-icons/FontAwesome';

import { createDrawerNavigator } from '@react-navigation/drawer';
import AboutScreen from '../Screens/AboutScreen';
import ContactScreen from '../Screens/ContactScreen';
const Drawer = createDrawerNavigator();
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
        <Drawer.Navigator initialRouteName="Home">
         <Drawer.Screen name="Home"
                      component={HomeScreen}
                      options={{ //change the configuration of our screen
                     drawerIcon: ({ color, size, focused }) => { //set the icon:
                        return ( //the icon will be an image
                           <Icon name="home" size={100} color="green" />                      
                        );
                      },
                      }}
      />
    <Drawer.Screen
      name="About"
      component={AboutScreen}
      options={{
        drawerIcon: ({ color, size, focused }) => { //set the icon for all screens
          return (
            <Icon name="info-circle" size={100} color="pink" />
          );
        },
      }}
    />
    <Drawer.Screen
      name="Contact"
      component={ContactScreen}
      options={{
        drawerIcon: ({ color, size, focused }) => {
          return (
            <Icon name="address-book" size={100} color="violet" />
          );
        },
      }}
    />
  </Drawer.Navigator>
</NavigationContainer>
 );
  }
}