  var makeGrid = function()
  //a big function to apply all codes in same time
  { // all vairables are here to be ready to use
    var tableTag = document.getElementById("pixelCanvas"),
      heightMaker = document.getElementById("inputHeight"),
      widthMaker = document.getElementById("inputWidth"),
      sizePicker = document.getElementById("sizePicker"),
      color = document.getElementById("colorPicker");
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    sizePicker.onsubmit = function(event) {
      event.preventDefault(); // prevent browser to restart the page
      deleteGrid(); // delete pixel after press on submint button
      makepixels(); // make the grid after entering the hight and the width and press submint button
    };

    function makepixels() { // make the grid after entering the hight and the width make the rows and coulms and coloring td tag will press in it
      for (var i = 0; i < heightMaker.value; i++) // when insert the height make coulms
      {
        var widthRow = tableTag.insertRow(i); // when insert the width make rows
        for (var t = 0; t < widthMaker.value; t++) {
          var cellMaker = widthRow.insertCell(t);
          cellMaker.addEventListener("click", aEvent); // when you click on the td tag it turns to the color you choose from color colorPicker
        }
      }
    }

    function deleteGrid() { // remove pixels
      while (tableTag.firstChild) {

        tableTag.removeChild(tableTag.firstChild);
      }
    }

    function aEvent() { //when press on td tag turn the color of colorPicker
      var tdTags = document.getElementsByTagName('td');
      for (var i = 0; i < tdTags.length; i++) {
        tdTags[i].addEventListener("click", function(event) {
          var itsMe = event.target;
          itsMe.style.backgroundColor = color.value;
        })
      }
    }
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  makeGrid(); // test the all functions in only one function