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
    flex: 1,
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
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 75,
    height: 75,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginBottom: 30,
    marginRight: 20,
    backgroundColor: '#da1e28',
  },

  icon: {
    fontSize: 28,
    color: 'white',
  }
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
