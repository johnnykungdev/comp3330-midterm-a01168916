const express = require("express");
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
const mongoClient = require("./mongoDb");
const Logger = require("./loggerMiddleware");

const port = process.env.PORT || 8000;
const logger = new Logger();
const db = mongoClient.db("comp3330");
const collection = db.collection("schedule");

const { ObjectId, ObjectID } = require("mongodb");

app.use(logger.print);

app.get("/", async (req, res) => {
    res.send(`go to "/schedule" to see all schedule`);
})

app.get("/schedule", async (req, res) => {
    try {
        const result = await collection.find().toArray();
        res.status(200).send(result);
    } catch(error) {
        res.status(500).send({
            message: `${error}`
        })
    }
});

app.get("/schedule/:id", async (req, res) => {
    try {
        const query = { _id: req.params.id };
        console.log(query);
        const updatedData = await collection.findOne(query);
        res.status(200).send(updatedData);
    } catch(error) {
        res.status(500).send({
            message: `${error}`
        })
    }
})

app.patch("/schedule/:id", async (req, res) => {
    try {
        const query = { _id: ObjectId(req.params.id) };
        const newValues = { $set: req.body };
        await collection.updateOne(query, newValues);
        console.log(query);
        const updatedData = await collection.findOne(query);
        res.status(200).send(updatedData);
    } catch(error) {
        res.status(500).send({
            message: `${error}`
        })
    }
});

app.post("/schedule", async (req, res) => {
    try {
        const newSchedule = req.body;
        console.log(newSchedule);
        await collection.insertOne(newSchedule);
        res.status(200).send(newSchedule);
    } catch(error) {
        res.status(500).send({
            message: `${error}`
        })
    }
});

app.delete("/schedule/:id", async (req, res) => {
    try {
        await collection.deleteOne({
            _id: ObjectId(req.params.id)
        });
        res.status(200).send({
            _id: req.params.id,
            message: "Data deleted successfully"
        });
    } catch(error) {
        res.status(500).send({
            message: `${error}`
        })
    }
})

app.listen(port, async () => {
    console.log(`app is listening on ${port}`);
    await mongoClient.connect();
});
