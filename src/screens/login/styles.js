import { StyleSheet } from "react-native";
const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E5E5E5' 
    },

    input: {
        fontFamily: 'Montserrat',
        fontSize: 16,
        color: '#9B9B9B',
        width: 351,
        height: 45,
        marginBottom: 15,
        backgroundColor: '#FFF',
        borderRadius: 10,
        paddingLeft: 43,
        marginTop: 10

    },

    btnLogin: {
        width: 344,
        height: 45,
        backgroundColor: '#835FAB',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 20

    },
    txtBtnLogin: {
        fontFamily: 'Montserrat',
        fontSize: 16,
        color: '#FFF'
    },

    registration: {
        marginTop: 35,
        fontFamily: 'Montserrat',
        color: '#555'
    },

    btnCadastrar: {
        width: 344,
        height: 45,
        backgroundColor: '#015051',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 20

    },

    txtBtnCadastrar: {
        fontFamily: 'Montserrat',
        fontSize: 16,
        color: '#FFF'
    }

})
export default style
