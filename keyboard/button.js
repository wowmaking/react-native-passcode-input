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
        var {
            size, value, backspace, color,
            containerStyle, style, textStyle, iconStyle,
        } = this.props;

        containerStyle = StyleSheet.flatten([
            styles.root,
            size == 'sm' ? styles.rootSm : null,
            containerStyle,
        ]);

        style = StyleSheet.flatten([
            styles.button,
            size == 'sm' ? styles.buttonSm : null,
            style,
            { backgroundColor: value ? color : 'transparent', },
        ]);

        textStyle = StyleSheet.flatten([
            styles.txt,
            size == 'sm' ? styles.txtSm : null,
            textStyle,
        ]);

        iconStyle = StyleSheet.flatten([
            styles.icon, size == 'sm' ? styles.iconSm : null,
            { color, },
            iconStyle,
        ]);

        return (
            <View style={containerStyle}>
                <ElevatedView elevation={4} style={style}>
                    <TouchableOpacity
                        activeOpacity={.5}
                        style={styles.touchable}
                        onPress={this.handlePress}
                    >
                        {
                            value ?
                                <Text style={textStyle}>{value}</Text>
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
                                        style={iconStyle}
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
    value: PropTypes.string,
    size: PropTypes.string,
    backspace: Image.propTypes.source,
    color: PropTypes.string.isRequired,
    containerStyle: ViewPropTypes.style,
    style: ViewPropTypes.style,
    textStyle: Text.propTypes.style,
    iconStyle: ViewPropTypes.style,
    onPress: PropTypes.func,
};


export default Button;


const BACK_COLOR = 'black';
const TEXT_COLOR = 'white';

const styles = StyleSheet.create({
    root: {
        width: '33.3%',
        aspectRatio: 1.33,
        alignContent: 'stretch',
    },
    rootSm: {
        width: '15%',
    },
    button: {
        backgroundColor: BACK_COLOR,
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
