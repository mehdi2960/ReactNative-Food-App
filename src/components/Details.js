/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text,TouchableOpacity,Image, ScrollView } from 'react-native';
import {COLOURS} from '../database/items';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const Details = ({route,navigation}) => {
  const {name,price,image,size,crust,delivery,ingredients,isTopOfTheWeek}=route.params
  return (
    <View style={{width:"100%",height:"100%",backgroundColor:"#fff",position:"relative"}}>
      <View style={{padding:20}}>
       <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",}}>
       <TouchableOpacity
       onPress={()=>navigation.goBack()} 
       style={{
         alignItems:"center",
         width:40,
         height:40,
         borderRadius:10,
         borderWidth:1,
         borderColor:COLOURS.lightGray,
         justifyContent:"center"
         }}>
         <FontAwesome name="angle-left" style={{fontSize:16,color:"#000"}}/>
        </TouchableOpacity>
        <TouchableOpacity 
        style={{
          alignItems:"center",
          width:40,
          height:40,
          borderRadius:10,
          justifyContent:"center",
          backgroundColor:COLOURS.accent,
          opacity:isTopOfTheWeek?1:0.5,
          }}>
         <AntDesign name="star" style={{fontSize:15,color:"#fff"}}/>
        </TouchableOpacity>
       </View>
      </View>
        <Text style={{fontSize:30,color:"#000",fontWeight:"800",paddingHorizontal:20}}>
          {name}
        </Text>
        <View style={{flexDirection:"row",alignItems:"center",paddingHorizontal:20}}>
          <Text style={{fontSize:20,color:COLOURS.accentRed,fontWeight:"900",paddingRight:5,paddingBottom:8}}>
            &
          </Text>
          <Text style={{fontSize:30,color:"#000",fontWeight:"800",color:COLOURS.accentRed}}>
            {price}
          </Text>
        </View>
        <View style={{paddingHorizontal:20,paddingVertical:45,flexDirection:"row",}}>
            <View style={{width:200}}>
                <View>
                  <Text>
                    size
                  </Text> 
                  <Text style={{color:"#000",fontWeight:"600",fontSize:18,}}>
                    {size}
                  </Text>
                </View>
                <View style={{paddingVertical:30,}}>
                  <Text>
                  crust
                  </Text> 
                  <Text style={{color:"#000",fontWeight:"600",fontSize:18,}}>
                  {crust}
                  </Text>
                </View>
                <View style={{paddingVertical:5,}}>
                  <Text>
                  delivery
                  </Text> 
                  <Text style={{color:"#000",fontWeight:"600",fontSize:18,}}>
                  {delivery} min
                  </Text>
                </View>
            </View>
            <View style={{width:270}}>
          <Image style={{width:380,height:350,resizeMode:"contain",position:"absolute",top:-75,left:10}} source={image}/>
        </View>
      </View>
        <View style={{paddingHorizontal:20,paddingVertical:40}}>
          <Text style={{fontSize:20,fontWeight:"700",color:"#000"}}>
            Ingredients
          </Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
             {
               ingredients.map((data, index)=>{
                 return(
                   <View key={index} style={{width:80,height:80,borderRadius:20,margin:15,elevation:5,backgroundColor:"#fff"}}>
                     <Image
                     style={{width:"100%",height:"100%",resizeMode:"contain"}}
                     source={data}/>
                   </View>
                 )
               })
             }
          </ScrollView>
        </View>
        <View style={{position:"absolute",bottom:-8,alignItems:"center",justifyContent:"center",width:"100%"}}>
          <TouchableOpacity
          onPress={()=>navigation.goBack()}
           activeOpacity={0.9}
          style={{height:80,flexDirection:"row",borderRadius:20,alignItems:"center",justifyContent:"center",backgroundColor:COLOURS.accent,width:"90%"}}>
            <Text style={{fontSize:20,fontWeight:"bold",letterSpacing:1}}>Place on Order</Text>
            <Entypo name="chevron-right" style={{marginLeft:10,fontSize:16,}}/>
          </TouchableOpacity>
        </View>
    </View>
  );
};

export default Details;
