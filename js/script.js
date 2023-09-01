const box = document.getElementById("leftSide");

let textInfo = document.getElementById("textInfo");
let textInfoSec = document.getElementById("textInfoSec");

const options = document.getElementById("options").elements;

  


function display() {

  const optionsObj = {
    op1: {
      estilo: box.className = "row",
      info: 'The <span class="highlightText">flex-direction</span> property defines in which direction the container wants to stack the flex items.',
      subinfo: 'The <span class="highlightText">row</span> value stacks the flex items horizontally (from left to right)'
    }
    // op2: {
    //   estilo: box.className = "rowRvrs",
    //   info: 'The <span class="highlightText">flex-direction</span> property defines in which direction the container wants to stack the flex items.',
    //   subinfo: 'The <span class="highlightText">row-reverse</span> value stacks the flex items horizontally (but from right to left)'
    // },
    // op3: {
    //   estilo: box.className = "column",
    //   info: 'The <span class="highlightText">flex-direction</span> property defines in which direction the container wants to stack the flex items.',
    //   subinfo: 'The <span class="highlightText">column-reverse</span> value stacks the flex items vertically (but from bottom to top)'
    // }
  };

  /* FLEX-DIRECTION */

  for (let i = 0; i < options.length; i++) {
    if (options[i].checked) {
      alert("You choosed " + options[i].id);
        switch (options[i].id) {
          case options[i].id:
            box.innerHTML = optionsObj[options[i].id].estilo;
            textInfo.innerHTML = optionsObj[options[i].id].info;
            textInfoSec.innerHTML = optionsObj[options[i].id].subinfo;
            break;
          default:
            console.log('No hay informacion');
        }
        // break;
    }
  }

}








  