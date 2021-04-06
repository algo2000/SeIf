import { Badge, BottomNavigation, BottomNavigationAction, Button, Fab, Fade, makeStyles, Menu, MenuItem, StylesProvider } from "@material-ui/core";
import MailIcon from '@material-ui/icons/Mail';
import PersonIcon from '@material-ui/icons/Person';
import HomeIcon from '@material-ui/icons/Home';
import NotesIcon from '@material-ui/icons/Notes';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AddIcon from '@material-ui/icons/Add';
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
  height:60px;
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
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    if(String(event.currentTarget.textContent) === '') {
      setBtnText(btnText)
    }
    else
    {
      setBtnText(String(event.currentTarget.textContent)); 
    }
    setAnchorEl(null);
  };

  const HeaderDesign = styled.div`
    width: 100%;
    height: 250px;
    background-color: #ffa12d;
  `;

  const TitleButton = styled(Button)`
    color: white;
    float: left;
    margin: 20px;
    font-size: 16pt;
  `;

  const IitleBadge = styled(MailIcon)`
    fill: white;
  `;
  const TitleParentBadge = styled(Badge)`
    float: right;
    margin: 20px;
  `;

  const FixedAddButton = styled(Fab)`
    position: sticky;
    bottom: 70px;
    width: 50px;
    height: 50px;
    margin: 10px;
    float: right;
  `;

  return (
    <>
      <StylesProvider injectFirst>
        <HeaderDesign>
          <TitleButton aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
            {btnText}
          </TitleButton>
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
        
          <TitleParentBadge badgeContent={4} color="secondary">
            <IitleBadge />
          </TitleParentBadge>
        </HeaderDesign>

        <FixedAddButton color="primary" aria-label="add">
          <AddIcon />
        </FixedAddButton>

        <MyNavigation value={value} onChange={handleChange}>
          <BottomNavigationAction label="Home" value="recents" icon={<HomeIcon />} />
          <BottomNavigationAction label="Course" value="course" icon={<NotesIcon />} />
          <BottomNavigationAction label="List" value="list" icon={<AssignmentIcon />} />
          <BottomNavigationAction label="My" value="my" icon={<PersonIcon />} />
          <BottomNavigationAction label="Add" value="add" icon={<AddIcon />} />
        </MyNavigation>
      
      </StylesProvider>
    </>
  )
}

export default Test1Page