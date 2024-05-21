import React from "react";
import { Text, View, Pressable, Image, ScrollView ,FlatList } from "react-native";
import Back from "../image/left.png";
import Apple from "../image/social.png";
import Edit from "../image/edit.png";
import { SafeAreaView } from "react-native-safe-area-context";

const DATA = [
  {
    number: '9897 6565 3232 5454',
    debitName: 'Titanium Debit',
    expDate:'EXP. 12/25',
    backgroundColor: "rgba(33,150,243,255)"
  },
  {
    number: '9897 6262 3232 5454',
    debitName: 'Kristian Debit',
    expDate:'EXP. 12/25',
    backgroundColor: "green"
  },
  {
    number: '9897 6565 3232 5454',
    debitName: 'Credit Debit',
    expDate:'EXP. 12/25',
    backgroundColor: "blue"
  },
  {
    number: '9897 6565 3232 5454',
    debitName: 'Credit Debit',
    expDate:'EXP. 12/25',
    backgroundColor: "rgba(33,150,243,255)"
  }
];
const renderItem = ({item}) =>{
  // console.log("item.number",item.number);
  let color = item.backgroundColor
  return(
    <View style={{ backgroundColor: color ,height:"70%", width: 200, marginLeft: 20, borderRadius: 10, padding: 10,marginTop:15 }}>
    <Text style={{ color: "white" }}>{item.number}</Text>
    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: "20%" }}>
      <Text style={{ color: "white", fontSize: 13 }}>{item.debitName}</Text>
      <Text style={{ color: "white", fontSize: 13 }}>{item.expDate}</Text>
    </View>
  </View>
  )
}
const Paymentmethod = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flexDirection: "row", marginTop: 40 }}>
        <Pressable onPress={() => navigation.navigate('Main')}>
          <Image source={Back} style={{ height: 20, width: 30 }} />
        </Pressable>
        <Text style={{ textAlign: "center", fontWeight: "bold", marginLeft: "23%", fontSize: 20 }}>
          Payment Method
        </Text>
      </View>
      <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:10}}>
        <Text style={{fontSize:20,fontWeight:"500",marginLeft:5}}> Cards</Text>
        <Text style={{color:"rgba(33,150,243,255)",marginRight:5}}>Add +</Text>
      </View>
      <View style={{height:140}}>
       <FlatList
       horizontal
        data={DATA}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
      />
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
    </SafeAreaView>
  );
};

export default Paymentmethod;
