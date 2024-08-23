import React, { useMemo } from 'react';
import { Badge } from '@rneui/themed';
import { StyleSheet } from 'react-native';

interface OrderBadgeProps {
    value: string | number;
}

const OrderBadge: React.FC<OrderBadgeProps> = ({ value }) => {
    const { renderedValue, active } = useMemo(() => {
        if (value === 0) {
            return { renderedValue: '+', active: false };
        }
        return { renderedValue: value, active: true };
    }, [value]);
    return (
        <Badge
            value={renderedValue}
            status="primary"
            containerStyle={{ position: 'absolute', bottom: 4, right: 4 }}
            badgeStyle={active ? styles.badgeIncremented : styles.badgeDefault}
            textStyle={{ textAlign: 'center', alignSelf: 'center' }}
        />
    );
};

const styles = StyleSheet.create({
    badgeDefault: {
        backgroundColor: '#10b981',
    },
    badgeIncremented: {
        backgroundColor: '#2196f3',
    },
});

export default OrderBadge;