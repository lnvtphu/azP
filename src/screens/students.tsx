import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Alert,
  TouchableOpacity
} from 'react-native';

import { students } from "../utils/mock";

const Students = () => {
  const listEl = React.useRef(null);
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView ref={listEl}>
          {students.map(student => (
            <View key={student.id} style={styles.student}>
              <Text
                style={styles.fullname}
                ellipsizeMode="tail"
                numberOfLines={1}
                onPress={() => Alert.alert("container text")}
              >
                {`${student?.firstName} `}
                <Text onPress={() => Alert.alert("nested text")}>{student?.lastName}</Text>
              </Text>
            </View>
          ))}
        </ScrollView>
        <TouchableOpacity style={styles.upBtn} onPress={() => listEl.current.scrollTo({x: 0, y: 0, animated: true})}>
          <Text style={styles.upText}>Up</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

const primaryColor = "#11A2A6";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: "#232A31",
    position: "relative"
  },
  student: {
    padding: 20,
    backgroundColor: primaryColor,
    marginBottom: 2
  },
  fullname: {
    color: "#FFF",
    fontSize: 18
  },
  upBtn: {
    backgroundColor: "#2ea44f",
    height: 40,
    width: 40,
    justifyContent: "center",
    borderRadius: 20,
    position: 'absolute',
    bottom: 10,
    right: 10
  },
  upText: {
    color: "#FFF",
    alignSelf: "center",
    textTransform: "uppercase",
    fontWeight: "700",
    fontSize: 16
  }
});

export default Students;
