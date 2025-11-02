import express from "express"

const app = express()

// Request-Response Cycle: Client (Customer) => API (Waiter) => Server (Kitchen) and back.
// Function: The API is the messenger that routes the request and delivers the processed response (data).
// Security: The API prevents the client from directly accessing or damaging the secure backend (kitchen/database).


app.get("/api/notes", (req, res) => {
   res.status(200).send("you got 5 notes")
})

app.post("/api/notes", (req, res) => {
   res.status(201).json({ message: "Note created successfully!"})
})

app.put("/api/notes", (req, res) => {
   res.status(200).json({ message: "Note updated successfully!"})
})

app.delete("/api/notes", (req, res) => {
   res.status(201).json({ message: "Note deleted successfully!"})
})

// Activate server
app.listen(5001, () => {
   console.log("Server started on PORT: 5001")
})
