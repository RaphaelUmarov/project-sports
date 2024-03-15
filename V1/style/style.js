import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    marginTop: 30,
    fontSize: 20,
    marginBottom: 15,
    backgroundColor: '#ff6f3c',
    flexDirection: 'row',
  },
  header1: {
    marginTop: 5,
    fontSize: 1,
    marginBottom: 5,
    flexDirection: 'column',
    fontWeight: 'bold',
    backgroundColor: '#ffc93c',
  },
  header2: {
    marginTop: 5,
    fontSize: 5,
    marginBottom: 15,
    flexDirection: 'row',
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 20,
    backgroundColor: '#ff6f3c',
    flexDirection: 'row'
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 23,
    textAlign: 'center',
    margin: 10,
  },
  author: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    borderWidth:3,
    borderColor: "#ffc93c",
    fontWeight: 'bold',
    flex: 1,
    height: 100,
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  row: {
    marginTop: 20,
    padding: 10
  },
  flex: {
    flexDirection: "row"
  },
  button: {
    margin: 30,
    flexDirection: "row",
    padding: 10,
    fontSize: 30,
    backgroundColor: "#ff9a3c",
    width: 300,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign :'center'
  },
  button2: {
    margin: 30,
    flexDirection: "column",
    padding: 10,
    fontSize: 30,
    backgroundColor: "#ff9a3c",
    width: 300,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign :'center'
  },
  buttonText: {
    color:"#2B2B52",
    fontSize: 20
  },
});