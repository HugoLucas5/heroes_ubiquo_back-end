const mongoose = require('mongoose');
require('dotenv').config({
    path: 'development.env',
});

// DB connection (local or remote)
// const STR_DB_CONNECT = `mongodb://${process.env.LOCAL_DB_HOST}:${process.env.LOCAL_DB_PORT}/${process.env.LOCAL_DB_NAME}?retryWrites=true&w=majority`;
const STR_DB_CONNECT = `mongodb+srv://${process.env.REMOTE_DB_USER}:${process.env.REMOTE_DB_PASS}@${process.env.REMOTE_DB_HOST}/${process.env.REMOTE_DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(STR_DB_CONNECT, {
    useNewUrlParser: true,
    // For remove the following warning::
    // "DeprecationWarning: current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version. To use the new Server Discover and Monitoring engine, pass option { useUnifiedTopology: true } to the MongoClient constructor."
    useUnifiedTopology: true,
    // For remove the following warning::
    // "DeprecationWarning: Mongoose: `findOneAndUpdate()` and `findOneAndDelete()` without the `useFindAndModify` option set to false are deprecated. See: https://mongoosejs.com/docs/deprecations.html#findandmodify"
    useFindAndModify: false,
    // For remove the following warning::
    // "DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead." See https://stackoverflow.com/a/51962721
    useCreateIndex: true,
}).then(() => {
    console.log('*** DB connected ***');
}).catch(error => {
    console.log('>>>> config.db.mongoose.connection: error=', error);
});