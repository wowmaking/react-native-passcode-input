import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


import { SIZE_MD, SIZE_SM } from '../';


class Button extends PureComponent {

    constructor(props) {
        super(props);

        this.handlePress = this.handlePress.bind(this);
    }

    render() {
        var { size, value, color, } = this.props,
            sBtn = StyleSheet.flatten([
                styles.touchable,
                size == 'sm' ? styles.touchableSm : null,
                value !== 'back' ? { backgroundColor: color, } : null,
            ]);

        return (
            <View style={StyleSheet.flatten([styles.root, size == 'sm' ? styles.rootSm : null])}>
                {
                    value ?
                        <TouchableOpacity
                            activeOpacity={.5}
                            onPress={this.handlePress}
                        >
                            <View style={sBtn}>
                                {
                                    value == 'back' ?
                                        <Icon
                                            name='backspace'
                                            size={size == 'sm' ? SIZE_SM : SIZE_MD}
                                            style={StyleSheet.flatten([styles.icon, size == 'sm' ? styles.iconSm : null, { color, }])}
                                        />
                                        :
                                        <Text style={StyleSheet.flatten([styles.txt, size == 'sm' ? styles.txtSm : null])}>{value}</Text>
                                }
                            </View>
                        </TouchableOpacity>
                        :
                        null
                }
            </View>
        );
    }

    handlePress() {
        this.props.onPress(this.props.value == 'back' ? '' : this.props.value);
    }

}

Button.propTypes = {
    size: PropTypes.string,
    color: PropTypes.string.isRequired,
    value: PropTypes.string,
    onPress: PropTypes.func,
};


export default Button;


const TEXT_COLOR = 'white';

const styles = StyleSheet.create({
    root: {
        width: '33.3%',
        aspectRatio: 1.5,
        padding: 8,
    },
    rootSm: {
        width: '16%',
        padding: 4,
    },
    touchable: {
        height: '100%',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 4,
    },
    touchableSm: {
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
});
