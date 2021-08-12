import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CheckBox from 'react-native-check-box';
import { RectButton } from 'react-native-gesture-handler';

import SwipeableRow from './SwipeableRow';
import theme from '../styles/theme.style';

export default function TodoItem ({ item, setDoneStatus, onDelete }) {
  const itemStyles = [ styles.item ];
  const textStyles = [ styles.text ];
  if (item.isDone) {
    itemStyles.push(styles.itemDone);
    textStyles.push(styles.textDone);
  }

  return (
    <View style={styles.swipedContainer}>
      <SwipeableRow onSwipeRight={() => onDelete(item.key)} onSwipeLeft={() => setDoneStatus(item.key)}>
        <RectButton style={styles.rectButton}>
          <View style={itemStyles}>
            <Text style={textStyles}>{item.text}</Text>
            <CheckBox
              isChecked={item.isDone}
              onClick={() => setDoneStatus(item.key)}
              checkBoxColor="#c4a9f6"
            />
          </View>
        </RectButton>
      </SwipeableRow>
    </View>
  );
}

const styles = StyleSheet.create({
  swipedContainer: {
    paddingVertical: 10,
  },
  rectButton: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  item: {
    padding: theme.CONTAINER_BORDER_RADIUS,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: theme.CONTAINER_BORDER_RADIUS,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: theme.PRIMARY_COLOR,
  },
  itemDone: {
    borderColor: theme.GRAY_COLOR_LIGHT,
  },
  text: {
    color: theme.PRIMARY_COLOR,
    fontSize: theme.FONT_SIZE_MEDIUM,
    maxWidth: '80%'
  },
  textDone: {
    color: theme.GRAY_COLOR_LIGHT,
    textDecorationStyle: 'solid',
    textDecorationColor: theme.GRAY_COLOR_LIGHT,
    textDecorationLine: 'line-through',
  },
});

