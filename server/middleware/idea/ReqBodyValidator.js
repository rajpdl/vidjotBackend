module.exports = (req, res, next) => {
    let errors = [],
        title = req.body.title,
        detail = req.body.detail;
    
    if(!title){
        errors.push({text: "Please enter the title..."});
    }
    if(!detail){
        errors.push({text: "Please enter the detail..."})
    }

    if(errors.length > 0) {
        return res.status(400).send(errors);
    }else {
        next();
    }
};