const inputBox = document.querySelector("#inputBox");
const dataTable = document.querySelector("#tabela");
const tableBody = document.querySelector("#tablebody");

inputBox.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    //previne comportamento padrão
    event.preventDefault();

    //lê valor do input
    const word = inputBox.value;

    //const text = word.replace(/ /g, ""); // Remove espacos
    const text = word.replace(/\s/g, "");
    //const text = clearInput(word);
    //console.log("text=" + text);

    if (text === "") {
      inputBox.value = "";
      console.log("entrou no if:" + text);
      return null;
    } else {
      const data = verifyPalindrome(word);
      inputDataOnTable(data);
      inputBox.value = "";
    }

    /*     if (text != "") {
      const data = verifyPalindrome(word);
      inputDataOnTable(data);
    } else {
      console.log("entrada nula");
      inputBox.value = "";
      return null;
    } */

    inputBox.value = "";
  }
});

function onClickBtnClear(event) {
  tableBody.innerHTML = "";
}

function verifyPalindrome(word) {
  const text = clearInput(word);
  const reverse = reverseString(text);

  if (text === reverse) {
    const data = {
      initial: word,
      text: text,
      reverse: reverse,
      result: "positivo",
      output: "sim"
    };
    return data;
  } else {
    const data = {
      initial: word,
      text: text,
      reverse: reverse,
      result: "negativo",
      output: "não"
    };
    return data;
  }
}

function inputDataOnTable(data) {
  //console.log(data.text);
  const tableRow = createTableRow();
  const tableDataText = createTableData(data.initial);
  const tableDataResult = createTableData(data.output);

  tableRow.appendChild(tableDataText);
  tableRow.appendChild(tableDataResult);
  // console.log(tableRow);

  tableDataText.setAttribute("data-verificado", data.result);
  //tableDataResult.setAttribute("data-verificado", data.result);

  dataTable.children[1].appendChild(tableRow);
}

function createTableData(str) {
  const data = document.createElement("td");
  data.textContent = str;
  //console.log(data);
  return data;
}

function createTableRow() {
  const row = document.createElement("tr");
  return row;
}

function reverseString(str) {
  const reverse = str
    .split("")
    .reverse()
    .join("");

  //console.log("reverseString:str=" + reverse);
  return reverse;
}

function clearInput(word) {
  const text = word
    .normalize("NFD") // Remove acentos
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s]/gi, "") // Remove caracteres especiais
    .replace(/\s/g, "") // Remove espacos
    .toLowerCase();

  //console.log("clearInput:text=" + text);
  return text;
}
