###
 * The service provides a wrapper around the ngI18nResourceBundle, caching its contents on creation
###
class I18nResourceService

    constructor: (@$log, @$translate) ->
        @$log = $log.getInstance 'I18nResourceService'
        @$log.debug "constructing"

    selectLanguage: (language) ->
      @$translate.use(language)

    getMapForKey: (key, params) ->
      @$translate.instant(key, params)

i18nModule.service('I18nResourceService', I18nResourceService)