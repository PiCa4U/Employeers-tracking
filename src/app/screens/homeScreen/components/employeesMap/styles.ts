import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },

  customMarker: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: 60,
    flexDirection: 'column',
    padding: 10,
  },

  markerText: {
    fontSize: 12,
    color: 'black',
    marginBottom: 5,
  }
});
