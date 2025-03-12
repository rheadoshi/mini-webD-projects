const url = require('../models/url')
const { nanoid } = require('nanoid')

const handleURL = async (req, res) => {
    if(!req.body || !req.body.redirectID)
        return res.status(400).json({msg:"Incomplete fields"})
    if(!req.body.shortID){
        req.body.shortID = nanoid(8)
    }
    await url.create({
        shortID: req.body.shortID,
        redirectID: req.body.redirectID,
        visitHistory: []
    })

    return res.json({shortID: req.body.shortID})
}
const getURL = async (req, res) => {
    const { shortID } = req.params;
    const foundUrl = await url.findOne({ shortID });
    if (!foundUrl) {
      return res.status(404).json({ msg: 'URL not found' });
    }
    // Optional: track visit
    foundUrl.visitHistory.push({ timeStamp: Date.now() });
    await foundUrl.save();
  
    // Redirect
    return res.redirect(foundUrl.redirectID);
}

module.exports = {
    handleURL,
    getURL
}