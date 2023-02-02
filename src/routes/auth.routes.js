import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../../src/screens/homeScreen';
import Login from '../../src/screens/loginScreen';
import Register from '../../src/screens/registerScreen';
import PixPayment from '../../src/screens/pixPaymentScreen';
import CompraPage from '../screens/compraScreen';
import Profile from '../screens/profileScreen';
import Statement from '../screens/statementScreen';
import ChoosePaymentScreen from '../screens/choosePaymentScreen';
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/auth/authSlice";
import { useNavigation } from "@react-navigation/native";
import { setModalSessionOpen } from '../store/modalSession/modalSessionSlice';

const Stack = createStackNavigator();

export function AuthRoutes() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { expireIn } = useSelector((state) => state.auth.tokenInfo);

  if (expireIn !== "" && expireIn <= Date.now()) {
    dispatch(logout);
    dispatch(setModalSessionOpen());
    navigation.replace('login');
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#FFFFFF' },
      }}
    >
      <Stack.Screen
        name="login"
        component={Login}
        options={{
          headerShown: false,
          footerShown: false,
        }}
      />
      <Stack.Screen
        name="register"
        component={Register}
        options={{
          headerShown: false,
          footerShown: false,
        }}
      />
      <Stack.Screen
        name="profile"
        component={Profile}
      />
      <Stack.Screen
        name="home"
        component={HomePage}
      />
      <Stack.Screen
        name="compra"
        component={CompraPage}
      />
      <Stack.Screen
        name="choosePaymentScreen"
        component={ChoosePaymentScreen}
      />
      <Stack.Screen
        name="statement"
        component={Statement}
      />
      <Stack.Screen
        name="pixPaymentScreen"
        component={PixPayment}
      />
    </Stack.Navigator>
  )
}
