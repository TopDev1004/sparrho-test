var a = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
var b = ['Hundred', 'Thousand', 'Lakh', 'Crore'];
var c_0 = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Ninteen'];
var d   = ['Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

let string = '';

function display(s){
  let t;
  t = string;
  string = s;
  string += t;
}

function pass(number){
  let q, rm;
  number < 10 && display(a[number]);
  number > 9 && number < 20 && display(c_0[number - 10]);
  if (number > 19) {
    rm = number % 10;
    if (rm === 0) {
      q = ~~(number / 10);
      display(d[q - 2]);
    }
     else {
      q = ~~(number / 10);
      display(a[rm]);
      display(' ');
      display(d[q - 2]);
    }
  }
}

export function convertNumToWord(number){
  let c, rm;
  string = ''
  c = 1;
  number === 0 && (string = 'Zero');
  while (number !== 0) {
    switch (c) {
      case 1:
        rm = number % 100;
        pass(rm);
        number > 100 && number % 100 !== 0 && display('And ');
        number = ~~(number / 100);
        break;
      case 2:
        rm = number % 10;
        if (rm !== 0) {
          display(' ');
          display(b[0]);
          display(' ');
          pass(rm);
        }

        number = ~~(number / 10);
        break;
      case 3:
        rm = number % 100;
        if (rm !== 0) {
          display(' ');
          display(b[1]);
          display(' ');
          pass(rm);
        }

        number = ~~(number / 100);
        break;
      case 4:
        rm = number % 100;
        if (rm !== 0) {
          display(' ');
          display(b[2]);
          display(' ');
          pass(rm);
        }

        number = ~~(number / 100);
        break;
      case 5:
        rm = number % 100;
        if (rm !== 0) {
          display(' ');
          display(b[3]);
          display(' ');
          pass(rm);
        }

        number = ~~(number / 100);
    }
    ++c;
  }
  return string;
}