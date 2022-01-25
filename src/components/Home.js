/* eslint-disable prettier/prettier */
import { View, Text, ScrollView, StatusBar,Image,TouchableOpacity, TextInput ,FlatList} from 'react-native';
import React, { useState } from 'react';
import {Categories, COLOURS } from '../database/items';
import Material from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Home = () => {
    const[currentSelected,setCurrentSelected]=useState([0]);

    const renderCategories=({item,index})=>{
        return(
            <TouchableOpacity activeOpacity={0.9} style={{marginLeft:7}} onPress={()=>setCurrentSelected(index)}>
                <View
                style={{
                    width:120,
                    height:180,
                    alignItems:"center",
                    justifyContent:"space-evenly",
                    backgroundColor:"red",
                    marginLeft:15,
                    backgroundColor:currentSelected==index?COLOURS.accent:COLOURS.white,
                    borderRadius:20,
                    elevation:5,
                    margin:10,
                    }}>
                    <View style={{width:60,height:60}}>
                        <Image
                        source={item.image}
                        style={{width:"100%",height:"100%",resizeMode:"center"}}
                        />
                    </View>
                    <Text style={{fontSize:16,color:"#000",fontWeight:"600"}}>
                        {item.name}
                    </Text>
                    <View style={{
                        width:30,
                        height:30,
                        alignItems:"center",
                        justifyContent:"center",
                        borderRadius:500,
                        backgroundColor:currentSelected==index?COLOURS.white:COLOURS.accentRed,
                        }}>
                        <FontAwesome
                        name="angle-right"
                        style={{
                            fontSize:12,
                            color:currentSelected==index?COLOURS.black:COLOURS.white,
                            }}
                        />
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

  return (
    <View style={{width:"100%",height:"100%",backgroundColor:COLOURS.white}}>
       <ScrollView>
           <View style={{width:"100%",height:"100%",backgroundColor:COLOURS.white,position:"relative"}}>
             <StatusBar backgroundColor={COLOURS.white} barStyle='dark-content'/>
               <View style={{padding:15,flexDirection:"row",justifyContent:"space-between",width:"100%",alignItems:"center"}}>
                  <TouchableOpacity
                    style={{width:40,height:40}}
                  >
                      <Image
                        source={require('../database/images/profile.jpg')}
                        style={{width:"100%",height:"100%",borderRadius:500,resizeMode:'contain'}}
                      />
                  </TouchableOpacity>
                  <TouchableOpacity>
                      <Material
                       name="segment"
                       style={{fontSize:20,color:COLOURS.black}}
                      />
                  </TouchableOpacity>
               </View>
               <View style={{padding:15}}>
                  <Text style={{fontSize:16,fontWeight:'400',color:COLOURS.black,opacity:0.5}}>
                      Food
                  </Text>
                  <Text style={{fontSize:35,fontWeight:'600',color:COLOURS.black,letterSpacing:2}}>
                      Delivery
                  </Text>
               </View>
               <View style={{paddingHorizontal:20,paddingVertical:10,flexDirection:"row",alignItems:"center"}}>
                  <Ionicons
                   name="search"
                    style={{fontSize:20,color:COLOURS.black,opacity:0.8}}
                   />
                   <TextInput
                    placeholder="Search..."
                    style={{letterSpacing:1,width:"90%",fontSize:16,color:"#000",marginLeft:5,borderBottomWidth:1,borderBottomColor:COLOURS.black+20}}
                   
                   />
               </View>
               <Text style={{paddingHorizontal:20,fontSize:18,fontWeight:"700",paddingTop:20,letterSpacing:1,color:"#000"}}>
                   Categories
               </Text>
               <FlatList
                 horizontal={true}
                 data={Categories}
                 renderItem={renderCategories}
                showsHorizontalScrollIndicator={false}
               />
               
           </View>
       </ScrollView>
    </View>
  );
};

export default Home;
