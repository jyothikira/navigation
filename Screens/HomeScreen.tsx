
    import React, { Component } from 'react';
    import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
    import Icon from 'react-native-vector-icons/FontAwesome'; // Adjust the icon library
    //import { NavigationScreenProp } from 'react-navigation'; // Import the navigation prop type
    
    interface Props {
      navigation: any;
      //NavigationScreenProp<any, any>;
    }
    interface state{}
    
    export default class HomeScreen extends Component<Props,state> {
        constructor(props:any){
        super(props);
        this.state={}
    }
        openDrawer = () => {
        this.props.navigation.openDrawer();
      };
    
      render() {
        return (
            <View style={style.root}>
            {/* Burger Menu Icon */}
            <TouchableOpacity onPress={this.openDrawer}>
              <Icon name="bars" size={30} color="#000" />
            </TouchableOpacity>
    
            {/* Other content */}
            <Text>Welcome to the Home Screen!</Text>
          </View>
        );
        }  
    }     
   const style=StyleSheet.create({
    root:{
         flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

});
