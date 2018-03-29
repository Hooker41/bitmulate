const mongoose = require('mongoose');

const {
    MONGO_URI: mongodbURI
} = process.env;

//MongoDB configuration

module.exports = (function() {
    mongoose.Promise = global.Promise;

    return {
        connect() {
            mongoose.connect(mongodbURI).then(
                ()=>{
                    console.log("Successfully connected to mongodb");
                }
            ).catch( e =>{
                console.error(e);
            });
        }
    };
})();