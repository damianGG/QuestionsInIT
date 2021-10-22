import React from 'react';
import { Button, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux';
import { deleteQuestion, likeQuestion, disLikeQuestion } from '../../../actions/questions.js';


import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Editor, EditorState, convertFromRaw } from 'draft-js';
import './styles.css';

import draftToHtml from 'draftjs-to-html';


const Question = ({ question, setCurrentId }) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = React.useState(false);

  const contentState = convertFromRaw(JSON.parse(question.draftAnswer));
  const editorState = EditorState.createWithContent(contentState);


  return (
    <Accordion className="accordion">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Grid container spacing={1}>
          <Grid item xs={12} align="center">
            <Rating size="small" name="read-only" value={question.difficulty} readOnly />
            <Button size="small" color="primary" onClick={() => dispatch(deleteQuestion(question._id))}>
              <DeleteIcon fontSize="small" />
            </Button>
            <Button size="small" onClick={() => setCurrentId(question._id)}>
              <EditIcon fontSize="small" />
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" align="center"> {question.question} </Typography>
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails className="accordionOpened">
        <Editor editorState={editorState} readOnly={true} />
      </AccordionDetails>
    </Accordion>


  )
}

export default Question;