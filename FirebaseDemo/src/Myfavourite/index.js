import React from "react";
import { View ,Text,Pressable,Image,ScrollView} from "react-native";
import Back from "../image/left.png";
import food1 from "../image/food1.jpeg";
import star from "../image/star.png";
import location from "../image/location.png";
import food2 from "../image/food2.jpeg";
import food3 from "../image/food3.jpeg";
import food4 from "../image/food4.jpeg";
import food5 from "../image/food5.jpeg";

const Myfavourite=({navigation})=>{
    return(
        <View>
            < ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ flexDirection: "row", marginTop: 40 }}>
        <Pressable onPress={() => navigation.navigate('Main')}>
          <Image source={Back} style={{ height: 20, width: 30 }} />
        </Pressable>
        <Text style={{ textAlign: "center", fontWeight: "bold", marginLeft: "23%", fontSize: 20 }}>
          My Favourite
        </Text>
      </View>
      <View style={{marginLeft:15,marginTop:20,flexDirection:"row"}}>
        <View >
          <Image source={food1} style={{ height: 90, width: 90 }} />
        </View>
        <View style={{marginLeft:20}}>
            <Text style={{fontWeight:"bold"}}>Pani-Puri</Text>
            <Text style={{color:"gray"}}>Fast Food</Text>
        </View>
        <View style={{flexDirection:"row"}}>
            <View style={{flexDirection:"row",marginTop:75,marginLeft:-70}}>
          <Image source={star} style={{ height: 13, width: 13,}} />
          <Text style={{marginLeft:5,marginTop:-3,color:"gray"}}>5.0-</Text>
          </View>
          <View>
          <View style={{flexDirection:"row",marginTop:75,marginLeft:70}}>
          <Image source={location} style={{ height: 13, width: 13,}} />
          <Text style={{width:200,color:"gray",marginTop:-4,marginLeft:5}}>0.1 km</Text>
          </View>
          </View>
        </View>
       
      </View>
      <View style={{marginLeft:15,marginTop:20,flexDirection:"row"}}>
        <View >
          <Image source={food2} style={{ height: 90, width: 90 }} />
        </View>
        <View style={{marginLeft:20}}>
            <Text style={{fontWeight:"bold"}}>Fix Thali </Text>
            <Text style={{color:"gray"}}>Fast Food</Text>
        </View>
        <View style={{flexDirection:"row"}}>
            <View style={{flexDirection:"row",marginTop:75,marginLeft:-70}}>
          <Image source={star} style={{ height: 13, width: 13,}} />
          <Text style={{marginLeft:5,marginTop:-3,color:"gray"}}>5.0-</Text>
          </View>
          <View>
          <View style={{flexDirection:"row",marginTop:75,marginLeft:70}}>
          <Image source={location} style={{ height: 13, width: 13,}} />
          <Text style={{width:200,color:"gray",marginTop:-4,marginLeft:5}}>0.1 km</Text>
          </View>
          </View>
        </View>
       
      </View>
      <View style={{marginLeft:15,marginTop:20,flexDirection:"row"}}>
        <View >
          <Image source={food3} style={{ height: 90, width: 90 }} />
        </View>
        <View style={{marginLeft:20}}>
            <Text style={{fontWeight:"bold"}}>Roles</Text>
            <Text style={{color:"gray"}}>Fast Food</Text>
        </View>
        <View style={{flexDirection:"row"}}>
            <View style={{flexDirection:"row",marginTop:75,marginLeft:-70}}>
          <Image source={star} style={{ height: 13, width: 13,}} />
          <Text style={{marginLeft:5,marginTop:-3,color:"gray"}}>5.0-</Text>
          </View>
          <View>
          <View style={{flexDirection:"row",marginTop:75,marginLeft:70}}>
          <Image source={location} style={{ height: 13, width: 13,}} />
          <Text style={{width:200,color:"gray",marginTop:-4,marginLeft:5}}>0.1 km</Text>
          </View>
          </View>
        </View>
       
      </View>
      <View style={{marginLeft:15,marginTop:20,flexDirection:"row"}}>
        <View >
          <Image source={food4} style={{ height: 90, width: 90 }} />
        </View>
        <View style={{marginLeft:20}}>
            <Text style={{fontWeight:"bold"}}>Burger With Coca-Cola</Text>
            <Text style={{color:"gray"}}>Fast Food</Text>
        </View>
        <View style={{flexDirection:"row"}}>
            <View style={{flexDirection:"row",marginTop:75,marginLeft:-150}}>
          <Image source={star} style={{ height: 13, width: 13,}} />
          <Text style={{marginLeft:5,marginTop:-3,color:"gray"}}>5.0-</Text>
          </View>
          <View>
          <View style={{flexDirection:"row",marginTop:75,marginLeft:70}}>
          <Image source={location} style={{ height: 13, width: 13,}} />
          <Text style={{width:200,color:"gray",marginTop:-4,marginLeft:5}}>0.1 km</Text>
          </View>
          </View>
        </View>
       
      </View>
      <View style={{marginLeft:15,marginTop:20,flexDirection:"row"}}>
        <View >
          <Image source={food2} style={{ height: 90, width: 90 }} />
        </View>
        <View style={{marginLeft:20}}>
            <Text style={{fontWeight:"bold"}}>Punjabi Thali</Text>
            <Text style={{color:"gray"}}>Fast Food</Text>
        </View>
        <View style={{flexDirection:"row"}}>
            <View style={{flexDirection:"row",marginTop:75,marginLeft:-85}}>
          <Image source={star} style={{ height: 13, width: 13,}} />
          <Text style={{marginLeft:5,marginTop:-3,color:"gray"}}>5.0-</Text>
          </View>
          <View>
          <View style={{flexDirection:"row",marginTop:75,marginLeft:70}}>
          <Image source={location} style={{ height: 13, width: 13,}} />
          <Text style={{width:200,color:"gray",marginTop:-4,marginLeft:5}}>0.1 km</Text>
          </View>
          </View>
        </View>
       
      </View>
      <View style={{marginLeft:15,marginTop:20,flexDirection:"row"}}>
        <View >
          <Image source={food5} style={{ height: 90, width: 90 }} />
        </View>
        <View style={{marginLeft:20}}>
            <Text style={{fontWeight:"bold"}}>Burger With FrenchFries</Text>
            <Text style={{color:"gray"}}>Fast Food</Text>
        </View>
        <View style={{flexDirection:"row"}}>
            <View style={{flexDirection:"row",marginTop:75,marginLeft:-150}}>
          <Image source={star} style={{ height: 13, width: 13,}} />
          <Text style={{marginLeft:5,marginTop:-3,color:"gray"}}>5.0-</Text>
          </View>
          <View>
          <View style={{flexDirection:"row",marginTop:75,marginLeft:70}}>
          <Image source={location} style={{ height: 13, width: 13,}} />
          <Text style={{width:200,color:"gray",marginTop:-4,marginLeft:5}}>0.1 km</Text>
          </View>
          </View>
        </View>
       
      </View>
      <View style={{marginLeft:15,marginTop:20,flexDirection:"row"}}>
        <View >
          <Image source={food1} style={{ height: 90, width: 90 }} />
        </View>
        <View style={{marginLeft:20}}>
            <Text style={{fontWeight:"bold"}}>Pani-Puri</Text>
            <Text style={{color:"gray"}}>Fast Food</Text>
        </View>
        <View style={{flexDirection:"row"}}>
            <View style={{flexDirection:"row",marginTop:75,marginLeft:-70}}>
          <Image source={star} style={{ height: 13, width: 13,}} />
          <Text style={{marginLeft:5,marginTop:-3,color:"gray"}}>5.0-</Text>
          </View>
          <View>
          <View style={{flexDirection:"row",marginTop:75,marginLeft:70}}>
          <Image source={location} style={{ height: 13, width: 13,}} />
          <Text style={{width:200,color:"gray",marginTop:-4,marginLeft:5}}>0.1 km</Text>
          </View>
          </View>
        </View>
       
      </View>
      </ScrollView>
        </View>
    )
};

export default Myfavourite;