import "../css/Homepage.css";
import {Card, CardActionArea, Typography} from '@mui/material';
import { useNavigate } from "react-router-dom";


export default function Homepage(){
    const navigate = useNavigate();

    function handleEditChoice(){
        navigate('/editpage');
    }
    
    function handlePlayChoice(){
        navigate('/gamepage');
    }

    return(
        <>
            <div id="homepageBackground">
                    <div id="choices">
                        <Card id="editCard" class="choiceCards">
                            <CardActionArea onClick={() => handleEditChoice()}>
                                <Typography class="choiceText">
                                    EDIT GAME
                                </Typography>
                            </CardActionArea>
                        </Card>
                        <Card id="playCard" class="choiceCards">
                            <CardActionArea onClick={() => handlePlayChoice()}>
                                <Typography class="choiceText">
                                    PLAY
                                </Typography>
                            </CardActionArea>
                        </Card>
                    </div>
            </div>
        </>
    )
}