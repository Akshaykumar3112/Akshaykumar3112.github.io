import "../portfolio.css"
import { Typography, Button, Box, Paper, TextField, Card } from "@mui/material";
import React from "react";
function Dictionary(){

    const[word, setWord] = React.useState("");
    const [result, setResult] = React.useState({
        meaning: "",
        phonetic: "",
        partOfSpeech: "",
        audio:""
        
    });
    const [fetchCompleted, setFetchCompleted] = React.useState(false);
    
    const handleFetch = () => {
        const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + word;
        fetch(url)
        .then(res =>{
            console.log("res:::", res);
            return res.json();
        })
        .then(data=>{

            console.log("data:::", data);
            setResult({
                meaning:data[0].meanings[0].definitions[0].definition,
                phonetic: data[0].phonetics[1].text,
                partOfSpeech: data[0].meanings[0].partOfSpeech,
                audio: data[0].phonetics[0].audio,

            });
            setFetchCompleted(true);
        });
       
    };
    
    
    
    return(
        <Paper sx={{height:"80vh"}}>  
            <Card sx={{border:"1px brown solid", pt:5 , pb:5, pl:5,mt:5, textAlign:"left" }}>
            <Typography variant="h3" pt={5}>Dictionary App
            </Typography>
            <Box sx={{pt:5}}>
                
                <TextField 
                    id="id-search-input"
                    label = "Enter word to search..."
                    varient = "outlined"
                    value={word}
                    onChange={(e) => setWord(e.target.value)}
                    size="small"
                />
                <Button onClick={handleFetch} variant="outlined" sx={{ml: 5}}>  search </Button>
            </Box>

            {fetchCompleted && (
                <Box sx={{mt:5}}>
                    <audio controls>
                        <source src={result.audio} type="audio/ogg"/>     
                    </audio>
                    <Typography variant="body1">Word: {word} / [{result.partOfSpeech}]
                    </Typography> 
                    <Typography variant="body1"> Meaning: {result.meaning} 
                    </Typography>
                    <Typography variant="body1"> Phonetic: {result.phonetic} 
                    </Typography>
                </Box>
           
            )}
            </Card> 
        </Paper>
    );
} 
export default Dictionary;