/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
  TextInput,
  View,
  Button,
  Image,
  Alert,
  TouchableOpacity
} from 'react-native';

import rat from "./src/assests/rat.png";

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Image source={rat} style={styles.logo} resizeMode="contain"/>
        <View>
          <TextInput
            maxLength={7}
            style={styles.textInput}
            clearButtonMode="always"
            placeholder="Username"
            placeholderTextColor="#FFF"
          />
        </View>
        <View>
          <TextInput
            style={styles.textInput}
            clearButtonMode="always"
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor="#FFF"
            returnKeyType="done"
          />
        </View>
        {/* <Button
          onPress={() => Alert.alert("login")}
          title="Log in"
          color="#00E2D6"
        /> */}
        <TouchableOpacity style={styles.loginBtn} onPress={() => Alert.alert("login")}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

const primaryColor = "#11A2A6";
const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: "#232A31"
  },
  logo: {
    width: "50%",
    height: "50%",
    alignSelf: "center",
  },
  textInput: {
    borderColor: primaryColor,
    borderBottomWidth: 2,
    height: 50,
    color: primaryColor,
  },
  loginBtn: {
    backgroundColor: primaryColor,
    height: 50,
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 20
  },
  loginText: {
    color: "#FFF",
    alignSelf: "center",
    textTransform: "uppercase",
    fontWeight: "700",
    fontSize: 18
  }
});

export default App;
