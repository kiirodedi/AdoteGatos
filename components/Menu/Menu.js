import { StyleSheet, Text, View, Image, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';

import pataGato from "../../assets/img/pata-gato.png";
import coracao from "../../assets/img/coracao.webp";

export default function Menu() {
  const navigation = useNavigation();
  return (
    <View style={estilo.container}>
      {/* Cabeçalho */}
      <View style={estilo.cabecalho}>
        <Image source={pataGato} style={estilo.iconCabecalho} />
        <Text style={estilo.titulo}>Adote Miau :3</Text>
        <Image source={coracao} style={estilo.iconCabecalho} />
      </View>
      <View style={estilo.nav}>
        <View style={estilo.btnAdote}>
          <Button title="Adote" onPress={() => navigation.navigate('Adote')} color="#ff4a86" />
        </View>
        <View style={estilo.btnGaleria}>
        <Button title="Galeria" onPress={() => navigation.navigate('Galeria')} color="#ff4a86" />
        </View>
      </View>

      <View style={estilo.divSobreNos}>
        <Text style={estilo.sobreNos}>
          Olá! Primeiramente, seja muito bem-vindo(a) ao nosso programa Adote Miau. Ficamos muito felizes por você ter tomado essa iniciativa de ajudar os gatinhos que precisam de um lar. Aqui, você encontrará informações sobre como adotar um gato, cuidados necessários e muito mais. Nossa missão é encontrar lares amorosos para esses felinos adoráveis e garantir que eles tenham uma vida feliz e saudável. Se você estiver interessado(a) em adotar um gato ou quiser saber mais sobre o processo, não hesite em entrar em contato conosco. Estamos aqui para ajudar! Obrigado por fazer a diferença na vida desses gatinhos! 🐾❤️
        </Text>
      </View>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff78a8',
    alignItems: 'center',
  },

  divSobreNos: {
    backgroundColor: '#ff4a86',
    margin: 15,
    borderRadius: 10,
  },

  sobreNos: {
    fontSize: 18,
    padding: 20,
    color: '#fff',
    textAlign: 'center',
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

  nav: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5,
  },

  btnAdote: {
    marginRight: 5,
    width: 100,
  },

  btnGaleria: {
    marginLeft: 5,
    width: 100,
  },  
});