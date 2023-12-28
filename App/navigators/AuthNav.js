import {createStackNavigator} from '@react-navigation/stack';

// import screens
import {Home, Custom} from '../screens/index';

const Stack = createStackNavigator();

const AuthNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Custom" component={Custom} />
    </Stack.Navigator>
  );
};

export default AuthNav;
