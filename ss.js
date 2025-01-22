const express = require("express");
const app = express();
const db = require('./db')

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const Person = require('./models/person')
const Menu = require('./models/menu')

app.get('/', function (req, res) {
    res.send("Welcome to hotel starvilla _____  How can i help you?");
});

app.post('/person', async(req, res) => {
    try{
        const data = req.body
        const newPerson = new Person(data);

        const response = await newPerson.save();
        console.log("your data is saved");
        res.status(200).json(response);
    }
    catch(error){
        console.log("data not saved",error);
        res.status(500).json({error : "internal server error"});
    }
})

app.get('/person', async (req, res) => {
    try {
        const people = await Person.find();
        res.status(200).json(people);
    } catch (error) {
        console.log("Error fetching data", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.post('/menu', async(req, res) => {
    try{
        const data = req.body
        const newMenu = new Menu(data);

        const response = await newMenu.save();
        console.log("your data is saved");
        res.status(200).json(response);
    }

    catch(error){
        console.log("data not saved",error);
        res.status(500).json({error : "internal server error"});
    }
})

app.get('/menu', async (req, res) => {
    try {
        const menus = await Menu.find();
        res.status(200).json(menus);
    } catch (error) {
        console.log("Error fetching data", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.get('/person/:work', async (req, res) => {
    try {
        const workType = req.params.work;
        if(workType =='chef'|| workType =='Student'|| workType =='Employee'){
        const response = await Person.find({work: workType});
        res.status(200).json (response);
        console.log("data fetched");
        }
        else{
            res.status(404).json({error : "Invalid work type"});
        }
    } catch (error) {
        console.log("Error fetching person", error);
        res.status(500).json({ error: "Internal server error" });
    }   
});



app.listen(3000, () => (
    console.log("server is running on port 3000")
));