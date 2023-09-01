  let box = document.getElementById("leftSide");

  let textInfo = document.getElementById("textInfo");
  let textInfoSec = document.getElementById("textInfoSec");

  // alert(box);

  
  const data = [
  		{
        // "estilo": box.className = "row",
        "info": 'The <span class="highlightText">flex-direction</span> property defines in which direction the container wants to stack the flex items.',
        "subinfo": 'The <span class="highlightText">row</span> value stacks the flex items horizontally (from left to right)'
      },
      
      {
        // estilo: box.className = "rowRvrs",
        info: 'The <span class="highlightText">flex-direction</span> property defines in which direction the container wants to stack the flex items.',
        subinfo: 'The <span class="highlightText">row-reverse</span> value stacks the flex items horizontally (but from right to left)'
      },

      {
        // estilo: box.className = "column",
        info: 'The <span class="highlightText">flex-direction</span> property defines in which direction the container wants to stack the flex items.',
        subinfo: 'The <span class="highlightText">column</span> value stacks the flex items vertically (from top to bottom)'
      }
  ];



function display(data) {

const options = document.getElementById("options").elements;
  

  /* FLEX-DIRECTION */

  for (let i = 0; i < options.length; i++) {
    if (options[i].checked) {
      alert("You choosed " + options[i].id);
        switch (options[i].id) {
          case options[i].id:
            // data[i].estilo;
            textInfo.innerHTML = data[i].info;
            textInfoSec.innerHTML = data[i].subinfo;
          default:
            console.log('No hay informacion');
        }
        break;
    }
  }


}




  