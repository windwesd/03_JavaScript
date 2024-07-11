const applyBtn = document.querySelector("#applyBtn"); // 적용하기 버튼

applyBtn.addEventListener("click", () => {

  // 화면에 존재하는 입력 요소들 모두 얻어오기
  const boxWidth     = document.querySelector("#boxWidth");
  const boxHeight    = document.querySelector("#boxHeight");
  const fs           = document.querySelector("#fs");
  const boxFontColor = document.querySelector("#boxFontColor");
  const boxBgColor   = document.querySelector("#boxBgColor");
  const content      = document.querySelector("#content");

  // 체크된 radio 요소만 얻어오기
  // -> :chceked 이용 시 체크된 요소가 없다면 null
  const fw = document.querySelector("[name=fw]:checked");
  
  const alignRow = document.querySelector("[name=align-row]:checked");
  const alignCol = document.querySelector("[name=align-col]:checked");

  /* 변경되어야되는 대상 */
  const box = document.querySelector("#box");


  /* 입력된 값이 있을 때만 css 적용 */

  // 너비를 입력한 경우
  if(boxWidth.value.trim().length > 0){
    box.style.width = boxWidth.value + 'px';
  }

  // 높이를 입력한 경우
  if(boxHeight.value.trim().length > 0){
    box.style.height = boxHeight.value + 'px';
  }

  // 글자크기를 입력한 경우
  if(fs.value.trim().length > 0){
    box.style.fontSize = fs.value + 'px';
  }

  // 글자색을 입력한 경우
  if(boxFontColor.value.trim().length > 0){
    box.style.color = boxFontColor.value;
  }

  // 배경색을 입력한 경우
  if(boxBgColor.value.trim().length > 0){
    box.style.backgroundColor = boxBgColor.value;
  }

  // 출력할 문자열을 입력한 경우
  if(content.value.trim().length > 0){
    box.innerText = content.value;
  }

  // 굵기가 체크된 경우
  if(fw !== null){
    box.style.fontWeight = fw.value;
  }

  // 가로정렬이 체크된 경우
    if(alignRow !== null){
      box.style.justifyContent = alignRow.value;
    }

  // 가로정렬이 체크된 경우
  if(alignCol !== null){
    box.style.alignItems = alignCol.value;
  }


})