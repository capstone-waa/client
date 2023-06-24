import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from "accordion-collapse-react-native";
import Layout from "../components/Layout";
import isTablet from "../utils/validationSize";

function MyPage({ navigation }) {
  const [isTabletScreen, setIsTabletScreen] = useState(isTablet());
  return (
    <Layout setIsTbletScreen={setIsTabletScreen}>
      <View style={styles.container}>
        <View
          style={{
            width: 400,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",

            gap: 50,
          }}
        >
          {/* 마이페이지 헤더  */}
          <View
            style={{
              width: "100%",
              height: 800,
              backgroundColor: "#F3E99F",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
              justifyContent: "center",
              padding: 10,
              paddingVertical: 30,

              borderRadius: 10,

              elevation: 4,
            }}
          >
            <View
              style={{
                width: "100%",
                height: 200,
                backgroundColor: "#F3E99F",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                justifyContent: "center",
                padding: 10,
                paddingVertical: 30,

                borderRadius: 10,

                elevation: 4,
              }}
            >
              <Image
                style={styles.goldPicture}
                source={require("../../assets/gold.png")}
              />
              <View
                style={{
                  width: "60%",
                  height: 200,
                  backgroundColor: "#F3E99F",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 10,
                  paddingVertical: 30,

                  borderRadius: 20,
                }}
              >
                <Text
                  style={{
                    //backgroundColor: "#FDFBEC",
                    justifyContent: "center",
                    alignItems: "center",
                    //height: 100,
                    width: "60%",
                    borderRadius: 10,
                    padding: 20,
                    fontWeight: "600",
                    color: "black",
                    fontSize: 15,
                  }}
                >
                  이름: 시후
                </Text>
                <Text
                  style={{
                    //backgroundColor: "#FDFBEC",
                    justifyContent: "center",
                    alignItems: "center",
                    //height: 100,
                    width: "60%",
                    borderRadius: 10,
                    padding: 20,
                    fontWeight: "600",
                    color: "black",
                    fontSize: 15,
                  }}
                >
                  나이: 7살
                </Text>
              </View>
            </View>
            {/* 토글?창 */}
            <View
              style={{
                width: "100%",
                height: 600,
                backgroundColor: "#FDFBEC",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
                justifyContent: "center",
                padding: 10,
                paddingVertical: 30,

                borderRadius: 10,

                //elevation: 4,
              }}
            >
              <Collapse>
                <CollapseHeader>
                  <View
                    style={{
                      width: 350,
                      height: 50,
                      backgroundColor: "#FFE2DF",
                      flexDirection: "column",
                      justifyContent: "space-around",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: 10,
                      paddingVertical: 30,
                    }}
                  >
                    <Text style={styles.titleText}>비밀번호 변경</Text>
                  </View>
                </CollapseHeader>
                <CollapseBody>
                  <View
                    style={{
                      width: 350,
                      height: 300,
                      backgroundColor: "#FF8A80",
                      flexDirection: "column",
                      justifyContent: "space-around",
                      alignItems: "flex-start",
                      //alignItems: "flex-end",
                      justifyContent: "center",
                      padding: 10,
                      paddingVertical: 30,
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        paddingVertical: 10,
                        fontWeight: "bold",
                        fontSize: 14,
                      }}
                    >
                      새 비밀번호
                    </Text>
                    <TextInput
                      style={{
                        width: 320,
                        height: 40,
                        backgroundColor: "#E7F6F2",
                        padding: 10,
                      }}
                      placeholder={"변경하실 비밀번호"}
                    ></TextInput>

                    <Text
                      style={{
                        color: "white",
                        paddingVertical: 10,
                        fontWeight: "bold",
                        fontSize: 14,
                      }}
                    >
                      비밀번호 재확인
                    </Text>
                    <TextInput
                      style={{
                        width: 320,
                        height: 40,
                        backgroundColor: "#E7F6F2",
                        padding: 10,
                        paddingVertical: 10,
                      }}
                      placeholder={"다시 한 번 입력해주세요."}
                    ></TextInput>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => navigation.navigate("")}
                    >
                      <Text style={styles.buttonText}>변경하기</Text>
                    </TouchableOpacity>
                  </View>
                </CollapseBody>
              </Collapse>
              <Collapse>
                <CollapseHeader>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("")}
                  ></TouchableOpacity>
                  <View
                    style={{
                      width: 350,
                      height: 50,
                      backgroundColor: "#FDFBEC",
                      flexDirection: "column",
                      justifyContent: "space-around",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: 10,
                      paddingVertical: 30,
                    }}
                  >
                    <Text style={styles.titleText}>통계</Text>
                  </View>
                </CollapseHeader>
                {/* <CollapseBody>
                <View
                  style={{
                    width: 400,
                    height: 200,
                    backgroundColor: "#FF8A80",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 10,
                    paddingVertical: 30,
                  }}
                >
                  <Text>내 정보 수정</Text>
                </View>
              </CollapseBody> */}
              </Collapse>
              <Collapse>
                <CollapseHeader>
                  <View
                    style={{
                      width: 350,
                      height: 50,
                      backgroundColor: "#FDFBEC",
                      flexDirection: "column",
                      justifyContent: "space-around",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: 10,
                      paddingVertical: 30,
                    }}
                  >
                    <Text style={styles.titleText}>나이 설정</Text>
                  </View>
                </CollapseHeader>
                <CollapseBody>
                  <View
                    style={{
                      width: 350,
                      height: 100,
                      backgroundColor: "#FF8A80",
                      flexDirection: "column",
                      justifyContent: "space-around",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: 10,
                      paddingVertical: 30,
                    }}
                  >
                    <Text>내 정보 수정</Text>
                  </View>
                </CollapseBody>
              </Collapse>
              <Collapse>
                <CollapseHeader>
                  <View
                    style={{
                      width: 350,
                      height: 50,
                      backgroundColor: "#FDFBEC",
                      flexDirection: "column",
                      justifyContent: "space-around",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: 10,
                      paddingVertical: 30,
                    }}
                  >
                    <Text style={styles.titleText}>닉네임 변경</Text>
                  </View>
                </CollapseHeader>
                <CollapseBody>
                  <View
                    style={{
                      width: 350,
                      height: 100,
                      backgroundColor: "#FF8A80",
                      flexDirection: "column",
                      justifyContent: "space-around",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: 10,
                      paddingVertical: 30,
                    }}
                  >
                    <Text>내 정보 수정</Text>
                  </View>
                </CollapseBody>
              </Collapse>
            </View>
          </View>
        </View>
      </View>
    </Layout>
  );
}
export default MyPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#F3E99F",
    alignItems: "center",
    justifyContent: "space-around",
    //gap: 24,
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 20,
    paddingRight: 20,
  },
  goldPicture: {
    width: 100,
    height: 100,
  },
  button: {
    width: 100,
    height: 40,
    backgroundColor: "#F7D060",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginVertical: 35,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 15,
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
