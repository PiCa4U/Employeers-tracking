import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    backgroundColor: "#2351A7",
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  map:{
    width: '100%', height: '100%'
  },
  headerText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 500,
    color: 'white',
  },

  arrowContainer: {
    position: "absolute",
    left: 15
  },
});
