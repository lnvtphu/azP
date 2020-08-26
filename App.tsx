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
  Alert
} from 'react-native';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Text>Log in</Text>
        <View>
          <Text>Email</Text>
          <TextInput
            maxLength={7}
            style={styles.textInput}
            clearButtonMode="always"
          />
        </View>
        <View>
          <Text>Password</Text>
          <TextInput
            style={styles.textInput}
            clearButtonMode="always"
            secureTextEntry={true}
          />
        </View>
        <Button
          onPress={() => console.log("login")}
          title="Log in"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  textInput: {
    borderColor: "#F2F1F6",
    borderWidth: 1,
    borderRadius: 5,
  }
});

export default App;
