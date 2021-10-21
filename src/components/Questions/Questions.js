import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Question from './Question/Question.js';
import Answer from './Question/Answer.js';
import useStyles from './styles';


const Questions = ({setCurrentId})=>{
    const questions = useSelector((state)=>state.questions)
    const classes = useStyles();
    return(
        !questions.length ? <CircularProgress/> :(
            <Grid className={classes.container}>
              {questions.map((question)=>(
                  <Grid key={question._id} item xs={12} sm={12}>
                      <Question question={question} setCurrentId={setCurrentId} />
                  </Grid> 
              ))}
            </Grid>
        )
       
    );
}

export default Questions;