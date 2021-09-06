// import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Icon } from "react-native-elements";
// import { Button } from "react-native-elements/dist/buttons/Button";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";

// export default function login ({ navigation }){
export default function login({ navigation }) {
  // 加了{navigation才可以用}
  return (
    <>
      <SafeAreaView>
        <ScrollView style={styles.scrollView}>
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
              <Icon
                name="heart-o"
                type="font-awesome"
                color="#2b2b2b"
                size={20}
              />
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
                source={require("../../assets/images/arm.jpeg")}
                style={styles.planImage}
              ></Image>
              <Image
                source={require("../../assets/images/breast.jpeg")}
                style={styles.planImage}
              ></Image>
            </View>
            {/* 橫線 */}
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={styles.hr} />
            </View>
            {/* 健身規劃 */}
            <View style={{ flexDirection: "row", alignSelf: "center" }}>
              <Icon
                name="calendar"
                type="font-awesome"
                color="#2b2b2b"
                size={20}
              />
              <Text style={styles.subtitleFont}>{"   "}您個人的健身規劃</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("agendaView");
                }}
                style={styles.addButton}
              >
                <Text style={styles.buttonText}> 新增規劃</Text>
              </TouchableOpacity>
            </View>
            {/* 這邊看能不能把agenda放進來 */}
            <Calendar
              markingType="multi-period"
              markedDates={{
                "2017-12-14": {
                  periods: [
                    { startingDay: false, endingDay: true, color: "#5f9ea0" },
                    { startingDay: false, endingDay: true, color: "#ffa500" },
                    { startingDay: true, endingDay: false, color: "#f0e68c" },
                  ],
                },
                "2017-12-15": {
                  periods: [
                    { startingDay: true, endingDay: false, color: "#ffa500" },
                    { color: "transparent" },
                    { startingDay: false, endingDay: false, color: "#f0e68c" },
                  ],
                },
              }}
            />
            {/* 橫線 */}
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={styles.hr} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
class AgendaScreen extends Component {
  state = {
    items: {},
  };

  render() {
    return (
      <Agenda
        // testID={testIDs.agenda.CONTAINER}
        items={this.state.items}
        loadItemsForMonth={this.loadItems.bind(this)}
        selected={"2021-08-25"}
        // 預設進到頁面的日期 看能不能改成當日
        renderItem={this.renderItem.bind(this)}
        renderEmptyDate={this.renderEmptyDate.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
        showClosingKnob={true}
      />
    );
  }

  loadItems(day) {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            this.state.items[strTime].push({
              name: "Item for " + strTime + " #" + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
            });
          }
        }
      }
      const newItems = {};
      Object.keys(this.state.items).forEach((key) => {
        newItems[key] = this.state.items[key];
      });
      this.setState({
        items: newItems,
      });
    }, 1000);
  }
  // 回傳當日的行事曆內容
  renderItem(item) {
    return (
      <TouchableOpacity
        // testID={testIDs.agenda.ITEM}
        style={[styles.item, { height: item.height }]}
        onPress={() => Alert.alert(item.name)}
      >
        {/* 內容 */}
        <Text>腿日</Text>
      </TouchableOpacity>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split("T")[0];
  }
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
  item: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
});
