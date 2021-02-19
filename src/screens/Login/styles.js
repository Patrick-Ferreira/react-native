import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87ceeb',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: '#888',
    fontSize: 18,
  },

  titleCadastro: {
    color: '#777',
    marginTop: 10,
    marginLeft: 150,
  },

  text: {
    fontSize: 25,
    color: '#9400d3',
    margin: 30,
    fontWeight: 'bold',
  },

  logo: {
    width: 200,
    height: 200,
    borderRadius: 50,
  },

  input: {
    marginTop: 10,
    padding: 10,
    width: 300,
    borderBottomWidth: 1,
    borderBottomColor: '#9400d3',
    fontSize: 15,
    color: '#000',
  },

  button: {
    width: 300,
    height: 50,
    backgroundColor: '#9400d3',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 30,
  },

  textButton: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
