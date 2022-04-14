import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  // Container

  container: {
    flex: 1,
    backgroundColor: '#0F62FE',
    justifyContent: 'center',
  },

  cardContainer: {
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    padding: 20,
    borderRadius: 5,
  },

  titleContainer: {
    alignSelf: 'flex-start',
    marginBottom: 30,
    height: 45,
  },

  // Text

  inputView: {
    backgroundColor: '#F4F4F4',
    borderRadius: 5,
    width: '100%',
    height: 45,
    marginBottom: 20,

    alignItems: 'center',
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 0,
  },

  title: {
    fontSize: 32,
  },

  forgotButtonText: {
    height: 30,
    fontSize: 16,
  },

  // Button
  
  forgotButton: {
    height: 30,
  },

  loginBtn: {
    width: '100%',
    borderRadius: 5,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#0F62FE',
  },

  loginText: {
    color: '#ffff',
  },
});

// ThemeColors: {
//   PrimaryColor: "#0F62FE",
//   SecondaryColor: "#FFFFFF",
//   Icon: "#FFFFFF",
//   UI: "#F4F4F4",

// },

// TextColors: {
//   lightText: "#ffffff",
//   darkText: "#161616",
//   grayText: "#8D8D8D",
// },
