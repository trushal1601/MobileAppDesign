import React from "react";
import { View ,Text,Image,Pressable} from "react-native";
import Back from "../image/left.png";
import home from "../image/home.png";
import work from "../image/work.png";
import location from "../image/location.png";

const Myaddress=({navigation})=>{
     return(
        <View>
            <View style={{ flexDirection: "row", marginTop: 40,borderStyle:"dashed",borderBottomWidth:2,paddingBottom:40,borderBottomColor:"gray" }}>
        <Pressable onPress={() => navigation.navigate('Main')}>
          <Image source={Back} style={{ height: 20, width: 30 }} />
        </Pressable>
        <View style={{marginLeft:"30%"}}>
        <Text style={{   fontWeight: "bold",  fontSize: 20 }}>
          My Address 
        </Text>
        </View>
      </View>
      <View style={{marginTop:30,flexDirection:"row",borderStyle:"dashed",borderBottomWidth:2,paddingBottom:30,borderBottomColor:"gray"}}>
            <View >
          <Image source={home} style={{ height: 30, width: 30 ,marginTop:1,marginLeft:10  }} />
          </View>
          <View style={{marginLeft:20}} >
            <Text style={{fontWeight:"bold",fontSize:20}}>Home</Text>
            <Text style={{color:"gray"}}>Sec 16,near metro station,380060</Text>
          </View>
        </View>
        <View style={{marginTop:30,flexDirection:"row",borderStyle:"dashed",borderBottomWidth:2,paddingBottom:30,borderBottomColor:"gray"}}>
            <View >
          <Image source={work} style={{ height: 30, width: 30 ,marginTop:1,marginLeft:10  }} />
          </View>
          <View style={{marginLeft:20}} >
            <Text style={{fontWeight:"bold",fontSize:20}}>Work</Text>
            <Text style={{color:"gray"}}>Sec 16,near metro station,380060</Text>
          </View>
        </View>
        <View style={{marginTop:30,flexDirection:"row",borderStyle:"dashed",borderBottomWidth:2,paddingBottom:30,borderBottomColor:"gray"}}>
            <View >
          <Image source={location} style={{ height: 30, width: 30 ,marginTop:1,marginLeft:10  }} />
          </View>
          <View style={{marginLeft:20}} >
            <Text style={{fontWeight:"bold",fontSize:20}}>Other</Text>
            <Text style={{color:"gray"}}>Sec 16,near metro station,380060</Text>
          </View>
        </View>
        <Pressable 
                    style={{ 
                        marginTop: 50,
                        alignItems: "center",
                        padding: 10,
                        borderRadius: 20,
                        backgroundColor: "rgba(33,150,243,255)",
                        margin:20
                    }}
                   
                >
                    <Text style={{ color: "white",fontSize:20 }}>ADD NEW ADDRESS </Text>
                </Pressable>
        </View>
     )
};

export default Myaddress;