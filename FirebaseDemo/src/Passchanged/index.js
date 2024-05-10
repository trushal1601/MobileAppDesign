import React from "react";
import { View ,Text, Pressable} from "react-native";

const Passchanged=({navigation})=>{
    return( 
        <View>
            <Text style={{textAlign:"center",marginTop:"80%"}}>
                Hello , Your Password has been changed
            </Text>
            <Pressable onPress={() =>
        navigation.navigate('Login')
      }>
                <Text style={{color:"red",textAlign:"center"}}>Back To Login</Text>
            </Pressable>
        </View>
    )
};
export default Passchanged;