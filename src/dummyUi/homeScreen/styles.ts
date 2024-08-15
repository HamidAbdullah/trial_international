import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingVertical: 20,
        // paddingHorizontal:10,
        backgroundColor: '#f9f9f9',
    },
    buttonContainer: {
        // backgroundColor: 'red',
        paddingVertical: 40,
        paddingHorizontal:10
    },
    header: {
        paddingVertical: 15,
        justifyContent: 'center',
        // borderRightColor:'#ffffff10'
        // backgroundColor: 'red',

    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E0E0E0',
        padding: 15,
        borderRadius: 5,
        marginVertical: 5,
    },
    firstButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1160AA',
        padding: 15,
        borderRadius: 5,
        marginVertical: 5,
    },
    icon: {
        marginRight: 10,
    },
    label: {
        fontSize: 16,
    },
    headerText: {
        fontSize: 18,
        color: '#000',
        marginLeft: 10,
        fontWeight: 'bold',
    }
});