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
                        <Text style={styles.textLabel}>Altura</Text>
                        <TextInput keyboardType='numeric' placeholder="Digite sua altura" style={styles.textInput} onChangeText={onChangeNumberAlt}
                            value={numberValueAlt} />
                    </View>
                    <View>
                        <Text style={styles.textLabel}>Peso</Text>
                        <TextInput keyboardType='numeric' placeholder="Digite seu peso" style={styles.textInput} onChangeText={onChangeNumberPes}
                            value={numberValuePes} />
                    </View>
                </View>

                <TouchableOpacity style={styles.submitCalc} onPress={onPressClick} >
                    <Text style={styles.textCenter}>Calcular IMC</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.calcResult}>
                    <Text style={styles.textResult}>{resultCalculation}</Text>
                </TouchableOpacity>
                <Text>
                    {resultCalculation <= 18 ? <Text>Abaixo do peso</Text> : null}
                    {resultCalculation > 24  ? <Text>Peso Normal</Text> : null}
                    {/* {resultCalculation <= 29  ? <Text>Sobrepeso</Text> : null} */}
                    {/* {resultCalculation <= 34  ? <Text>Obesidade grau 1</Text> : null} */}
                    {/* {resultCalculation <= 39  ? <Text>Obesidade grau 2</Text> : null} */}
                    {/* {resultCalculation <= 40  ? <Text>Obesidade grau 3</Text> : null} */}
                </Text>
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
        marginTop: 70,
    },
    title: {
        color: 'black',
        fontWeight: '700',
    },
    ViewFlex: {
        display: 'flex',
        flexDirection: 'row',
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
        width: 150,
        borderColor: "gray",
        paddingLeft: 10,
        marginTop: 10,
        borderRadius: 5,
    },
    submitCalc: {
        backgroundColor: 'green',
        height: 50,
        width: 300,
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
        backgroundColor: 'red',
        height: 50,
        width: 300,
        marginTop: 5,
        borderRadius: 5,
        marginTop: 25,
    },
    textResult: {
        textAlign: 'center',
        color: 'white',
        fontSize: 35,
    }


});