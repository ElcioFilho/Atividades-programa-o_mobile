import React from 'react';
import { View, Text, Image } from 'react-native';


function App(){
    let nome = 'Elcinho';
    let img = 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/4f04fd28ac1d5854c0cc0e5bed205e39';


  return(
     <View style= {{ margin: 33 }}>

        <Image
          source={{ uri: img }}
          style={{ width: 150, height: 150, alignSelf: 'center'}}
        />

        <Text style={
          { marginTop: 10, fontSize: 20, fontWeight: 'Bold' }}>Dados Pessoais:
        </Text>
            <Text>Um estagiário querendo ser um programador incrivel.
            </Text>

        <Text style={
          { marginTop: 5, fontSize: 20, fontWeight: 'Bold' }}>Formação:
          </Text>
            <Text>Formado em Farmácia.
            </Text>

        <Text style={
          { marginTop: 5, fontSize: 20, fontWeight: 'Bold' }}>Experiência:
          </Text>
            <Text>Trabalhou no Hospital Santa Casa de Santos.
            </Text>

        <Text style={
          { marginTop: 5, fontSize: 20, fontWeight: 'Bold' }}>Projetos:
        </Text>
            <Text>Desenvolvi algumas soluções para empresas terciárias.
            </Text>

      </View>
  )
}

export default App;
