module.exports = (roleArray) => (req, res, next) => {
    const { _id, role, accessType } = req.user;
    let authenticated;
    
    for( let i = 0;  i < roleArray.length; i++) {
        authenticated = (roleArray[i] === role) && (accessType === "auth");
        if(authenticated) {
            break;
        }
    }
    
    authenticated? next() : res.sendStatus(403);
}