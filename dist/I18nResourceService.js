(function(){var I18nResourceService;I18nResourceService=function(){function I18nResourceService($log,$translate){this.$translate=$translate,this.$log=$log.getInstance("I18nResourceService"),this.$log.debug("constructing")}return I18nResourceService.prototype.selectLanguage=function(language){return this.$translate.use(language)},I18nResourceService.prototype.getMapForKey=function(key,params){return this.$translate.instant(key,params)},I18nResourceService}(),i18nModule.service("I18nResourceService",I18nResourceService)}).call(this);