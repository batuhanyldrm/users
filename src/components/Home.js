import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

export default function Home() {
  return (
    <div style={{display:"flex", justifyContent:'space-between'}}>
        <Card sx={{ maxWidth: 345, minWidth:200 }}>
            <CardActionArea>
                <CardContent>
                <Typography gutterBottom variant="body2" component="div">
                    Students
                </Typography>
                <Typography style={{fontWeight:"bold", display:"flex", justifyContent:"end"}} variant="body1">
                243
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345, minWidth:200 }}>
            <CardActionArea>
                <CardContent>
                    <BookmarkBorderOutlinedIcon />
                    <Typography gutterBottom variant="body2" component="div">
                    Course
                    </Typography>
                    <Typography style={{fontWeight:"bold", display:"flex", justifyContent:"end"}} variant="body1">
                    13
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345, minWidth:200 }}>
            <CardActionArea>
                <CardContent>
                <LocalAtmOutlinedIcon />
                <Typography gutterBottom variant="body2" component="div">
                    Payment
                </Typography>
                <Typography style={{fontWeight:"bold", display:"flex", justifyContent:"end"}} variant="body1">
                556,000₺
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345, minWidth:200, backgroundImage: 'linear-gradient(to right, orange, yellow)' }}>
            <CardActionArea>
                <CardContent>
                <PersonOutlineOutlinedIcon/>
                <Typography gutterBottom variant="body2" component="div">
                    Users
                </Typography>
                <Typography style={{fontWeight:"bold", display:"flex", justifyContent:"end"}} variant="body1">
                3
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </div>
  );
}