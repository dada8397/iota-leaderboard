import {Dimensions} from 'react-native'

export default styles = {
    button: {
        flex: 1,
        height: 50,
        marginTop: 30,
    },
    imageSection: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get('window').height * 0.4,
    },
    image: {
        flex: 1,
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    inputSection: {
        flex: 1,
    },
    text: {
        fontSize: 30,
    },
    textInput: {
        flex: 1,
    },
    view: {
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
}