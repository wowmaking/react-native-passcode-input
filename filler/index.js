import _range from 'lodash/range';
import _map from 'lodash/map';


import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';


import Item from './item';


const Filler = ({ active, size, color, colorFilled, icon, iconFilled, }) => (
    <View style={styles.root}>
        {
            _map(_range(4), v => (
                <Item
                    key={v}
                    active={active > v}
                    size={size}
                    color={color}
                    colorFilled={colorFilled}
                    icon={icon}
                    iconFilled={iconFilled}
                />
            ))
        }
    </View>
);

Filler.propTypes = {
    active: PropTypes.number.isRequired,
    size: Item.propTypes.size,
    color: Item.propTypes.color,
    colorFilled: Item.propTypes.colorFilled,
    icon: Item.propTypes.icon,
    iconFilled: Item.propTypes.iconFilled,
};


export default Filler;


const styles = StyleSheet.create({
    root: {
        alignSelf: 'center',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'center',
    },
});
