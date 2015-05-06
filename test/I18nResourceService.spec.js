describe('I18nResourceService', function() {

    beforeEach(module('angular-flash.service'));
    beforeEach(module('ngI18n'));
    beforeEach(module('myApp.i18n'));
    beforeEach(module('myApp.common'));

    // Run test
    describe('Resource loading', function(){

        var $httpBackend, $log, $scope, I18nResourceService;

        beforeEach(inject(function($rootScope, $injector) {
            $scope = $rootScope;
            $httpBackend = $injector.get('$httpBackend');
            $log = $injector.get('$log');
            I18nResourceService = $injector.get('I18nResourceService');

        }));

        afterEach(function() {
             $httpBackend.verifyNoOutstandingExpectation();
             $httpBackend.verifyNoOutstandingRequest();
        });

        it('Should construct service as expected', function() {
            expect(I18nResourceService).toBeDefined();
        });

        it('Should find values for given keys as expected', function() {
            var result = I18nResourceService.getMapForKey("form_validation_error_url")
            expect(result).toEqual("Invalid URL");
        });

        it('Should return key if no translation was found', function() {
            var result = I18nResourceService.getMapForKey("no_translation")
            expect(result).toEqual("no_translation");
        });

        it('Should find values for given keys in different language as expected', function() {
            I18nResourceService.selectLanguage('pl')
            var result = I18nResourceService.getMapForKey("form_validation_error_url")
            expect(result).toEqual("Nieprawidłowy URL");
        });

        it('Should use fallback language if chosen language is not specified', function() {
            I18nResourceService.selectLanguage('fr')
            var result = I18nResourceService.getMapForKey("form_validation_error_url")
            expect(result).toEqual("Invalid URL");
        });
    });



});
