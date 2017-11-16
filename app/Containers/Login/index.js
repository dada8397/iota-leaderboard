import React, {Component} from 'react';
import {View, Button, Image} from 'react-native';

import TextInput from '../../Components/TextInput'
import {onSignIn} from '../../DataModel/AuthDataModel'
import styles from './style'

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }
    }

    render() {
        return (
            <View style={styles.view}>
                <TextInput
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                    placeholder="Seed"
                />
                <Button
                    title="Login"
                    onPress={() => {
                        onSignIn().then(() => this.props.navigation.navigate("Home"));
                    }}
                />
            </View>
        );
    }
}
