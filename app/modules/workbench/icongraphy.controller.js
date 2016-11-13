(function(){
    'use strict';
    angular.module('5minlogo')
        .controller('IcongraphyController',IcongraphyController);

    IcongraphyController.$inject = ['$scope','$rootScope', 'LogoService'];

    function IcongraphyController($scope, $rootScope, LogoService) {
        var vm = this;
        vm.iconShape= LogoService.getIconShapes();
        vm.iconStyle = LogoService.getIconStyles();

        // document.getElementById('icon-uploader').addEventListener('change', vm.handleUploadedFile(), false);

        vm.setIconShape = function (shape) {
            $rootScope.logo.icon.shape = shape;
        }

        vm.setIconStyle = function (style) {
            $rootScope.logo.icon.style = style.style;
        }

        vm.handleUploadedFile = function (evt) {
            console.log();
            var file = evt.target.files;
            console.log(file);
        }

        $scope.iconUploaded = function(ele){
            console.log(ele.files);
            var reader = new FileReader();
            reader.onload = function (e) {
                console.log(reader);
                $rootScope.icons.push({
                    src : reader.result
                });
                $rootScope.logo.icon.symbol = reader.result;
                $rootScope.$apply();
            };
            reader.onprogress = function (e) {
                console.log(1);
            }
            reader.readAsDataURL(ele.files[0]);
        }
    }
})();