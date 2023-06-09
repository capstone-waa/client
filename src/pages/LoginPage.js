import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Alert,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { StatusBar } from "expo-status-bar";
import MyButton from "../components/MyButton";
import { KeyboardAvoidingView, Modal } from "react-native-web";
import { auth } from "../../firebase";

export default function LoginPage({ navigation }) {
  const [userId, setUserId] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");

  const handleSignUp = () => {
    auth
      .createUserWithIDAndPassword(userId, userPassword)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user.userId);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <View style={styles.smallContainer}>
          <Text style={styles.Text}>Text</Text>
          {/* 아이디 비빌번호 텍스트 박스 묶음 */}
          <View style={styles.fixToInput}>
            <TextInput
              style={styles.textFormTop}
              placeholder={"아이디"}
              value={userId}
              onChangeText={(text) => setUserId(text)}
              autoCapitalize="none"
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current && passwordInputRef.current.focus()
              }
              underlineColorAndroid="#f000"
              blurOnSubmit={false}
            />
            {/* <MyButton text="ddd" /> */}
            <TextInput
              style={styles.textFormTop}
              placeholder={"비밀번호"}
              value={userPassword}
              secureTextEntry={true} // 비밀번호 타입으로 변경
              onChangeText={(text) => setUserPassword(text)}
              autoCapitalize="none"
              returnKeyType="next"
              // onSubmitEditing={() =>
              //   passwordInputRef.current && passwordInputRef.current.focus()
              // }
              underlineColorAndroid="#f000"
              blurOnSubmit={false}
            />
          </View>

          <View style={styles.buttonContainer}>
            {/* 로그인 하면 회원이 접근가능한 page로 */}
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("")}>
                <Text style={styles.buttonText}>로그인</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Register")}>
                <Text style={styles.buttonText}>회원가입</Text>
              </TouchableOpacity>
              {/* 소셜 로그인 버튼 */}
            </View>
            <View style={styles.socialLogin}>
                <TouchableOpacity
                  style={styles.social_button}
                  onPress={() => navigation.navigate("Register")}>
                  <Text style={styles.buttonText}>카카오 로그인</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.social_button}
                  onPress={() => navigation.navigate("Register")}>
                  <Text style={styles.buttonText}>구글 로그인</Text>
                </TouchableOpacity>
              </View>
            {/* <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("")}>
                <Text style={styles.buttonText}>체험해보기</Text>
              </TouchableOpacity> */}
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3E99F",
    alignItems: "center",
    justifyContent: "center",
  },
  smallContainer: {
    backgroundColor: "#FDFBEC",
    alignItems: "center",
    justifyContent: "center",
    width: wp("75%"), // 스크린 가로 크기 100%
    height: hp("70%"), // 스크린 세로 크기 70%
    borderRadius: wp("2%"),
  },
  Text: {
    flex : 1,
    bottom: 100,
    color: "black",
    fontSize: hp("10%"),
    fontWeight: "bold",
    marginTop: hp("15%"),
  },
  fixToInput: {
    flex : 1,
    flexDirection: "col",
    justifyContent: "space-between",
    marginTop: hp("2%"),
    padding : hp("2%")
  },
  buttonContainer: {
    flex:2,
    flexDirection: "col",
    marginTop: hp("3%"),
  },
  socialLogin: {
    flexDirection: "row",
    marginBottom : hp("3%"),
  },
  textFormTop: { //로그인 비밀번호 텍스트 인풋
    width: wp("50%"),
    backgroundColor: "#FFFFFF",
    marginBottom: hp("1%"),
    paddingHorizontal: hp("1%"),
    height: hp("5%"),
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 1,
  },
  button: {
    width: wp("50%"), 
    height: hp("5%"),
    backgroundColor: "#1E2B22",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginHorizontal: 10,
    marginBottom: hp("1%"),
  },
  social_button:{
    width: wp("30%"), 
    height: hp("5%"),
    backgroundColor: "#1E2B22",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginHorizontal: 8,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: hp("2%"),
  },
});
