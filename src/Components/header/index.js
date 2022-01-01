import { StyleSheet, Text } from "react-native";

const Header = () => {
    return (
        <>
            <Text style={styles.title}>Calculo de IMC</Text>
            <Text>Descubra seu indice de Massa Corporal</Text>
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