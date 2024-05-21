import React from "react";
import { View ,Text , StyleSheet,Pressable} from "react-native";
import FloatingTextInput from "../components/TextInput";

const Changepass=({navigation})=>{
    return(
        <View style={{margin:10}}>
            {/* <Text>Hello</Text> */}
      <FloatingTextInput label={"New Password"} placeholder={"Enter A New Password"} secureTextEntry={true} />
      <FloatingTextInput label={"Confirm Password"} placeholder={"Enter A Confirm Password"} secureTextEntry={true} />
      <Pressable style={styles.signInButton} onPress={() =>
        navigation.navigate('Passchanged')
      }>
        <Text style={styles.buttonText}>Change Password</Text>
      </Pressable>
        </View>
    )
};
const styles = StyleSheet.create({
    signInButton: {
        marginTop: 50,
        alignItems: "center",
        padding: 10,
        borderRadius: 20,
        backgroundColor: "rgba(33,150,243,255)",
        margin:10
      },
      buttonText: {
        color: "white",
      },
});
export default Changepass;