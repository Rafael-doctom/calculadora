import { StatusBar } from 'expo-status-bar';

import { useState } from 'react';

import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import Header from '../../Components/header';

const Home = () => {

    const [resultCalculation, setResultCalculation] = useState()
    const [numberValueAlt, onChangeNumberAlt] = useState();
    const [numberValuePes, onChangeNumberPes] = useState();

    const onPressClick = (event) => {
        event.preventDefault()
        var resultCalculation = parseFloat(numberValueAlt) + parseFloat(numberValuePes)
        setResultCalculation(resultCalculation)
    }

    return (
        <>
            <View style={styles.container}>
                <Header />
                <View style={styles.ViewFlex}>
                    <View>
                        <TextInput keyboardType='numeric' placeholder="Digite um número...." style={styles.textInput} onChangeText={onChangeNumberAlt}
                            value={numberValueAlt} />
                    </View>
                    <View>
                        <TextInput keyboardType='numeric' placeholder="Digite outro número..." style={styles.textInput} onChangeText={onChangeNumberPes}
                            value={numberValuePes} />
                    </View>
                </View>

                <TouchableOpacity style={styles.submitCalc} onPress={onPressClick} >
                    <Text style={styles.textCenter}>Calcular IMC</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.calcResult}>
                    <Text style={styles.textResult}>
                        {resultCalculation}
                    </Text>
                </TouchableOpacity>
                <StatusBar style="auto" />
            </View>
        </>
    )
}

export default Home



const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        alignItems: 'center',
        marginTop: 120,
    },

    title: {
        color: 'black',
        fontWeight: '700',
    },

    ViewFlex: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 20,
    },

    textLabel: {
        marginTop: 20,
    },

    textInput: {
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        borderBottomWidth: 2,
        height: 50,
        width: 330,
        borderColor: "gray",
        marginTop: 10,
        borderRadius: 0,
    },

    submitCalc: {
        backgroundColor: 'green',
        height: 50,
        width: 330,
        marginTop: 5,
        borderRadius: 5,
        marginTop: 25,
    },

    textCenter: {
        textAlign: 'center',
        paddingTop: 15,
        color: 'white'
    },

    calcResult: {
        height: 40,
        width: 330,
        border: 0,
        borderRadius: 5,
        marginTop: 20,
    },

    textResult: {
        textAlign: 'center',
        color: 'black',
        fontSize: 30,
    }
});