module.exports = {
    messageCheck: function(message, value){
        return message.toLowerCase().split(' ').includes(value.toLowerCase());
    }
}