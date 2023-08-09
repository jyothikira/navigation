import React,{Component} from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
interface props{
    //navigation:any;
}
interface state{}
export default class ContactScreen extends Component<props,state>{
    constructor(props:any){
        super(props);
    }
    render(){
        return(
         <View style={style.root}>
         <Text>Contact Screen</Text>
         <TouchableOpacity>
         <Icon name="address-book" size={100} color="violet" />
         </TouchableOpacity>

         </View>
        )
    }
}
const style=StyleSheet.create({
    root:{
         flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

});