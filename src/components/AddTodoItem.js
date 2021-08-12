import React, { useState } from 'react';
import { StyleSheet, View, Pressable, Text, TextInput, Modal, Alert, TouchableOpacity } from 'react-native';

import theme from '../styles/theme.style';
import { globalStyles } from '../styles/global.style';

export default function AddTodoItem ({ onTodoAdd }) {
  const [ modalVisible, setModalVisible ] = useState(false);
  const [ text, setText ] = React.useState('');

  let textRef;

  const updateRef = (ref) => {
    textRef = ref;
    setTimeout(() => {
      if (textRef) textRef.focus()
    }, 150)
  };

  const onAdd = () => {
    if (text) {
      onTodoAdd(text);
      setText('');
      setModalVisible(!modalVisible);
      if (textRef) textRef.blur();
    }
    else
      Alert.alert('OOPS!', 'Todos can not be empty!');
  }

  const openModal = () => {
    setModalVisible(true);
  }

  return (
    <View style={styles.container}>
      {modalVisible ? (
        <Modal
          animationType='fade'
          transparent={true}
          visible={true}
          onRequestClose={() => {
            setModalVisible(!modalVisible)
          }}
        >
          <TouchableOpacity
            onPress={() => setModalVisible(!modalVisible)}
            activeOpacity={1}
            style={styles.centeredView}
          >
            <View style={globalStyles.modalView}>
              <TextInput
                ref={updateRef}
                style={globalStyles.input}
                onChangeText={setText}
                value={text}
                placeholder='Add task'
              />
              <Pressable
                style={[ globalStyles.button, styles.buttonAdd ]}
                onPress={onAdd}
              >
                <Text style={styles.textStyle}>Add</Text>
              </Pressable>
            </View>
          </TouchableOpacity>
        </Modal>
      ) : null}
      <Pressable
        style={[ globalStyles.button, styles.buttonOpen ]}
        onPress={openModal}
      >
        <Text style={[ styles.textStyle, styles.buttonOpenText ]}>Add todo</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: theme.CONTAINER_PADDING,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'rgba(118, 89, 171, 0.5)',
  },
  buttonAdd: {
    flexGrow: 1,
    borderRadius: theme.CONTAINER_BORDER_RADIUS,
  },
  textStyle: {
    textAlign: 'center',
    color: theme.WHITE_COLOR,
  },
  buttonOpenText: {
    fontSize: theme.FONT_SIZE_LARGE,
  },
});
