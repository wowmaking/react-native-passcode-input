import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, ViewPropTypes, } from 'react-native';


import Filler from './filler';
import Keyboard from './keyboard';


export const SIZE_MD = 32;
export const SIZE_SM = 20;


export default class RNPasscodeInput extends PureComponent {

    static propTypes = {
        value: PropTypes.string,

        headerStyle: ViewPropTypes.style,

        title: PropTypes.string,
        titleStyle: Text.propTypes.style,
        label: PropTypes.string,
        labelStyle: Text.propTypes.style,
        error: PropTypes.string,
        errorStyle: Text.propTypes.style,

        size: PropTypes.oneOf(['md', 'sm']),
        backspace: Keyboard.propTypes.backspace,

        fillerSize: Filler.propTypes.size,
        fillerColor: Filler.propTypes.color,
        fillerColorFilled: Filler.propTypes.colorFilled,
        fillerIcon: Filler.propTypes.icon,
        fillerIconFilled: Filler.propTypes.iconFilled,

        buttonColor: Keyboard.propTypes.buttonColor,
        buttonContainerStyle: Keyboard.propTypes.buttonContainerStyle,
        buttonStyle: Keyboard.propTypes.buttonStyle,
        buttonTextStyle: Keyboard.propTypes.buttonTextStyle,
        buttonIconStyle: Keyboard.propTypes.buttonIconStyle,

        onChange: PropTypes.func.isRequired,
    };

    static defaultProps = {
        size: 'md',
    };

    constructor(props) {
        super(props);

        this.handlePress = this.handlePress.bind(this);
    }

    render() {
        var props = this.props,
            titleStyle = StyleSheet.flatten([
                styles.title,
                props.titleStyle,
            ]),
            labelStyle = StyleSheet.flatten([
                styles.label,
                props.error ? styles.error : null,
                props.labelStyle,
                props.error ? props.errorStyle : null,
            ]);

        return (
            <View>

                <View style={props.headerStyle}>

                    {
                        props.title ?
                            <Text style={titleStyle}>{props.title}</Text>
                            :
                            null
                    }

                    <Filler
                        active={props.value.length}
                        size={props.fillerSize}
                        color={props.fillerColor}
                        colorFilled={props.fillerColorFilled}
                        icon={props.fillerIcon}
                        iconFilled={props.fillerIconFilled}
                    />

                    <Text style={labelStyle}>{props.error || props.label || ' '}</Text>

                </View>

                <Keyboard
                    size={props.size}
                    backspace={props.backspace}
                    buttonColor={props.buttonColor}
                    buttonContainerStyle={props.buttonContainerStyle}
                    buttonStyle={props.buttonStyle}
                    buttonTextStyle={props.buttonTextStyle}
                    buttonIconStyle={props.buttonIconStyle}
                    onPress={this.handlePress}
                />

            </View>
        );
    }

    handlePress(v) {
        if (v) {
            this.props.onChange(this.props.value + v);
        }
        else {
            this.props.onChange(this.props.value.substr(0, this.props.value.length - 1));
        }
    }

}


const ERROR_COLOR = '#ff0000';
const TRANSPARENT_COLOR = 'transparent';

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 8,
        backgroundColor: TRANSPARENT_COLOR,
    },
    label: {
        fontSize: 14,
        textAlign: 'center',
        marginVertical: 8,
        backgroundColor: TRANSPARENT_COLOR,
    },
    error: {
        color: ERROR_COLOR,
    },
});
