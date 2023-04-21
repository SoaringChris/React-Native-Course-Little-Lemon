import { Component } from "react";
import {View} from "react-native"
import HomePageHero from "../components/home/HomePageHero";
import HomeMenu from "../components/home/HomeMenu";

export default class Home extends Component{
    render(){ return(
            <View style={{height:'100%'}}>
                <HomePageHero/>
                <HomeMenu/>
            </View>
        )
    }
}