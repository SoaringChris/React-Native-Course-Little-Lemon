import {useState} from 'react'
import { StyleSheet, ScrollView, View } from "react-native";
import { HighlightButton, PrimaryButton, SecondaryButton } from '../components/Buttons';
import CheckboxEntry from "../components/CheckboxEntry";
import EntryField from "../components/EntryField";
import ProfileAvatarView from '../components/profile/ProfileAvatarView';
export default function Profile(){

    const [orderStatus, setOrderStatus] = useState(true)
    const [passwordChanges, setPasswordChanges] = useState(true)
    const [specialOffers, setSpecialOffers] = useState(true)
    const [newsletter, setNewsletter] = useState(true)


    return(
        <ScrollView>
            <ProfileAvatarView/>
            <View>
                <EntryField title='First name' style={style.entry} onChangeText={(text, raw) =>{}}/>
                <EntryField title='Last name' style={style.entry} onChangeText={(text, raw) =>{}}/>
                <EntryField title='Email' style={style.entry} onChangeText={(text, raw) =>{}}/>
                <EntryField title='Phone number' style={style.entry} onChangeText={(text, raw) =>{}} mask="(999)-999-9999"/>
                <CheckboxEntry title='Order statuses' style={style.checkbox}
                    value={orderStatus}
                    onValueChange={(value) => {setOrderStatus(value)}}
                />
                <CheckboxEntry title='Password changes' style={style.checkbox}
                    value={passwordChanges}
                    onValueChange={(value) => {setPasswordChanges(value)}}
                />
                <CheckboxEntry title='Special offers' style={style.checkbox}
                    value={specialOffers}
                    onValueChange={(value) => {setSpecialOffers(value)}}
                />
                <CheckboxEntry title='Newsletter' style={style.checkbox}
                    value={newsletter}
                    onValueChange={(value) => {setNewsletter(value)}}
                />
            </View>
            <HighlightButton title='Log out' style={style.logoutButton}/>
            <View style={style.buttonArea}>
                <SecondaryButton title='Discard changes' style={style.button}/>
                <PrimaryButton title='Save changes' style={style.button}/>
            </View>
        </ScrollView>
    )
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