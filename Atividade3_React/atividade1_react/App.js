import { useState } from 'react'
import { Text, View, Button, TextInput, StyleSheet } from 'react-native'


export default function App() {
  const [first, setFirst] = useState(0)
  const [second, setSecond] = useState(0)

  const [resultado, setResultado] = useState(0)

  function calcular(){
    setResultado(first*second)
  }

   return(
    <View>

      <Text style={styles.title}>Multiplicador de números</Text>

      <TextInput
      style={styles.input}
      placeholder="First Number "
      onChangeText={setFirst}
      />

      <TextInput
      style={styles.input}
      placeholder="Second Number "
      onChangeText={setSecond}
      />

      <Button title="Resultar" onPress={calcular} />


      <Text style={styles.resultado}>
      Deu: {resultado} 
      </Text>
    </View>
  );
}

  const styles = StyleSheet.create({
    input:{
        height: 50,
        borderWidth: 5,
        borderColor: 'green',
        margin: 20,
        fontSize: 25,
        padding: 15,
      },
    resultado:{
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 50,
      margin: 25
    },

    title:{
      fontSize: 30,
      fontWeight: 'bolder',
      textAlign: 'center',
      margin: 20
    }

  });
