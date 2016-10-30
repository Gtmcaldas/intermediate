Recipes = new Mongo.Collection('recipes');

Recipes.allow ({
	insert: function(userId, dic) {
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
	Desc: {
		type: String,
		label: "Descrição"
	},
	ingredients: {
		type: [Ingredient]
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

Recipes.attachSchema( RecipesSchema );