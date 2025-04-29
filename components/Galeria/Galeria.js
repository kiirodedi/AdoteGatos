import { StyleSheet, Text, View, Image } from "react-native";
import { ScrollView } from 'react-native';

import pataGato from "../../assets/img/pata-gato.png";
import coracao from "../../assets/img/coracao.webp";

export default function Galeria() {
  return (
    <View style={estilo.container}>
      {/* Cabeçalho */}
      <View style={estilo.cabecalho}>
        <Image source={pataGato} style={estilo.iconCabecalho} />
          <Text style={estilo.titulo}>Adote Miau :3</Text>
        <Image source={coracao} style={estilo.iconCabecalho} />
      </View>

      <ScrollView>
        <View style={estilo.fotos}>
          <Image source={{ uri: 'https://i.pinimg.com/736x/84/7c/93/847c93b5d669c2b8cf4ba7cd108d5a4d.jpg'}} style ={estilo.imgGaleria}/>
          <Image source={{ uri: 'https://i.pinimg.com/736x/9f/2b/77/9f2b77b6a0190ddf615b1ecfd398322b.jpg'}} style ={estilo.imgGaleria}/>
          <Image source={{ uri: 'https://i.pinimg.com/474x/20/b0/e8/20b0e8759d4c653850400aa4c7488b06.jpg'}} style ={estilo.imgGaleria}/>
          <Image source={{ uri: 'https://i.pinimg.com/736x/31/a2/18/31a2186751e6262133846f16455ef481.jpg'}} style ={estilo.imgGaleria}/>
          <Image source={{ uri: 'https://i.pinimg.com/236x/f0/1e/09/f01e094963ef69fed68292b792472ef3.jpg'}} style ={estilo.imgGaleria}/>
          <Image source={{ uri: 'https://i.pinimg.com/474x/23/21/67/232167b4a6563d20c503f92961cf7bd2.jpg'}} style ={estilo.imgGaleria}/>
          <Image source={{ uri: 'https://i.pinimg.com/736x/b0/02/78/b00278f0e21246f8ac0eab6f6b9a533f.jpg'}} style ={estilo.imgGaleria}/>
          <Image source={{ uri: 'https://i.pinimg.com/736x/da/49/c1/da49c10edfb1b00e9046e3e55c132701.jpg'}} style ={estilo.imgGaleria}/>
          <Image source={{ uri: 'https://i.pinimg.com/474x/cb/b1/ae/cbb1ae6b02a78a2476d2e8cddfbb6033.jpg'}} style ={estilo.imgGaleria}/>
          <Image source={{ uri: 'https://i.pinimg.com/474x/24/7d/89/247d897adab8b544edba41bc72559334.jpg'}} style ={estilo.imgGaleria}/>
          <Image source={{ uri: 'https://i.pinimg.com/236x/d1/25/13/d12513249b6d0f3cd2553fe878daaed1.jpg'}} style ={estilo.imgGaleria}/>
          <Image source={{ uri: 'https://i.pinimg.com/474x/bf/48/67/bf4867676aedb710a4dbe7a4f0e2d26c.jpg'}} style ={estilo.imgGaleria}/> 
        </View>
      </ScrollView>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff78a8',
  },

  fotos: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgGaleria: {
    width: 150,
    height: 150,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
  },

  cabecalho: {
    width: '100%',
    height: 60,
    backgroundColor: '#ff4a86',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },

  iconCabecalho: {
    width: 30,
    height: 30,
  },

  titulo: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
});