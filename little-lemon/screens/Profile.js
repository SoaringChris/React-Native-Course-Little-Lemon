import {useState, Component} from 'react'
import { StyleSheet, ScrollView, View } from "react-native";
import { HighlightButton, PrimaryButton, SecondaryButton } from '../components/Buttons';
import {AsyncStorage} from '@react-native-async-storage/async-storage'
import CheckboxEntry from "../components/CheckboxEntry";
import EntryField from "../components/EntryField";
import ProfileAvatarView from '../components/profile/ProfileAvatarView';
import { ProfileModel, ProfileEmailPreferences} from '../models/ProfileModel';


 export default class Profile extends Component {

    state = {
        firstName: null,
        lastName: null,
        email: null,
        phoneNumber: null,
        orderStatus: true,
        passwordChanges: true,
        specialOffers: true,
        newsletter: true
    }

    render(){


        return(
            <ScrollView>
                <ProfileAvatarView/>
                <View>
                    <EntryField title='First name' style={style.entry} onChangeText={text => this.setState({firstName: text})} text={this.state.firstName}/>
                    <EntryField title='Last name' style={style.entry} onChangeText={text => this.setState({lastName: text})} text={this.state.lastName}/>
                    <EntryField title='Email' style={style.entry} onChangeText={text => this.setState({email: text})} text={this.state.email}/>
                    <EntryField title='Phone number' style={style.entry} onChangeText={text => this.setState({phoneNumber: text})} mask="(999)-999-9999" text={this.state.phoneNumber}/>
                    <CheckboxEntry title='Order statuses' style={style.checkbox}
                        value={this.state.orderStatus}
                        onValueChange={(value) => {this.setState({orderStatus: value})}}
                    />
                    <CheckboxEntry title='Password changes' style={style.checkbox}
                        value={this.state.passwordChanges}
                        onValueChange={(value) => {this.setState({passwordChanges: value})}}
                    />
                    <CheckboxEntry title='Special offers' style={style.checkbox}
                        value={this.state.specialOffers}
                        onValueChange={(value) => {this.setState({specialOffers: value})}}
                    />
                    <CheckboxEntry title='Newsletter' style={style.checkbox}
                        value={this.state.newsletter}
                        onValueChange={(value) => {this.setState({newsletter: value})}}
                    />
                </View>
                <HighlightButton title='Log out' style={style.logoutButton}/>
                <View style={style.buttonArea}>
                    <SecondaryButton title='Discard changes' style={style.button} onPress={this.loadProfile}/>
                    <PrimaryButton title='Save changes' style={style.button} onPress={this.saveProfile}/>
                </View>
            </ScrollView>
        )
    }

    saveProfile = () => {
        const emailPreferences = new ProfileEmailPreferences(this.state.orderStatus, this.state.passwordChanges, this.state.specialOffers, this.state.newsletter)
        const newProfile = new ProfileModel(this.state.firstName, this.state.lastName, this.state.email, this.state.phoneNumber, emailPreferences, null)
        AsyncStorage.setItem('profile', JSON.stringify(newProfile))
    }

    loadProfile =() => {
        let jsonData = null
        try{
            jsonData = AsyncStorage.getItem('profile')
        }catch{
            console.error('Couldn\'t load profile')
        }
        if(jsonData){
            const profile = JSON.parse(jsonData)
            this.setState({
                firstName: profile.firstName,
                lastName: profile.lastName,
                email: profile.email,
                phoneNumber: profile.phoneNumber,
                orderStatus: profile.emailPreferences.orderStatus,
                passwordChanges: profile.emailPreferences.pwChanges,
                specialOffers: profile.emailPreferences.offers,
                newsletter: profile.emailPreferences.newsletter
            })
        }else{
            this.setState({
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                orderStatus: true,
                passwordChanges: true,
                specialOffers: true,
                newsletter: true
            })
        }
    }
}

const style = StyleSheet.create(
    {
        checkbox:{
            marginTop: 16,
            marginHorizontal: 16,
        },

        entry:{
            marginTop: 16,
            marginHorizontal: 16
        },

        logoutButton:{
            marginHorizontal: 16,
            marginTop: 16
        },

        buttonArea:{
            flexDirection: 'row',
            margin: 16
        },

        button:{
            flex: 1,
            marginHorizontal: 8
        }
    }
)