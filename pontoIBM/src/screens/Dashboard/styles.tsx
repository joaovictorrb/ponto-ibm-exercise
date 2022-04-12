import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  
  // Containers

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  mainContent: {
    display: 'flex',
    width: '100%',
    backgroundColor: '#F4F4F4',
  },
  
  logoutContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignContent: 'center',
  },

  // Text

  buttonText: {
    fontWeight: '300',
    fontStyle: 'normal',
    fontSize: 22,
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginTop: 5,
  },

  logoutButtonText: {
    fontWeight: '300',
    fontStyle: 'normal',
    fontSize: 22,
    alignSelf: 'center',
    marginLeft: 10,
    marginTop: 5,
    color: 'white',
  },

  button: {
    borderRadius: 5,
    width: '95%',
    height: 70,
    margin: 10,
    alignItems: 'center',
    backgroundColor: 'white',
  },

  logoutButton: {
    width: '100%',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#da1e28',
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
