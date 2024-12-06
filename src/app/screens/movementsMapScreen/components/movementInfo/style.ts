import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#FFFFFF",
    gap: 40
  },
  statContainer: {
    gap:15
  },
  dateContainer: {
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderColor: "#DADADA",
  },
  dateText: {
    fontSize: 18,
    fontWeight: 700,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  infoText: {
    fontSize: 16,
    fontWeight: 500,
  },
  resultsText: {
    fontSize: 14,
    fontWeight: 500,
    color: "#828282",
  },
  writeButton: {
    borderColor: "#306FE3",
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  writeText: {
    fontSize: 14,
    fontWeight: 400,
    color: "#306FE3"
  },
  callText: {
    fontSize: 14,
    fontWeight: 400,
    color: "#FFFFFF"
  },
  callButton: {
    flex: 1,
    height: 40,
    borderColor: "#306FE3",
    backgroundColor: "#306FE3",
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 10,
  }
});
