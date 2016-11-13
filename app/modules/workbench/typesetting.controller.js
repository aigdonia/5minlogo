(function(){
    'use strict';
    angular.module('5minlogo')
        .controller('TypesettingController',TypesettingController);

    TypesettingController.$inject = ['$rootScope', 'LogoService'];

    function TypesettingController($rootScope, LogoService) {
        var vm = this;
        vm.weight= LogoService.getFontWeight();
        vm.styles = LogoService.getStyles();

        vm.setFontStyle = function(style) {
            $rootScope.logo.font.style = style.style;
        }

        vm.setFontWeight = function(weight){
            $rootScope.logo.font.weight = weight.style;
        }

        vm.setFontColor = function (color) {
            $rootScope.logo.font.color = color;
        }
    }
})();