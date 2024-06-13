import "./portfolio.css";
import image from "./image/aaaa.jpg";
import {
  Card,
  CardMedia,
  Box,
  CardContent,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

function Home() {
  return (
    <Box
      className="home"
      sx={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "linear-gradient(to right, #1c1c1c, #333333)",
        textAlign: "center",
        flexDirection: "row",
        padding: "20px",
        "@media (max-width:600px)": {
          ml: 0,
          alignItems: "center",
          textAlign: "center",
          flexDirection: "column-reverse",
          padding: "10px",
        },
      }}
    >
      

      <Card
        sx={{
          maxWidth: 650,
          bgcolor: "rgb(226, 240, 241)",
          color: "white",
          boxShadow: 3,
          padding: "20px",
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.05)",
          },
          "@media (max-width:600px)": {
            maxWidth: 350,
            ml: 0,
          },
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            textAlign="center"
            color="black"
            sx={{
              mb: 3,
              fontWeight: "bold",
              fontFamily: "Roboto, sans-serif",
            }}
          >
            Hi, I Am Akshay Kumar Kajavadara
          </Typography>

          <Typography
            variant="h6"
            textAlign="center"
            color="black"
            sx={{
              my: 6,
              fontFamily: "Roboto, sans-serif",
            }}
          >
            A recent Information Technology graduate with a focus on web
            development and database management. Eager to apply my skills and
            contribute to innovative projects while continuously learning and
            growing in a collaborative environment.
          </Typography>
          
            <Button
              variant="contained"
              sx={{
                bgcolor: "black",
                color: "goldenrod",
                mt: 3,
                fontWeight: "bold",
                "&:hover": {
                  bgcolor: "goldenrod",
                  color:'black',
                  transform: "scale(1.1)",
                },
              }}
            >
                <a
            href="https://drive.google.com/file/d/1iW62wfjlfzWdCBET7rpZAxoaEEwvfRU7/view?usp=drive_link"
            
            style={{ textDecoration: "none", color: "inherit" }}
          >
              View Resume
              </a>
            </Button>
          

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 3,
            }}
          >
            <IconButton
              href="https://linkedin.com/in/akshaykumar-kajavadara"
              target="_blank"
            >
              <LinkedInIcon sx={{color:"black", fontSize: '3rem',}} />
            </IconButton>
            <IconButton
              href="https://github.com/Akshaykumar3112"
              target="_blank"
            >
              <GitHubIcon sx={{color:"black", fontSize: '3rem',}} />
            </IconButton>
            <IconButton
              href="mailto:Akshaykajavadara1998@gmail.com"
            >
              <EmailIcon sx={{color:"black", fontSize: '3rem',}} />
            </IconButton>
          </Box>
        </CardContent>
      </Card>

      <Card
        sx={{
          maxWidth: 365,
          my: 5,
          ml: 10,
          boxShadow: 3,
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.05)",
          },
          "@media (max-width:600px)": {
            maxWidth: 300,
            ml: 0,
          },
        }}
      >
        <CardMedia
          component="img"
          image={image}
          alt="Akshay"
          sx={{
            borderRadius: "10px",
          }}
        />
      </Card>
    </Box>
  );
}

export default Home;
