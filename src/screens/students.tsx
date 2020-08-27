import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text
} from 'react-native';

import { students } from "../utils/mock";

const Students = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          {students.map(student => (
            <View key={student.id} style={styles.student}>
              <Text style={styles.fullname}>{student?.firstName}</Text>
            </View>
          ))}
        </ScrollView>
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
    backgroundColor: "#232A31"
  },
  student: {
    padding: 20,
    backgroundColor: primaryColor,
    marginBottom: 2
  },
  fullname: {
    color: "#FFF",
    fontSize: 18
  }
});

export default Students;
