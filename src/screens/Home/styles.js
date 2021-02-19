import { StyleSheet } from 'react-native';

const cor = '#9400d3';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#87ceeb',
    padding: 8,
  },

  button: {
    backgroundColor: cor,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: 40,
    borderRadius: 8,
    margin:'20px'
  },

  titleButton: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: 200,
    height: 200,
  },
});
