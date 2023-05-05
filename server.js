const express = require("express");
const port = 5000;

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the randomIdeas API" });
});

// Get all Ideas
app.get("/api/ideas", (req, res) => {
  res.json({ success: true, data: ideas });
});

// Get Idea of a specific id
app.get("/api/ideas/:id", (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id);

  if (!idea) {
    return res.status(404).json({
      success: false,
      error: "Resource Not Found",
    });
  }

  res.json({ success: true, data: idea });
});

app.listen(port, () => console.log(`Server Listening on port: ${port}`));

const ideas = [
  {
    id: 1,
    text: "Positive news letter, a news letter that only shares positive, uplifting news",
    tag: "Technology",
    username: "TonayStark",
    date: "2022-01-02",
  },
  {
    id: 2,
    text: "Milk Cartons that turn a different color the older that your milk is getting",
    tag: "Iventions",
    username: "SteveRogers",
    date: "2022-01-02",
  },
];
