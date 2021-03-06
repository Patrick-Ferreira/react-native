import { StyleSheet } from 'react-native';

const cor = '#9400d3';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87ceeb',
    padding: 16,
  },

  contentTop: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0.3,
    borderBottomColor: cor,
    marginBottom: 8,
  },

  text: {
    color: cor,
    fontSize: 22,
  },

  button: {
    width: '80%',
    marginRight: 'auto',
    marginLeft: 'auto',
    height: 40,
    marginTop: 16,
    backgroundColor: cor,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
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
