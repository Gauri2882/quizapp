import { StyleSheet, Text, TouchableOpacity, View } from "react-native";



const Results = ({score, restart}:{score:number, restart:()=>void}) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={{fontWeight:"600", fontSize: 18, color: "#231942"}} >Quiz Completed</Text>

        <Text style={{marginVertical: 20, fontWeight: "500", fontSize: 18}} >You scored:</Text>

        <Text style={{fontWeight: "700", fontSize: 18, color: "#231942"}} >{score}/10</Text>

        <TouchableOpacity onPress={restart} activeOpacity={.8} style={styles.btn} >
          <Text style={{color:"white", fontWeight: "600"}} >Restart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Results;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5e548e",
    padding: 20,
  },
  wrapper: {
    width: "100%",
    height: 200,
    backgroundColor: "#b9b3d7",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  btn: {
    width: 100,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#231942",
    marginTop: 20,
  }
});
