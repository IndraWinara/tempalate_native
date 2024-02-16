import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainScreen from "./components/MainScreen";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown : false}}>
      <Tab.Screen name="Main" component={MainScreen} options={{title : 'Home'}} />
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Article" component={Article} />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={MyTabs} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;

const Feed = () => {
  return (
    <View>
      <Text>Feed</Text>
    </View>
  );
};

const Article = () => {
  return (
    <View>
      <Text>Article</Text>
    </View>
  );
};
