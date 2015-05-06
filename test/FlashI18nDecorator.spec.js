describe('FlashI18nDecorator', function() {

    var flash, I18nResourceService;

    beforeEach(module('angular-flash.service'));
    beforeEach(module('myApp.common'));
    beforeEach(module('myApp.i18n'));

    beforeEach(module(function($provide) {
        $provide.factory('I18nResourceService', function() {
            return {
                getMapForKey: function() {
                    return "Test key with {{key}} substituted";
                }
            };
        });
    }));

    beforeEach(inject(function($injector) {
        flash = $injector.get('flash');
    }));

    it('Should determine methods are defined', function() {
        expect(flash).toBeDefined();
        expect(flash.i18nError).toBeDefined();
        expect(flash.i18nSuccess).toBeDefined();
    });

    it('Should delegate onto success without string supplant', function() {
        flash.i18nSuccess("test_key");
        expect(flash.success).toEqual('Test key with {{key}} substituted');
    });
});