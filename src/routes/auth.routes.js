import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../../src/screens/homeScreen';
import Login from '../../src/screens/loginScreen';
import Register from '../../src/screens/registerScreen';
import PixPayment from '../../src/screens/pixPaymentScreen';
import CreditCardPayment from '../../src/screens/creditCardPaymentScreen';
import Profile from '../screens/profileScreen';
import Statement from '../screens/statementScreen';
import ChoosePaymentScreen from '../screens/choosePaymentScreen';

const Stack = createStackNavigator();

export function AuthRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#FFFFFF' },
      }}
      
    >
      <Stack.Screen
        name="profile"
        component={Profile}
      />
      <Stack.Screen
        name="home"
        component={HomePage}
      />
      <Stack.Screen
        name="choosePaymentScreen"
        component={ChoosePaymentScreen}
      />
      <Stack.Screen
        name="creditCardPaymentScreen"
        component={CreditCardPayment}
      />
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
