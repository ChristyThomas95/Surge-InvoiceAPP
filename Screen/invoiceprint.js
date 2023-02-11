import dateFormat, { masks } from "dateformat";

function GetTime(date) {
  var hours = parseInt(dateFormat(date, "hh"));
  var minutes = parseInt(dateFormat(date, "MM"));
  var ampm = hours >= 12 ? "AM" : "PM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}


const InvoiceMaker = (
    name,
    Address,
    Phone_No,
    Quantity,
    Invoice,
    Product,
    Total,
    Received_Balance,
    PaymentMethod,
    RemainingBalance


) => `

<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
  </head>
  <body >
    <div style="min-height: auto;
    width: 100%;
    background-color: #F0EEED;
    height : 97vh;
    border:2px #000;"  >
    <div style="height: auto;
    width: 100%;
    display: flex;
    flex-direction: row;
    /* padding: 20px; */
    justify-content: space-between;
    align-items: center;">
    <div class="data-title">
        <div style="display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-size: 2rem;
        padding-left: 20px;">Surge Food Company<br></div>
    <div style="
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 20px;
    ">1024 Ave, Vancouver, British Columbia</div>
    </div>
        <img style="
        height: 200px;
    width: 200px;
    margin-right:15px;
        " src="https://i.ibb.co/kmJVKKL/logo-transparent.png" />
    </div>
    <hr />
        <hr/>
        <div style="
        width: 100%;
        height: auto;
        padding: 15px;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        ">
            <div style="
            width: 50%;
            align-items: flex-start;
            ">
                <p class="invoice-user">
                    Bill To  <br/>
                    Name : ${name} <br/>
                    Address : ${Address} <br/>
                    Contact : +1 ${Phone_No}
                </p>
            </div>
            <div style="align-items: flex-end;">
                <p>Invoice No : ${Invoice}<br/>
                Date : ${dateFormat(Date.now(), "dd-mm-yyyy")}<br/>
                Time :${GetTime(new Date())}</p>
                <br/>
                <br/>
                <> For Any Questions Please Contact:- <br/>
                682-800-800<br/>
                Info@surgefoodcompany.com
                </p>
            </div>
        </div>
        <hr/>
        <hr/>
        <div style="height: auto;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;">
            <table style="width:100%; border-collapse: collapse;">
                <tr style="background-color: rgba(	134, 163, 184); color: white;">
                  <th style="height: 30px;">Index</th>
                  <th style="height: 30px;">Product Name</th>
                  <th style="height: 30px;">Price(Per)</th>
                  <th style="height: 30px;">Quantity</th>
                  <th style="height: 30px;">Total</th>
                </tr>
                <tr style="background-color: rgba(246, 221, 178, 0.8);">
                  <td style="text-align: center;height: 30px;">1</td>
                  <td style="text-align: center;height: 30px;">${Product}</td>
                  <td style="text-align: center;height: 30px;">${parseFloat(
                    parseFloat(Total) / parseFloat(Quantity)
                  ).toFixed(2)}</td>
                  <td style="text-align: center;height: 30px;"> ${Quantity}</td>
                  <td style="text-align: center;height: 30px;">$ ${Total}</td>
                </tr>

              </table>

                <!-- <div style="align-self: flex-end;margin-right: 10px;font-style: bold;">Received balance :  1</div>

              <hr/>
              <div style="align-self: flex-end;margin-right: 10px;font-style: bold;">Grand Total : 1</div>
              <hr/>
              <div style="align-self: flex-end;margin-right: 10px;font-style: bold;">Payment Mode : Cash</div>
              <hr/> -->
              <div style="width:100%;align-self: flex-end; display: flex; flex-direction: row;">
                <div style="width:40%"></div>
                  <table style="width: 50%; align-self: flex-end;">
                  <tr>
                  <th style="text-align: start;">Grand Total : </th>
                  <td style="text-align: center;height: 30px;">$ ${Total}</td>
              </tr>
                        <tr style="border-bottom: solid ;">
                            <th style="text-align: start;">Amount Received : </th>
                            <td style="text-align: center;height: 30px;">$ ${Received_Balance}</td>
                        </tr>

                        <tr style="border-bottom: solid ;">
                        <th style="text-align: start;">Amount Receivable : </th>
                        <td style="text-align: center;height: 30px;">$ ${RemainingBalance}</td>
                    </tr>
                        <tr>
                            <th style="text-align: start;">Payment Method: </th>
                            <td style="text-align: center;height: 30px;">${PaymentMethod}</td>
                        </tr>
                  </table>
              </div>
        </div>
        <hr/>
        <hr/>
        <div style="height:auto; padding: 20px;">
            <p>Account Details - <br/>
            Bank Name: Bank of Scotia<br/>
            Bank Account no : 123445698<br/>
            Bank code : SER123<br/>
            </p>
        </div>
    </div>
  </body>
</html>

`;
const style = `
    .container {
        margin : 15px;
        border : soild 2px #000;
    } 

`;
export {InvoiceMaker};