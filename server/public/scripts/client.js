var app = angular.module('CalendarSpikeApp', ['ngRoute','ui.calendar']);

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/views/calendar.html',
        controller: 'CalendarController as vm'
    }).otherwise({
        template: '<h1>404</h1>'
    });
});
