import React from "react";
import { View ,Text, Pressable,StyleSheet} from "react-native";
import FloatingTextInput from "../components/TextInput";

const Forget=({navigation})=>{
    return( 
        <View style={{margin:10}}>
        {/* <Text>Hello</Text> */}
      <FloatingTextInput label={"Email"} placeholder={"Enter An Email"} secureTextEntry={false} />
      <Pressable style={styles.signInButton} onPress={() =>
        navigation.navigate('Changepass')
      }>
        <Text style={styles.buttonText}>Send Email</Text>
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
        backgroundColor: "orange",
        margin:10
      },
      buttonText: {
        color: "white",
      },
});
export default Forget;