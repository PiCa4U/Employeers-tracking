import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 10,
    boxShadow: "0px 3px 10px 0px #00000026",
  },

  navTabs: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center"
  },

  buttons: {
    flex: 1,
    height: 40,
    justifyContent: "center",
    backgroundColor: "#306FE3",
    borderWidth: 1,
    borderColor: "#306FE3",
    borderRadius: 5,
  },

  filterButton: {
    height: 40,
    justifyContent: "center",
    backgroundColor: "#306FE3",
    borderWidth: 1,
    borderColor: "#306FE3",
    borderRadius: 5,
  },

  buttonsText: {
    color: "#FFFFFF",
    fontSize: 16,
    textAlign: "center",
  },
})
