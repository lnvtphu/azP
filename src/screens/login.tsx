import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Image,
  Alert,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import rat from "../assests/rat.png";
type RootStackParamList = {
  Photos: undefined;
  Login: undefined;
};

type Props = StackScreenProps<RootStackParamList, 'Login'>;

const Login = ({ navigation }: Props) => {
  const [username, onChangeUsername] = React.useState('');
  const [pwd, onChangePwd] = React.useState('');
  return (
    <>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
          <Image source={rat} style={styles.logo} resizeMode="contain"/>
          <View>
            <TextInput
              value={username}
              maxLength={7}
              autoFocus
              autoCorrect
              style={styles.textInput}
              clearButtonMode="always"
              placeholder="Username"
              placeholderTextColor="#FFF"
              onChangeText={text => onChangeUsername(text)}
            />
          </View>
          <View>
            <TextInput
              value={pwd}
              style={styles.textInput}
              clearButtonMode="always"
              secureTextEntry={true}
              placeholder="Password"
              placeholderTextColor="#FFF"
              returnKeyType="done"
              onChangeText={text => onChangePwd(text)}
            />
          </View>
          {/* <Button
            onPress={() => Alert.alert("login")}
            title="Log in"
            color="#00E2D6"
          /> */}
          <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Photos', { username })}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
      </KeyboardAvoidingView>
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
    height: 45,
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 40
  },
  loginText: {
    color: "#FFF",
    alignSelf: "center",
    textTransform: "uppercase",
    fontWeight: "700",
    fontSize: 18
  }
});

export default Login;
