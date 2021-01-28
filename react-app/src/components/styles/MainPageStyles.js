import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  mainpageContainer: {
    display: 'flex',
    width: '100%',
  },
  main: {
    flexGrow: 1,
    width: '100%',
  },
  viewContainer: {
    display: 'flex',
    flexWrap: 'nowrap',
    width: 'calc(100% - 225px)',
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 60px)',
    },
  }
}));

export default useStyles;