import {StyleSheet} from 'react-native';



export const styles = StyleSheet.create({
    center:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center'
    },
    header:{
        backgroundColor: 'white'        
    },
    height100:{
        height:'100%',
    },
    authContainer:{
        marginRight: '10%',
        marginLeft:'10%',
        justifyContent: 'center',
        height:'100%',
        width:'80%',
    },
    textinput:{
        width:'100%',
        justifyContent:'center',
        fontSize:20,
        height:40,
        borderWidth:2,
        borderRadius: 10,
        borderColor: 'black',
        padding:5
    },
    loginTextInput:{
        color:'white',
        paddingHorizontal: 20,
        paddingVertical: 15,
        fontSize:25,
        borderBottomColor: 'white',
        borderBottomWidth:1
    },
    loginButtons:{
        backgroundColor: '#e4493a',
        padding:5,
        borderRadius:10
    },
    loginButtonText:{
        fontSize: 20,
        color: 'white',
        padding:5,
    },
    loginButtonsBox:{
        flexDirection: 'row',
        marginTop: 30
    },
    marginLeft:{
        marginLeft:'10%'
    },
    dates:{
        flexDirection:'row',
    },
    datepicker:{
        width:'26%',
        justifyContent:'center',
        marginLeft: '5%',
        fontSize:12,
        height:40,
        textAlign:'center',
        borderWidth:2,
        borderRadius: 10,
        borderColor: 'black'
    },
    width80:{
        width: '80%',
        marginLeft:'10%'
    },
    row:{
        marginTop:20
    },
    textcenter:{
        textAlign:'center'
    },
    heading1:{
        fontSize:30
    },
    saa:{
        fontSize:40,
        padding: 15,
        borderRadius:15,
        overflow:'hidden'
    },
    goAddTraining:{
        marginTop: '10%',
        marginLeft: '10%',
        marginRight: '10%',
        backgroundColor: '#e4493a',
    },
    goAddTrainingText:{
       fontSize:30,
       padding: 10,
       textAlign: 'center',

    },
    


})