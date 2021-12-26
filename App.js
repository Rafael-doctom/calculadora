import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput,TouchableOpacity } from 'react-native-web';

export default function App() {
  
  const [result, setResult] = useState(0)

  const onPressClick = (event) => {
    event.preventDefault()
    alert('erro')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textCenter}>Cálculo do IMC</Text>
      <Text style={styles.textCenter}>Descubra seu índice de Massa Corporal</Text>

      <View style={styles.content}>
        <View>
          <Text style={styles.label}>Altura</Text>
          <TextInput placeholder="Digite sua altura" keyboardType="numeric" style={styles.inputNumber} />
        </View>
        <View>
          <Text style={styles.label}>Peso:</Text>
          <TextInput placeholder="Digite seu peso:" keyboardType="numeric" style={styles.inputNumber} />
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={onPressClick}
      >
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    textAlign: 'left',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  textCenter: {
    textAlign: 'center'
  },
  content: {
    textAlign: 'left',
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    textAlign: 'left',
    paddingVertical: '5px',
    color: 'gray'
  },
  inputNumber: {
    textAlign: 'left',
    border: '1px solid gray',
    padding: '1rem',
    placeholderTextColor: 'gray',
    width: '300px',

  },
  button: {
    backgroundColor: 'green',
    paddingTop:'1rem',
    paddingBottom:'1rem',
    width: '300px',
    marginTop: '1rem',
  },
  buttonText:{
    textAlign: 'center',
    color:'white',
  }
});
