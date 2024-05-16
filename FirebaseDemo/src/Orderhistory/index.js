import react from "react";
import { View ,Text,Pressable,Image} from "react-native";
import Back from "../image/left.png";
import food1 from "../image/food1.jpeg";
import food2 from "../image/food2.jpeg";
import food3 from "../image/food3.jpeg";
import food4 from "../image/food4.jpeg";


const Orderhistory=({navigation})=>{
    return(
        <View>
           <View style={{ flexDirection: "row", marginTop: 40,paddingBottom:40,borderBottomColor:"gray" }}>
        <Pressable onPress={() => navigation.navigate('Main')}>
          <Image source={Back} style={{ height: 20, width: 30 }} />
        </Pressable>
        <View style={{marginLeft:"30%"}}>
        <Text style={{   fontWeight: "bold",  fontSize: 20 }}>
          My Address 
        </Text>
        </View>
      </View>
      <View style={{margin:15,marginTop:-10,flexDirection:"row",  shadowColor:"gray",elevation:20,backgroundColor:"white",borderRadius:20}}>
        <View>
        <Image source={food1} style={{ height: 90, width: 90 ,borderTopLeftRadius:20,borderBottomLeftRadius:20}} />
        </View>
        <View style={{marginLeft:10,width:190}}>
            <Text>Desert Show Cafe</Text>
            <Text style={{color:"gray"}}>Jul 15,2021 - 11:50 AM</Text>
            <View style={{flexDirection:"row",marginTop:28,justifyContent:"space-between"}}>
            <Text style={{color:"green"}}>Delivered</Text>
            <Text style={{color:"gray",paddingLeft:10,fontWeight:"bold"}}>$36.42</Text>
            </View>
        </View>
      </View>
      <View style={{flexDirection:"row",justifyContent:"space-between",margin:10}}>
      <View>
        <Text style={{color:"gray",fontSize:18}}>Momos * 1</Text>
        <Text style={{color:"gray",fontSize:18}}>Burger * 1</Text>
        <Text style={{color:"gray",fontSize:18}}>Noodles * 1</Text>
      </View>
      <View style={{marginRight:20}}>
        <Text style={{color:"gray",fontSize:18}}>$12.75</Text>
        <Text style={{color:"gray",fontSize:18}}>$14.91</Text>
        <Text style={{color:"gray",fontSize:18}}>$6.34</Text>
      </View>
      </View>
      <Pressable 
                    style={{ 
                        marginTop: 30,
                        alignItems: "center",
                        padding: 10,
                        borderRadius: 20,
                        backgroundColor: "lightgray",
                        margin:20
                    }}
                  
                >
                    <Text style={{ color: "red" ,fontWeight:"bold"}}>REPEAT ORDER</Text>
                </Pressable>
                <View style={{margin:15,marginTop:-10,flexDirection:"row",  shadowColor:"gray",elevation:20,backgroundColor:"white",borderRadius:20,marginTop:10}}>
        <View>
        <Image source={food2} style={{ height: 90, width: 90 ,borderTopLeftRadius:20,borderBottomLeftRadius:20}} />
        </View>
        <View style={{marginLeft:10,width:190}}>
            <Text>Woof Woof</Text>
            <Text style={{color:"gray"}}>Jul 15,2021 - 11:50 AM</Text>
            <View style={{flexDirection:"row",marginTop:28,justifyContent:"space-between"}}>
            <Text style={{color:"red"}}>Cancelled</Text>
            <Text style={{color:"gray",paddingLeft:10,fontWeight:"bold"}}>$36.42</Text>
            </View>
        </View>
      </View>
      <View style={{margin:15,marginTop:-10,flexDirection:"row",  shadowColor:"gray",elevation:20,backgroundColor:"white",borderRadius:20,marginTop:10}}>
        <View>
        <Image source={food3} style={{ height: 90, width: 90 ,borderTopLeftRadius:20,borderBottomLeftRadius:20}} />
        </View>
        <View style={{marginLeft:10,width:190}}>
            <Text>Tommy Yummy</Text>
            <Text style={{color:"gray"}}>Jul 15,2021 - 11:50 AM</Text>
            <View style={{flexDirection:"row",marginTop:28,justifyContent:"space-between"}}>
            <Text style={{color:"green"}}>Delivered</Text>
            <Text style={{color:"gray",paddingLeft:10,fontWeight:"bold"}}>$36.42</Text>
            </View>
        </View>
      </View>
      <View style={{margin:15,marginTop:-10,flexDirection:"row",  shadowColor:"gray",elevation:20,backgroundColor:"white",borderRadius:20,marginTop:10}}>
        <View>
        <Image source={food4} style={{ height: 90, width: 90 ,borderTopLeftRadius:20,borderBottomLeftRadius:20}} />
        </View>
        <View style={{marginLeft:10,width:190}}>
            <Text>Desert Show Cafe</Text>
            <Text style={{color:"gray"}}>Jul 15,2021 - 11:50 AM</Text>
            <View style={{flexDirection:"row",marginTop:28,justifyContent:"space-between"}}>
            <Text style={{color:"green"}}>Delivered</Text>
            <Text style={{color:"gray",paddingLeft:10,fontWeight:"bold"}}>$36.42</Text>
            </View>
        </View>
      </View>
        </View>
    )
};

export default Orderhistory;