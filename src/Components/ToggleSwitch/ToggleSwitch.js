import React from 'react';
import { withStyles } from '@material-ui/core/styles';
// import { purple } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { lightTheme, darkTheme } from './Theme.js';
import { ThemeProvider } from 'styled-components';


const IOSSwitch = withStyles((theme) => ({
  root: {
    width:60,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(16px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: '#52d869',
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: '#52d869',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 24,
    height: 24,
    marginLeft:"1px"
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
//   lightTheme:{
// backgroundColor:"red",
// margint:"2px",
// padding:"20px"
//   },
//   darkTheme:{

//   },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
        // lightTheme:classes.lightTheme,
        // darkTheme:classes.darkTheme,
      }}
      {...props}
    />
  );
});


export default function CustomizedSwitches() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
  });

  const [light,setLight]=React.useState(false);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const changeTheme=()=>setLight(!light);

  return (
    <ThemeProvider theme={light?lightTheme:darkTheme}>
    <FormGroup>
 
      <FormControlLabel
        control={<IOSSwitch checked={state.checkedB} onClick={changeTheme} onChange={handleChange} name="checkedB" />}
        label=""
      />

    </FormGroup>
    </ThemeProvider>
  );
}
