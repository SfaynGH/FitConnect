import React from "react";
import { StyleSheet,Text } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LogInScreen from "./screens/Screen1";
import SignUpScreen from "./screens/Screen2";
import HomeScreen from "./screens/Screen3";
import CourseScreen from "./screens/Screen4";
import CourseDetailScreen from "./screens/Screen5";
import PlanningScreen from "./screens/Screen6";
import PlanningDetailScreen from "./screens/Screen7";
import ProfileScreen from "./screens/Screen8";
import CoachDetail from "./screens/Screen9";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faHeartPulse, faCalendarDays, faUser } from '@fortawesome/free-solid-svg-icons';

// Stack and Tab Navigators
const Stack = createNativeStackNavigator();
const TabBarLabel = ({ focused, label }) => (
    <Text style={[
      styles.inactiveLabelStyle,
      focused && styles.activeLabelStyle
    ]}>
      {label}
    </Text>
  );
  
  const Tab = createBottomTabNavigator();
  
  function TabNavigator() {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#4C4C6B',
            position: 'absolute',
            overflow: 'hidden',
            height: 90,
            paddingTop: 10,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            justifyContent: 'space-around',
            borderWidth: 0,
          },
          tabBarItemStyle: {
            alignItems: 'center',
            justifyContent: 'center',
          },
          tabBarIconStyle: {
            marginBottom: 5,
            fontSize: 24,
            color: '#FFFFFF', // Inactive icon color
          },
        }}
      >
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcon icon={faHome} color={'#fff'} size={24} />
            ),
            tabBarLabel: (props) => <TabBarLabel {...props} label="Home" />,
          }}
        />
        <Tab.Screen
          name="CourseScreen"
          component={CourseScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcon icon={faHeartPulse} color={'#fff'} size={24} />
            ),
            tabBarLabel: (props) => <TabBarLabel {...props} label="Classes" />,
          }}
        />
        <Tab.Screen
          name="PlanningScreen"
          component={PlanningScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcon icon={faCalendarDays} color={'#fff'} size={24} />
            ),
            tabBarLabel: (props) => <TabBarLabel {...props} label="Planing" />,
          }}
        />
        <Tab.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcon icon={faUser} color={'#fff'} size={24} />
            ),
            tabBarLabel: (props) => <TabBarLabel {...props} label="Account" />,
          }}
        />
      </Tab.Navigator>
    );
  }

// Main App Component
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LogIn" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="LogIn" component={LogInScreen} />
                <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
                <Stack.Screen name="Main" component={TabNavigator} />
                <Stack.Screen name="CoachDetail" component={CoachDetail} />
                <Stack.Screen name="CourseDetailScreen" component={CourseDetailScreen} />
                <Stack.Screen name="PlanningDetailScreen" component={PlanningDetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    inactiveLabelStyle:{
        textAlign: 'center',
        fontSize: 14,
        color: 'white',
        marginTop: 5,
    },
    activeLabelStyle:{
        textAlign: 'center',
        fontSize: 14,
        color: 'white',
        backgroundColor: '#6D6DFF',
        borderRadius: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 2,
        paddingBottom: 2,
        marginTop: 5,
    },
});