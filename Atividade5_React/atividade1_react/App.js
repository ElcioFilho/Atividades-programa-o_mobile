import { useState } from 'react'
import { View, Text, Button, TextInput, Image } from 'react-native'
import { styles } from './styles'



export default function App(){
  const [resultado, setResultado] = useState()
  const [numero1, setNumero1] = useState()
  const [numero2, setNumero2] = useState()

  function verificar(res){

    if(res < 18.5){
      setResultado('Abaixo do peso')

    } else if(res < 24.9){
      setResultado('Peso normal')

    } else if(res < 29.9){
      setResultado('Sobrepeso')

    } else if(res < 34.9){
      setResultado('Obesidade Grau 1')

    } else if(res < 39.9){
      setResultado('Obesidade Grau 2')

    } else if(res >= 40){
      setResultado('Obesidade Grau 3 ou Mórbita')

    }
  }

  return(
    <View>

      <Image 
       style={styles.logo}
       source={'https://1.bp.blogspot.com/-S-kQBxdF9MY/TZTBm8d7FPI/AAAAAAAABzY/PIwZDTV8MtY/s1600/pesando%2B%25281%2529.jpg'} /> 

      <Text style={styles.titulo}>Cálcular IMC</Text>


      <TextInput
      style={styles.input}
      placeholder="Peso"
      onChangeText={setNumero1}
      />


      <TextInput
      style={styles.input}
      placeholder="Altura"
      onChangeText={setNumero2}
      />


      <Button title='Verificar' color='green' onPress={() => verificar(numero1 / (numero2 * numero2))}/>

      <Text style={styles.resultado}>{resultado}</Text>
    </View>
  )
}
