import { StyleSheet, Text, View, Image } from "react-native";
import { ScrollView } from 'react-native';

import pataGato from "../../assets/img/pata-gato.png";
import coracao from "../../assets/img/coracao.webp";

import gato1 from "../../assets/img/buxin.jpg";
import gato2 from "../../assets/img/helo.jpg";
import gato3 from "../../assets/img/kiiro.jpg";
import gato4 from "../../assets/img/miguelito.jpg";
import gato5 from "../../assets/img/naju.jpg";
import gato6 from "../../assets/img/severino.jpg";

export default function Adote() {
  return (
    <View style={estilo.container}>
      {/* Cabeçalho */}
      <View style={estilo.cabecalho}>
        <Image source={pataGato} style={estilo.iconCabecalho} />
          <Text style={estilo.titulo}>Adote Miau :3</Text>
        <Image source={coracao} style={estilo.iconCabecalho} />
      </View>

      <ScrollView>
      <View style={estilo.divGato}>
        <Image source={gato1} style={estilo.imgGato} />
        <View stye={estilo.descricao}>
          <Text style={estilo.nomeGato}>Buxim</Text>
          <Text style={estilo.DescGato}>Olha a lapa de buxo{"\n"}que esse gato tem!{"\n"}Impossivel de resistir.</Text>
        </View>
      </View>

      <View style={estilo.divGato}>
        <Image source={gato2} style={estilo.imgGato} />
        <View stye={estilo.descricao}>
          <Text style={estilo.nomeGato}>Helo</Text>
          <Text style={estilo.DescGato}>Olha a cara de coitado{"\n"}desse otário. Só um{"\n"}monstro pra não{"\n"}querer dar amor e{"\n"}carinho pra ele.</Text>
        </View>
      </View>

      <View style={estilo.divGato}>
        <Image source={gato3} style={estilo.imgGato} />
        <View stye={estilo.descricao}>
          <Text style={estilo.nomeGato}>Kiiro</Text>
          <Text style={estilo.DescGato}>Seloko, esse gato ta{"\n"}em choque.{"\n"}:O</Text>
        </View>
      </View>

      <View style={estilo.divGato}>
        <Image source={gato4} style={estilo.imgGato} />
        <View stye={estilo.descricao}>
          <Text style={estilo.nomeGato}>Miguelito</Text>
          <Text style={estilo.DescGato}>Blu{"\n"}:P</Text>
        </View>
      </View>

      <View style={estilo.divGato}>
        <Image source={gato5} style={estilo.imgGato} />
        <View stye={estilo.descricao}>
          <Text style={estilo.nomeGato}>Naju</Text>
          <Text style={estilo.DescGato}>Ela é meio{"\n"}desconfiada. É melhor{"\n"}você ficar esperto.{"\n"}(Por favor, leve esse{"\n"}aviso a sério!)</Text>
        </View>
      </View>

      <View style={estilo.divGato}>
        <Image source={gato6} style={estilo.imgGato} />
        <View stye={estilo.descricao}>
          <Text style={estilo.nomeGato}>Severino</Text>
          <Text style={estilo.DescGato}>Mds, a cara de bunda{"\n"}que esse gato tem.{"\n"}Mas juramos que ele{"\n"}é um amor{"\n"}(às vezes...)</Text>
        </View>
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

  divGato: {
    width: '100%',
    height: 190,
    backgroundColor: '#ff4a86',
    borderRadius: 10,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row'
  },

  imgGato: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    marginBottom: 20,
  },

  nomeGato: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
  },

  DescGato: {
    fontSize: 15,
    color: '#fff',
    marginTop: 5,
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
