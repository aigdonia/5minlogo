(function(){
    'use strict';
    angular.module('5minlogo')
        .controller('PreviewController', PreviewController);

    PreviewController.$inject = ['$rootScope', 'LogoService'];

    function PreviewController($rootScope, LogoService) {
        $rootScope.logo = LogoService.getDefaultConfig();
        $rootScope.logo.text = 'BowTie';

        var vm = this;
        vm.layouts = LogoService.getLogoLayouts();
        vm.iconStyle = {
            'color' : '#'+$rootScope.logo.textColor,
            'background-color' : '#'+$rootScope.logo.bgColor
        }
        
        vm.saveLogo = function (i) {
            html2canvas(document.getElementById("logo-"+i), {
                onrendered: function(canvas){
                    var img_data = canvas.toDataURL();
                    var id = "download-anchor-"+i;
                    var anchor = document.getElementById(id);
                    anchor.setAttribute("href", img_data);
                    //
                    anchor.click();
                }
            });
        }
    }
})();