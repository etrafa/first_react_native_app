import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import C1_L1 from "./src/pages/Chapter_One/C1_L1";
import C1_L2 from "./src/pages/Chapter_One/C1_L2";
import Home from "./src/pages/Home/Home";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Home Page" }}
        />
        <Stack.Screen name="C1_L1" component={C1_L1} />
        <Stack.Screen name="C1_L2" component={C1_L2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
