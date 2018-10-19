import _map from 'lodash/map';


import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, ViewPropTypes, } from 'react-native';


import Button from './button';


const Keyboard = ({
    size, backspace, style,
    buttonContainerStyle, buttonStyle, buttonTextStyle, buttonIconStyle,
    onPress,
}) => (
        <View style={StyleSheet.flatten([styles.root, size == 'sm' ? styles.rootSm : null, style,])}>
            {
                _map(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ''], v => (
                    <Button
                        key={v}
                        value={v}
                        size={size}
                        backspace={backspace}
                        containerStyle={buttonContainerStyle}
                        style={buttonStyle}
                        textStyle={buttonTextStyle}
                        iconStyle={buttonIconStyle}
                        onPress={onPress}
                    />
                ))
            }
        </View>
    );


Keyboard.propTypes = {
    size: PropTypes.string,
    backspace: Button.propTypes.backspace,
    style: ViewPropTypes.style,
    buttonContainerStyle: Button.propTypes.containerStyle,
    buttonStyle: Button.propTypes.style,
    buttonTextStyle: Button.propTypes.textStyle,
    buttonIconStyle: Button.propTypes.iconStyle,
    onPress: PropTypes.func.isRequired,
};


export default Keyboard;


const styles = StyleSheet.create({
    root: {
        maxWidth: 400,
        width: '100%',
        alignSelf: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'space-around',
        justifyContent: 'flex-end',
    },
    rootSm: {
        justifyContent: 'center',
        width: '90%',
    },
});
