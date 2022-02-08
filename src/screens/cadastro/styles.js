import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E5E5E5',
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 5
    },

    title: {
        marginTop: 10,
        fontFamily: 'Montserrat',
        fontSize: 28,
        marginBottom: 12
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
        marginTop: 5

    },

    categoria: {
        fontFamily: 'Montserrat',
        fontSize: 15,
        width: 70,
        height: 38

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