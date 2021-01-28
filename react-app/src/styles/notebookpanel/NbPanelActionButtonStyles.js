import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  book_icon: {
    color: '#9e9e9e',
    height: 20
  },
  down: {
    width: 20,
    color: 'gray'
  },
  heading: {
    fontWeight: 'normal',
    fontSize: 12,
    color: 'gray'
  },

  hidden: {
    visibility: "hidden"
  },

  icon_button: {
    padding: 10
  },

  menu_item: {
    fontSize: 12
  },

  more_horiz: {
    fontSize: 15,
  },

  note_icon: {
    paddingRight: 2,
    paddingLeft: 10,
    color: '#9e9e9e',
    height: 20
  },

  root: {
    "& > *": {
      borderBottom: "unset"
    }
  },

  up: {
    width: 20,
    color: 'gray'
  },

});

export default useStyles;