import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import theme from '../styles/theme.style';

export default function SwipeableRow ({ children, onSwipeRight, onSwipeLeft }) {
  let swipeableRow;

  const updateRef = (ref) => {
    swipeableRow = ref;
  };

  const onLeftAction = () => {
    swipeableRow.close();
    onSwipeLeft();
  };

  const onRightAction = () => {
    swipeableRow.close();
    onSwipeRight();
  };

  const renderLeftActions = () => {
    return (
      <RectButton style={[ styles.action, styles.leftAction ]}>
        <Text style={styles.actionText}>Check</Text>
      </RectButton>
    );
  };

  const renderRightActions = () => {
    return (
      <RectButton style={[ styles.action, styles.rightAction ]}>
        <Text style={styles.actionText}>Delete</Text>
      </RectButton>
    );
  };

  return (
    <Swipeable
      ref={updateRef}
      friction={2}
      leftThreshold={80}
      rightThreshold={40}
      renderLeftActions={renderLeftActions}
      onSwipeableLeftOpen={onLeftAction}
      renderRightActions={renderRightActions}
      onSwipeableRightOpen={onRightAction}
    >
      {children}
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  action: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
    borderRadius: theme.CONTAINER_BORDER_RADIUS,
  },
  leftAction: {
    flexDirection: 'row-reverse',
    backgroundColor: theme.BLUE_COLOR_LIGHT,
  },
  rightAction: {
    flexDirection: 'row',
    backgroundColor: theme.RED_COLOR_LIGHT,
  },
  actionText: {
    color: theme.WHITE_COLOR,
  },
});
