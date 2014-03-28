Notifications
=============

A component to handle displaying two streams of messages: notices and errors.

    # TODO: This is a hack for haml-jr runtime
    global.Observable = require "observable"

    module.exports = Notifications = ->

Observable arrays containing our notices and error streams.

      notices = Observable([])
      errors = Observable([])

      self =

An error handler capable of displaying many common errors. Still needs work.

        classicError: (request, error, message) ->
          notices []

          if request.responseJSON
            message = JSON.stringify(request.responseJSON, null, 2)
          else
            message ?= request

          errors [message]

Clear all previous errors and notices and display the message as a notice.

        notify: (message) ->
          notices [message]
          errors []

Append a message to the notices.

        push: (message) ->
          notices.push message

        errors: errors
        notices: notices

      self.view = require('./template')(self)

      return self

Demo
----

    if PACKAGE.name is "ROOT"
      notifications = Notifications()

      document.body.appendChild(notifications.view)

      notifications.notify("cool")
