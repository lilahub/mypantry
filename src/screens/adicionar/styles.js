import { StyleSheet } from "react-native";
const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E5E5E5'
    },

    logo: {
        width: 53,
        height: 38,
        alignSelf: 'flex-end'
    },

    title: {
        marginTop: 45,
        fontFamily: 'Montserrat',
        fontSize: 16,
        color: '#835FAB',
        marginBottom: 31
    },

    btnAdicionar: {
        width: 134,
        height: 31,
        backgroundColor: '#835FAB',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 20

    },

    txtBtnAdicionar: {
        fontFamily: 'Montserrat',
        fontSize: 12,
        color: '#FFF'
    },

    btnFinalizar: {
        width: 134,
        height: 31,
        backgroundColor: '#015051',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 20

    },

    txtBtnFinalizar: {
        fontFamily: 'Montserrat',
        fontSize: 12,
        color: '#FFF'
    }

})
export default style
