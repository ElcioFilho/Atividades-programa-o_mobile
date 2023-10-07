import React, { useState } from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';


export default function App(){
  const [cont, setCont] = useState(0)


  function somar() {
    setCont(cont+1)
  }

  function subtrair() {
    if(cont > 0){
      setCont(cont-1)
    }else{
      alert('Não pode diminuir mais que zero')
    }
  }


  return(
    <View style={{ margin: 70 }}>

      <Text styles={styles.titulo}>Contador de Pessoas</Text>

      <Text style={styles.princButtom}>
        {cont}
      </Text>


      <Button title="+" onPress={somar} />
      <Button title="-" onPress={subtrair} />


    </View>
  )
}

const styles = StyleSheet.create ({   
  titulo:{
    textAlign: 'center',
    fontSize: 40,
    fontWeight:'bolder',
    color: 'green'
  },

  princButtom: {
    textAlign: 'center',
    margin: 'auto',

    width: 150,
    fontSize: '6em',
    fontWeight: 'center'
  }
});
