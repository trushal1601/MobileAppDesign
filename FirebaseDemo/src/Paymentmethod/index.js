import React from "react";
import { Text, View, Pressable, Image, ScrollView } from "react-native";
import Back from "../image/left.png";
import Apple from "../image/social.png";
import Edit from "../image/edit.png";


const Paymentmethod = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: "row", marginTop: 40 }}>
        <Pressable onPress={() => navigation.navigate('Login')}>
          <Image source={Back} style={{ height: 20, width: 30 }} />
        </Pressable>
        <Text style={{ textAlign: "center", fontWeight: "bold", marginLeft: "23%", fontSize: 20 }}>
          Payment Method
        </Text>
      </View>
      <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:10}}>
        <Text style={{fontSize:20,fontWeight:"500",marginLeft:5}}>Credit Cards</Text>
        <Text style={{color:"red",marginRight:5}}>Add +</Text>
      </View>
      <View style={{height:140}}>
      <ScrollView horizontal style={{ marginTop: 20, height:20 }} showsHorizontalScrollIndicator={false} >
        <View style={{ flexDirection: 'row', height:100 }}>
          <View style={{ backgroundColor: "orange", width: 200, marginLeft: 20, borderRadius: 10, padding: 10, marginRight: 10 }}>
            <Text style={{ color: "white" }}>9897 6565 3232 5454</Text>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: "20%" }}>
              <Text style={{ color: "white", fontSize: 13 }}>Titanium Debit</Text>
              <Text style={{ color: "white", fontSize: 13 }}>EXP. 12/25</Text>
            </View>
          </View>
          <View style={{ backgroundColor: "blue", width: 200, borderRadius: 10, padding: 10, marginRight: 10 }}>
            <Text style={{ color: "white" }}>9897 6565 3232 5454</Text>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: "20%" }}>
              <Text style={{ color: "white", fontSize: 13 }}>Kristian Debit</Text>
              <Text style={{ color: "white", fontSize: 13 }}>EXP. 12/25</Text>
            </View>
          </View>
          <View style={{ backgroundColor: "black", width: 200, borderRadius: 10, padding: 10 ,marginRight: 10 }}>
            <Text style={{ color: "white" }}>9897 6565 3232 5454</Text>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: "20%" }}>
              <Text style={{ color: "white", fontSize: 13 }}>Credit Debit</Text>
              <Text style={{ color: "white", fontSize: 13 }}>EXP. 12/25</Text>
            </View>
          </View>
          <View style={{ backgroundColor: "red", width: 200, borderRadius: 10, padding: 10 , marginRight:20}}>
            <Text style={{ color: "white" }}>9897 6565 3232 5454</Text>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: "20%" }}>
              <Text style={{ color: "white", fontSize: 13 }}>Credit Debit</Text>
              <Text style={{ color: "white", fontSize: 13 }}>EXP. 12/25</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      </View>
      <View style={{borderWidth:1,margin:10,borderRadius:10,padding:15,flexDirection:"row",justifyContent:"space-between"}} >
      <View >
      <View style={{flexDirection:"row"}}>
      <Image source={Apple} style={{ height: 20, width: 20,marginTop:2 }} />
      <Text style={{fontWeight:"bold",fontSize:20,}}>Pay</Text>
      </View>
      <Text style={{fontSize:8,marginLeft:4}}>Pay Play</Text>
      </View>
      <View>
      <Image source={Edit}  style={{height:25 ,marginTop:4, width:25}} />
        
      </View>
      </View>
      <View style={{borderWidth:1,margin:10,borderRadius:10,padding:15,flexDirection:"row",justifyContent:"space-between"}}>
    <View>
      <View style={{flexDirection:"row"}}>
      {/* <Image source={Apple} style={{ height: 20, width: 20,marginTop:2 }} /> */}
      <Text style={{fontWeight:"bold",fontSize:20,color:"blue"}}>Pay</Text>
      <Text style={{fontWeight:"bold",fontSize:20,color:"green"}}>Free</Text>
      </View>
      
      <Text style={{fontSize:8,}}>Pay Free</Text>
      </View>
      <View>
        <Text style={{fontSize:30}}>+</Text>
      </View>
     
      </View>
    </View>
  );
};

export default Paymentmethod;
