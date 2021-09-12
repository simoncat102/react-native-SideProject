import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";
import { Button } from "react-native-elements/dist/buttons/Button";
import { LinearProgress } from 'react-native-elements';


// import { styles } from "../style/loginStyle";

export default function login({ navigation }) {
  // 加了{navigation才可以用}
  return (
    <>
        <View style={(styles.container, { paddingTop: 50, padding: 30 })} name="signup">
            <View>
            <Text style={styles.headerFont}>輸入您的計畫名稱</Text>
            </View>
        </View>
        <View style={styles.inputContainer }>
                <Icon name="activity" type="feather" color="#2b2b2b" size={20} />
                <TextInput style={styles.input} placeholder="健身計畫名稱" />
        </View>

        <View style={{marginTop: 50}}>
        {/* 有背景的button */}
            <TouchableOpacity onPress={() => {navigation.navigate("homeView");}} style={styles.button}>
                <Text style={styles.buttonText}> 下一步驟 </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate("homeView");}} style={styles.button2}>
                <Text style={styles.buttonText}> 上一步驟 </Text>
            </TouchableOpacity>
        </View>

        <StatusBar style="auto" />
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9f9f9",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  button: {
    alignSelf: "center",
    margin: 10,
    padding: 10,
    paddingLeft: 45,
    paddingRight: 45,
    backgroundColor: "#f9f9f9",
    borderWidth: 1, 
    borderColor: "#2b2b2b"
  },
  button2: {
    alignSelf: "center",
    margin: 10,
    padding: 10,
    paddingLeft: 45,
    paddingRight: 45,
    backgroundColor: "#f9f9f9",
  },

  buttonText: {
    flexDirection: "row",
    color: "#2b2b2b",
    fontSize: 12,
    fontWeight: "bold",
    fontFamily: "Verdana",
    justifyContent: "center",
    textAlign: "center",
  },

  inputContainer: {
    backgroundColor: "#f9f9f9",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 200
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
    textAlign: "center"
  },
  titleFont: {
    marginTop: 10,
    fontFamily: "Verdana",
    fontWeight: "bold",
    fontSize: 16,
    color: "#8d8d8d",
  },
  input: {
    alignSelf: "stretch",
    borderBottomWidth: 1,
    borderColor: "#2b2b2b",
    paddingHorizontal: 10, 
    width: 200, 
    backgroundColor: "#f9f9f9"
  },

  hr: {
    width: 100,
    flex: 1,
    height: 1.5,
    backgroundColor: "#b9b9b9",
    marginTop: 10,
    marginBottom: 10,
  },

});
