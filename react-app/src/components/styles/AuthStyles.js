import { makeStyles } from '@material-ui/core/styles';
import Elephant from '../../favicon.png';

const AuthStyles = makeStyles((theme) => ({
    actual_paper: {
        position: 'absolute',
        top: '60px',
        padding: 40,
        paddingTop:  0,
        maxWidth: '35%'
    },
    appBar: {
        top: 'auto',
        bottom: 0,
        height: '75px',
        // backgroundColor: '#555555',
        backgroundColor: '#ABABAC',

        display: 'flex',
        alignItems: 'stretch',
        color: '#9a9a9a'
    },
    container: {
        display: 'flex',
        justifyContent: 'center'
    },
    create: {
        paddingLeft: 5,

    },
    create_font: {
        fontSize: '12pt',
        fontWeight: 'bold',
        color: '#4d4f4b'
    },
    dev:{
        padding: 120,
        fontFamily: 'Lora',
        fontSize: '10pt',
        // color: '#b7b7b7',
        color: 'white',

    },
    elephant: {
        backgroundImage: `url(${Elephant})`,
        width: '90px',
        height: '90px',
        backgroundSize: '90px'
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        // marginTop: theme.spacing(1),
    },
    icon: {
        color: 'white',
            '&:hover': {
                color: '#666667'
            },
        // color: '#b7b7b7',
        //     '&:hover': {
        //         color: 'white'
        //     },
        fontSize: 'large',
    },
    icons: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: 'large',
        padding: 5,
    },
    lora: {
        fontFamily: 'Lora',
        fontSize: '50px',
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    remember: {
        fontSize: '15pt',
        paddingBottom: 40,
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        fontSize: '14pt',
        textTransform: 'none',
        backgroundColor: '#79c043',
            '&:hover':{
                backgroundColor: '#477226'
            }
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'center',
    },

}));

export default AuthStyles;
