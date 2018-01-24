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
        error: PropTypes.string,
        size: PropTypes.oneOf(['md', 'sm']),
        color: PropTypes.string.isRequired,
        fillerIcon: Filler.propTypes.icon,
        fillerIconFilled: Filler.propTypes.iconFilled,
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
        var props = this.props;

        return (
            <View>

                <Filler
                    size={props.size}
                    color={props.color}
                    icon={props.fillerIcon}
                    iconFilled={props.fillerIconFilled}
                    active={props.value.length}
                />

                <Text style={[styles.label, props.error ? styles.error : null]}>{props.error || props.label}</Text>

                <Keyboard
                    size={props.size}
                    color={props.color}
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

const styles = StyleSheet.create({
    label: {
        fontSize: 15,
        textAlign: 'center',
        marginVertical: 8,
    },
    error: {
        color: ERROR_COLOR,
    },
});
