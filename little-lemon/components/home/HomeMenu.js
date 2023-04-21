import { Component } from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import { Colors, Typefaces } from '../../assets/GlobalStyles'
import HomeMenuItem from './HomeMenuItem'
import { FlatList } from 'react-native-gesture-handler'
import axios from 'axios'
import database from '../../hooks/Database'

export default class HomeMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menuItems: null
        }
    }

    setMenuItems(items){
        this.setState({menuItems: items})
    }

    render(){
        if(!this.state.menuItems){
            
            this.fetchMenuItems()
        }



        return(
            this.state.menuItems && <>
                <Text style={[Typefaces.sectionTitle, {padding: 16}]}>ORDER FOR DELIVERY!</Text>
                <HomeMenuHeader/>
                <FlatList
                    data={this.state.menuItems}
                    renderItem={({item})=>{return(<HomeMenuItem menuItem={item}/>)}}
                    keyExtractor={(item)=>{return(item.name)}}
                />
            </>
        )
    }

    fetchMenuItems(){
        database().readTransaction(tx =>{
            tx.executeSql('SELECT * FROM items', null,
            (tx, {rows: {_array}})=>{
                this.setMenuItems(_array)
            },
            (tx, error)=>{
                console.log(error)
                this.downloadMenuItems()
            })
        })
    }

    downloadMenuItems(){
        axios.get('https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/capstone.json')
            .then((response)=>{
                database().transaction(tx =>{
                    tx.executeSql('DROP TABLE IF EXISTS items', null,
                    ()=> {
                        tx.executeSql('CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, description TEXT, price REAL, image TEXT)')
                        response.data.menu.forEach((item)=>{
                            tx.executeSql('INSERT INTO items (name, description, price, image) VALUES (?,?,?,?)', [item.name, item.description, item.price, item.image],
                            (tx, result)=>{this.setMenuItems(response.data.menu)},
                            (tx, error)=>{console.log(error)}
                            )
                        }),
                        (tx, error)=>{
                            console.log(error)
                        }
                    })                    
                })
            })
            .catch((error)=>{
                console.log(error)
            })
    }
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

