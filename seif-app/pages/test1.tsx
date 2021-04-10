import { Avatar, Badge, BottomNavigation, BottomNavigationAction, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Fab, Fade, IconButton, makeStyles, Menu, MenuItem, StylesProvider, Typography } from "@material-ui/core";
import MailIcon from '@material-ui/icons/Mail';
import PersonIcon from '@material-ui/icons/Person';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import NotesIcon from '@material-ui/icons/Notes';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AddIcon from '@material-ui/icons/Add';
import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";

import CourseIcon from "../icons/CourseIcon";
import PlusIcon from "../icons/PlusIcon";

const MyNavigation = styled(BottomNavigation)`
  position: fixed;
  width: 100%;
  bottom: 0px;
  height:60px;
  background-color: aliceblue;
`;

const CardStyle = styled(Card)`
  margin:20px;
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
    if (String(event.currentTarget.textContent) === '') {
      setBtnText(btnText)
    }
    else {
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

  const SVGStyle = styled.path`
    width: 100px;
    height: 100px;
  `;

  return (
    <div style={{backgroundColor:'#FFF6EF'}}>
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

          <TitleParentBadge badgeContent={1000} color="secondary">
            <IitleBadge />
          </TitleParentBadge>
        </HeaderDesign>

        <FixedAddButton color="primary" aria-label="add">
          <SVGView 
          icon={CourseIcon} 
          fill='white'
          width={20}
          height={20}/>
          
        </FixedAddButton>

        <MyNavigation value={value} onChange={handleChange}>
          <BottomNavigationAction label="●" value="recents" icon={<SVGView 
          icon={CourseIcon} 
          fill={'#FF924A'}
          width={20}
          height={20}/>} />
          <BottomNavigationAction label="Course" value="course" icon={<NotesIcon />} />
          <BottomNavigationAction label="List" value="list" icon={<AssignmentIcon />} />
          <BottomNavigationAction label="My" value="my" icon={<PersonIcon />} />
          <BottomNavigationAction label="Add" value="add" icon={<AddIcon />} />
        </MyNavigation>

      </StylesProvider>


      <SVGView 
      icon={PlusIcon} 
      width={100} 
      height={100} 
      fill={'#ffff00'}/>

        <IconButton aria-label="add to favorites">
        <SVGView 
      width={20} 
      height={20}
      icon={CourseIcon} 
      fill='#FF924A'/>
        </IconButton>

      <CardStyle>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" src="https://avatars.githubusercontent.com/u/51093294?s=60&v=4"/>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="algo2000/헬창을 위한 운동 코스"
        subheader="헬스에 죽고 헬스에 사는 1년 장기 헬창 프로젝트"
      />
      <CardMedia
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          aria-label="show more"
        >
          <MoreVertIcon />
        </IconButton>
      </CardActions>
      <Collapse  timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </CardStyle>

    </div>
  )
}

import ISVGIcon from "../interfaces/ISVGIcon";

type SVGType = {
  icon: ISVGIcon,
  width?: number,
  height?: number,
  fill? : string,
}

export const SVGView = ({
  icon,
  ...props
}: SVGType) => {

  return (
    <>
      <svg viewBox={icon.viewBox} width={props.width} height={props.height}>
        <path
          fill={props.fill}
          d={icon.d}
        />
      </svg>
    </>
  )
}

SVGView.defaultProps = {
  width: 27,
  height: 27,
  fill: "#000000",
}

export default Test1Page