import { Button, Image, TextInput, View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";

export default function Onboarding(){
    return(
        <View style={styles.container}>
            <Header/>
            <View style={styles.body}>
                <Text style={styles.paragraph}>Let us get to know you</Text>
                <View style={styles.inputArea}>
                    <View style={styles.textInput.container}>
                        <Text style={styles.textInput.title}>First Name</Text>
                        <TextInput style={styles.textInput.input} borderRadius/>
                    </View>
                    <View style={styles.textInput.container}>
                        <Text style={styles.textInput.title}>Email</Text>
                        <TextInput style={styles.textInput.input}/>
                    </View>
                </View>
            </View>
            <View style={styles.buttonArea}>
                <View  style={styles.buttonContainer}> 
                    <Button title="Next"/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    header:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20
    },
    body:{
        flex: 9,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    inputArea:{
        paddingBottom: 48
    },
    buttonArea:{
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    paragraph:{
        textAlign: 'center',
        felx: 1,
        paddingTop: 48,
        fontFamily: 'Karla',
        fontSize: 20
    },
    textInput:{
        title: {
            textAlign: 'center',
            fontFamily: 'Karla',
            fontSize: 20
        },
        input:{
            textAlign: 'center',
            borderColor: 'black',
            fontFamily: 'Karla',
            fontSize: 20,
            borderWidth: 1,
            borderRadius: 16,
            marginTop: 8
            
        },
        container:{
            marginHorizontal: 16,
            marginVertical: 8
        }
    },
    buttonContainer:{
        flex: 1,
        flexDirection: 'column',
        alignItems: "flex-end",
        justifyContent: 'center',
        padding: 16,
    },
    button:{
        paddingHorizontal: 8,
        alignSelf: 'center'
    }
})