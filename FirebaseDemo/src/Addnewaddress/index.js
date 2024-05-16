import React from "react";
import { View,Text,Pressable,Image, } from "react-native";
import map from "../image/map.jpg";
import FloatingTextInput from "../components/TextInput";






const Addnewaddress=()=>{
    return(
        <View>
          <Image source={map} style={{ height: 350, width: 370 , flexDirection: "row",  }} />

          
        <Text style={{ fontWeight: "bold", marginLeft: "5%", fontSize: 20 ,marginTop:20}}>
           Add new Address
        </Text>
     <View style={{margin:10}}>
      <FloatingTextInput label={"Title"} placeholder={"Enter A Title"} secureTextEntry={false} />
      <FloatingTextInput label={"New Address"} placeholder={"Enter A New Address"} secureTextEntry={false} />
     </View>
     <Pressable style={{marginTop: 40,
    alignItems: "center",
    padding: 10,
    borderRadius: 20,
    backgroundColor: "red",
    margin:10}}>
          <Text style={{color: "white",}}>Save Changes </Text>
        </Pressable>
        </View>
    )
};

export default Addnewaddress;