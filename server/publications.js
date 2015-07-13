// Publications are what can pushed to clients

Meteor.publish('posts', function () {
	return Posts.find();
});