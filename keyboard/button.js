import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, ViewPropTypes, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import ElevatedView from 'react-native-elevated-view';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


import { SIZE_MD, SIZE_SM } from '../';


class Button extends PureComponent {

    constructor(props) {
        super(props);

        this.handlePress = this.handlePress.bind(this);
    }

    render() {
        var { size, value, color, backspace, style, } = this.props,
            buttonStyle = StyleSheet.flatten([
                styles.button,
                size == 'sm' ? styles.buttonSm : null,
                { backgroundColor: value ? color : 'transparent', },
                style,
            ]);

        return (
            <View style={StyleSheet.flatten([styles.root, size == 'sm' ? styles.rootSm : null])}>
                <ElevatedView elevation={4} style={buttonStyle}>
                    <TouchableOpacity
                        activeOpacity={.5}
                        style={styles.touchable}
                        onPress={this.handlePress}
                    >
                        {
                            value ?
                                <Text style={StyleSheet.flatten([styles.txt, size == 'sm' ? styles.txtSm : null])}>{value}</Text>
                                :
                                backspace ?
                                    <Image
                                        style={styles.image}
                                        source={backspace}
                                    />
                                    :
                                    <Icon
                                        name='backspace'
                                        size={size == 'sm' ? SIZE_SM : SIZE_MD}
                                        style={StyleSheet.flatten([styles.icon, size == 'sm' ? styles.iconSm : null, { color, }])}
                                    />
                        }
                    </TouchableOpacity>
                </ElevatedView>
            </View>
        );
    }

    handlePress() {
        this.props.onPress(this.props.value);
    }

}

Button.propTypes = {
    size: PropTypes.string,
    color: PropTypes.string.isRequired,
    value: PropTypes.string,
    style: ViewPropTypes.style,
    backspace: Image.propTypes.source,
    onPress: PropTypes.func,
};


export default Button;


const TEXT_COLOR = 'white';

const styles = StyleSheet.create({
    root: {
        width: '33.3%',
        aspectRatio: 1.33,
        alignContent: 'stretch',
    },
    rootSm: {
        width: '16%',
    },
    button: {
        alignContent: 'stretch',
        flexGrow: 1,
        flexShrink: 1,
        borderRadius: 4,
        margin: 8,
    },
    buttonSm: {
    },
    touchable: {
        flexGrow: 1,
        flexShrink: 1,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },
    txt: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: TEXT_COLOR,
    },
    txtSm: {
        fontSize: 20,
    },
    icon: {
        color: TEXT_COLOR,
    },
    iconSm: {
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'center',
    },
});
