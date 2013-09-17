A component to handle displaying two streams of messages: notifications and errors.

    Notifications = ->

Observable arrays containing our notices and error streams.
    
      notices = Observable([])
      errors = Observable([])

An error handler capable of handling many common errors. Still needs work.

      classicError: (request, error, message) ->
        notices []
        
        if request.responseJSON
          message = JSON.stringify(request.responseJSON, null, 2)
        else
          message ?= request
      
        errors [message]
      
      notify: (message) ->
        notices [message]
        errors []
        
      push: (message) ->
        notices.push message
        
      errors: erros
      notices: notices
        
      template: require('./template')

    module.exports = Notifications
