import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogInScreen from "./screens/Screen1";
import SignUpScreen from "./screens/Screen2";
import HomeScreen from "./screens/Screen3";
import CourseScreen from "./screens/Screen4";
import CourseDetailScreen from "./screens/Screen5";
import PlanningScreen from "./screens/Screen6";
import PlanningDetailScreen from "./screens/Screen7";
import ProfileScreen from "./screens/Screen8";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LogInScreen" screenOptions={{headerShown:false}}>
                <Stack.Screen name="LogInScreen" component={LogInScreen} />
                <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="CourseScreen" component={CourseScreen} />
                <Stack.Screen name="CourseDetailScreen" component={CourseDetailScreen} />
                <Stack.Screen name="PlanningScreen" component={PlanningScreen} />
                <Stack.Screen name="PlanningDetailScreen" component={PlanningDetailScreen} />
                <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}