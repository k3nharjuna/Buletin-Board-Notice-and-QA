const errorHandler = function (err, req, res, next) {

    switch (err.name) {
      case "customError":
        return res.status(err.status).json({
          message: err.msg
        })
        break;
      
      default:
        return res.status(500).json({ message: "Internal Server error"})
        break;
    }
  }
  
  module.exports = errorHandler