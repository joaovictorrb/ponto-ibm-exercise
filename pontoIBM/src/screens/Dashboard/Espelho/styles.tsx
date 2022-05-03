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
    justifyContent: 'flex-start',
  },

  logoutContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignContent: 'center',
  },

  // Text

  cardText: {
    fontWeight: '300',
    fontStyle: 'normal',
    fontSize: 18,
    marginLeft: 10,
    marginTop: 5,
    alignSelf: 'flex-start',
    color: 'black',
  },

  cardAlert: {
    fontWeight: '300',
    fontStyle: 'normal',
    fontSize: 18,
    marginLeft: 10,
    marginTop: 5,
    alignSelf: 'flex-start',
    color: 'white',
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
  },

  cardTitle: {
    fontWeight: '300',
    fontStyle: 'normal',
    fontSize: 20,
    marginLeft: 10,
    marginTop: 5,
    color: '#0F62FE',
  },

  cardDate: {
    fontWeight: '300',
    fontStyle: 'normal',
    fontSize: 20,
    marginLeft: 10,
    color: '#0F62FE',
  },

  cardTitleAlt: {
    fontWeight: '300',
    fontStyle: 'normal',
    fontSize: 22,
    marginLeft: 10,
    alignSelf: 'flex-start',
    color: 'red',
  },

  // Cards

  card: {
    display: 'flex',
    borderRadius: 5,
    width: '95%',
    height: 'auto',
    margin: 10,
    padding: 10,
    backgroundColor: '#ffffff',
    flexDirection: 'column',
  },

  cardItemList: {
    display: 'flex',
    borderRadius: 5,
    width: '95%',
    height: 'auto',
    margin: 10,
    padding: 10,
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    borderBottomWidth: 1,
    borderColor: '#0F62FE',
  },

  cardList: {
    display: 'flex',
    borderColor: '#0F62FE',
    borderRadius: 5,
    width: '95%',
    height: 'auto',
    margin: 10,
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    overflow: 'hidden',
    
  },

  cardHeader: {
    borderRadius: 5,
    width: '95%',
    height: 'auto',
    margin: 10,
    padding: 0,
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
    flexDirection: 'column',
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
