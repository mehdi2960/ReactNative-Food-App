/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, ScrollView, StatusBar,Image,TouchableOpacity, TextInput ,FlatList} from 'react-native';
import {Categories, COLOURS } from '../database/items';
import Material from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Home = ({navigation}) => {
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

    const renderItems=(data,index)=>{
        return(
            <TouchableOpacity 
            onPress={()=>navigation.push('Details',{
                name: data.name,
                price: data.price,
                image: data.image,
                size: data.size,
                crust: data.crust,
                delivery: data.delivery,
                ingredients: data.ingredients,
                isTopOfTheWeek: data.isTopOfTheWeek,
                navigation: navigation,
            })}
                key={index}
                activeOpacity={0.9}
                style={{width:"100%",height:180,justifyContent:"center",alignItems:"center"}}>
                <View style={{
                    width:"90%",
                    height:160,
                    elevation:4,
                    borderRadius:20,
                    backgroundColor:"#FFF",
                    flexDirection:"row",
                    justifyContent:"space-between",
                    position:"relative",
                    padding:15
                    }}>
                    <View style={{
                        marginBottom:50,
                        }}>
                        <View style={{
                            flexDirection:"row",
                            alignItems:"center",
                            display:data.isTopOfTheWeek?"flex":"none",
                            }}>
                            <FontAwesome name="crown" style={{fontSize:10,color:COLOURS.accent}}/>
                            <Text style={{fontSize:12,marginLeft:5,opacity:0.8,color:"#000"}}>
                                top of the week
                            </Text>
                        </View>
                        <Text style={{color:"#000",fontSize:22,fontWeight:"bold",paddingTop:10,}}>
                            {data.name}
                        </Text>
                        <Text style={{color:"#000",fontSize:12,paddingTop:10,opacity:0.5}}>
                            {data.weight}
                        </Text>
                    </View>
                    <View style={{marginRight:-45,width:150,height:140}}>
                        <Image
                         source={data.image}
                         style={{width:"100%",height:"100%",resizeMode:"contain"}}
                        />
                    </View>
                    <View style={{flexDirection:"row",position:"absolute",bottom:0,}}>
                        <View style={{width:85,height:50,backgroundColor:COLOURS.accent,justifyContent:"center",alignItems:"center",borderBottomLeftRadius:20,borderTopRightRadius:20,}}>
                            <Entypo
                             name="plus"
                             style={{fontSize:18,color:"#000"}}
                            />
                        </View>
                        <View style={{flexDirection:"row",alignItems:"center",padding:10,marginLeft:10}}>
                           <AntDesign
                            name="star"
                            style={{paddingRight:5,fontSize:12,color:"#000"}}
                            
                            />
                            <Text style={{fontWeight:"bold",fontSize:15,color:"#000"}}>
                                {data.rating}
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

  return (
    <View style={{width:"100%",height:"100%",backgroundColor:COLOURS.white}}>
       <ScrollView showsVerticalScrollIndicator={false}>
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
               <Text style={{paddingTop:20,paddingHorizontal:25,fontSize:18,fontWeight:"700",color:"#000"}}>
                   Popular
               </Text>
               {
                   Categories[currentSelected].items.map(renderItems)
               }
               <View style={{margin:30,alignItems:"center",padding:5,justifyContent:"center"}}>
                   <TouchableOpacity style={{opacity:0.5}}>
                       <Text style={{fontSize:16,borderBottomWidth:1,borderBottomColor:"#000"}}>
                           Load more
                       </Text>
                   </TouchableOpacity>
               </View>
           </View>
       </ScrollView>
    </View>
  );
};

export default Home;
