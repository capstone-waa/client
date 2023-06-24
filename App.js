import * as React from "react";

import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingPage from "../client/src/pages/LandingPage";
import LoginPage from "../client/src/pages/LoginPage";
import LogoutPage from "../client/src/pages/LogoutPage";
import RegisterPage from "../client/src/pages/RegisterPage";
import MemberMainPage from "../client/src/pages/MemberMainPage";
import GuestMainPage from "../client/src/pages/GuestMainPage";
import CounselingPage from "./src/pages/CounselingPage";
import WordChainPage from "./src/pages/WordChainPage";
import TwentyQuestionPage from "./src/pages/TwentyQuestionPage";
import WordChainLandingPage from "./src/pages/WordChainLandingPage";
import QuizPage from "../client/src/pages/QuizPage";
import QuizPage1 from "../client/src/pages/QuizPage1";
import MyPage from "../client/src/pages/MyPage";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LandingPage"
        screenOptions={{ cardStyle: { backgroundColor: "#f3e99f" } }}
      >
        <Stack.Screen name="Quiz" component={QuizPage} />
        <Stack.Screen name="Quiz1" component={QuizPage1} />
        {/* MainPage */}
        <Stack.Screen
          name="LandingPage"
          component={MyPage}
          options={{
            title: "",
            headerBackTitleVisible: false,
            headerBackImage: "BackBtn",
            headerShown: false,
          }}
        />

        <Stack.Screen name="MyPage" component={MyPage} />
        <Stack.Screen name="Guest" component={GuestMainPage} />
        <Stack.Screen
          name="WordChainLanding"
          component={WordChainLandingPage}
        />
        <Stack.Screen name="TwentyQuestion" component={TwentyQuestionPage} />
        <Stack.Screen name="Counseling" component={CounselingPage} />
        <Stack.Screen name="WordChain" component={WordChainPage} />
        <Stack.Screen name="Member" component={MemberMainPage} />
        {/* <Stack.Screen name="Landing" component={LandingPage} /> */}

        {/* LoginPage */}
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{
            title: "",
            headerBackTitleVisible: false,
            headerBackImage: "BackBtn",
            headerStyle: {
              backgroundColor: "#f3e99f",
            },
          }}
        />

        <Stack.Screen
          name="Register"
          component={RegisterPage}
          options={{
            title: "",
            headerBackTitleVisible: false,
            headerBackImage: "BackBtn",
            headerStyle: {
              backgroundColor: "#f3e99f",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
