import { useState } from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet } from 'react-native';

function App() {
  const [resultado, setResultado] = useState()
  const [numero, setNumero] = useState()

  function verificar(num){
      let misterio = Math.floor(Math.random() * 11)

      if(num === misterio){
        setResultado('Wow, Você é incrivel, realmente era:' + misterio)
      }else{
        setResultado('hahaha errou. O número era '+ misterio)
      }
  }

  return (
    <View style={styles.view}>
      <Text style={styles.title}>Jogo do Nº Aleatório</Text>

      <Image 
      style={styles.logo}
      source={'https://static.vecteezy.com/ti/vetor-gratis/p1/6719380-3d-ponto-de-interrogacao-design-gratis-vetor.jpg'} /> 

      <Text style={styles.text}> Escreva um número de 0 a 10: </Text>
      
       <TextInput
      style={styles.input}
      placeholder="Qual número ?"
      onChangeText={setNumero}
      />

      <Button title='Adivinhar' color='purple' onPress={() => verificar(numero)}/>

      <Text style={styles.resultado}> {resultado} </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  title:{
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    color: 'purple'
  },

  logo: {
    width: 300,
    height: 200,
    alignSelf: 'center'
  }, 

  text:{
    color: 'purple',
    fontWeight: 'bold',
    fontSize: 23,
    textAlign: 'center'
  },

  input:{
    height: 40,
    borderWidth: .5,
    borderColor: '#222',
    margin: 10,
    fontSize: 15,
    padding: 10,
    color: 'purple'
  },

  resultado:{
    color: 'purple',
    fontSize: 20,
    fontWeight: 'bolder',
    margin: 5
  },

  view:{
    backgroundColor: 'yellow',
  }

});

export default App