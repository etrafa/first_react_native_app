import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import C1_L1 from "./src/pages/01_Chapter_One/C1_L1";
import C1_L2 from "./src/pages/01_Chapter_One/C1_L2";
import C1_L3 from "./src/pages/01_Chapter_One/C1_L3";
import C1_L4 from "./src/pages/01_Chapter_One/C1_L4";
import C1_L5 from "./src/pages/01_Chapter_One/C1_L5";
import C2_L1 from "./src/pages/02_Chapter_Two/C2_L1";
import C2_L2 from "./src/pages/02_Chapter_Two/C2_L2";
import C2_L3 from "./src/pages/02_Chapter_Two/C2_L3";
import C2_L4 from "./src/pages/02_Chapter_Two/C2_L4";
import C2_L5 from "./src/pages/02_Chapter_Two/C2_L5";
import C3_L1 from "./src/pages/03_Chapter_Three/C3_L1";
import C3_L2 from "./src/pages/03_Chapter_Three/C3_L2";
import C3_L3 from "./src/pages/03_Chapter_Three/C3_L3";
import C3_L4 from "./src/pages/03_Chapter_Three/C3_L4";
import C3_L5 from "./src/pages/03_Chapter_Three/C3_L5";
import C4_L1 from "./src/pages/04_Chapter_Four/C4_L1";
import C4_L2 from "./src/pages/04_Chapter_Four/C4_L2";
import C4_L3 from "./src/pages/04_Chapter_Four/C4_L3";
import C4_L4 from "./src/pages/04_Chapter_Four/C4_L4";
import C4_L5 from "./src/pages/04_Chapter_Four/C4_L5";
import C5_L1 from "./src/pages/05_Chapter_Five/C5_L1";
import C5_L2 from "./src/pages/05_Chapter_Five/C5_L2";
import C5_L3 from "./src/pages/05_Chapter_Five/C5_L3";
import C5_L4 from "./src/pages/05_Chapter_Five/C5_L4";
import C5_L5 from "./src/pages/05_Chapter_Five/C5_L5";
import C6_L1 from "./src/pages/06_Chapter_Six/C6_L1";
import C6_L2 from "./src/pages/06_Chapter_Six/C6_L2";
import C6_L3 from "./src/pages/06_Chapter_Six/C6_L3";
import C6_L4 from "./src/pages/06_Chapter_Six/C6_L4";
import C6_L5 from "./src/pages/06_Chapter_Six/C6_L5";
import C7_L1 from "./src/pages/07_Chapter_Seven/C7_L1";
import C7_L2 from "./src/pages/07_Chapter_Seven/C7_L2";
import C7_L3 from "./src/pages/07_Chapter_Seven/C7_L3";
import C7_L4 from "./src/pages/07_Chapter_Seven/C7_L4";
import C7_L5 from "./src/pages/07_Chapter_Seven/C7_L5";
import C7_L6 from "./src/pages/07_Chapter_Seven/C7_L6";
import C8_L1 from "./src/pages/08_Chapter_Eight/C8_L1";
import C8_L2 from "./src/pages/08_Chapter_Eight/C8_L2";
import C8_L3 from "./src/pages/08_Chapter_Eight/C8_L3";
import C8_L4 from "./src/pages/08_Chapter_Eight/C8_L4";
import C8_L5 from "./src/pages/08_Chapter_Eight/C8_L5";
import C9_L1 from "./src/pages/09_Chapter_Nine/C9_L1";
import C9_L2 from "./src/pages/09_Chapter_Nine/C9_L2";
import C9_L3 from "./src/pages/09_Chapter_Nine/C9_L3";
import C9_L4 from "./src/pages/09_Chapter_Nine/C9_L4";
import C9_L5 from "./src/pages/09_Chapter_Nine/C9_L5";
import C10_L1 from "./src/pages/10_Chapter_Ten/C10_L1";
import C10_L2 from "./src/pages/10_Chapter_Ten/C10_L2";
import C10_L3 from "./src/pages/10_Chapter_Ten/C10_L3";
import C10_L4 from "./src/pages/10_Chapter_Ten/C10_L4";
import C10_L5 from "./src/pages/10_Chapter_Ten/C10_L5";
import Home from "./src/pages/Home/Home";

import { useNavigation } from "@react-navigation/core";

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
        <Stack.Screen name="C1_L3" component={C1_L3} />
        <Stack.Screen name="C1_L4" component={C1_L4} />
        <Stack.Screen name="C1_L5" component={C1_L5} />

        <Stack.Screen name="C2_L1" component={C2_L1} />
        <Stack.Screen name="C2_L2" component={C2_L2} />
        <Stack.Screen name="C2_L3" component={C2_L3} />
        <Stack.Screen name="C2_L4" component={C2_L4} />
        <Stack.Screen name="C2_L5" component={C2_L5} />

        <Stack.Screen name="C3_L1" component={C3_L1} />
        <Stack.Screen name="C3_L2" component={C3_L2} />
        <Stack.Screen name="C3_L3" component={C3_L3} />
        <Stack.Screen name="C3_L4" component={C3_L4} />
        <Stack.Screen name="C3_L5" component={C3_L5} />

        <Stack.Screen name="C4_L1" component={C4_L1} />
        <Stack.Screen name="C4_L2" component={C4_L2} />
        <Stack.Screen name="C4_L3" component={C4_L3} />
        <Stack.Screen name="C4_L4" component={C4_L4} />
        <Stack.Screen name="C4_L5" component={C4_L5} />

        <Stack.Screen name="C5_L1" component={C5_L1} />
        <Stack.Screen name="C5_L2" component={C5_L2} />
        <Stack.Screen name="C5_L3" component={C5_L3} />
        <Stack.Screen name="C5_L4" component={C5_L4} />
        <Stack.Screen name="C5_L5" component={C5_L5} />

        <Stack.Screen name="C6_L1" component={C6_L1} />
        <Stack.Screen name="C6_L2" component={C6_L2} />
        <Stack.Screen name="C6_L3" component={C6_L3} />
        <Stack.Screen name="C6_L4" component={C6_L4} />
        <Stack.Screen name="C6_L5" component={C6_L5} />

        <Stack.Screen name="C7_L1" component={C7_L1} />
        <Stack.Screen name="C7_L2" component={C7_L2} />
        <Stack.Screen name="C7_L3" component={C7_L3} />
        <Stack.Screen name="C7_L4" component={C7_L4} />
        <Stack.Screen name="C7_L5" component={C7_L5} />
        <Stack.Screen name="C7_L6" component={C7_L6} />

        <Stack.Screen name="C8_L1" component={C8_L1} />
        <Stack.Screen name="C8_L2" component={C8_L2} />
        <Stack.Screen name="C8_L3" component={C8_L3} />
        <Stack.Screen name="C8_L4" component={C8_L4} />
        <Stack.Screen name="C8_L5" component={C8_L5} />

        <Stack.Screen name="C9_L1" component={C9_L1} />
        <Stack.Screen name="C9_L2" component={C9_L2} />
        <Stack.Screen name="C9_L3" component={C9_L3} />
        <Stack.Screen name="C9_L4" component={C9_L4} />
        <Stack.Screen name="C9_L5" component={C9_L5} />

        <Stack.Screen name="C10_L1" component={C10_L1} />
        <Stack.Screen name="C10_L2" component={C10_L2} />
        <Stack.Screen name="C10_L3" component={C10_L3} />
        <Stack.Screen name="C10_L4" component={C10_L4} />
        <Stack.Screen name="C10_L5" component={C10_L5} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
