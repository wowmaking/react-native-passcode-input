import _map from 'lodash/map';


import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';


import Button from './button';


const Keyboard = ({ size, color, onPress, }) => (
    <View style={StyleSheet.flatten([styles.root, size == 'sm' ? styles.rootSm : null])}>
        {
            _map(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'back'], v => (
                <Button
                    key={v}
                    value={v}
                    size={size}
                    color={color}
                    onPress={onPress}
                />
            ))
        }
    </View>
);


Keyboard.propTypes = {
    size: PropTypes.string,
    color: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
};


export default Keyboard;


const styles = StyleSheet.create({
    root: {
        maxWidth: 400,
        marginTop: 8,
        width: '100%',
        alignSelf: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'space-around',
        justifyContent: 'flex-end',
    },
    rootSm: {
        justifyContent: 'center',
    },
});
