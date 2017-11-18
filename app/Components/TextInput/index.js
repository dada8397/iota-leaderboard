import React from 'react'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {Hoshi} from 'react-native-textinput-effects'

export default class MyTextInput extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Hoshi
                {...this.props}
                iconClass={FontAwesomeIcon}
                // TextInput props
                autoCapitalize={'none'}
                autoCorrect={false}
            />
        )
    }
}