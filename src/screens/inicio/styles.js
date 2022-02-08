import { StyleSheet, Dimensions } from "react-native";

const altura = Dimensions.get('screen').height

const style = StyleSheet.create({
    container: {
        height: altura,
        // flex: 1, 
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
        fontSize: 20,
        color: '#015051',
        marginBottom: 31
    },

    descricao: {

        padding: 18,
        fontFamily: 'Montserrat',
        fontSize: 15,
        color: '#9B9B9B',
        backgroundColor: '#F8F8F6', //#F8F8F6
        height: 72,
        width: 319,
        borderRadius: 14,
        marginBottom: 12

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
    menu: {
        flexDirection: 'row',
        // backgroundColor: 'blue'
        position: 'absolute',

        paddingRight: 127,
        paddingLeft: 127,

    }

})
export default style
