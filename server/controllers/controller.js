import {
  bollywood,
  technology,
  hollywood,
  fitness,
  food,
} from "../fakedata.js";

// for sending
export const getPost = async (req, res) => {
  try {
    res.status(200).json(bollywood);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// for handling category
export const getCategory = async (req, res) => {
  let result = [];
  const { category } = req.body;

  if (category == "bollywood") {
    result = bollywood;
  } else if (category == "hollywood") {
    result = hollywood;
  } else if (category == "technology") {
    result = technology;
  } else if (category == "fitness") {
    result = fitness;
  } else if (category == "food") {
    result = food;
  }
  try {
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
