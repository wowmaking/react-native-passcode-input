import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, } from 'react-native';


import Filler from './filler';
import Keyboard from './keyboard';


export const SIZE_MD = 32;
export const SIZE_SM = 20;


export default class RNPasscodeInput extends PureComponent {

    static propTypes = {
        value: PropTypes.string,
        title: PropTypes.string,
        titleStyle: Text.propTypes.style,
        label: PropTypes.string,
        labelStyle: Text.propTypes.style,
        error: PropTypes.string,
        errorStyle: Text.propTypes.style,
        fillerSize: Filler.propTypes.size,
        fillerColor: Filler.propTypes.color,
        fillerIcon: Filler.propTypes.icon,
        fillerIconFilled: Filler.propTypes.iconFilled,
        size: PropTypes.oneOf(['md', 'sm']),
        buttonColor: Keyboard.propTypes.buttonColor,
        buttonStyle: Keyboard.propTypes.buttonStyle,
        backspace: Keyboard.propTypes.backspace,
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

                {
                    props.title ?
                        <Text style={titleStyle}>{props.title}</Text>
                        :
                        null
                }

                <Filler
                    size={props.fillerSize}
                    color={props.fillerColor}
                    icon={props.fillerIcon}
                    iconFilled={props.fillerIconFilled}
                    active={props.value.length}
                />

                <Text style={labelStyle}>{props.error || props.label || ' '}</Text>

                <Keyboard
                    size={props.size}
                    buttonColor={props.buttonColor}
                    buttonStyle={props.buttonStyle}
                    backspace={props.backspace}
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
