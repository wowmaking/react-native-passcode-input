import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


import { SIZE_MD, SIZE_SM } from '../';


const Item = ({ active, size, color, icon, iconFilled, }) => (
    <View style={styles.root}>
        <Icon
            name={active ? iconFilled : icon}
            size={size == 'sm' ? SIZE_SM : SIZE_MD}
            color={color}
            style={styles.icon}
        />
    </View>
);

Item.propTypes = {
    size: PropTypes.string,
    color: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    icon: Icon.propTypes.name,
    iconFilled: Icon.propTypes.name,
};

Item.defaultProps = {
    icon: 'checkbox-blank-outline',
    iconFilled: 'checkbox-blank',
};


export default Item;


const TRANSPARENT_COLOR = 'transparent';

const styles = StyleSheet.create({
    root: {
        width: '25%',
        flexBasis: '25%',
        flex: 1,
        flexGrow: 0,
        flexShrink: 0,
        alignItems: 'center',
    },
    icon: {
        backgroundColor: TRANSPARENT_COLOR,
    },
});
