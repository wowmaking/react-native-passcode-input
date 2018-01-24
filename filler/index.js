import _range from 'lodash/range';
import _map from 'lodash/map';


import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';


import Item from './item';


const Filler = ({ size, active, color, icon, iconFilled, }) => (
    <View style={StyleSheet.flatten([styles.root, size == 'sm' ? styles.rootSm : null])}>
        {
            _map(_range(4), v => (
                <Item
                    key={v}
                    active={active > v}
                    size={size}
                    color={color}
                    icon={icon}
                    iconFilled={iconFilled}
                />
            ))
        }
    </View>
);

Filler.propTypes = {
    size: PropTypes.string,
    color: PropTypes.string.isRequired,
    active: PropTypes.number.isRequired,
    icon: Item.propTypes.icon,
    iconFilled: Item.propTypes.iconFilled,
};


export default Filler;


const styles = StyleSheet.create({
    root: {
        width: 200,
        alignSelf: 'center',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-around',
    },
    rootSm: {
        width: 120,
    },
});
