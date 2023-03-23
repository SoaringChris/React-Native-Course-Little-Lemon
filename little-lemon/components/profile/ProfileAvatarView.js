import { Image, StyleSheet, Text, View } from "react-native";
import { PrimaryButton, SecondaryButton } from "../Buttons";

export default function ProfileAvatarView(props){
    return(
        <View style={style.container}>
            <Text>Avatar</Text>
            <View style={style.innerContainer}>
                <Image source={{uri:'https://pbs.twimg.com/profile_images/1123624094803607553/2dvjoTzl_400x400.jpg'}} style={style.image}/>
                <PrimaryButton title='Change' style={style.button}/>
                <SecondaryButton style={[style.button, {borderRadius: 0}]} title='Remove'/>
            </View>
        </View>
    )
}

const style = StyleSheet.create(
    {
        container:{
            marginHorizontal: 16,
        },

        innerContainer:{
            flexDirection: 'row',
            alignItems: 'center'
        },

        image:{
            borderRadius: Number.MAX_SAFE_INTEGER,
            height: 100,
            width: 100,
            marginRight: 16
        },

        button:{
            marginHorizontal: 8
        }
    }
)