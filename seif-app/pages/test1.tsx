import { Badge, BottomNavigation, BottomNavigationAction, Button, Fade, makeStyles, Menu, MenuItem, StylesProvider } from "@material-ui/core";
import MailIcon from '@material-ui/icons/Mail';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";

const MyButton = styled(Button)`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  border: 0;
  border-radius: 3px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
  color: white;
  height: 48px;
  padding: 0 30px;
`;

const MyNavigation = styled(BottomNavigation)`
  position: fixed;
  width: 100%;
  bottom: 0px;
  background-color: aliceblue;
`;

const Test1Page = () => {

  const [value, setValue] = useState<string>('recents');

  const handleChange = (event: ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  const [btnText, setBtnText] = useState<string>('Today')

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    console.log(event.currentTarget);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    setBtnText(String(event.currentTarget.textContent));
    setAnchorEl(null);
  };


  return (
    <>
      <StylesProvider injectFirst>
        <div>
          <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
            {btnText}
          </Button>
          <Menu
            id="fade-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={handleClose}>Today</MenuItem>
            <MenuItem onClick={handleClose}>Schedule</MenuItem>
            <MenuItem onClick={handleClose}>Close</MenuItem>
          </Menu>
        
          <Badge badgeContent={4} color="primary">
            <MailIcon />
          </Badge>
        </div>
        <MyNavigation value={value} onChange={handleChange}>
          <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
          <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
        </MyNavigation>
      
      </StylesProvider>
    </>
  )
}

export default Test1Page