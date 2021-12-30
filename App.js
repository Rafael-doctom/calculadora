import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

  const [resultCalculation, setResultCalculation] = useState(0)
  const [numberValueAlt, onChangeNumberAlt] = useState();
  const [numberValuePes, onChangeNumberPes] = useState();

  const onPressClick = (event) => {
    event.preventDefault()
    var resultCalculation = parseFloat(numberValueAlt) + parseFloat(numberValuePes)
    setResultCalculation(resultCalculation)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculo de IMC</Text>
      <Text>Descubra seu indice de Massa Corporal</Text>
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
      <TouchableOpacity style={styles.submitCalc} onPress={onPressClick}>
        <Text style={styles.textCenter}>Calcular IMC</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.calcResult}>
        <Text style={styles.textResult}>{resultCalculation}</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    marginTop: 90,
  },
  title: {
    color: 'black',
    fontWeight: '700',
  },
  textLabel: {
    marginTop: 15,
  },
  textInput: {
    justifyContent: "center",
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    height: 50,
    width: 300,
    borderColor: "gray",
    paddingLeft: 10,
    marginTop: 5,
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