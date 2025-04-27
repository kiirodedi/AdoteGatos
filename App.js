import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Adote from './components/Adote/Adote';
import Galeria from './components/Galeria/Galeria';
import Menu from './components/Menu/Menu';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false}}>
        <Tab.Screen name="Menu" component={Menu} />
        <Tab.Screen name="Adote" component={Adote} />
        <Tab.Screen name="Galeria" component={Galeria} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}