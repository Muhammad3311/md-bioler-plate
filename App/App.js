import {NavigationContainer} from '@react-navigation/native';

import AuthNav from './navigators/AuthNav';

const App = () => {
  return (
    <NavigationContainer>
      <AuthNav />
    </NavigationContainer>
  );
};

export default App;
