import { Component } from "react";
import {View, StyleSheet, Text, Image} from "react-native"
import {Typefaces, Colors} from "../../assets/GlobalStyles";
import {Icon} from 'react-native-elements';

export default class HomePageHero extends Component {
    render(){ return(
            <View style={styles.container}>
                <Text style={[Typefaces.title, {color: Colors.primary2}]}>Little Lemon</Text>
                <View style={styles.horizontalRuler}>
                    <View style={styles.horizontalTextArea}>
                        <Text style={[Typefaces.subtitle, {color: 'white'}]}>Chicago</Text>
                        <Text style={[Typefaces.leadText, {color: 'white'}]}>We are a family owned restaurant, focused on traditional recipes served with a modern twist.</Text>
                    </View>
                    <View style={styles.spacer}/>
                    <Image style={styles.image} source={require('../../assets/images/Hero_image.png')} />
                </View>
                <View>
                    <View style={styles.searchIcon}>
                        <Icon name='search' color='black' size={20} style={{paddingTop: 2}}/>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary1,
        padding: 16,
    },

    horizontalRuler:{
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 0,
    },

    horizontalTextArea:{
        flex: 6,
    },

    image: {
        width: 140,
        height: 131,
        flex: 5,
        borderRadius: 25,
        borderWidth: 2
    },

    spacer:{
        flex: 1
    },

    searchIcon: {
        borderRadius: Number.MAX_SAFE_INTEGER,
        backgroundColor: Colors.secondary3,
        marginTop:16,
        width: 28,
        height: 24,
        alignItems: 'center',
        JustifyContent: 'center',
        alignContent: 'center',
        textAlignment: 'center',
    }
})