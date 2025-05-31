import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";


const yourUsername = "banana";
const yourPassword = "portokali";
const yourAPIKey = "56297603-716f-4ad7-b9f4-7efe8246172e";
const yourBearerToken = "b4cefbf7-6567-4344-873f-35455208a037";


app.set("view engine", "ejs"); // χωρίς .ejs
app.set("views", "./views");   // (default είναι ./views

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth",async (req, res) => {
  try {  
  const result = await axios.get(API_URL+"/random");  // axios για να πάρουμε τα δεδομένα από το /random endpoint
  const content = JSON.stringify(result.data); // Μετατρέπουμε το αντικείμενο JSON που πήραμε σε string
  res.render("index.ejs",{content});
 } catch (error) {
 res.status(404).send(error.message);
 }
});

app.get("/basicAuth",async (req, res) => {
  try {
    const result = await axios.get(API_URL+"/all?page=2",{   // Write your code here to hit up the /all endpoint
    //Specify that you only want the secrets from page 2
    
    
      auth: {       //HINT: This is how you can use axios to do basic auth:
// https://stackoverflow.com/a/74632908
        username: yourUsername,
        password: yourPassword,
      },
    });
    const content = JSON.stringify(result.data);
    res.render("index.ejs",{content});
    
    
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.get("/apiKey", async (req, res) => {
  try {
    const result = await axios.get(API_URL+"/filter",{//TODO 4: Write your code here to hit up the /filter endpoint
      params:{
        score:5,//Filter for all secrets with an embarassment score of 5 or greater
        apiKey:yourAPIKey//HINT: You need to provide a query parameter of apiKey in the request.
      }
    });
    const content = JSON.stringify(result.data);
    res.render("index.ejs",{content})
  } catch (error) {
    res.status(404).send(error.message); 
  }  
});

const config = {headers:{Authorization: `Bearer ${yourBearerToken}`}}

app.get("/bearerToken", async (req, res) => {
  try {
    const result = await axios.get(API_URL+"/secrets/2",config); //TODO 5: Write your code here to hit up the /secrets/{id} endpoint and get the secret with id of 42
    const content = JSON.stringify(result.data);
    res.render("index.ejs",{content});
  } catch (error) {
    res.status(404).send(error.message);
  } 
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
