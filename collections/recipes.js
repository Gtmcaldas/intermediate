Recipes = new Mongo.Collection('recipes');

Recipes.allow ({
	insert: function(userId, doc) {
		return !!userId;
	},
	update: function(userId, doc) {
		return !!userId;
	}
});

Ingredient = new SimpleSchema ({
	name: {
		type: String
	},
	amount: {
		type: String
	},
});

RecipesSchema = new SimpleSchema ({
	name: {
		type: String,
		label: "Nome"
	},
	desc: {
		type: String,
		label: "Descrição"
	},
	ingredients: {
		type: [Ingredient]
	},
	inMenu: {
		type: Boolean,
		defaultValue: false,
		optional: true,
		autoform: {
			type: "hidden"
		}
	},
	author: {
		type: String,
		label: "Autor",
		autoValue: function(){
			return this.userId
		},
		autoform: {
			type: "hidden"
		}
	},
	createdAt: {
		type: Date,
		label: "Criado em",
		autoValue: function() {
			return new Date()
		}
	}
});

Meteor.methods({
	toggleMenuItem: function(id, currentState) {
		Recipes.update (id, {
			$set: {
			inMenu: !currentState
			}
		});
	},
	deleteRecipe: function(id) {
		Recipes.remove(id);
	}
});

Recipes.attachSchema( RecipesSchema );