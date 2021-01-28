import { makeStyles } from '@material-ui/core/styles';
import { emphasize } from '@material-ui/core/styles/colorManipulator';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: '#1A1A1A',
    marginTop: 42,
    height: 60,
    width: '100%',
    maxWidth: '100%',
    minWidth: '100%',
  },
  tags: {
    flexShrink: 1,
    display: 'flex',
    alignItems: 'center',
    padding: '0 0.5em',
    overflowX: 'scroll',
    '&::-webkit-scrollbar': {
      display: 'none'
    },
  },
  tag: {
    marginLeft: '0.25em',
  },
  newTagFormBar: {
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    marginLeft: '1em',
  },
  newTagInput: {
    margin: 'auto 0.25em',
    '& .MuiOutlinedInput-root': {
      margin: 'auto 0.25em',
      '& fieldset': {
        borderColor: 'white',
        borderRadius: '20px',
      },
      '&:hover fieldset': {
        borderColor: 'green',
        borderRadius: '20px',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
        borderRadius: '20px',
      },
    },
    '& .MuiOutlinedInput-input': {
      color: 'white',
      "&::placeholder": {
        color: "lightgray"
      },
    }
  },
  addTagBtn: {
    backgroundColor: '#008F26',
    color: 'white',
    deletable: {
      '&:hover, &:focus': {
        backgroundColor: emphasize('#007E22', 0.08)
      },
      '&:active': {
        backgroundColor: emphasize('#007E22', 0.08)
      }
    },
    margin: 'auto 0',
    marginLeft: '1em',
    borderRadius: '20px'
  },
}));

export default useStyles;
