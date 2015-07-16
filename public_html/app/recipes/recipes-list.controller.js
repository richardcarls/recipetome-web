/**
 * Recipe Tome recipes add view controller
 * @namespace RecipeTome/Recipes/List/Controller
 * @memberof RecipeTome/Recipes/List
 */
;(function(angular) {

  angular
    .module('recipetome.recipes')
      .controller('RecipesListController', RecipesListController);

  function RecipesListController(recipes, categories) {
    var vm = this;

    vm.recipes = recipes;
    vm.filter = filter;

    vm.categories = categories;

    function filter() {
      if (vm.categoryFilter) {
        return { category: { slug: vm.categoryFilter, }, };
      }

      return '';
    }

  }

})(angular);