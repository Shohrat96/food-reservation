import React, { useEffect } from 'react';
import {View, Text, Alert} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native'
import SingleProductEditScreen from '../screens/singleProductEdit/SingleProductEditScreen';
import EditScreen from '../screens/Edit/EditScreen/EditScreen';
import HeaderBtnSave from '../components/HeaderBtnSave/HeaderBtnSave';
import EditCategoriesScreen from '../screens/Edit/EditCategories/EditCategoriesScreen';
import EditSingleCategoryScreen from '../screens/Edit/EditCategories/EditSingleCategory/EditSingleCategoryScreen';
import CreateNewProduct from '../screens/Edit/EditScreen/CreateNewProduct/CreateNewProduct';
import { HeaderBackButton } from 'react-navigation-stack';


const EditStack=({navigation})=>{
    const {Navigator, Screen}=createStackNavigator();
    
    return (
            <Navigator screenOptions={{
                headerStatusBarHeight:0,
            }}>
                <Screen name="EditScreen" component={EditScreen} options={({ navigation1, route }) => ({
                    headerShown: true,
                    title: 'Edit',
                    headerLeft: (props) => <HeaderBackButton
                        onPress={() => navigation.goBack()}
                    />
                })}/>
                <Screen name="EditScreenSingle" component={SingleProductEditScreen}/>
                <Screen name="EditCategoriesScreen" component={EditCategoriesScreen}/>
                <Screen name="EditSingleCategoryScreen" component={EditSingleCategoryScreen}/>
                {/* <Screen name="CreateNewProduct" component={CreateNewProduct}/> */}

            </Navigator>
    )
}
export default EditStack

