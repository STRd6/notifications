A simple console to display notification streams.

    .console-wrap
      %pre.errors
        - each @errors, (error) ->
          = error
      %pre.notices
        - each @notices, (notice) ->
          = notice
