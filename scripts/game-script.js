$( function() {
    // Japan flag stays if dropped in the box
    $( "#draggable" ).draggable({ revert: "invalid" });

    // Other flags always fly back from the box
    $( "#draggable2, #draggable3" ).draggable({ revert: "valid" });

    // Droppable box
    $( "#droppable" ).droppable({
      classes: {
        "ui-droppable-active": "ui-state-active",
        "ui-droppable-hover": "ui-state-hover"
      },
      drop: function( event, ui ) {
        $( this ).addClass( "ui-state-highlight" );

        if (ui.draggable.attr("id") == "draggable") {
        // Correct Flag
        $("#status-message").text("Correct!").css("color", "green");
        $(this).addClass("ui-state-highlight");
      } else {
        // Wrong Flags
        $("#status-message").text("Wrong!").css("color", "red");
      }
    }
  });
  

    // All draggables check for "Wrong" when they stop moving
    $(".ui-widget-content").on("dragstop", function(event, ui) {
    // If the element is currently reverting, it means it was 'valid' (wrong for this game)
    // or missed the target entirely.
    setTimeout(function() {
      // Check if the item stayed in the box or flew back
      if ($("#status-message").text() !== "Correct!") {
          $("#status-message").text("Wrong!").css("color", "red");
      }
    }, 100);
  });
});
