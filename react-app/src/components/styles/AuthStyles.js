import { makeStyles } from '@material-ui/core/styles';
import Elephant from '../../favicon.png';

const AuthStyles = makeStyles((theme) => ({
    actual_paper: {
        position: 'absolute',
        top: '60px',
        padding: 40,
        paddingTop:  0,
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
        // color: 'gray',
        fontWeight: 'bold',
        color: '#4d4f4b'
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
    lora: {
        fontFamily: 'Lora',
        fontSize: '50px',
        paddingBottom: 10
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    remember: {
        fontSize: '15pt'
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
}));

export default AuthStyles;
