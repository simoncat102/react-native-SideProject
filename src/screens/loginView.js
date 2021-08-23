import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, Image, TouchableOpacity, TextInput ,StyleSheet} from "react-native";
import { Icon } from "react-native-elements";
import { Button } from "react-native-elements/dist/buttons/Button";

// import { styles } from "../style/loginStyle";

export default function login({ navigation }) {
  // 加了{navigation才可以用}
  return (
    <>
      {/* 透過這個"<>"可以在同一頁有多個view */}
      <View style={styles.container} name="login">
        <View style={{}}>
          <Image
            source={require("/Users/mac/本機檔案/react-native-SideProject/assets/images/favicon.png")}
            style={styles.logo}
          ></Image>
        </View>
        <View>
          <TextInput style={styles.input} placeholder="email address" />
          <TextInput style={styles.input} placeholder="password" />

          {/* 有背景的button */}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}> Sign In </Text>
          </TouchableOpacity>
        </View>
        {/* 基礎的按鍵 */}
        {/* flexDirection 讓他可以變成並排 */}
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.textFamily}>first time here?</Text>
          <TouchableOpacity style={styles.signButton}>
            <Text
              onPress={() => {
                navigation.navigate("signUpView");
              }}
              style={styles.ButtonText}
            >
              {" "}
              Sign Up{" "}
            </Text>
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
              Sign in with Facebook
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
              Sign in with Google
            </Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
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
    },
    textFamily: {
      fontFamily: "Verdana",
      fontWeight: "bold",
      fontSize: 12,
    },
    logo: {
      width: 100,
      height: 100,
      // flex:1,
      marginTop: 100,
      marginBottom: 50,
    },
    button: {
      alignSelf: "stretch",
      margin: 20,
      marginTop: 20,
      padding: 10,
      paddingLeft: 135,
      paddingRight: 135,
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
    signButton: {
      fontSize: 12,
      fontFamily: "Verdana",
      color: "#2b2b2b",
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
    ButtonText: {
      color: "#2b2b2b",
      fontSize: 12,
      fontWeight: "bold",
      fontFamily: "Verdana",
      flexDirection: "row",
    },
    input: {
      alignSelf: "stretch",
      height: 40,
      margin: 15,
      borderWidth: 1,
      padding: 10,
      borderColor: "#2b2b2b",
    },
    hr: {
      width: 100,
      flex: 1,
      height: 1.5,
      backgroundColor: "#b9b9b9",
      marginTop: 10,
      marginBottom: 10,
    },
    otherLogin: {
      marginTop: 15,
    },
  
    inputSection: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
    },
  });
  