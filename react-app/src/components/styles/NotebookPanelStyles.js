import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  notebookpanel: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  // notebookpanel: {
  //   backgroundColor: 'orange',
  //   flexGrow: 1,
  //   display: 'flex',
  //   flexDirection: 'column',
  //   height: '100vh',
  // },
  // nb_panel_sub: {
  //   position: 'absolute',
  //   bottom: 200,
  //   backgroundColor: 'red'
  // },
  // nb_panel_table: {
  //   position: 'relative',
  //   top: 20
  // }
}));

export default useStyles;
