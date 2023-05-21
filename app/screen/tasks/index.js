import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityBase,
  View,
} from "react-native";
import React from "react";
import { BackLogin, BackTask } from "../../assets/images";
import Text from "../../component/Text";

function Tasks() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 20,
      }}
    >
      <View style={{ marginHorizontal: 16 }}>
        <View style={{ marginTop: 20, position: "absolute", left: 2 }}>
          <TouchableOpacity>
            <BackTask width={25} height={50} />
          </TouchableOpacity>

          <Text bold>Time Sheet</Text>
        </View>
      </View>
    </View>
  );
}

export default Tasks;
