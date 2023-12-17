var s =
/*          [["be", "was/were", "been", "biti"], ["become", "became", "become", "postati"], ["begin", "began", "begun", "začeti"], ["bite", "bit", "bitten", "ugrizniti"], ["blow", "blew", "blown", "pihati"], ["break", "broke", "broken", "zlomiti"], ["bring", "brought", "brought", "prinesti"], ["build", "built", "built", "zgraditi"], ["burn", "burnt", "burnt", "opeči"], ["buy", "bought", "bought", "kupiti"], ["can", "could", "/", "znati"], ["catch", "caught", "caught", "ujeti"], ["choose",  "chose", "chosen", "izbrati"], ["come", "came", "come", "priti"], ["cost", "cost", "cost", "imeti ceno"], ["cut", "cut", "cut", "rezati"], ["dig", "dug", "dug", "kopati"], ["do", "did", "done", "narediti"], ["draw", "drew", "drawn", "narisati"], ["dream", "dreamt", "dreamt", "sanjati"], ["drink", "drank", "drunk", "piti"], ["drive", "drove", "driven", "voziti se"], ["eat", "ate", "eaten", "jesti"], ["fall", "fell", "fallen", "pasti"], ["feed", "fed", "fed", "krmiti"], ["feel", "felt", "felt", "čutiti"], ["fight", "fought", "fought", "boriti se"], ["find", "found", "found", "najti"], ["fly", "flew", "flown", "leteti"], ["forget", "forgot", "forgotten", "pozabiti"], ["freeze", "froze", "frozen", "zmrzniti"], ["get", "got", "got", "dobiti"], ["give", "gave", "given", "dati"], ["go", "went", "gone", "iti"], ["grow", "grew", "grown", "rasti"], ["hang", "hung", "hung", "viseti"], ["have", "had", "had", "imeti"], ["hear", "heard", "heard", "slišati"], ["hide", "hid", "hidden", "skriti"], ["hit", "hit", "hit", "udariti"], ["hurt", "hurt", "hurt", "raniti"], ["keep", "kept", "kept", "ohraniti"], ["know", "knew", "known", "vedeti"], ["leave", "left", "left", "zapustiti"], ["learn", "learnt", "learnt", "učiti se"], ["lend", "lent", "lent", "posoditi"], ["let", "let", "let", "pustiti"], ["lie", "lay", "lain", "ležati"], ["lose", "lost", "lost", "izgubiti"], ["make", "made", "made", "izdelati"], ["mean", "meant", "meant", "pomeniti"], ["meet", "met", "met", "srečati"], ["must", "had to", "had to", "morati"], ["pay", "paid", "paid", "plačati"], ["put", "put", "put", "položiti"], ["read", "read", "read", "brati"], ["ride", "rode", "ridden", "jahati"], ["ring", "rang", "rung", "zvoniti"], ["run", "ran", "run", "teči"], */[["say", "said", "said", "reči"], ["see", "saw", "seen", "videti"], ["sell", "sold", "sold", "prodati"], ["send", "sent", "sent", "poslati"], ["set", "set", "set", "pripraviti"], ["shake", "shook", "shaken", "stresti"], ["shoot", "shot", "shot", "streljati"], ["shut", "shut", "shut", "zapreti"], ["sing", "sang", "sung", "peti"], ["sink", "sank", "sunk", "potopiti"], ["sit", "sat", "sat", "sedeti"], ["sleep", "slept", "slept", "spati"], ["speak", "spoke", "spoken", "govoriti"], ["spend", "spent", "spent", "porabiti"], ["stand", "stood", "stood", "stati"], ["steal", "stole", "stolen", "ukrasti"], ["stick", "stuck", "stuck", "nalepiti"], ["sweep", "swept", "swept", "pometati"], ["swim", "swam", "swum", "plavati"], ["take", "took", "taken", "vzeti"], ["teach", "taught", "taught", "učiti"], ["tell", "told", "told", "povedati"], ["think", "thought", "thought", "misliti"], ["throw", "threw", "thrown", "vreči"], ["understand", "understood", "understood", "razumeti"], ["wake", "woke", "woken", "zbuditi"], ["wear", "wore", "worn", "nositi"], ["win", "won", "won", "zmagati"], ["write", "wrote", "written", "pisati"]];

var a = s;
a = premesaj(a);

var pravilno = 0;
var vseTocke = 0;
var i = 0;
var stStolpca = -1; //-1 means nakljucno, 1 means first column itd.

document.getElementById('seznamBesed').innerHTML = narediSeznamBesed([a[0]], function f() {return nakljucno(4)-1;});

function narediSeznamBesed(seznam, funkcijaZaStolpec) {
  var vrnitev = "<tbody><tr style=\'position: sticky; top: -1.5px; background-color: white;\'><td><b>Infitive</b><br><i>nedoločnik</i></td><td><b>Past Tense</b><br><i>preteklik</i></td><td><b>Past Participle</b><br><i>pretekli deležnik</i></td><td><b></b><br><i>slovenski prevod</i></td></tr></tbody>";
  for (var vrstica = 0; vrstica < seznam.length; vrstica++) {
    vrnitev=vrnitev+'<tr>';
    izpisniStolpec = funkcijaZaStolpec();
    for (var stolpec = 0; stolpec < seznam[vrstica].length; stolpec++) {
      if (stolpec == izpisniStolpec) {
        vrnitev=vrnitev+'<td>'+seznam[vrstica][stolpec]+'</td>';
      } else {
        vrnitev=vrnitev+'<td><input type="text" id="prostorcek" spellcheck="false"></input></td>';
      }
    }
    vrnitev=vrnitev+'</tr>';
  }
  document.getElementById('naprej').style.display = 'none';
  return vrnitev;
}

 function preveri(seznamResitev) {
  let narobe = 0;
  let prav = 0;
  let seznam = document.getElementById('seznamBesed').children[1];
  let vrstice = seznam.children;
  for (var vrstica = 0; vrstica < vrstice.length; vrstica++) {
    stolpci = vrstice[vrstica].children;
    for (var stolpec = 0; stolpec < stolpci.length; stolpec++) {
      if (stolpci[stolpec].children[0] != undefined) {
        if ((enako(stolpci[stolpec].children[0].value, seznamResitev[vrstica][stolpec])) && (stolpec != 3)) {
          stolpci[stolpec].children[0].style.backgroundColor = 'lightgreen';
          prav += 1;
        } else if ((stolpec == 3) && (stolpci[stolpec].children[0].value != '')) {
          stolpci[stolpec].children[0].style.backgroundColor = 'orange';
        } else {
          stolpci[stolpec].children[0].style.backgroundColor = 'rgb(255, 102, 102)';
          narobe += 1;
        }
      }
    }
    document.getElementById('naprej').style.display = 'block';
  }
  return [prav, narobe];
}

 function resi(seznamResitev) {
  let seznam = document.getElementById('seznamBesed').children[1];
  let vrstice = seznam.children;
  for (var vrstica = 0; vrstica < vrstice.length; vrstica++) {
    stolpci = vrstice[vrstica].children;
    for (var stolpec = 0; stolpec < stolpci.length; stolpec++) {
      if (stolpci[stolpec].children[0] != undefined) {
        stolpci[stolpec].children[0].value = seznamResitev[vrstica][stolpec];
      }
    }
  }
}

 function nakljucno(a) {
  /*vrne nakljucno celo stevilo med 1 in a vkljucno*/
  let x = Math.random();
  return Math.floor(x * a + 1);
}

 function enako(a, b) {
  a = a.toUpperCase();
  b = b.toUpperCase();
  return (a == b);
}

 function premesaj(seznam) {
  let vrnitev = [];
  let l = seznam.length;
  for (var i = 0; i < l; i++) {
    nakljuc = nakljucno(seznam.length)-1;
    vrnitev.push(seznam[nakljuc]);
    seznam = removeAt(nakljuc, seznam);
  }
  return vrnitev;
}

 function removeAt(int, seznam) {
  seznam.splice(int, 1);
  return seznam;
}

 function nastaviStevecTock(p, v) {
  document.getElementById('steviloNalog').innerText = v;
  document.getElementById('pravilno').innerText = p;
}

function prikazi(id) {
  document.getElementById(id).style.visibility = 'visible';
}

 function skrij(id) {
  document.getElementById(id).style.visibility = 'hidden';
}

function dodajI(i) {
  if (i < a.length - 1) {
    return i+1;
  } else {
    return 0;
  }
}

function izberiStolpec () {
  // vrne index stolpca za izpis
  if (stStolpca == -1) {
    return nakljucno(4)-1;
  } else {
    return stStolpca-1;
  }
}

function nastaviStStolpec() {
  console.log("jej");
  if (document.getElementById("set1").value == "naključno") {
    return -1;
  }
  if (document.getElementById("set1").value == "nedoločnik") {
    return 1;
  }
  if (document.getElementById("set1").value == "preteklik") {
    return 2;
  }
  if (document.getElementById("set1").value == "pretekli deležnik") {
    return 3;
  }
  if (document.getElementById("set1").value == "prevod") {
    return 4;
  }
}

function toggleTheme (element) {
  if (element.checked) {
    document.getElementById("body").classList = "dark";
  } else {
    document.getElementById("body").classList = "";
  }
}
