import { useState } from 'react'
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native'
import { Colors, Typefaces } from '../../assets/GlobalStyles'
import HomeMenuItem from './HomeMenuItem'
import axios from 'axios'
import MenuItemModel from '../../models/MenuItemModel'

export default function HomeMenu(){

    const [menuItems, setMenuItems] = useState(null)

    if(!menuItems){
        axios.get('https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/capstone.json')
        .then((response)=>{
            setMenuItems(response.data.menu)
        })
        .catch((error)=>{
            console.log(error)
        })
    }



    return(
        <View>
            <Text style={[Typefaces.sectionTitle, {padding: 16}]}>ORDER FOR DELIVERY!</Text>
            <HomeMenuHeader/>
            <FlatList
                data={menuItems}
                renderItem={({item})=>{return(<HomeMenuItem menuItem={item}/>)}}
                keyExtractor={(item)=>{return(item.name)}}
            />
        </View>
    )
}

function HomeMenuHeader(){
    return(<View style={styles.header}>
        <HomeHeaderButton title='Starters'/>
        <HomeHeaderButton title='Mains'/>
        <HomeHeaderButton title='Desserts'/>
        <HomeHeaderButton title='Drinks'/>
    </View>)
}

function HomeHeaderButton(props){
    return(
        <TouchableOpacity style={styles.button}>
            <Text style={[Typefaces.specialsTitle, {color: Colors.primary1}]}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    header:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingBottom: 8
    },

    button:{
        backgroundColor: Colors.secondary3,
        borderRadius: Number.MAX_SAFE_INTEGER,
        padding:8
    },
})

