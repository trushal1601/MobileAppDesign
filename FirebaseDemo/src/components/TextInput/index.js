import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const FloatingTextInput = ({ label, placeholder, secureTextEntry }) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry ? true : false}
        accessible={true}
        accessibilityLabel="Password Input"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: "4%",
    marginTop: 40,
  },
  input: {
    // textAlign: "center",
    marginBottom: 5,
    borderWidth: 2,
    borderRadius: 25,
    paddingLeft: 15,
    padding: 7,
  },
});

export default FloatingTextInput;
