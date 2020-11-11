import React, { useEffect, useLayoutEffect } from 'react';
import {View, Text, Image, Button, TouchableHighlight, TouchableOpacity,FlatList, ScrollView, Alert} from 'react-native';
import { connect } from 'react-redux';
import { convertObToArr, getCategoryName } from '../../../data/MockDataAPI';
import styles from './styles';
import BackButton from '../../../components/BackButton/BackButton';


const mapStateToProps=(state)=>({
    productsKeyInEdit:state.products,
    categories:state.categories
})
const EditScreen = connect(mapStateToProps)((props)=>{
    console.log('props in Edit page: ',props);
    const {navigation}=props;
    const productEditHandler=(product)=>{
      props.navigation.navigate('EditScreenSingle', { product });
    };
    

  //   useEffect(()=>{
  //     navigation.setOptions({
          
  //         title:'Edit'
  //     })
  // },[]);
  useEffect(()=>{
        navigation.setOptions({
            headerLeft:()=>{
                return (
                    <BackButton
                    onPress={()=>console.log(navigation)}
                />
                )
            },
            title:'Edit'
        })
    }, []);

    const renderProducts = ({ item }) => {
      item=Object.values(item)[0];
      return (
      <TouchableOpacity underlayColor='rgba(73,182,77,1,0.9)' onPress={() => productEditHandler(item)}>
        <View style={styles.container}>
          <Image style={styles.photo} source={{ uri: item.photo_url }} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={{padding:0}}>{item.price} AZN</Text>
          <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
        </View>
      </TouchableOpacity>
    )};

    return (
        <View style={{flex:1}}>
            <TouchableOpacity style={
              {
               alignItems:'flex-end',
               padding:10,
               borderBottomWidth:1,
               borderBottomColor:'#2cd18a'
            }} 
            onPress={()=>navigation.navigate('EditCategoriesScreen')}>
                <Text style={{
                  fontSize:16,
                  fontWeight:'bold'
                }}>
                    Kateqoriyalara keçid
                </Text>
            </TouchableOpacity>
            <View style={{alignItems:'center', padding:10, borderBottomColor:'#2cd18a', borderBottomWidth:1}}>
              <TouchableOpacity 
              onPress={()=>navigation.navigate('CreateNewProduct')}
              style={{
                justifyContent:'center',
                alignItems:'center',
                width:50,
                height:50,
                borderWidth:1,
                borderRadius:25,
                borderColor:'#2cd18a',
                backgroundColor:'#2cd18a'
              }}>
                <Text style={{
                  fontSize:30,
                  color:'white',
                  fontWeight:'bold'
                }}>
                  +
                </Text>
              </TouchableOpacity>
            </View>
            
            <FlatList
            vertical
            showsVerticalScrollIndicator={true}
            numColumns={2}
            data={ convertObToArr(props.productsKeyInEdit)}
            renderItem={renderProducts}
            keyExtractor={item => `${item.recipeId}`}
            />
      </View>
    )
})
export default EditScreen