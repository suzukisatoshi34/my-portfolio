const syoukaiText = document.getElementById("syoukai-text");
const choice1 = document.getElementById("choice-1");
const choice2 = document.getElementById("choice-2");
const choice3 = document.getElementById("choice-3");
const feedback = document.getElementById("feedback");
const imageElement = document.getElementById("syoukai-image");
const jouhou = document.getElementById("input-todo");
const tuika = document.getElementById("add-button");
const info = document.getElementById("info-container");
const passward = document.getElementById("passward");
const pass = document.getElementById("pass");
const sakujo = document.getElementById("remove-button");
const allfeedback = document.getElementById("allfeedback");
const trivia = document.getElementById("trivia");
const betu = document.getElementById("betu");
const zatugakuhyouji = function () {
  fetch("http://numbersapi.com/random/trivia?json")
    .then((res) => {
      return res.json(); // 結果を json として読み込む
    })
    .then((text) => {
      trivia.append(text.text);
      console.log(text);
    });
};
zatugakuhyouji();
betu.onclick = function () {
  trivia.textContent = "";
  zatugakuhyouji();
};
const jikosyoukai = {
  text: "自己紹介",
  image: "./images/basketball2.jpg",
  choices1: [
    //0
    {
      text: "誰？",
      feedback: "鈴木聡です",
      image: "./images/namae.jpg",
    },
    //1
    {
      text: "もっと詳しく！",
      feedback: "4人兄弟の長男です",
    },
    //2
    {
      text: "もっともっと詳しく!!",
      feedback: "22歳です",
      image: "./images/22.jpg",
    },
    //3
    {
      text: "もっともっともっと詳しく!!!",
      feedback: "4月2日生まれです",
      image: "./images/42.jpg",
    },
    //4
    {
      text: "終わり‼",
    },
  ],
  choices2: [
    //0
    {
      text: "大学は？",
      feedback: "東京工業大学",
      image: "./images/toko.jpg",
    },
    //1
    {
      text: "もっと詳しく!",
      feedback: "物理学系4年です",
      image: "./images/buturi.jpg",
    },
    //2
    {
      text: "もっともっと詳しく!!",
      feedback: "県立多摩高校出身です",
      image: "./images/tama.jpg",
    },
    //3
    {
      text: "もっともっともっと詳しく!!!",
      feedback: "院試受かりたい!",
      image: "./images/insi.png",
    },
    //4
    {
      text: "終わり‼",
    },
  ],
  choices3: [
    //0
    {
      text: "趣味は？",
      feedback: "バスケットボール",
      image: "./images/basketball.jpg",
    },
    //1
    {
      text: "もっと詳しく!",
      feedback: "大学でバスケ部に所属しています",
      image: "./images/tokobasuke.jpg",
    },
    //2
    {
      text: "他には？",
      feedback: "お笑いも好きです",
      image: "./images/owarai.jpeg",
    },
    //3
    {
      text: "もっと詳しく!",
      feedback: "かが屋復活してくれてうれしい!!",
      image: "./images/kagaya.webp",
    },
    //4
    {
      text: "終わり!!",
    },
  ],
};
allfeedback.textContent = "";
const reloadsyoukai = function () {
  syoukaiText.textContent = jikosyoukai.text;

  //画像を表示
  imageElement.src = jikosyoukai.image;

  //選択肢(ボタン)の中身を表示
  choice1.textContent = jikosyoukai.choices1[0].text;
  choice2.textContent = jikosyoukai.choices2[0].text;
  choice3.textContent = jikosyoukai.choices3[0].text;
};

// choiceNumber番目の選択肢を選択
const choose1 = function (choiceNumber) {
  // フィードバックを表示
  feedback.textContent = jikosyoukai.choices1[choiceNumber].feedback;
  if (jikosyoukai.choices1[choiceNumber].image) {
    imageElement.src = jikosyoukai.choices1[choiceNumber].image;
  }
  choice1.textContent = jikosyoukai.choices1[choiceNumber + 1].text;
};

const choose2 = function (choiceNumber) {
  // フィードバックを表示
  feedback.textContent = jikosyoukai.choices2[choiceNumber].feedback;
  if (jikosyoukai.choices2[choiceNumber].image) {
    imageElement.src = jikosyoukai.choices2[choiceNumber].image;
  }
  choice2.textContent = jikosyoukai.choices2[choiceNumber + 1].text;
};
const choose3 = function (choiceNumber) {
  // フィードバックを表示
  feedback.textContent = jikosyoukai.choices3[choiceNumber].feedback;
  if (jikosyoukai.choices3[choiceNumber].image) {
    imageElement.src = jikosyoukai.choices3[choiceNumber].image;
  }
  choice3.textContent = jikosyoukai.choices3[choiceNumber + 1].text;
};
let n1 = 0;
let n2 = 0;
let n3 = 0;
choice1.onclick = function () {
  if (n1 <= 3) {
    choose1(n1);
    n1 = n1 + 1;
    alllook();
  }
};
choice2.onclick = function () {
  if (n2 <= 3) {
    // 0 番目の選択肢を選択
    choose2(n2);
    n2 = n2 + 1;
    alllook();
  }
};
choice3.onclick = function () {
  if (n3 <= 3) {
    // 0 番目の選択肢を選択
    choose3(n3);
    n3 = n3 + 1;
    alllook();
  }
};
alllook = function () {
  if (n1 === 4 && n2 === 4 && n3 === 4) {
    allfeedback.textContent = "全部見てくれてありがとう!!よろしく";
  }
};

//reloadQuiz関数を実行して、クイズを画面に表示する
reloadsyoukai();

pass.textContent = "パスワードを入力してください";
let infos = [];
if (localStorage.info1) {
  const infosJson = localStorage.info1;
  infos = JSON.parse(infosJson);
  for (let i = 0; i < infos.length; i++) {
    const div = document.createElement("div");
    div.className = "infomation";
    div.textContent = infos[i];
    info.append(div);
  }
}
console.log(infos);

const kakitasi = function () {
  if ((passward.value === "34", passward.value === "３４")) {
    const text = jouhou.value;
    infos.push(text);
    jouhou.value = "";
    console.log(infos);
    localStorage.info1 = JSON.stringify(infos);
    document.location.reload();
    passward.value = "";
  } else if (passward.value === "") {
    pass.textContent = "パスワードを入力していません!!";
  } else {
    pass.textContent = "パスワードが違います!!";
    passward.value = "";
  }
};
tuika.onclick = function () {
  kakitasi();
};
jouhou.addEventListener("keypress", test_ivent);

function test_ivent(e) {
  if (e.keyCode === 13) {
    kakitasi();
  }
}
passward.addEventListener("keypress", test_ivent);
function test_ivent(e) {
  if (e.keyCode === 13) {
    kakitasi();
  }
}
sakujo.onclick = function () {
  if ((passward.value === "34", passward.value === "３４")) {
    pass.textContent = "本当に削除してよろしいですか?";
    tuika.textContent = "はい！";
    sakujo.textContent = "やめます";
    tuika.onclick = function () {
      localStorage.removeItem("info1");
      document.location.reload();
      passward.value = "";
    };
    sakujo.onclick = function () {
      document.location.reload();
    };
  } else if (passward.value === "") {
    pass.textContent = "パスワードを入力していません!!";
  } else {
    pass.textContent = "パスワードが違います!!";
    passward.value = "";
  }
};
