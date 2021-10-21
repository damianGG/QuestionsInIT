import React, { useState, useEffect } from "react";
import useStyles from './styles'
import { TextField, Button, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { createQuestion, updateQuestion } from '../../actions/questions'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Card from '@mui/material/Card';

// //draft js part
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

const Form = ({ currentId, setCurrentId }) => {


    const [editorState, setEditorState] = useState(EditorState.createEmpty())
    const [editorStateQuestion, setEditorStateQuestion] = useState(EditorState.createEmpty())

    const onEditorStateChange = (editorState) => {
        setEditorState(editorState)
    }
    const onEditorStateChangeQuestion = (editorStateQuestion) => {
        setEditorStateQuestion(editorStateQuestion)
    }

    const [questionData, setQuestionData] = useState({
        draftQuestion: {}, question: '', answer: '', draftAnswer: {}, creator: '', difficulty: '',tech:''
    });

    const question = useSelector((state) => currentId ? state.questions.find((p) => p._id === currentId) : null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if (question) setQuestionData(question)
    }, [question])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentId) {
            console.log('Should be updated')
            dispatch(updateQuestion(currentId, questionData));
            clear();
        }
        else {
            const newQuery = {
                draftQuestion: JSON.stringify(convertToRaw(editorStateQuestion.getCurrentContent())),
                question: questionData.question,
                answer: questionData.answer,
                draftAnswer: JSON.stringify(convertToRaw(editorState.getCurrentContent())),
                creator: questionData.creator,
                difficulty: questionData.difficulty,
                tech:questionData.tech,

            };
            dispatch(createQuestion(newQuery));
            console.log(newQuery)
            clear();
        }
        console.log(questionData)

    }


    const clear = () => {
        setCurrentId(0);
        setQuestionData({ draftQuestion: {}, question: '', answer: '', draftAnswer: {}, creator: '', difficulty: '',tech:'' })
    }


    return (
        <Card elevation={12} >
            <Typography
                variant="h6">{currentId ? `Editing "${question.question}"` : 'Creating a Question'}
            </Typography>
            <form autoComplete="off" noValidate
            
                onSubmit={handleSubmit}>
                {/* <Typography variant="h6">{currentId ? `Editing "${post.question}"` : 'Creating a Question'} */}

                 <TextField    
                margin="dense"
                name="question" 
                required
                variant="outlined"
                label="Question"
                fullWidth
                value={questionData.question}
                onChange={(e)=>setQuestionData({...questionData, question: e.target.value})}
            />   *
                {/* <Editor
                    editorStateQuestion={editorStateQuestion}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={onEditorStateChangeQuestion}
                /> */}
                {/* <TextField 
                multiline
                rows={20}
                margin="dense"
                name="answer" 
                variant="outlined"
                label="Answer"
                fullWidth
                value={questionData.answer}
                onChange={(e)=>setQuestionData({...questionData, answer: e.target.value})}
            />  */}
                <Editor
                    editorState={editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={onEditorStateChange}
                />
                <TextField
                    sx={{ m: 1, width: '25ch' }}
                    margin="dense"
                    name="creator"
                    variant="outlined"
                    label="Creator"
                    required
                    fullWidth
                    value={questionData.creator}
                    onChange={(e) => setQuestionData({ ...questionData, creator: e.target.value })}
                />

                <InputLabel id="demo-simple-select-label">Difficulty</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    margin="dense"
                    fullWidth
                    id="select"
                    value={questionData.difficulty}
                    label="Difficulty"
                    onChange={(e) => setQuestionData({ ...questionData, difficulty: e.target.value })}
                >
                    <MenuItem value={1}>Entry</MenuItem>
                    <MenuItem value={2}>Junior</MenuItem>
                    <MenuItem value={3}>Mid</MenuItem>
                    <MenuItem value={4}>Senior</MenuItem>
                    <MenuItem value={5}>Expert</MenuItem>
                </Select>

                <InputLabel id="select-tech">Tech</InputLabel>
                <Select
                    labelId="select-tech"
                    margin="dense"
                    fullWidth
                    id="selectTech"
                    value={questionData.tech}
                    label="Tech"
                    onChange={(e) => setQuestionData({ ...questionData, tech: e.target.value })}
                >
                    <MenuItem value={'HTML'}>HTML</MenuItem>
                    <MenuItem value={'CSS'}>CSS</MenuItem>
                    <MenuItem value={'JS'}>JS</MenuItem>
                    <MenuItem value={'React'}>React</MenuItem>
                </Select>


                <Button type="submit" onSubmit={handleSubmit}>Submit</Button>
                <Button onClick={clear}>Clear</Button>
            </form >

        </Card>
    );
};

export default Form;