import "./portfolio.css";
import React from "react";
import Restorent from "./image/restorent.png";
import Bmi from "./image/bmi.png";
import dictionary from "./image/dictionary.png";
import calculator from "./image/calculator.png";
import { Link } from "react-router-dom";
import { Box, Card, CardMedia, CardContent, Typography } from "@mui/material";

function Projects() {
  return (
    <Box component="section" id="projects" sx={{ minHeight: "100vh", bgcolor:"rgb(226, 240, 241)" }}>
      <div className="card-container">
        
        <Card className="card">
          <a
            href="https://akshaykumar3112.github.io/restorent"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <CardMedia component="img" image={Restorent} alt="Restorent App" />
            <CardContent className="card-info">
              <Typography variant="h6" className="card-title" component="h2">
                Restorent App
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <b>Used Technology</b>
                <br /> React.js, Material UI, HTML, CSS
              </Typography>
            </CardContent>
          </a>
        </Card>

        <Card className="card">
          <Link to="/projects/bmicalculator" style={{ textDecoration: "none" }}>
            <CardMedia component="img" image={Bmi} alt="BMI App" />
            <CardContent className="card-info">
              <Typography variant="h6" component="h2">
                BMI Calculator
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <b>Used Technology</b>
                <br /> JavaScript, Material UI, HTML, CSS
              </Typography>
            </CardContent>
          </Link>
        </Card>

        <Card className="card">
          <Link to="/projects/dictionary" style={{ textDecoration: "none" }}>
            <CardMedia component="img" image={dictionary} alt="BMI App" />
            <CardContent className="card-info">
              <Typography variant="h6" component="h2">
                Dictionary APP
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <b>Used Technology</b>
                <br /> JavaScript, API, HTML, CSS
              </Typography>
            </CardContent>
          </Link>
        </Card>

        <Card className="card" >
          <Link to="/projects/calculator" style={{ textDecoration: "none" }}>
            <CardMedia
              component="img"
              image={calculator}
              alt="Calculator App"
            />
            <CardContent className="card-info">
              <Typography variant="h6" component="h2">
                Calculator App
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <b>Used Technology</b>
                <br /> JavaScript, HTML, CSS
              </Typography>
            </CardContent>
          </Link>
        </Card>

        {/* Repeat the same structure for other project cards */}
      </div>
    </Box>
  );
}

export default Projects;
