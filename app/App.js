import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {StackNavigator, TabNavigator} from 'react-navigation';

import {isSignedIn} from './DataModel/AuthDataModel';
import Dashboard from './Containers/Dashboard';
import Login from './Containers/Login';
import Sent from './Containers/Sent';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            signedIn: false,
            checkedSignIn: false
        };
    }

    componentWillMount() {
        isSignedIn()
            .then(res => this.setState({signedIn: res, checkedSignIn: true}))
            .catch(err => alert("An error occurred"));
    }

    render() {
        const {checkedSignIn, signedIn} = this.state;

        if (!checkedSignIn) return null;

        const RootNavigator = CreateRootNavigator(signedIn);

        return (
            <RootNavigator/>
        );
    }
}

const Home = TabNavigator(
    {
        Dashboard: {
            screen: Dashboard,
            navigationOptions: {
                tabBarLabel: 'Dashboard',
                tabBarIcon: ({ tintColor }) => <Icon name="dashboard" size={30} color={tintColor} />,
            },
        },
        Sent: {
            screen: Sent,
            navigationOptions: {
                tabBarLabel: 'Sent',
                tabBarIcon: ({ tintColor }) => <Icon name="home" size={30} color={tintColor} />,
            },
        },
    },
);

const CreateRootNavigator = (signedIn = false) => {
    return StackNavigator(
        {
            Home: {
                screen: Home,
                navigationOptions: {
                    gesturesEnabled: false
                },
            },
            Login: {
                screen: Login,
                navigationOptions: {
                    gesturesEnabled: false
                },
            },
        },
        {
            headerMode: "none",
            mode: "modal",
            initialRouteName: signedIn ? "Home" : "Login"
        },
    );
};