
import "./css/base.css"; 

window.addEventListener("load", () => {
    let url = "https://www.nbrb.by/API/ExRates/Rates?Periodicity=0";
  
    async function getExRates(url) {
      let response = await fetch(url);
      let exchangeRates = await response.json();
      tbodyCreate(exchangeRates);
    }
    // .then(function (res) {
    //   return res.json();
    // })
  
    function tbodyCreate(rates = []) {
      let bodyRef = document.querySelector("tbody");
      rates.forEach((elem, index) => {
        bodyRef.insertAdjacentHTML(
          "beforeend",
          `<tr class="row-${index % 2 ? "odd" : "even"}">
              <td>  
                  <p>${elem.Cur_Name}</p>
              </td>
              <td>${elem.Cur_Abbreviation}</td>
              <td>
                  <div>${elem.Cur_OfficialRate}</div>
              </td>
          </tr>`
        );
      });
    }
    getExRates(url);
  });
  