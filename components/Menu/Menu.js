import { StyleSheet, Text, View, Image } from "react-native";
import { ScrollView  } from "react-native-gesture-handler";

import pataGato from "../../assets/img/pata-gato.png";
import coracao from "../../assets/img/coracao.webp";

export default function Menu() {
  return (
    <View style={estilo.container}>
      {/* Cabeçalho */}
      <View style={estilo.cabecalho}>
        <Image source={pataGato} style={estilo.iconCabecalho} />
        <Text style={estilo.titulo}>Adote Miau :3</Text>
        <Image source={coracao} style={estilo.iconCabecalho} />
      </View>

      <ScrollView>
      <View style={estilo.divSobreNos}>
        <Text style={estilo.sobreNos}>
          Olá! Primeiramente, seja muito bem-vindo(a) ao nosso programa Adote Miau. Ficamos muito felizes por você ter tomado essa iniciativa de ajudar os gatinhos que precisam de um lar. Aqui, você encontrará informações sobre como adotar um gato, cuidados necessários e muito mais. Nossa missão é encontrar lares amorosos para esses felinos adoráveis e garantir que eles tenham uma vida feliz e saudável. Se você estiver interessado(a) em adotar um gato ou quiser saber mais sobre o processo, não hesite em entrar em contato conosco. Estamos aqui para ajudar! Obrigado por fazer a diferença na vida desses gatinhos! 🐾❤️
        </Text>
      </View>
      </ScrollView>
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
    margin: 20,
    borderRadius: 10,
  },

  sobreNos: {
    fontSize: 18,
    padding: 20,
    color: '#fff',
    textAlign: 'center',
    margin: 20,
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
  }
});