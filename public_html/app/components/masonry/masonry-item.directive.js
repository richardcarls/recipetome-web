/**
 * @namespace RecipeTome/Components/Masonry/Directive
 * @memberof RecipeTome/Components/Masonry
 * @since 0.1.0
 */
;(function(angular) {

  angular
    .module('components.masonry')
      .directive('rtMasonryItem', RTMasonryItem);

  function RTMasonryItem($timeout) {

    var directive = {
      restrict: 'A',
      link: link,
    };

    return directive;

    function link(scope, element, attrs, ctrl) {
      $timeout(function() {
        element.ready(function() {
          scope
            .$emit(attrs.rtTag || 'masonry-item-added', element, false);
        });
      });
    }

  }
})(angular);
