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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "60%",
    marginBottom: 20,
  },
  switchLabel: {
    fontSize: 16,
  },
  closeButton: {
    backgroundColor: "#306FE3",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  closeButtonText: {
    color: "#FFF",
    fontSize: 16,
  },
})
