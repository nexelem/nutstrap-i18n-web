

###
* Decorate the `flash` providing functionality for looking up keys from i18nResource bundle
###
i18nModule.config(($provide) ->
    $provide.decorator("flash", ($delegate, $log, I18nResourceService) ->
        buildResource = (key, data) =>
          resourceValue = I18nResourceService.getMapForKey(key, data)
          @$log = $log.getInstance 'FlashI18nDecorator'

          # Build resource with string supplant based on data provided
          resourceValue


        $delegate.i18nSuccess = (key, data) ->
          $delegate.success = buildResource(key, data)

        $delegate.i18nError = (key, data) ->
          $delegate.error = buildResource(key, data)

        return $delegate;
    )
)