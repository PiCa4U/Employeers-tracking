import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: "#f9f9f9",
        boxShadow: "0px 3px 10px 0px #00000026",
      },

      filter: {
        marginBottom: 10,
      },

      text: {
        fontSize: 16,
        marginBottom: 5,
      },

      input: {
        height: 40,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
      },

      onFilterButton: {
        height: 40,
        borderRadius: 5,
        backgroundColor: "#306FE3",
        justifyContent: "center",
        alignItems: "center",
      },

      buttonText: {
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontSize: 16,
        fontWeight: 500,
      }
  });
