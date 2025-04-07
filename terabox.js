module.exports = (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: "No URL provided" });
  }

  res.status(200).json({
    message: "TeraBox API working!",
    your_url: url
  });
};