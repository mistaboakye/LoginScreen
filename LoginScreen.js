import React, { Component } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";

export class LoginScreen extends Component {
  render() {
    return (
      <View>
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Login </Text>
        </View>
        <View>
          <TextInput placeholder="Username" style={styles.inputText} />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={styles.inputText}
            placeholderTextColor={"#aaaaaa"}
          />
          <Text style={styles.forgetPassword}>Forgot password? </Text>
        </View>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}> Log in </Text>
        </TouchableOpacity>
        <View style={styles.signupContainer}>
          <Text style={styles.noAccount}> Don't have an account? </Text>
          <Text style={styles.signUp}> Sign Up </Text>
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  loginText: {
    fontSize: 50,
    color: "#9234eb",
    marginVertical: 50,
  },

  inputText: {
    borderBottomColor: "#9234eb",
    borderBottomWidth: 2,
    marginBottom: 5,
    fontSize: 20,
    marginVertical: 40,
  },
  forgetPassword: {
    alignSelf: "flex-end",
    fontSize: 17,
    marginVertical: 20,
    color: "#1c2fa6",
  },
  buttonContainer: {
    height: 70,
    backgroundColor: "#9234eb",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 50,
    borderRadius: 20,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 30,
  },
  signupContainer: {
    fontSize: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  noAccount: {
    fontSize: 15,
  },
  signUp: {
    fontSize: 20,
    color: "#9234eb",
  },
});

export default LoginScreen;
