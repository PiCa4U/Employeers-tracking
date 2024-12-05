import { StatusBar, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    safeArea: {
      flex: 1,
      backgroundColor: '#ffffff',
    },

    filterContainer: {
      position: "absolute",
      width: "100%",
      zIndex: 1,
      top:0,
      backgroundColor: "white"
    },
  });
