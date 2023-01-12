import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../../src/screens/homeScreen';
import Login from '../../src/screens/loginScreen';
import Register from '../../src/screens/registerScreen';
import PixPaymentScreen from '../../src/screens/pixPaymentScreen';
import CreditCardPaymentScreen from '../../src/screens/creditCardPaymentScreen';
import Profile from '../screens/profileScreen';
import Statement from '../screens/statementScreen';

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
        name="creditCardPaymentScreen"
        component={CreditCardPaymentScreen}
      />
      <Stack.Screen
        name="pixPaymentScreen"
        component={PixPaymentScreen}
      />
      <Stack.Screen
        name="login"
        component={Login}
      />
      <Stack.Screen
        name="register"
        component={Register}
      />
      <Stack.Screen
        name="homePage"
        component={HomePage}
      />
      <Stack.Screen
        name="profile"
        component={Profile}
      />
      <Stack.Screen
        name="statement"
        component={Statement}
      />
    </Stack.Navigator>
  )
}