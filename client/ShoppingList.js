Template.ShoppingList.onCreated(function(){
    var self = this;
    self.autorun(function(){
        self.subscribe('recipes');
    });
});

Template.ShoppingList.helpers({
    ShoppingList: ()=> {
        return Recipes.find({inMenu: true});
    }
});