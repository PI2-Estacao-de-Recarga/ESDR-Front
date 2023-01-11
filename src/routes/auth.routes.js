import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../../src/screens/homeScreen';
import Login from '../../src/screens/loginScreen';
import Register from '../../src/screens/registerScreen';
import PixPayment from '../../src/screens/pixPaymentScreen';
import CreditCardPayment from '../../src/screens/creditCardPaymentScreen';

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
        component={CreditCardPayment}
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
        name="pixPaymentScreen"
        component={PixPayment}
      />
    </Stack.Navigator>
  )
}