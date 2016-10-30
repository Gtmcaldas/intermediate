Meteor.subscribe('recipes');

if (Meteor.settings && Meteor.settings.public && Meteor.settings.public.ga && Meteor.settings.public.ga.account) {
	console.log(Meteor.settings.public.ga.account);
}