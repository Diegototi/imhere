import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24
  },
  eventName: {
    color: '#FDFCFE',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48
  },
  eventeDate: { color:'#ADD8E6', fontSize:24, },
  input: {
    flex: 1,
    height: 56, // altura 
    backgroundColor: '#1F1E25', // cor de fundo
    borderRadius: 5, //borda arredondada
    color: '#FFF', // cor do texto
    padding: 16, //espaçamento interno
    fontSize: 16, // tamamnho do texto
    marginRight: 12,
  },
  buttonText:{color: '#FFF', fontSize: 18},
  button:{width: 56, height: 56, borderRadius: 5, backgroundColor:'#31CF67', alignItems: 'center',
    justifyContent: 'center'
  },
  form: {width: '100%', flexDirection:'row',marginTop: 36, marginBottom: 42},

  listEmptyText: {color: '#FFF', fontSize: 15, textAlign: 'center'}
  
  });