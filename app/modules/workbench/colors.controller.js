(function(){
    'use strict';
    angular.module('5minlogo')
        .controller('ColorController',ColorController);

    ColorController.$inject = ['$rootScope', 'LogoService'];

    function ColorController($rootScope, LogoService) {
        var vm = this;
        vm.colors= LogoService.getColorClaimThemes();
        vm.applyColor = applyColor;

        function applyColor(color) {
            $rootScope.logo.color = color;
            $rootScope.logo.font.color = '#'+color.bg;
        }

        vm.setFontColor = function (color) {
            $rootScope.logo.font.color = color;
        }

    }
})();