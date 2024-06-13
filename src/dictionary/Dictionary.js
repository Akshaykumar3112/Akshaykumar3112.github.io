import "../portfolio.css";
import { Typography, Button, Box, Paper, TextField, Card } from "@mui/material";
import React from "react";

function Dictionary() {
  const [word, setWord] = React.useState("");
  const [result, setResult] = React.useState({
    word: "",
    meaning: "",
    phonetic: "",
    partOfSpeech: "",
    audio: "",
    synonyms: "",
  });
  const [fetchCompleted, setFetchCompleted] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleFetch = () => {
    const url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + word;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) {
          const entry = data[0];
          setResult({
            word: entry.word,
            meaning: entry.meanings?.[0]?.definitions?.[0]?.definition || "No definition available",
            phonetic: entry.phonetics?.[1]?.text || "No phonetic available",
            partOfSpeech: entry.meanings?.[0]?.partOfSpeech || "No part of speech available",
            audio: entry.phonetics?.[0]?.audio || "",
            synonyms: entry.meanings?.[0]?.synonyms?.join(', ') || entry.meanings?.[1]?.synonyms?.join(', ') ||"No synonyms available",
          });
          setError("");
        } else {
          setError("Word not found");
          setResult({
            word: "",
            meaning: "",
            phonetic: "",
            partOfSpeech: "",
            audio: "",
            synonyms: "",
          });
        }
        setFetchCompleted(true);
      })
      .catch(() => {
        setError("Error fetching data");
        setFetchCompleted(true);
      });
  };

  return (
    <Paper sx={{ height: "80vh" }}>
      <Card
        sx={{
          border: "1px brown solid",
          pt: 5,
          pb: 5,
          pl: 5,
          mt: 5,
          textAlign: "left",
        }}
      >
        <Typography variant="h3" pt={5}>
          Dictionary App
        </Typography>
        <Box sx={{ pt: 5 }}>
          <TextField
            id="id-search-input"
            label="Enter word to search..."
            variant="outlined"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            size="small"
          />
          <Button onClick={handleFetch} variant="outlined" sx={{ ml: 5 }}>
            search
          </Button>
        </Box>

        {fetchCompleted && (
          <Box sx={{ mt: 5 }}>
            {error ? (
              <Typography variant="body1" color="error">
                {error}
              </Typography>
            ) : (
              <>
                {result.audio && (
                  <audio controls>
                    <source src={result.audio} type="audio/ogg" />
                  </audio>
                )}
                <Typography variant="body1">
                  <b>Word:</b> {result.word} / [{result.partOfSpeech}]
                </Typography>
                <Typography variant="body1">
                  <b>Meaning:</b> {result.meaning}
                </Typography>
                <Typography variant="body1">
                  <b>Phonetic:</b> {result.phonetic}
                </Typography>
                <Typography variant="body1">
                  <b>Synonyms:</b> {result.synonyms}
                </Typography>
              </>
            )}
          </Box>
        )}
      </Card>
    </Paper>
  );
}
export default Dictionary;
