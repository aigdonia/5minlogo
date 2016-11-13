(function(){
    'use strict';
    angular.module('5minlogo')
        .service('LogoService', LogoService);

    LogoService.$inject = [];

    function LogoService() {
        return {
            getDefaultConfig : getDefaultConfig,
            getLogoLayouts : getLogoLayouts,
            getFonts : getFonts,
            getStyles : getStyles,
            getFontWeight : getFontWeight,
            getColorClaimThemes : getColorClaimThemes,
            getIconShapes : getIconShapes,
            getIconStyles : getIconStyles
        };

        function getDefaultConfig() {
            return {
                font: {
                    type : getFonts()[0],
                    style: 'normal',
                    color: 'black'
                },
                icon : {
                    shape  : 'square',
                    style  : 'filled', // filled, outlined
                    shadow : false,
                },
                color: getColorClaimThemes()[4]
            }
        }

        function getLogoLayouts() {
            return [
                'iconic',
                'textual',
                'icon-left',
                'icon-right',
                'icon-top'
            ];
        }

        function getFonts() {
            return [
                'Roboto',
                'Open Sans',
                'Slabo 27px',
                'Lato',
                'Oswald',
                'Raleway',
                'PT Sans',
                'Roboto Slab',
                'Droid Sans',
                'Lora',
                'Ubuntu',
                'Droid Serif',
                'PT Sans Narrow',
                'PT Serif',
                'Bitter',
                'Dosis',
                'Abril Fatface',
                'Lobster',
                'Comfortaa',
                'Chewy'
            ]
        }

        function getStyles() {
            return [
                {name:'Normal', style:'normal'},
                {name:'Upper Case', style:'uppercase'},
                {name:'Lower Case', style:'lowercase'},
                {name:'Capitalize', style:'capitalize'},
                {name:'Small Caps', style:'smallcaps'}
            ]
        }

        function getFontWeight() {
            return [
                { name:"Light", style:'light' },
                { name:"Regular", style:'regular' },
                { name:"Bold", style:'bold' },
            ]
        }
        
        function getColorClaimThemes() {
            return [
                {bg : 'ff8b8b', primary: 'f9f8e6'},
                {bg : 'f9f7e8', primary: '62bfad'},
                {bg : '61bfad', primary: 'ffffff'},
                {bg : 'e54b4b', primary: 'ffffff'},
                {bg : '167c80', primary: 'ffffff'},
                {bg : 'b7e3e4', primary: 'f03f35'},
                {bg : 'efe8d8', primary: 'ff4552'},
                {bg : '005397', primary: 'e13334'},
                {bg : '32b67a', primary: 'ffffff'},
                {bg : 'facbc0', primary: '000000'},
                {bg : 'f3c9dd', primary: 'ceecf7', comp: 'fffdff'},
                {bg : '0bbcd6', primary: 'e6625e'},
                {bg : 'bfb5d7', primary: 'ffffff'},
                {bg : 'bea1a5', primary: '2d1fe8', comp: '000000'},
                {bg : 'f0cf61', primary: 'ebe8e1'},
                {bg : '0e38b1', primary: 'ffffff'},
                {bg : 'a6cfe2', primary: '0b0c11', comp: 'ffffff'},
                {bg : '371722', primary: 'bbab9b', comp: 'ffffff'},
                {bg : 'c7c6c4', primary: '008e8f'},
                {bg : 'd9baad', primary: 'cf2f89', comp: '232984'},
                {bg : 'f1c3b8', primary: '19227d'},
                {bg : 'eec0db', primary: '162bf4'},
                {bg : 'ef3e4a', primary: 'fe667b', comp: '012f63'},
                {bg : 'c0c2ce', primary: 'fe667b'},
                {bg : 'b6cac0', primary: 'b32a48', comp: '2a366a'},
                {bg : 'fdf06f', primary: 'd31b33'},
                {bg : 'b6cac0', primary: 'c02a1b'},
                {bg : 'edb5bd', primary: 'bedfd4', comp: '000000'},
                {bg : '17c37b', primary: 'f4f4f4'},
                {bg : '2c3979', primary: '15a29c'},
                {bg : '1b1d1c', primary: 'ea1821'},
                {bg : 'e88565', primary: '181a27'},
                {bg : 'ffefe5', primary: '1fc8a9'},
                {bg : 'f4c7ee', primary: '008fd3'},
                {bg : '77eedf', primary: '28292b'},
                {bg : 'e57066', primary: '28292b'},
                {bg : 'eed974', primary: '28292b'},
                {bg : 'fbfe56', primary: '0b64c0'},
                {bg : 'a7bbc3', primary: 'c886a2', comp: 'ffffff'},
                {bg : '3c485e', primary: 'e9e8d4'},
                {bg : '055a5b', primary: 'e6e6e6'},
                {bg : '178e96', primary: 'fde3c8'},
                {bg : 'd3e8e1', primary: 'e44a66'},
                {bg : 'cba0aa', primary: 'fae397'},
                {bg : '9c9cdd', primary: 'f9bdbd'},
                {bg : '20ad65', primary: 'fec8be'},
                {bg : 'e75153', primary: '58b89d'},
                {bg : '4f3a4b', primary: 'e75152'},
                {bg : '112378', primary: 'fbeccf'},
                {bg : 'e33946', primary: 'fdedb2'},
                {bg : 'fedccc', primary: 'ffffff', comp:'f79e7c'},
                {bg : '00b28b', primary: 'edc3c7', comp:'ffffff'},
                {bg : '9357a9', primary: '000000', comp:'ffffff'},
                {bg : 'c6d7c7', primary: 'ff5035', comp:'c88a6b'},
                {bg : 'b1fdeb', primary: '000000', comp:'ffffff'},
                {bg : 'bef6e9', primary: 'bb828b', comp:'ffffff'},
                {bg : '776ea7', primary: 'cc9ab5', comp:'9fa8e3'},
                {bg : 'eaeaea', primary: 'abcee2', comp:'d7b599'},
                {bg : 'ef303b', primary: '481c19'},
                {bg : '1812d6', primary: 'ffffff'},
                {bg : 'fffde7', primary: '189ba3', comp:'ec0b19'},
                {bg : 'f1d3d3', primary: '1539cf', comp:'1539cf'},
                {bg : 'd1e9e3', primary: 'f3bfa9'},
                {bg : '7de0e6', primary: 'ff2a93'},
                {bg : '3b755f', primary: 'f2cb6c', comp:'000000'},
                {bg : 'ce7182', primary: '85ceba', comp:'ffffff'},
                {bg : '340b0b', primary: '9b8fff'},
                {bg : 'f8ebee', primary: '0c3934'},
                {bg : 'ff9966', primary: 'e2b7c1'},
                {bg : '0033ff', primary: 'cdffcc'},
                {bg : '75ffc0', primary: '7a30cf'},
                {bg : 'fb9b2a', primary: '0c00ff'},
                {bg : 'ff8fa4', primary: 'e5e8dc'},
                {bg : '000000', primary: 'ff0000'},
                {bg : '083ea7', primary: '1fde91'},
                {bg : '674b7c', primary: 'dd705c'},
                {bg : '19aad1', primary: 'ffcc4c'},
                {bg : '12162d', primary: '8b743d'},
                {bg : '121738', primary: 'd17c78'},
                {bg : '0c485e', primary: 'feb904'},
                {bg : 'fc3c2d', primary: '042d5b'},
                {bg : '864bff', primary: '00ffcb'},
                {bg : 'ef5b09', primary: '54120a'},
                {bg : '97b8a3', primary: '707c26'},
                {bg : 'ffd101', primary: 'f000ef'},
                {bg : 'c26b6a', primary: '1d0444'},
                {bg : 'e3e3e3', primary: 'a68a73'},
                {bg : 'ff4c06', primary: '0d29ff'},
                {bg : 'cdff06', primary: '0606ff'},
                {bg : '0c485e', primary: 'ffdcd0'},
                {bg : '1f3b34', primary: 'ffbc00'},
                {bg : '384d9d', primary: 'f6f3eb'},
                {bg : 'e10000', primary: '004e25'},
                {bg : 'f64a00', primary: '2a4ed1'},
                {bg : '89937a', primary: 'ff9320'},
                {bg : 'c39d63', primary: '2c159d'},
                {bg : '00fdff', primary: '5c22ff'},
                {bg : 'b18ae0', primary: '87dcfa'},
                {bg : '96d0ff', primary: 'a46798'},
                {bg : '3c225f', primary: '17e1e3'},
                {bg : 'ff6b61', primary: '3d6d4f'},
                {bg : 'eeb200', primary: '502f7e'},
            ];
        }

        function getIconShapes() {
            return [
                'none',
                'circle',
                'square',
                'diamond'
            ]
        }

        function getIconStyles() {
            return [
                {name: 'Filled', style: 'filled'},
                {name: 'Outlined', style: 'outlined'}
            ]
        }
    }
})();