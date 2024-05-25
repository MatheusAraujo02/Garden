import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        alignItems: 'center', 
        padding: 8,
        borderRadius: 10, 
        alignContent: 'center',
        borderRadius: 20,
        
    },

    fundologin: {
        width: '100%',
        borderRadius: '10%'

    },

    titulo:{ 
        alignItems: 'center', 
        textAlign: 'center',
        padding: 8,
        color: '#0F3820',
    },

    text:{
        fontSize: 15,
        color: '#fff',
        display: 'flex',
        alignContent: 'stretch',
    },

    input:{
        fontSize: 10, 
        width: '100%', 
        textAlign: 'center', 
        borderWidth: 1, 
        borderColor: '#808080',  
        padding: 5,
        
    },

    button: {
        color: '#fff',
        backgroundColor: '#074A05',
        margin: 5,
        padding: 10,
        width: '25%',
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center'
    },
    txtButton: {
        color: '#fff',
        fontSize: 10,
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        

    },

    backg: {
        width: '100%',
        height: '100%',
        zIndex: 1,
    },

    textPeq: {
        color: '#fff',
        fontSize: 6,
        textAlign: 'center'
    },
});

export default styles;