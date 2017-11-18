import React, {Component} from 'react';
import {Button, View} from 'react-native';
import {NavigationActions} from 'react-navigation'

import {onSignOut} from '../../DataModel/AuthDataModel'

export default class Dashboard extends Component {
    render() {
        return (
            <View style={{paddingVertical: 20}}>
                <Button
                    title="Logout"
                    onPress={() => {
                        onSignOut().then(() => this.props.navigation.dispatch(NavigationActions.back()));
                    }}
                />
            </View>
        );
    }
}