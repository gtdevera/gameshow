import {Container, FormGroup, Slider, Typography, Checkbox, FormControlLabel} from '@mui/material';
import { red, blue } from '@mui/material/colors';
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

export default function Editpage(){
    return(
        <>
            <div id="editBackground">
                <Container id="customizeAll" class="editBoxes">
                    <FormGroup sx={{width:600}}>
                        <p>
                            Number of Categories
                        </p>
                        <Slider 
                            defaultValue={5}
                            aria-label='Temperature'
                            valueLabelDisplay='on'
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
                            defaultValue={5}
                            aria-label='Temperature'
                            valueLabelDisplay='on'
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
                    </FormGroup>
                </Container>
                <Container id="textBoxes" class="editBoxes">
                    <Typography>
                        THERE WILL BE BOXES TO INPUT FOR YOUR ANSWERS 
                    </Typography>
                </Container>
            </div>
        </>
    )
}