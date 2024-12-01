const router = require("express").Router();
const Quiz = require("../models/Quiz");

router.get('/', async (req, res) => {
    try {
        const result = await Quiz.find();
        res.json(result);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
router.post("/", async (req, res) => {
    try {
        const result = await Quiz.create(req.body);
        console.log(result);
        res.status(201).json(result);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const result = await Quiz.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        );
        res.json(result);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
      const result = await Quiz.findOneAndDelete({ _id: req.params.id });
      
      if (!result) {
        return res.status(404).json({ message: "quiz not found" });
      }
      
      res.status(200).json({ message: "quiz deleted successfully" });
    } catch (err) {
      console.error("Error deleting quiz:", err);
      res.status(500).json({ message: "Server error while deleting quiz" });
    }
  });
  
module.exports = router;