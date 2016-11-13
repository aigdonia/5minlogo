(function(){
    'use strict';
    angular.module('5minlogo')
        .controller('TypographyController',TypographyController);

    TypographyController.$inject = ['$rootScope', 'LogoService'];

    function TypographyController($rootScope, LogoService) {
        var vm = this;
        vm.fonts= LogoService.getFonts();

        vm.setFontFamily = function(fontFamily) {
            $rootScope.logo.font.type = fontFamily;
        }

    }
})();