import React, { useState } from "react";
import { View ,Text, Pressable,Image,TextInput} from "react-native";
import Back from "../image/left.png";
import FloatingTextInput from "../components/TextInput";


const Addnewcard=({navigation})=>{

  const[cardNumber,setCardNumber]=useState();
  

  const handleChange = (inputText) => {
    setCardNumber(inputText);
  };

    return(
        <View>
            <View style={{ flexDirection: "row", marginTop: 40 }}>
        <Pressable onPress={() => navigation.navigate('Main')}>
          <Image source={Back} style={{ height: 20, width: 30 }} />
        </Pressable>
        <Text style={{ textAlign: "center", fontWeight: "bold", marginLeft: "23%", fontSize: 20 }}>
           Add new Card
        </Text>
      </View>
      <View style={{ backgroundColor: "green", width: 330,marginLeft:15, borderRadius: 10, padding: 10,marginTop:20 }}>
            <Text style={{ color: "white" ,fontSize:20}}>{cardNumber}</Text>      
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: "20%" }}>
              <Text style={{ color: "white", fontSize: 13 ,paddingBottom:10}}>Titanium Debit</Text>
              <Text style={{ color: "white", fontSize: 13  ,paddingBottom:10}}>EXP. 12/25</Text>
            </View>
          </View>
          <View style={{margin:15}}>
          <FloatingTextInput label={"Name"} placeholder={"Enter A Name"} secureTextEntry={false} />
        <Text style={{fontSize: 14,
    fontWeight: "bold",
    marginLeft: "4%",
    marginTop: 20,}}>Card Number</Text>
          <TextInput
          placeholder="Enter A Card Number "
          style={{ borderWidth: 2,
            borderRadius: 25,
            paddingLeft: 15,
            padding: 7,}}
         keyboardType="numeric"
            onChangeText={handleChange}
           maxLength={12}
          
        />
         <View style={{flexDirection:"row",margin:0}} >
            <View>
           
      <Text style={{fontSize: 13,
    fontWeight: "bold",
    marginLeft: "9%",
    marginTop: 12,
    marginBottom:4}}>MM/YY</Text>

         <TextInput
          placeholder="Enter An Expiry Date of Card"
          style={{ marginBottom: 3,
            borderWidth: 2,
            borderRadius: 25,
            paddingLeft: 15,
            padding: 7,
        width:180}}
          secureTextEntry={true}
          accessible={true}
          accessibilityLabel="Password Input"
        />
        </View>
        <View style={{marginLeft:10}}>
        <Text style={{fontSize: 13,
    fontWeight: "bold",
    marginLeft: "9%",
    marginTop: 12,
    marginBottom:4}}>CVV</Text>
        <TextInput
        placeholder="Enter A CVV "
        style={{ marginBottom: 3,
            borderWidth: 2,
            borderRadius: 25,
            paddingLeft: 15,
            padding: 7,
        width:140}}
        secureTextEntry={true}
        accessible={true}
        accessibilityLabel="Password Input"
      />
      </View>
         </View>
          </View>
          <Pressable style={{marginTop: 20,
    alignItems: "center",
    padding: 10,
    borderRadius: 20,
    backgroundColor: "rgba(33,150,243,255)",
    margin:10}}>
          <Text style={{color: "white",}}>Sign In</Text>
        </Pressable>
        </View>
    )
};

export default Addnewcard;