const Lunch = require('../models/lunch.model.js');

// Create and Save a new lunch
exports.create = (req, res) => {
    // Validate request
    if(!req.body) {
        return res.status(400).send({
            message: "Lunch content can not be empty"
        });
    }
    console.log(`req.body: ${JSON.stringify(req.body,null,3)}`)
    // Create a lunch
    const lunch = new Lunch(
      req.body
      // {
      //   title: req.body.title || "Untitled lunch", 
      //   content: req.body.content
      // }
    );

    // Save lunch in the database
    lunch.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the lunch."
        });
    });
};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    Lunch.find()
    .then(lunch => {
        res.send(lunch);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving lunchs."
        });
    });
};

// Find a single lunch with a lunchId
exports.findOne = (req, res) => {
  Lunch.findById(req.params.lunchId)
    .then(lunch => {
        if(!lunch) {
            return res.status(404).send({
                message: "lunch not found with id " + req.params.lunchId
            });            
        }
        res.send(lunch);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "lunch not found with id " + req.params.lunchId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving lunch with id " + req.params.lunchId
        });
    });
};

// Update a lunch identified by the lunchId in the request
exports.update = (req, res) => {
    // Validate Request
    console.log(`update*********************${JSON.stringify(req.body)}`)
    console.log(`parms**************${JSON.stringify(req.params.lunchId)}`)
    if(!req.body.address) {
        return res.status(400).send({
            message: "lunch address can not be empty"
        });
    }

    // Find lunch and update it with the request body
    Lunch.findByIdAndUpdate(req.params.lunchId, req.body,
        // title: req.body.title || "Untitled lunch",
        // content: req.body.content
     {new: true})
    .then(lunch => {
        if(!lunch) {
            return res.status(404).send({
                message: "lunch not found with id " + req.params.lunchId
            });
        }
        res.send(lunch);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "lunch not found with id " + req.params.lunchId
            });                
        }
        return res.status(500).send({
            message: "Error updating lunch with id " + req.params.lunchId
        });
    });
};

// Delete a lunch with the specified lunchId in the request
exports.delete = (req, res) => {
  Lunch.findByIdAndRemove(req.params.lunchId)
    .then(lunch => {
        if(!lunch) {
            return res.status(404).send({
                message: "lunch not found with id " + req.params.lunchId
            });
        }
        res.send({message: "Lunch deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Lunch not found with id " + req.params.lunchId
            });                
        }
        return res.status(500).send({
            message: "Could not delete lunch with id " + req.params.lunchId
        });
    });
};
