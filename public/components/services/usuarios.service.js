(() => {
    'use strict';
    angular
        .module('evalu')
        .factory('servicioUsuarios', servicioUsuarios)

    servicioUsuarios.$inject = ['$log', '$http',];
    // dataStorageFactory
    function servicioUsuarios($log, $http) {

        const userService = {
            activate: activate
        };
        return userService

        function activate() {

            const asyncLocalStorage = {
                setItem: function (key, value) {
                    return Promise.resolve().then(() => {
                        let response = true;
                        localStorage.setItem(key, JSON.stringify(value));
                        return response
                    });
                }
            };
    
            let publicAPI = {
                addUsuario: _addUsuario,
            }
            return publicAPI;
        }
    }
})();
