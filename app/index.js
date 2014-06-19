var $ = require('jquery');

var channelsTemplate = require('./templates/channels.hbs');
var messagesTemplate = require('./templates/messages.hbs');
var usersTemplate = require('./templates/users.hbs');
var messageTemplate = require('./templates/message.hbs');

$(function(){
	$('#channels').html( channelsTemplate({}) );
	$('#messages').html( messagesTemplate({}) );
	$('#users').html( usersTemplate({}) );
	$('#message').html( messageTemplate({}) );
});