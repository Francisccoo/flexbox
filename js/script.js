function display() {

  const box = document.getElementById("leftSide");

  let textInfo = document.getElementById("textInfo");
  let textInfoSec = document.getElementById("textInfoSec");

  const options = document.getElementById("options").elements;

  const optionsObj = {
    op1: {
      estilo: box.className = "row",
      info: 'The <span class="highlightText">flex-direction</span> property defines in which direction the container wants to stack the flex items.',
      subinfo: 'The <span class="highlightText">row</span> value stacks the flex items horizontally (from left to right)'
    },
    op2: {
      estilo: box.className = "rowRvrs",
      info: 'The <span class="highlightText">flex-direction</span> property defines in which direction the container wants to stack the flex items.',
      subinfo: 'The <span class="highlightText">row-reverse</span> value stacks the flex items horizontally (but from right to left)'
    },
    op3: {
      estilo: box.className = "column",
      info: 'The <span class="highlightText">flex-direction</span> property defines in which direction the container wants to stack the flex items.',
      subinfo: 'The <span class="highlightText">column-reverse</span> value stacks the flex items vertically (but from bottom to top)'
    },
    op4: {
      estilo: box.className = "clmnRvrs",
      info: 'The <span class="highlightText">flex-direction</span> property defines in which direction the container wants to stack the flex items.',
      subinfo: 'The <span class="highlightText">column</span> value stacks the flex items vertically (from top to bottom)'
    },
    op5: {
      estilo: box.className = "flxStart",
      info: 'The <span class="highlightText">justify-content</span> property is used to align the flex items.',
      subinfo: 'The <span class="highlightText">flex-start</span> value aligns the flex items at the beginning of the container (this is default)'
    },
    op6: { //ESTAMOS AQUI
      estilo: box.className = "flxCenter",
      info: 'The <span class="highlightText">justify-content</span> property is used to align the flex items.',
      subinfo: 'The <span class="highlightText">center</span> value aligns the flex items at the center of the container:'
    },
    op7: {
      estilo: box.className = "flxEnd",
      info: 'The <span class="highlightText">justify-content</span> property is used to align the flex items.',
      subinfo: 'The <span class="highlightText">flex-end</span> value aligns the flex items at the end of the container:'
    },
    op8: {
      estilo: box.className = "spcBtwn",
      info: 'The <span class="highlightText">justify-content</span> property is used to align the flex items.',
      subinfo: 'The <span class="highlightText">space-between</span> value displays the flex items with space between the lines:'
    },
    op9: {
      estilo: box.className = "spcArnd",
      info: 'The <span class="highlightText">justify-content</span> property is used to align the flex items.',
      subinfo: 'The <span class="highlightText">space-around</span> value displays the flex items with space before, between, and after the lines:'
    },
    op10: {
      estilo: box.className = "noWrap",
      info: 'The <span class="highlightText">flex-wrap</span> property specifies whether the flex items should wrap or not.',
      subinfo: 'The <span class="highlightText">nowrap</span> value specifies that the flex items will not wrap (this is default)'
    },
    op11: {
      estilo: box.className = "wrap",
      info: 'The <span class="highlightText">flex-wrap</span> property specifies whether the flex items should wrap or not.',
      subinfo: 'The <span class="highlightText">wrap</span> value specifies that the flex items will wrap if necessary:'
    },
    op12: {
      estilo: box.className = "wrapRvrs",
      info: 'The <span class="highlightText">flex-wrap</span> property specifies whether the flex items should wrap or not.',
      subinfo: 'The <span class="highlightText">wrap-reverse</span> value specifies that the flexible items will wrap if necessary, in reverse order'
    },
    op13: {
      estilo: box.className = "stretch",
      info: 'The <span class="highlightText">align-content</span> property modifies the behavior of the flex-wrap property. It is similar to align-items, but instead of aligning flex items, it aligns flex lines.',
      subinfo: 'The <span class="highlightText">stretch</span> value lines stretch to take up the remaining space'
    },
    op14: {
      estilo: box.className = "acFlxStart",
      info: 'The <span class="highlightText">align-content</span> property modifies the behavior of the flex-wrap property. It is similar to align-items, but instead of aligning flex items, it aligns flex lines.',
      subinfo: 'The <span class="highlightText">flex-start</span> lines are packed toward the start of the flex container'

    },
    op15: {
      estilo: box.className = "acCenter",
      info: 'The <span class="highlightText">align-content</span> property modifies the behavior of the flex-wrap property. It is similar to align-items, but instead of aligning flex items, it aligns flex lines.',
      subinfo: 'The <span class="highlightText">center</span> value lines are packed toward the center of the flex container'
    },
    op16: {
      estilo: box.className = "acFlxEnd",
      info: 'The <span class="highlightText">align-content</span> property modifies the behavior of the flex-wrap property. It is similar to align-items, but instead of aligning flex items, it aligns flex lines.',
      subinfo: 'The <span class="highlightText">flex-end</span> value lines are packed toward the end of the flex container'
    },
    op17: {
      estilo: box.className = "acSpcBtwn",
      //box.classList.add("wrap");
      info: 'The <span class="highlightText">align-content</span> property modifies the behavior of the flex-wrap property. It is similar to align-items, but instead of aligning flex items, it aligns flex lines.',
      subinfo: 'The <span class="highlightText">space-between</span> value lines are evenly distributed in the flex container'
    },
    op18: {

    },
    op19: {

    },
    op20: {

    },
    op21: {

    },
    op22: {

    },
    op23: {

    },
    op24: {

    },
    op25: {

    },
    op26: {

    },
    op27: {

    },
    op28: {

    },
    op29: {

    }
  };


  /* FLEX-DIRECTION */

  for (let i = 0; i < options.length; i++) {
    if (options[i].checked) {
      alert("You choosed" + options[i].id);
        switch (options[i].id) {
          case options[i].id:
            textInfo.innerHTML = optionsObj[options[i].id].info;
            textInfoSec.innerHTML = optionsObj[options[i].id].subinfo;
          default:
            console.log('No hay informacion');
        }
        break;
    }
  }


  alert(optionsObj.length);

}






  