import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './navbar.css'
import Paper from '@mui/material/Paper';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Slider from '@mui/material/Slider';


export default function Navbar() {


  const [tech, setTech] = React.useState('');
  const [level, setLevel] = React.useState('');

  const handleChange = (event) => {
    setTech(event.target.value);
  };

  const handleChangeLevel = (event) => {
    setLevel(event.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" id="appbar" color="primary">
        <Toolbar>
          <Typography id="logotext" variant="h6" component="div" color="black" sx={{ flexGrow: 1 }}>
            Questions in IT
          </Typography>
          <Button id="buttonSignIn" variant="contained">
            Sign in
            </Button>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon id="menuIcon" />
          </IconButton>
        </Toolbar>
        <Toolbar className="header-select">
            <FormControl className="formControlTech" variant="standard" sx={{ m: 1, minWidth: 120 }} >
            <InputLabel id="select-label-level-tech">Tech</InputLabel>
                <Select
                    labelId="select-label-level-tech"
                    id="select-label-level-tech"
                    value={tech}
                    label="Tech"
                    onChange={handleChange}
                    >
                    <MenuItem value="">
                         <em>None</em>
                    </MenuItem>
                    <MenuItem value={"CSS"}>CSS</MenuItem>
                    <MenuItem value={"HTML"}>HTML</MenuItem>
                    <MenuItem value={"JS"}>JS</MenuItem>
                    <MenuItem value={"React"}>React</MenuItem>
                </Select>
             </FormControl>
             <FormControl className="formControlTech" variant="standard" sx={{ m: 1, minWidth: 120 }} >
            <InputLabel id="select-label-level">Level</InputLabel>
                <Select
                    labelId="select-label-level"
                    id="select-label-level"
                    value={level}
                    label="Level"
                    onChange={handleChangeLevel}          
                    >
                    <MenuItem value="">
                         <em>None</em>
                    </MenuItem>
                    <MenuItem value={"Entry"}>Entry</MenuItem>
                    <MenuItem value={"Junior"}>Junior</MenuItem>
                    <MenuItem value={"Mid"}>Mid</MenuItem>
                    <MenuItem value={"Senior"}>Senior</MenuItem>
                    <MenuItem value={"Expert"}>Expert</MenuItem>
                </Select>
             </FormControl>
        </Toolbar>
      </AppBar>
      <Paper elevation={3} />
    </Box>
  );
}