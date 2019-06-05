import { createStackNavigator, createAppContainer } from 'react-navigation';
import Main from './app/components/Main'
import Login from './app/components/screen/Login'
import Register from './app/components/screen/Register'
import Items from './app/components/screen/Items'

const AppNavigator = createStackNavigator({
    Login: {screen: Login,navigationOptions: {
            header: null
        } },
    Register: {screen: Register,navigationOptions: {
            header: null
        } },
    Main: {screen: Main,navigationOptions: {
            header: null
        } },
    Items: {screen: Items,navigationOptions: {
            header: null
        } }
});

const App = createAppContainer(AppNavigator);

export default App;