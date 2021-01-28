import { makeStyles } from '@material-ui/core/styles';
import Elephant from '../../favicon.png';

const AuthStyles = makeStyles((theme) => ({
    actual_paper: {
        marginTop: theme.spacing(2),
        padding: theme.spacing(4),
        paddingTop:  0,
        minWidth: '35%',
        marginBottom: 75 + theme.spacing(2),
        [theme.breakpoints.down('xs')]: {
          marginTop: theme.spacing(0),
        }
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
        textAlign: 'center',
        color: 'white',
        margin: theme.spacing(1),
        padding: theme.spacing(1),
        [theme.breakpoints.down('xs')]: {
          padding: 0,
          margin: 2,
        }
    },
    elephant: {
        backgroundImage: `url(${Elephant})`,
        width: '90px',
        height: '90px',
        backgroundSize: '90px'
    },
    error: {
        textAlign: 'center',
        width: '100%',
        marginTop: theme.spacing(1),
        padding: theme.spacing(1),
        background: theme.palette.error.light,
        borderRadius: 4,
    },
    footer: {
        position: 'fixed',
        width: '100%',
        bottom: 0,
        height: '75px',
        backgroundColor: theme.palette.primary.light,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'darkgray',
        zIndex: 2,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
    },
    icon: {
        color: 'white',
        marginRight: 4,
        marginLeft: 4,
        '&:hover': {
            color: '#666667'
        },
        [theme.breakpoints.down('xs')]: {
          fontSize: '1.2rem',
        }
    },
    icons: {
        display: 'flex',
        justifyContent: 'space-evenly',
    },
    loraBig: {
        fontFamily: 'Lora',
        textAlign: 'left',
    },
    lora: {
        fontFamily: 'Lora',
        paddingBottom: theme.spacing(1),
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
          marginTop: theme.spacing(2),
        }
    },
    remember: {
        fontSize: '15pt',
        fontFamily: 'Lora',
        paddingBottom: theme.spacing(4),
        [theme.breakpoints.down('xs')]: {
          paddingBottom: theme.spacing(2),
        }
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
