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
    flex: 1,
    display: 'flex',
    width: '100%',
    backgroundColor: '#F4F4F4',
    justifyContent: 'center',
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
    marginLeft: 10,
    marginTop: 5,
    color: 'white',
  },

  sendDataButtonText: {
    fontWeight: '300',
    fontStyle: 'normal',
    fontSize: 22,
    marginLeft: 10,
    marginTop: 5,
    color: 'white',
  },

  // Button

  button: {
    borderRadius: 5,
    width: '95%',
    height: 90,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#42be65',
  },

  sendDataButton: {
    width: '95%',
    height: 90,
    borderRadius: 5,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4589ff',
  },
});

// ThemeColors: {
//   PrimaryColor: "#0F62FE",
//   SecondaryColor: "#FFFFFF",
//   Icon: "#FFFFFF",
//   UI: "#F4F4F4",
//
//   BotaoMarcarPonto: #42be65 ==> Entrada
//   BotaoMarcarPonto: #42be65 ==> Saida

//   BotaoMarcarPonto: #4589ff ==> Entrada == desativado se

// },

// TextColors: {
//   lightText: "#ffffff",
//   darkText: "#161616",
//   grayText: "#8D8D8D",
// },
