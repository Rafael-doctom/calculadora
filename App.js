import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.label}>Altura</Text>
        <TextInput placeholder="Digite sua altura" keyboardType="numeric" style={styles.inputNumber}/>
        <Text style={styles.label}>Peso:</Text>
        <TextInput placeholder="Digite seu peso:" keyboardType="numeric" style={styles.inputNumber}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    textAlign: 'left',
    justifyContent: 'center',
  },
  content: {
    textAlign: 'left',
    border: '1px solid blue',
    padding: '2rem',
    width: '25vw',
    
  },
  label: {
    textAlign: 'left',
    color:'red',
    paddingVertical: '5px'
  },
  inputNumber: {
    textAlign: 'left',
    border: '1px solid gray',
    padding:'1rem',
    height: '4rem',
    with: '15vw',
    
  },
});
