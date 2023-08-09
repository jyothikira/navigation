import React,{Component} from 'react';
import {View,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../Screens/HomeScreen';
import AboutScreen from '../Screens/AboutScreen';
import ContactScreen from '../Screens/ContactScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'; 

const Tab = createBottomTabNavigator();

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
      <Tab.Navigator
      initialRouteName="HomeScreen"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'gear' : 'gear';
            }

            // You can return any component here to be used as the tab icon
            return<Ionicons name={'menu'} size={size} color={color} />;
          },
          tabBarActiveTintColor:'tomato',
          tabBarInactiveTintColor:'gray',
        })}
         >            
      
      
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
        <Tab.Screen name="Contact" component={ContactScreen}/>
      </Tab.Navigator>
      </NavigationContainer>
    );
  }
}



