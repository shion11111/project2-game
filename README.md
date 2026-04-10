# Flags Matching Game

## Authorship
Created by: Shion Kishaba
Resorces: 
* **Drag and Drop Guide** https://jqueryui.com/droppable/#revert
* **Font and Icons** https://fonts.google.com/icons

## Model
<img width="743" height="660" alt="image" src="https://github.com/user-attachments/assets/f42c54b1-fbed-4ba8-beea-0bfd120730b0" />

## Game Objective
The goal of Flags matching Game is to correctly identify a specific country's flag from a selection of similar-looking flags and drag it to the target zone.

## How to Play
1. **Identify** Look at the country name displayed inside the droppable box.
2. **Grag** Click and hold the correct flag image.
3. **Dropp** Move the flag over the box and release.
4. **Feedback** If correct, the flag will stay, if wrong, it will revert.

## Tech Used
* **HTML** For the game structure and Drag and Drop API.
* **CSS** Flex box for layout and hover effects.
* **JavaScript** To handle drag events and validation logic.

## Links
**GitHub Repository** https://github.com/shion11111/project2-game
**Live App** https://shion11111.github.io/project2-game/
**Verification** https://validator.w3.org/nu/?doc=https%3A%2F%2Fshion11111.github.io%2Fproject2-game%2F

## Code Expalanation
This snippet identifies which flag is being dragged and stores its ID so we can check it late when it is dropped.

```javascript
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
})

