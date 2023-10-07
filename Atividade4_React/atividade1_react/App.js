import { useState } from 'react'
import { View, Text, Button, TextInput, Image } from 'react-native'
import { styles } from './styles'



export default function App(){
  const [resultado, setResultado] = useState()
  const [numero1, setNumero1] = useState()
  const [numero2, setNumero2] = useState()

  function verificar(res){
    if(res < 0.7){
      setResultado('Etanol \n está na promoção')
    } else{
      setResultado('Gasolina \n mais barato impossivel')
    }
  }

  return(
    <View>

      <Text style={styles.titulo}>Álcool ou Gasolina</Text>
      
      <Image
        style={styles.logo}
        source={'https://4.bp.blogspot.com/-hOgX8GWWL_8/UyIdyUNsT3I/AAAAAAAABFA/dFG68hOVcYQ/s1600/Posto+de+gasolina.jpg'}
      />


      <TextInput
      style={styles.input}
      placeholder="Digite o valor da gasolina"
      onChangeText={setNumero1}
      />


      <TextInput
      style={styles.input}
      placeholder="Digite o valor do etanol"
      onChangeText={setNumero2}
      />


      <Button title='Verificar' color='blue' onPress={() => verificar(numero1/numero2)}/>

      <Text style={styles.resultado}>{resultado}</Text>
    </View>
  )
}
