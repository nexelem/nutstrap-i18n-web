(function(){i18nModule.config(function($provide){return $provide.decorator("flash",function($delegate,$log,I18nResourceService){var buildResource;return buildResource=function(_this){return function(key,data){var resourceValue;return resourceValue=I18nResourceService.getMapForKey(key,data),_this.$log=$log.getInstance("FlashI18nDecorator"),resourceValue}}(this),$delegate.i18nSuccess=function(key,data){return $delegate.success=buildResource(key,data)},$delegate.i18nError=function(key,data){return $delegate.error=buildResource(key,data)},$delegate})})}).call(this);