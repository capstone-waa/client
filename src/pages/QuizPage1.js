import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function QuizPage() {
  return (
    <View style={styles.container}>
      <Image style={styles.goldPicture} source={require("../../assets/gold.png")} />
      {/* 바깥의 네모모양 창 */}
      <View style={styles.square}>
        <Text style={styles.mainText}>글에 해당하는 단어를 말해주세요</Text>
        <Text style={styles.text}>임진왜란이 일어난 날짜는?</Text>
        <Image style={styles.soundPicture} source={require("../../assets/sound.png")} />
      </View>
      <View style={styles.scoresquare}>
        <Text style={styles.smalltext}>우와! 1점이야</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3E99F', // 바깥 배경색 변경
  },
  square: {
    width: 560,
    height: 600,
    backgroundColor: '#FFF9DE',
    justifyContent: 'flex-start', // 세로 방향으로 위쪽으로 정렬
    alignItems: 'center',
    marginBottom: 20,
  },
   scoresquare: {
    width: 140,
    height: 30,
    backgroundColor: '#395B64',
    justifyContent: 'flex-start', // 세로 방향으로 위쪽으로 정렬
    alignItems: 'center',
    borderRadius: 30, // 테두리를 둥글게 설정합니다.
    position: 'absolute',
    bottom: 105,
    left: 170,
    
  },
   mainText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 120, // 텍스트 아래 간격 조정
    marginTop: 20, // 텍스트 위 간격 조정
  },
   text: {
    fontSize: 22,
    fontWeight: 'bold',
  },
   smalltext: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  soundPicture: {
    width: 50,
    height: 50,
    position: 'absolute',
    top: 280,
    right: 250,
  },
  goldPicture: {
    width: 70,
    height: 70,
    position: 'absolute',
    bottom: 30,
    left: 80,
  },
});