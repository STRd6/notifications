(function() {
  var Notifications;

  Notifications = function() {
    var errors, notices;
    notices = Observable([]);
    errors = Observable([]);
    return {
      classicError: function(request, error, message) {
        notices([]);
        if (request.responseJSON) {
          message = JSON.stringify(request.responseJSON, null, 2);
        } else {
          if (message == null) {
            message = request;
          }
        }
        return errors([message]);
      },
      notify: function(message) {
        notices([message]);
        return errors([]);
      },
      push: function(message) {
        return notices.push(message);
      },
      errors: errors,
      notices: notices,
      template: require('./template')
    };
  };

  module.exports = Notifications;

}).call(this);

//# sourceURL=main.coffee