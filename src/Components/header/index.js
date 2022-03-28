import { StyleSheet, Text } from "react-native";

const Header = () => {
    return (
        <>
            <Text style={styles.title}>SimpleCalculator</Text>
            <Text>Calculadora Aritmética</Text>
        </>
    )
}
export default Header




const styles = StyleSheet.create({
    title: {
        color: 'black',
        fontWeight: '700',
    },
});