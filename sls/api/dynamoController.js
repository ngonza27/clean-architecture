module.exports = {
  gett: function (req, res) {
    return res.status(200).json({ 
      "id": 1 , 
      "name": "nicolas" 
    });    
  }
}
