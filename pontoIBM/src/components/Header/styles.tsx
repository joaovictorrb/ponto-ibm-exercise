import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '14%',
    backgroundColor: '#0F62FE',
  },

  headerContent: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'flex-end',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginTop: 10,
  },

  buttonContainer: {
    marginRight: 15,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  icon: {
    fontSize: 30,
    color: 'white',
  },

  title: {
    fontWeight: '300',
    fontStyle: 'normal',
    fontSize: 32,
    color: 'white',
  },
});
