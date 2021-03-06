import { StyleSheet,Dimensions } from 'react-native'
const { width, height } =Dimensions.get('window')

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    containerTop: {
        height: 200,
    },

    imgBg: {
        flex: 1,
    },

    nav: {
        flexDirection:'row',
        marginTop: 20,
        height: 44,
        alignItems:'center',
        paddingHorizontal:15,
    },

    navLeftIcon: {
        height:20,
        width:20,
    },

    navText: {
        flex:1,
        paddingHorizontal:20,
        textAlign:'left',
        color:'#fff',
        fontSize:(width < 370) ? 16 : 18,
        backgroundColor:'transparent',
    },

    postBtnText:{
        fontSize:(width < 370) ? 14 : 16,
        backgroundColor:'transparent',
        textAlign:'center',
        color:'#fff',
    },

    statusImg: {
        width: width,  
        height: 30,
    },

    statusText: {
        marginLeft: width/2-30, 
        backgroundColor: 'transparent', 
        color: 'white', 
        fontSize: (width < 370) ? 15 : 17,
    },

    titleTextFrame: {
        position: 'absolute',
        bottom: 40,
        alignItems: 'center',
        width: width,
    },

    titleText: {        
        textAlign: 'center',
        fontSize: (width < 370) ? 25 : 30,
        color: 'white',
        backgroundColor:'transparent',
    },



    item: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth:1, 
        borderBottomColor: '#e7e7e9'
    },

    itemCheckFrame: {
        width: (width < 370) ? 25 : 30, 
        height: (width < 370) ? 25 : 30, 
        borderRadius: 15, 
        marginLeft: (width < 370) ? 20 : 30,
        borderColor: '#e8e8e9', 
        borderWidth: 1.5,
    },

    itemCheckDone: {
        width: (width < 370) ? 25 : 30,
        height: (width < 370) ? 25 : 30,
        tintColor: '#50d2c2',
        marginLeft: (width < 370) ? 20 : 30,
    },

    itemText: {
        marginLeft: 16, 
        marginRight: 8, 
        marginVertical: (width < 370) ? 20 : 25, 
        fontSize: (width < 370) ? 16 : 18
    },

    skipFrame: {
        position: 'absolute', 
        bottom: 16, 
        left: 20, 
        right: 20, 
        height: 50, 
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        backgroundColor: '#f58a55',
        shadowColor: 'black',
        shadowOpacity: 0.9,
        shadowRadius: 3,
        shadowOffset: {height: 2},
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
    },

    skipIcon: {
        position: 'absolute', 
        right: 25, 
        width: 30, 
        height: 30
    },

    buttonText: {
        color: 'white', 
        fontSize: 18, 
    },

    requestFrame: {
        position: 'absolute',
        bottom: 0,
        width: width, 
        flex: 1, 
        height: (width < 370) ? 50 : 60, 
        backgroundColor: '#f58a55',
        justifyContent: 'center',
        alignItems: 'center',
    },

    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },


})