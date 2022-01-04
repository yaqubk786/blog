// for sending
export const getPost = async (req, res) => {
    try {
    res.status(200).json("hello world, api sending data");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};