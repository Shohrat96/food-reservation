import { createAppContainer } from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer'
import {createStackNavigator} from 'react-navigation-stack'
import HomeScreen from '../screens/Home/HomeScreen';
import CategoriesScreen from '../screens/Categories/CategoriesScreen';
import RecipeScreen from '../screens/Recipe/RecipeScreen';
import RecipesListScreen from '../screens/RecipesList/RecipesListScreen';
import DrawerContainer from '../screens/DrawerContainer/DrawerContainer';
import IngredientScreen from '../screens/Ingredient/IngredientScreen';
import SearchScreen from '../screens/Search/SearchScreen';
import IngredientsDetailsScreen from '../screens/IngredientsDetails/IngredientsDetailsScreen';
import OrdersScreen from '../screens/Orders/OrdersScreen';
import SingleOrder from '../screens/SingleOrder/SingleOrder';
import OrderDetailsScreen from '../screens/OrderDetailsScreen/OrderDetailsScreen';
import RegisterScreen from '../screens/Auth/RegisterScreen'
import EditScreen from '../screens/Edit/EditScreen/EditScreen';
import SingleProductEditScreen from '../screens/singleProductEdit/SingleProductEditScreen';
import EditStack from './EditStack';
import { Notifications } from 'expo';


let notificationReceived=null;
const listenHandler=(notification)=>{
  notificationReceived=notification
}

Notifications.addListener(listenHandler);

const MainNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Categories: CategoriesScreen,
    Recipe: RecipeScreen,
    RecipesList: RecipesListScreen,
    Ingredient: IngredientScreen,
    Search: SearchScreen,
    IngredientsDetails: IngredientsDetailsScreen,
    Orders:OrdersScreen,
    SingleOrder:SingleOrder,
    OrderDetails:OrderDetailsScreen,
    Register:RegisterScreen,
    Edit:EditStack,
  },
  {
    initialRouteName: notificationReceived? 'Orders': 'Home',
    //headerMode: 'float',
    
    defaulfNavigationOptions: ({ navigation }) => ({
      
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1,
      },
    })
  }
); 



const DrawerStack = createDrawerNavigator(
  {
    Main: MainNavigator
  },
  {
    drawerPosition: 'left',
    initialRouteName: 'Main',
    drawerWidth: 250,
    contentComponent: DrawerContainer
  }
);


 
export const AppContainer = createAppContainer(DrawerStack);

console.disableYellowBox = true;