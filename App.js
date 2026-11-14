import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import SignInScreen from './screens/SignInScreen';
import ShopScreen from './screens/ShopScreen';
import OrdersScreen from './screens/OrdersScreen';
import ActivityScreen from './screens/ActivityScreen';
import AccountScreen from './screens/AccountScreen';
import EditProfileScreen from './screens/EditProfileScreen';
import PromiseScreen from './screens/PromiseScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
   <Tab.Navigator
  screenOptions={({ route }) => ({
    headerShown: false,
    tabBarActiveTintColor: '#0A2540',
    tabBarInactiveTintColor: '#425466',
    tabBarLabelStyle: { fontSize: 11, fontWeight: '600', marginBottom: 4 },
    tabBarStyle: {
  backgroundColor: '#FFFFFF',
  borderTopColor: '#E2E8F0',
  height: 75,
  paddingBottom: 15,
  paddingTop: 10,
},
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;
      if (route.name === 'Shop') iconName = focused ? 'basket' : 'basket-outline';
      else if (route.name === 'Orders') iconName = focused ? 'receipt' : 'receipt-outline';
      else if (route.name === 'Activity') iconName = focused ? 'pulse' : 'pulse-outline';
      else if (route.name === 'Account') iconName = focused ? 'person' : 'person-outline';
      return <Ionicons name={iconName} size={22} color={color} />;
    },
  })}
>
      <Tab.Screen name="Shop" component={ShopScreen} />
      <Tab.Screen name="Orders" component={OrdersScreen} />
      <Tab.Screen name="Activity" component={ActivityScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="MainTabs" component={MainTabs} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        <Stack.Screen name="Promise" component={PromiseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}