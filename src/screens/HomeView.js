import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { Icon } from "react-native-elements";
import { Button } from "react-native-elements/dist/buttons/Button";

// import { styles } from "../style/loginStyle";

export default function login({ navigation }) {
  // 加了{navigation才可以用}
  return (
    <>
      {/* 透過這個"<>"可以在同一頁有多個view */}
      <View
        style={(styles.container, { paddingTop: 50, padding: 30 })}
        name="homepage"
      >
        <View style={{ flexDirection: "row" }}>
          <Icon
            onPress={() => {
              navigation.navigate("loginView");
            }}
            name="bars"
            type="font-awesome"
            color="#2b2b2b"
            size={20}
          />
        </View>
        <View>
          <Text style={styles.headerFont}>歡迎回來，張弘毅</Text>
          <Text style={styles.titleFont}>今日健身計畫：核心訓練</Text>
        </View>

        {/* 橫線 */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={styles.hr} />
        </View>

        {/* 健身計畫 */}
        <View style={{ flexDirection: "row" }}>
          <Icon name="heart-o" type="font-awesome" color="#2b2b2b" size={20} />
          <Text style={styles.subtitleFont}>{"   "}您個人的健身計畫</Text>
          <TouchableOpacity
            //   onPress={() => {
            //     navigation.navigate("loginView");
            //   }}
            style={styles.addButton}
          >
            <Text style={styles.buttonText}> 建立計畫</Text>
          </TouchableOpacity>
        </View>
        {/* Image area Note!! -> still need to add scroll function */}
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../../assets/images/coreTran.jpeg")}
            style={styles.planImage}
          ></Image>
          <Image
            source={require("../../assets/images/coreTran.jpeg")}
            style={styles.planImage}
          ></Image>
          <Image
            source={require("../../assets/images/coreTran.jpeg")}
            style={styles.planImage}
          ></Image>
        </View>
        {/* 橫線 */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={styles.hr} />
        </View>

        {/* 健身規劃 */}
        <View style={{ flexDirection: "row" , alignSelf: "center",}}>
          <Icon name="calendar" type="font-awesome" color="#2b2b2b" size={20} />
          <Text style={styles.subtitleFont}>{"   "}您個人的健身規劃</Text>
          <TouchableOpacity
            //   onPress={() => {
            //     navigation.navigate("loginView");
            //   }}
            style={styles.addButton}
          >
            <Text style={styles.buttonText}> 新增規劃</Text>
          </TouchableOpacity>
        </View>
        {/* 橫線 */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={styles.hr} />
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#f9f9f9",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },

  textFamily: {
    fontFamily: "Verdana",
    fontWeight: "bold",
    fontSize: 12,
  },
  headerFont: {
    fontFamily: "Verdana",
    fontWeight: "bold",
    fontSize: 24,
    justifyContent: "flex-start",
    marginTop: 10,
  },
  subtitleFont: {
    fontFamily: "Verdana",
    fontWeight: "bold",
    fontSize: 16,
    justifyContent: "flex-start",
  },
  titleFont: {
    marginTop: 10,
    fontFamily: "Verdana",
    fontWeight: "bold",
    fontSize: 18,
    color: "#8d8d8d",
  },
  input: {
    alignSelf: "stretch",
    height: 40,
    margin: 15,
    borderWidth: 1,
    padding: 10,
    borderColor: "#2b2b2b",
  },
  button: {
    alignSelf: "flex-start",
    margin: 20,
    marginTop: 20,
    padding: 10,
    paddingLeft: 45,
    paddingRight: 45,
    backgroundColor: "#2b2b2b",
  },
  addButton: {
    alignSelf: "flex-start",
    marginLeft: 60,
    padding: 7,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#2b2b2b",
  },
  buttonText: {
    flexDirection: "row",
    color: "#f9f9f9",
    fontSize: 12,
    fontWeight: "bold",
    fontFamily: "Verdana",
    justifyContent: "center",
    textAlign: "center",
  },
  hr: {
    width: 100,
    flex: 1,
    height: 1.5,
    backgroundColor: "#b9b9b9",
    marginTop: 10,
    marginBottom: 10,
  },
  planImage: {
    height: 100,
    width: 100,
    margin: 5,
  },
});
