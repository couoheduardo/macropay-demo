import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {NavigationContainer} from "@react-navigation/native";
import {Spinner, View} from "native-base";
import {createStackNavigator} from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack = createStackNavigator();

const NavigatorContainerCustom = () => {
    const status = useSelector(state => {
        return state.appDuck.logged;
    });
    const [loading, setLoading] = useState(null)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 100)
    }, [status]);


    return (
        <NavigationContainer>
            {
                loading ?
                    <View flex={1} backgroundColor={'blue'} alignItems={'center'} justifyContent={'center'}>
                        <Spinner size={'sm'} color={'white'}></Spinner>
                    </View> :
                    status === true ?
                        <Stack.Navigator>
                            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
                        </Stack.Navigator> :
                        <Stack.Navigator>
                            <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}}/>
                        </Stack.Navigator>

            }
        </NavigationContainer>
    );
}


export default NavigatorContainerCustom;