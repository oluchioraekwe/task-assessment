//let word = "Hello";
let divEl = document.querySelector(".name");
let buttonEl = document.querySelector(".data");
let tabelEl = document.querySelector(".table-data");
let centreEl = document.querySelector(".center-middle");
centreEl.innerHTML = `<p><span>&#8377;</span>${Number(
  4366706
).toLocaleString()}<p>`;
let result;
let data = [];

async function deleteData() {
  await fetch("http://localhost:3000/api/items/delete");
}

async function getData() {
  result = await fetch("http://localhost:3000/api/items");

  data = await result.json();
  data.map((value, index) => {
    tabelEl.innerHTML += `
    <tr class="table-rows">
    <td>${index + 1}</td>
    <td>${value.name}</td>
    <td><span>&#8377;</span> ${Number(value.last).toLocaleString()}</td>
    <td>
    <span>&#8377;</span> ${Number(value.buy).toLocaleString()}/${Number(
      value.sell
    ).toLocaleString()}
    </td>
  
    <td>${value.volume}</td>
    <td>${value.base_unit}</td>
  </tr>
    `;
  });
  console.log(data);
}
getData();
//console.log(result);
//console.log(data);

{
}

{
  /* <div class="table-row-container">
<h3>${index + 1}</h3>
<h3>${value.name}</</h3>
<h3>${value.last}</h3>
<h3>${value.buy}/${value.sell}</h3>
<h3>${value.volume}</h3>
<h3>${value.base_unit}</h3>
</div> */
}
