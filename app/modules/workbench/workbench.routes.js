(function(){
    'use strict';
    angular.module('5minlogo')
        .config( routes );
})();

routes.$inject = ['$stateProvider'];

function routes($stateProvider) {
    $stateProvider
        .state('font', {
            url : 'font',
            parent : 'logoapp',
            templateUrl : 'modules/workbench/typography.html',
            controller : 'TypographyController as ctrl'
        })
        .state('typography', {
            url : 'typography',
            parent : 'logoapp',
            templateUrl : 'modules/workbench/typesetting.html',
            controller : 'TypesettingController as ctrl'
        })
        .state('icongraphy', {
            url : 'icongraphy',
            parent : 'logoapp',
            templateUrl : 'modules/workbench/icongraphy.html',
            controller : 'IcongraphyController as ctrl'
        })
        .state('color', {
            url : 'color',
            parent : 'logoapp',
            templateUrl : 'modules/workbench/colors.html',
            controller : 'ColorController as ctrl'
        })
        .state('finish', {
            url : 'finish',
            parent : 'logoapp',
            templateUrl : 'modules/workbench/final.html',
            controller : 'FinishController as ctrl'
        })
    ;
}