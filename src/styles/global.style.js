import { StyleSheet } from 'react-native';
import theme from './theme.style';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    padding: theme.CONTAINER_PADDING,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.PRIMARY_COLOR,
    padding: theme.CONTAINER_PADDING_SMALL,
    borderRadius: theme.CONTAINER_BORDER_RADIUS,
  },
  modalView: {
    margin: theme.CONTAINER_PADDING,
    padding: theme.CONTAINER_PADDING,
    backgroundColor: theme.WHITE_COLOR,
    borderRadius: theme.CONTAINER_BORDER_RADIUS,
    shadowColor: theme.PRIMARY_COLOR_DARK,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  input: {
    marginRight: theme.CONTAINER_PADDING,
    width: 0,
    flexGrow: 4,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: theme.CONTAINER_BORDER_RADIUS,
    borderColor: theme.PRIMARY_COLOR,
    color: theme.PRIMARY_COLOR,
    padding: theme.CONTAINER_PADDING_SMALL,
  },
  buttonOpen: {
    padding: theme.CONTAINER_PADDING_SMALL,
    borderRadius: theme.CONTAINER_BORDER_RADIUS,
  },
  textStyle: {
    textAlign: 'center',
    color: theme.WHITE_COLOR,
  },
  largeText: {
    fontSize: theme.FONT_SIZE_LARGE,
  },
});
