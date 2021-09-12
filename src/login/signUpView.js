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

// import { styles } from "../style/loginStyle";

export default function login({ navigation }) {
  // 加了{navigation才可以用}
  return (
    <>
      {/* 透過這個"<>"可以在同一頁有多個view */}
      <View
        style={(styles.container, { paddingTop: 50, padding: 30 })}
        name="signup"
      >
        <View>
          <Text style={styles.headerFont}>Welcome!</Text>
          <Text style={styles.titleFont}>註冊您的帳號，已建立您的健身計畫</Text>
        </View>
      </View>
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="姓名" />
        <TextInput style={styles.input} keyboardType="email-address" placeholder="電子信箱" />
        <TextInput secureTextEntry={true} style={styles.input} placeholder="密碼" />
        <TextInput secureTextEntry={true} style={styles.input} placeholder="確認密碼" />
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("loginView");
          }}
          style={styles.cancelButton}
        >
          <Text style={styles.buttonText}> 取消註冊</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}> 確認註冊 </Text>
        </TouchableOpacity>
      </View>
      {/* 橫線 */}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={styles.hr} />
      </View>

      <View>
        <TouchableOpacity style={styles.facebookButton}>
          <Icon
            name="facebook-official"
            type="font-awesome"
            color="#f9f9f9"
            size={20}
          />
          <Text style={styles.buttonText}>
            {"    "}
            Sign up with Facebook
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.googleButton}>
          <Icon
            name="google-plus-square"
            type="font-awesome"
            color="#f9f9f9"
            size={20}
          />
          <Text style={styles.buttonText}>
            {"    "}
            Sign up with Google
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
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
  cancelButton: {
    alignSelf: "flex-start",
    margin: 20,
    marginTop: 20,
    padding: 10,
    paddingLeft: 45,
    paddingRight: 45,
    backgroundColor: "#8d8d8d",
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
  facebookButton: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    margin: 20,
    padding: 10,
    paddingLeft: 70,
    paddingRight: 70,
    backgroundColor: "#3B5998",
  },
  googleButton: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
    paddingLeft: 70,
    paddingRight: 70,
    backgroundColor: "#4285f4",
  },
});
