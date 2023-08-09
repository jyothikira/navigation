import React,{Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
 interface props{}
  interface state{}
export default class App extends Component<props,state>{
  constructor(props:any){
    super(props);
    this.state={}
  }
  render(){
    return(
      <NavigationContainer>
        //<DrawerNavigator />
      //  <BottomTabNavigator />
      //  <StackNavigator />
      </NavigationContainer>
       );
    }  
  }
  