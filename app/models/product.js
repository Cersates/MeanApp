var mongoose = require('mongoose');

module.exports = mongoose.model('categories', {
    title: String
});