import {View, Text, StyleSheet } from "react-native";
import { MaskedTextInput } from "react-native-mask-text";

export default function EntryField(props){
    return(
        <View style={props.style}>
            <Text>{props.title}</Text>
            <MaskedTextInput style= {style.entry}
                text={props.text}
                placeholder={props.placeholder}
                keyboardType={props.keyboardType}
                type={props.type}
                mask={props.mask}
                options={props.options}
                onChangeText={(text,raw)=>props.onChangeText(text,raw)}
            />
        </View>
    )
}

const style = StyleSheet.create({
    title:{

    },
    entry:{
        borderWidth: 1,
        borderColor: 'grey',
        height: 40,
        borderRadius: 8
    }
})