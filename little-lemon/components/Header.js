import { Component } from "react";
import { Image, View, StyleSheet } from "react-native";
import { Avatar } from "react-native-elements";

export default class Header extends Component{
    render(){
        return(
            <View style={style.container}>
                <Image source={require('../assets/images/Logo.png')} style={style.logo}/>
                <Avatar rounded={true} style={style.avatar}/>
            </View>
            )
    }
}

const style = StyleSheet.create(
    {
        container: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignContent: 'center',
            width: '100%',
            marginVertical: 8
        },
        avatar:{
            height: 40,
            width: 40,
            marginRight: 16,
            backgroundColor: `#${Math.floor(Math.random() * 16777215)
                .toString(16)
                .padStart(6, '0')}`,
            borderRadius: Number.MAX_SAFE_INTEGER,
            position: 'absolute',
            right: 0
        },
    }
)