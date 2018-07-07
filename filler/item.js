import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


import { SIZE_MD, SIZE_SM } from '../';


const Item = ({ active, size, color, colorFilled, icon, iconFilled, }) => (
    <View style={styles.root}>
        <Icon
            name={active ? iconFilled : icon}
            size={size}
            color={active ? colorFilled || color : color}
            style={styles.icon}
        />
    </View>
);

Item.propTypes = {
    active: PropTypes.bool.isRequired,
    size: PropTypes.number,
    color: PropTypes.string.isRequired,
    colorFilled: PropTypes.string,
    icon: Icon.propTypes.name,
    iconFilled: Icon.propTypes.name,
};

Item.defaultProps = {
    icon: 'checkbox-blank-outline',
    iconFilled: 'checkbox-blank',
    size: 20,
};


export default Item;


const TRANSPARENT_COLOR = 'transparent';

const styles = StyleSheet.create({
    root: {
        marginHorizontal: 8,
    },
    icon: {
        backgroundColor: TRANSPARENT_COLOR,
    },
});
