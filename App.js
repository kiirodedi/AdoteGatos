import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Biblioteca de ícones

import Adote from './components/Adote/Adote';
import Galeria from './components/Galeria/Galeria';
import Menu from './components/Menu/Menu';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Menu') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Adote') {
              iconName = focused ? 'paw' : 'paw-outline';
            } else if (route.name === 'Galeria') {
              iconName = focused ? 'images' : 'images-outline';
            }

            // Retorna o ícone apropriado
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#ff4a86', // Cor do ícone ativo
          tabBarInactiveTintColor: 'gray', // Cor do ícone inativo
          tabBarStyle: {
            backgroundColor: '#fff', // Cor de fundo da barra
            borderTopWidth: 0, // Remove a borda superior
            height: 60, // Altura da barra
          },
          tabBarLabelStyle: {
            fontSize: 12, // Tamanho da fonte do rótulo
            fontWeight: 'bold', // Negrito no rótulo
          },
        })}
      >
        <Tab.Screen name="Menu" component={Menu} />
        <Tab.Screen name="Adote" component={Adote} />
        <Tab.Screen name="Galeria" component={Galeria} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}