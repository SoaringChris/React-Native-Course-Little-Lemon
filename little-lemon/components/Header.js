import { Component } from "react";
import { Image, SafeAreaView, View, StyleSheet, TouchableOpacity, Platform, StatusBar } from "react-native";
import { Avatar, Icon } from "react-native-elements";

export default function({navigation}){
        return(
            <SafeAreaView>
                <View  style={[style.container, {marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}]}>
                    {navigation.canGoBack() &&
                        <TouchableOpacity  style={style.backIcon} onPress={navigation.goBack}>
                            <View>
                                <Icon name='arrow-back' color='black' size={20}/>
                            </View>
                        </TouchableOpacity>
                    }
                    <Image source={require('../assets/images/Logo.png')} style={style.logo}/>
                    <TouchableOpacity style={style.avatarContainer} onPress={() => {navigation.navigate('Profile')}}>
                    <Avatar rounded={true} style={style.avatar}/>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            )
    }


const style = StyleSheet.create(
    {
        container: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignContent: 'center',
            width: '100%',
            paddingVertical: 8,
            backgroundColor: 'white',
        },
        avatar:{
            height: 40,
            width: 40,
            marginRight: 16,
            backgroundColor: `#${Math.floor(Math.random() * 16777215)
                .toString(16)
                .padStart(6, '0')}`,
            borderRadius: Number.MAX_SAFE_INTEGER,
        },

        avatarContainer:{
            position: 'absolute',
            right: 0,
            alignSelf: 'center'
        },

        backIcon:{
            height: 40,
            width: 40,
            position: 'absolute',
            left: 0,
            alignSelf: 'center',
            justifyContent: 'center'
        }
    }
)

// export default function(props){
//     // const navigation = useNavigation()
//     return <Header {...props}/>
// }