import React, {Component} from 'react';
import {Button, Image, Text, View} from 'react-native';

import TextInput from '../../Components/TextInput'
import {onSignIn} from '../../DataModel/AuthDataModel'
import styles from './style'
import Color from '../../Styles/Color'

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
                <View style={styles.imageSection}>
                    <Image
                        source={require('../../Assets/iota.png')}
                        style={styles.image}
                    />
                    <Text style={styles.text}>IOTA</Text>
                </View>
                <View style={styles.inputSection}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                        placeholder="Seed"
                        borderColor={Color.grey.shade_500}
                    />
                    <Button
                        style={styles.button}
                        title="Login"
                        onPress={() => {
                            onSignIn().then(() => this.props.navigation.navigate("Home"));
                        }}
                    />
                </View>
            </View>
        );
    }
}
