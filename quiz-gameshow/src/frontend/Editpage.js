import {Container, FormGroup, Slider, Checkbox, FormControlLabel, Button, ToggleButton, ToggleButtonGroup, TextField, SpeedDial, SpeedDialIcon, SpeedDialAction} from '@mui/material';
import {blue } from '@mui/material/colors';
import { useState } from 'react';
import '../css/Editpage.css'

const categoryMarks = [
    {
        value: 2,
        label: '2 categories'
    },
    {
        value: 10,
        label: '10 categories'
    }
]

const questionMarks = [
    {
        value: 3,
        label: '3 questions'
    },
    {
        value: 10,
        label: '10 questions'
    }
]

const tempCategories = [
    {name: 'Space', icon: '1'},
    {name: 'History', icon: '2'},
    {name: 'Misc', icon: '3'},
    {name: 'Psyche', icon: '4'}
]

export default function Editpage(){

    const [categoryNum, setCategoryNum] = useState(5);
    const [questionNum, setQuestionNum] = useState(5);
    const [questionType, setQuestionType] = useState("multiple-choice");

    const handleCategoryChange = (event, newNumber) => {
        setCategoryNum(newNumber);
    }

    const handleQuestionNumChange = (event, newQuestionNumber) => {
        setQuestionNum(newQuestionNumber);
    }

    const handleQuestionTypeChange = (event, newQuestionType) =>{
        setQuestionType(newQuestionType);
    }

    const shoutout = () => {
        console.log("The number of categories is " + categoryNum);
        console.log("The number of questions is: " + questionNum);
        console.log("The type of question is: " + questionType);
    }

    return(
        <>
            <div id="editBackground">
                <Container id="customizeAll" class="editBoxes">
                    <FormGroup sx={{width:600}}>
                        <p>
                            Number of Categories
                        </p>
                        <Slider 
                            value={categoryNum}
                            aria-label='Temperature'
                            valueLabelDisplay='on'
                            onChange={handleCategoryChange}
                            step={1}
                            marks = {categoryMarks}
                            min={2}
                            max={10}
                        />
                        <p>

                        </p>
                        <br/>
                        <p>
                            Number of Questions per Category
                        </p>
                        <Slider
                            value={questionNum}
                            aria-label='Temperature'
                            valueLabelDisplay='on'
                            onChange={handleQuestionNumChange}
                            step={1}
                            marks = {questionMarks}
                            min={3}
                            max={10}
                        />

                        <FormControlLabel 
                        control={<Checkbox/>} 
                        sx={{color: blue[800]}}
                        class="selectLabels"
                        label="Daily Doubles?"/>

                        <FormControlLabel 
                        control={<Checkbox/>} 
                        sx={{color: blue[800]}}
                        class="selectLabels"
                        label="Final Jeoprady?"/>

                        <ToggleButtonGroup
                            exclusive
                            value={questionType}
                            onChange={handleQuestionTypeChange}
                            >
                                <ToggleButton value="multiple-choice">
                                    Multiple Choice
                                </ToggleButton>
                                <ToggleButton value="flip-answer">
                                    Flip Answer
                                </ToggleButton>
                        </ToggleButtonGroup>
                    </FormGroup>
                    <Button
                        onClick={shoutout}
                    >
                        HERE
                    </Button>
                </Container>
                <Container id="textBoxes" class="editBoxes">
                    {questionType === "flip-answer" ? (
                        <>
                        <SpeedDial
                            style={{position:'absolute', top:50, right:520}}
                            direction='down'
                            icon={<SpeedDialIcon/>}
                            ariaLabel="Example"
                        >
                            {tempCategories.map((category) => (
                                <SpeedDialAction
                                    key={category.name}
                                    icon={category.icon}
                                    tooltipTitle={category.name}
                                />
                            ))}

                        </SpeedDial>
                        {Array.from({length: questionNum}, (_, index) =>(
                            <div 
                                style={{
                                    display:'flex',
                                    width:'500px',
                                }}
                            >
                                <TextField
                                    key={index}
                                    className='flipBoxes'
                                    label="Enter Question"
                                    style={{
                                        marginRight:'10px',
                                        marginBottom:'10px',
                                    }}
                                    multiline
                                >
                                </TextField>
                                <TextField
                                    label="Enter Answer"
                                    className='flipBoxes'
                                    multiline
                                >
                                </TextField>
                            </div>
                        ))}
                    </>
                        )
                        :
                        (
                                <>
                                    Yeah idk
                                </>
                        )
                    }
                </Container>
            </div>
        </>
    )
}