import React from "react";
import { View ,Text ,Image,Pressable,ScrollView, Alert} from "react-native";
import Back from "../image/left.png";
import Women from "../image/women.jpg";
import Edit from "../image/edit.png";
import FloatingTextInput from "../components/TextInput";

const Editprofile = ({navigation})=>{
    const handleProfileUpdate = () => {
        Alert.alert(
            "Profile Updated",
            "Your profile has been successfully updated!",
            [
                {
                    text: "OK",
                    onPress: () => {
                        navigation.navigate("Main");
                    },
                },
            ]
         
        );
    };

    return (
        <View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{flexDirection:"row",marginTop:40}}>
                    <Pressable onPress={() => navigation.navigate('Main')}>
                        <Image source={Back} style={{height:20,width:30}} />
                    </Pressable>
                    <Text style={{textAlign:"center",fontWeight:"bold",marginLeft:"30%",fontSize:20}}>
                        Edit Profile
                    </Text>
                </View>
                <View style={{marginTop:"15%",marginLeft:"38%"}}>
                    <Image source={Women} style={{height:100,width:100,borderRadius:50}} />
                    <Image source={Edit} style={{height:25,width:25,backgroundColor:"white",marginLeft:72,marginTop:-30}} />
                </View>
                <View style={{margin:10,marginTop:-10}}>
                    <FloatingTextInput label={"Name"} placeholder={"Enter A Name"} secureTextEntry={false}/>
                    <FloatingTextInput label={"Email"} placeholder={"Enter An Email"} secureTextEntry={false}/>
                    <FloatingTextInput label={"Phone Number"} placeholder={"Enter A Number"} secureTextEntry={false}/>
                    <FloatingTextInput label={"Location"} placeholder={"Enter A Location"} secureTextEntry={false}/>
                </View>
                <Pressable 
                    style={{ 
                        marginTop: 50,
                        alignItems: "center",
                        padding: 10,
                        borderRadius: 20,
                        backgroundColor: "red",
                        margin:20
                    }}
                    onPress={handleProfileUpdate}
                >
                    <Text style={{ color: "white" }}>Profile Update</Text>
                </Pressable>
            </ScrollView>
        </View>
    );
};

export default Editprofile;
