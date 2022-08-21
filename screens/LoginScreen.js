import React, {useState} from "react";
import {Button, Input, View} from "native-base";
import {connect} from "react-redux";
import {signIn} from "../api/Requests";
import jwtDecode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {loggedAction} from "../redux/ducks/appDuck";

const LoginScreen = ({loggedAction}) => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const signInFunction = async () => {
        try {

            const form = new FormData();
            form.append('email', email)
            form.append('password', password)

            const response = await signIn(form);
            const val = jwtDecode(response.data.token)
            val['token'] = response.data.token
            console.log(val)
            await AsyncStorage.setItem('@user', JSON.stringify(val))
            await loggedAction(val)
        } catch (ex) {
            alert(ex.toString())
        }
    }

    return (
        <View flex={1}>
            <View flex={1}>

            </View>
            <View flex={1} mx={20}>
                <Input onChangeText={setEmail} mb={2} placeholder={'Correo electrónico'}/>
                <Input onChangeText={setPassword} mb={2} placeholder={'Contraseña'} type={'password'}/>


                <Button onPress={() => {
                    signInFunction()
                }}>
                    Login
                </Button>

            </View>

        </View>


    )
}

const mapState = () => {
    return {}
}


export default connect(mapState, {loggedAction})(LoginScreen)