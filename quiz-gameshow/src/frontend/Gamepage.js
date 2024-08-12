import {Card, CardContent, Typography} from '@mui/material';
import * as React from 'react';
import '../css/Gamepage.css';

export default function Gamepage(){

    const sample = ["First", "Second", "Third", "Fourth", "Fifth",
            "Sixth", "Seventh", "Eighth", "Ninth", "Tenth",
            "Eleventh", "Twelveth", "Thirteenth", "Fourteenth", "Fifteen",
            "Sixteenth", "Seventeenth", "Eighteenth", "Nineteenth", "Twentieth",
            "Twenty-First", "Twenty-Second", "Twenty-Third", "Twenty-Fourth", "Twenty-Fifth"
    ]

    function handleCardClick(cardData){
        console.log("Yeah Idk");
    }

    return(
        <>
            <div id="gamepageMain">
                {sample.map((data, index) => { 
                    return(
                        <Card key={index}
                            sx={{
                                m:1,
                                width:  "18%",
                                backgroundColor:'red',
                                height: 110,
                                pt:1,
                                display:'flex',
                                justifyContent:'center',
                                alignItems:'center',
                            }}
                        >
                            <CardContent sx={{textAlign:'center'}}>
                                <Typography>
                                    {data}
                                </Typography>
                            </CardContent>

                        </Card>
                    )
                })} 
            </div>
        </>
    )
}