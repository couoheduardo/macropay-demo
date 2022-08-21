import React from "react";
import {Text, View} from "native-base";

import {TouchableOpacity} from "react-native";
import {loggedOutAction} from "../redux/ducks/appDuck";
import {connect} from "react-redux";
import {QRCode} from "react-native-custom-qr-codes-expo";

const HomeScreen = ({loggedOutAction, appDuck}) => {


    return (
        <View flex={1}>
            <View flex={1} justifyContent={'center'} alignItems={'center'} mx={10}>
                <View flex={0.5} justifyContent={'center'}>
                    <Text fontSize={'2xl'}>Buen día {appDuck.titular}</Text>
                </View>


                <View flex={1} alignItems={'center'}>
                    <QRCode content={appDuck.token}/>
                    <Text mb={10} fontSize={'xs'} mt={10}>{appDuck.token}</Text>
                    <TouchableOpacity onPress={() => loggedOutAction()}>
                        <Text fontSize={'md'}>Cerrar sesión</Text>
                    </TouchableOpacity>
                </View>

            </View>


        </View>
    )
}

const mapState = (state) => {
    return {
        appDuck: state.appDuck
    }
}

export default connect(mapState, {loggedOutAction})(HomeScreen)