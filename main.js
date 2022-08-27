const card = document.querySelector('.card');
const cthulthu = document.querySelector('.Cthulthu');
const shubNiggurath = document.querySelector('.ShubNiggurath');
const iogSothoth = document.querySelector('.IogSothoth');
const azathoth = document.querySelector('.Azathoth');

const game_level = document.querySelector('.game-level');
const very_easy = document.querySelector('.very-easy');
const easy = document.querySelector('.easy');
const normal = document.querySelector('.average');
const hard = document.querySelector('.hard');
const very_hard = document.querySelector('.very-hard');


const countSt1green = document.querySelector('.green-stage1');
const countSt1brown = document.querySelector('.red-stage1');
const countSt1blue = document.querySelector('.blue-stage1');

const countSt2green = document.querySelector('.green-stage2');
const countSt2brown = document.querySelector('.red-stage2');
const countSt2blue = document.querySelector('.blue-stage2');

const countSt3green = document.querySelector('.green-stage3');
const countSt3brown = document.querySelector('.red-stage3');
const countSt3blue= document.querySelector('.blue-stage3');

const shuffle = document.querySelector('.logic__shuffle');
const card_back = document.querySelector('.card-back'); 
const card_click = document.querySelector('.card-deck__click'); 

let ancientSelected;
let levelSelected;

game_level.addEventListener('click', checkLevel);
card.addEventListener('click', checkAncient);
shuffle.addEventListener('click', check);
card_back.addEventListener('click', showCard);

const ancients = [cthulthu, shubNiggurath, iogSothoth, azathoth];
const level = [very_easy, easy, normal, hard, very_hard];

let arr;

function hide (className){
    if(className ===  cthulthu) arr = ancients.filter(el => el !== className).forEach(e => e.style.display = 'none');
    if(className ===  shubNiggurath) arr = ancients.filter(el => el !== className).forEach(e => e.style.display = 'none');
    if(className ===  iogSothoth) arr = ancients.filter(el => el !== className).forEach(e => e.style.display = 'none');
    if(className ===  azathoth) arr = ancients.filter(el => el !== className).forEach(e => e.style.display = 'none');
    if(className ===  very_easy) arr = level.filter(el => el !== className).forEach(e => e.style.display = 'none');
    if(className ===  easy) arr = level.filter(el => el !== className).forEach(e => e.style.display = 'none');
    if(className ===  normal) arr = level.filter(el => el !== className).forEach(e => e.style.display = 'none');
    if(className === hard ) arr = level.filter(el => el !== className).forEach(e => e.style.display = 'none');
    if(className === very_hard ) arr = level.filter(el => el !== className).forEach(e => e.style.display = 'none');
}

function checkAncient(e) {
    if (e.target.src.includes('Cthulthu')){
        ancientSelected = cthulthu;
        ancientSelected.classList.toggle('active');
    }
    if (e.target.src.includes('ShubNiggurath')){
        ancientSelected = shubNiggurath;
        ancientSelected.classList.toggle('active');
    }
    if (e.target.src.includes('IogSothoth')){
        ancientSelected = iogSothoth;
        ancientSelected.classList.toggle('active');
    }
    if (e.target.src.includes('Azathoth')){
        ancientSelected = azathoth;
        ancientSelected.classList.toggle('active');
    }
    hide(ancientSelected);
}

function checkLevel(e) {
    if (e.target.innerText === 'VERY EASY'){
        levelSelected = very_easy;
        levelSelected.classList.toggle('active_level');
    }
    if (e.target.innerText === 'EASY'){
        levelSelected = easy;
        levelSelected.classList.toggle('active_level');
    }
    if (e.target.innerText === 'NORMAL'){
        levelSelected = normal;
        levelSelected.classList.toggle('active_level');
    }
    if (e.target.innerText === 'HARD'){
        levelSelected = hard;
        levelSelected.classList.toggle('active_level');
    }
    if (e.target.innerText === 'VERY HARD'){
        levelSelected = very_hard;
        levelSelected.classList.toggle('active_level');
    }
    
    hide(levelSelected);
}
    let deckBlue = [];
    let deckGreen = [];
    let deckBrown = [];

    // =====        FILL ARRAYS
    function decksBuilding (levelSelected){
        if(levelSelected === very_easy){
            deckBlue =  cardsDataBlue.filter(el => el.difficulty == 'easy');
            deckGreen = cardsDataGreen.filter(el => el.difficulty == 'easy');
            deckBrown = cardsDataBrown.filter(el => el.difficulty == 'easy');
        }
        if(levelSelected === easy){
            deckBlue =  cardsDataBlue.filter(el => el.difficulty !== 'hard');
            deckGreen = cardsDataGreen.filter(el => el.difficulty !== 'hard');
            deckBrown = cardsDataBrown.filter(el => el.difficulty !== 'hard');
        }
        if(levelSelected === normal){
            deckBlue =  cardsDataBlue.map(el => el);
            deckGreen = cardsDataGreen.map(el => el);
            deckBrown = cardsDataBrown.map(el => el);
        }
        if(levelSelected === hard){
            deckBlue =  cardsDataBlue.filter(el => el.difficulty !== 'easy');
            deckGreen = cardsDataGreen.filter(el => el.difficulty !== 'easy');
            deckBrown = cardsDataBrown.filter(el => el.difficulty !== 'easy');
        }
        if(levelSelected === very_hard){
            deckBlue =  cardsDataBlue.filter(el => el.difficulty == 'hard');
            deckGreen = cardsDataGreen.filter(el => el.difficulty == 'hard');
            deckBrown = cardsDataBrown.filter(el => el.difficulty == 'hard');
        }
    }

    // =====        DETERMINE ANCIENT

    function selectPattern (whatAncient){
        if(whatAncient ===  cthulthu) return cthulthuPattern;
        if(whatAncient ===  shubNiggurath) return shubNiggurathPattern;
        if(whatAncient === iogSothoth) return iogSothothPattern
        else return azathothPattern;
    }

    // =====        CALCULATE CARDS IN ARRAYS, ADD ADDITIONAL IF NEEDED

    let green;
    let blue;
    let brown;

    function calcCards (pattern){
        green = Object.values(pattern).reduce((t, {green}) => t + green, 0);
        blue = Object.values(pattern).reduce((t, {blue}) => t + blue, 0);
        brown = Object.values(pattern).reduce((t, {brown}) => t + brown, 0);
        let n;

        if(green !== deckGreen.length){
            n = green - deckGreen.length;
            let temp = cardsDataGreen.filter(el => el.difficulty == 'normal');
           for(let i = 0; i < (green - deckGreen.length); i++){
            deckGreen.push(temp[i]);
           }
        }
        if(blue !== deckBlue.length){
            n = blue - deckBlue.length;
            let temp = cardsDataBlue.filter(el => el.difficulty == 'normal');
            for(let i = 0; i < n; i++){
                deckBlue.push(temp[i]);
            }
         }
         if(brown !== deckBrown.length){
            n = brown - deckBrown.length;
            let temp = cardsDataBrown.filter(el => el.difficulty == 'normal');
            for(let i = 0; i < n; i++){
             deckBrown.push(temp[i]);
            }
         }
      }
    // ===============    SHUFFLE SMALL STAGE ARRAYS

    function shuffleArray (array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      }
    // =====        FILL SMALL STAGE ARRAYS DEPENDING ON ANCIENT CHOSEN

    let stage1DeckBlue = [];
    let stage1DeckGreen = [];
    let stage1DeckBrown = [];

    let stage2DeckBlue = [];
    let stage2DeckGreen = [];
    let stage2DeckBrown = [];

    let stage3DeckBlue = [];
    let stage3DeckGreen = [];
    let stage3DeckBrown = [];


    function stageDecks (pattern){
            for(let i = 0; i < pattern[0].green; i++){
                stage1DeckGreen.push(deckGreen[i]);
            }
            for(let i = 0; i < pattern[0].blue; i++){
                stage1DeckBlue.push(deckBlue[i]);
            }
            for(let i = 0; i < pattern[0].brown; i++){
                stage1DeckBrown.push(deckBrown[i]);
            }
            for(let i = 0; i < pattern[1].green; i++){
                stage2DeckGreen.push(deckGreen[i]);
            }
            for(let i = 0; i < pattern[1].blue; i++){
                stage2DeckBlue.push(deckBlue[i]);
            }
            for(let i = 0; i < pattern[1].brown; i++){
                stage2DeckBrown.push(deckBrown[i]);
            }
            for(let i = 0; i < pattern[2].green; i++){
                stage3DeckGreen.push(deckGreen[i]);
            }
            for(let i = 0; i < pattern[2].blue; i++){
                stage3DeckBlue.push(deckBlue[i]);
            }
            for(let i = 0; i < pattern[2].brown; i++){
                stage3DeckBrown.push(deckBrown[i]);
            }
        }
        let stage1 = []; 
        let stage2 = []; 
        let stage3 = []; 

        function divideDeckForEachStage(){
          stage1 = [...stage1DeckGreen, ...stage1DeckBrown, ...stage1DeckBlue];
          stage2 = [...stage2DeckGreen, ...stage2DeckBrown, ...stage2DeckBlue];
          stage3 = [...stage3DeckGreen, ...stage3DeckBrown, ...stage3DeckBlue];
        }
       

         // =====        POPULATE COUNTDOWN

        function populateCountDown(){

          let stage1Green = stage1.filter(el => el.color === 'green').length;
          let stage1Blue = stage1.filter(el => el.color === 'blue').length;
          let stage1Brown = stage1.filter(el => el.color === 'brown').length;

          let stage2Green = stage2.filter(el => el.color === 'green').length;
          let stage2Blue = stage2.filter(el => el.color === 'blue').length;
          let stage2Brown = stage2.filter(el => el.color === 'brown').length;

          let stage3Green = stage3.filter(el => el.color === 'green').length;
          let stage3Blue = stage3.filter(el => el.color === 'blue').length;
          let stage3Brown = stage3.filter(el => el.color === 'brown').length;

            countSt1green.textContent = stage1Green;
            countSt1blue.textContent = stage1Blue;
            countSt1brown.textContent = stage1Brown;

            countSt2green.textContent = stage2Green;
            countSt2blue.textContent = stage2Blue;
            countSt2brown.textContent = stage2Brown;

            countSt3green.textContent = stage3Green;
            countSt3blue.textContent = stage3Blue;
            countSt3brown.textContent = stage3Brown;

        }



    function check (){
        shuffle.classList.toggle('active_level');
        decksBuilding(levelSelected);
        calcCards(selectPattern (ancientSelected));
        stageDecks(selectPattern(ancientSelected));  
        divideDeckForEachStage();
        populateCountDown();
        shuffleArray(stage1);
        shuffleArray(stage2);
        shuffleArray(stage3);
        console.log(stage1)
        console.log(stage2)
        console.log(stage3)
        combine();
        console.log(game)

    }
    let game = [];
    function combine (){
      game = [...stage1, ...stage2, ...stage3];
    }

// ===============    SHOW CARD

    function showCard(){

      display (game);
      remove (game);
      if(game.length == 0){
        card_back.classList.toggle('finish');
        card_click.classList.toggle('finish');
      }

      }

    function display (array){
      card_click.src = `./assets/MythicCards/${array[0].color}/${array[0].id}.png`;
    }
   
    function remove (array){
      compareDelete(array[0]);
      array.shift();

    }
    
    function compareDelete(array){
      if(stage1.length > 0){
        if(stage1[0].id === array.id) {
          stage1.shift();
          populateCountDown();
      }
    }
  
    if(stage1.length === 0 && stage2.length > 0){
      if(stage2[0].id === array.id) {
      stage2.shift();
      populateCountDown();
  }
}
      if(stage1.length === 0 && stage2.length === 0){
        if(stage3[0].id === array.id) {
        stage3.shift();
        populateCountDown();
    }
    }
  }

// ================  MAIN

    const cthulthuPattern = [
        {
            green: 0,
            brown: 2,
            blue: 2,
        },
        {
            green: 1,
            brown: 3,
            blue: 0,
        },
        {
            green: 3,
            brown: 4,
            blue: 0,
        },

    ];

    const shubNiggurathPattern = [
        {
            green: 1,
            brown: 2,
            blue: 1,

        },
        {
            green: 3,
            brown: 2,
            blue: 1,
        },
        {
            green: 2,
            brown: 4,
            blue: 0,
        },

    ];
    const iogSothothPattern = [
        {
            green: 0,
            brown: 2,
            blue: 1,

        },
        {
            green: 2,
            brown: 3,
            blue: 1,
        },
        {
            green: 3,
            brown: 4,
            blue: 0,
        },

    ];
    const azathothPattern = [
        {
            green: 1,
            brown: 2,
            blue: 1,

        },
        {
            green: 2,
            brown: 3,
            blue: 1,
        },
        {
            green: 2,
            brown: 4,
            blue: 0
        },

    ];

  const cardsDataBlue = [
    {
      id: 'blue1',
      difficulty: 'hard',
      color:'blue'
    },
    {
      id: 'blue2',
      difficulty: 'hard',
      color:'blue'
    },
    {
      id: 'blue3',
      difficulty: 'easy',
      color:'blue'
    },
    {
      id: 'blue4',
      difficulty: 'easy',
      color:'blue'
    },
    {
      id: 'blue5',
      difficulty: 'easy',
      color:'blue'
    },
    {
      id: 'blue6',
      difficulty: 'hard',
      color:'blue'
    },
    {
      id: 'blue7',
      difficulty: 'normal',
      color:'blue'
    },
    {
      id: 'blue8',
      difficulty: 'hard',
      color:'blue'
    },
    {
      id: 'blue9',
      difficulty: 'normal',
      color:'blue'
    },
    {
      id: 'blue10',
      difficulty: 'easy',
      color:'blue'
    },
    {
      id: 'blue11',
      difficulty: 'normal',
      color:'blue'
    },
    {
      id: 'blue12',
      difficulty: 'normal',
      color:'blue'
    },
  ]
  const cardsDataBrown = [
    {
      id: 'brown1',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown2',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown3',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown4',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown5',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown6',
      difficulty: 'hard',
      color:'brown'
    },
    {
      id: 'brown7',
      difficulty: 'hard',
      color:'brown'
    },
    {
      id: 'brown8',
      difficulty: 'hard',
      color:'brown'
    },
    {
      id: 'brown9',
      difficulty: 'hard',
      color:'brown'
    },
    {
      id: 'brown10',
      difficulty: 'hard',
      color:'brown'
    },
    {
      id: 'brown11',
      difficulty: 'easy',
      color:'brown'
    },
    {
      id: 'brown12',
      difficulty: 'easy',
      color:'brown'
    },
    {
      id: 'brown13',
      difficulty: 'easy',
      color:'brown'
    },
    {
      id: 'brown14',
      difficulty: 'easy',
      color:'brown'
    },
    {
      id: 'brown15',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown16',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown17',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown18',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown19',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown20',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown21',
      difficulty: 'easy',
      color:'brown'
    },
  ]
  const cardsDataGreen = [
    {
      id: 'green1',
      difficulty: 'easy',
      color:'green'
    },
    {
      id: 'green2',
      difficulty: 'hard',
      color:'green'
    },
    {
      id: 'green3',
      difficulty: 'hard',
      color:'green'
    },
    {
      id: 'green4',
      difficulty: 'hard',
      color:'green'
    },
    {
      id: 'green5',
      difficulty: 'hard',
      color:'green'
    },
    {
      id: 'green6',
      difficulty: 'hard',
      color:'green'
    },
    {
      id: 'green7',
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green8',
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green9',
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green10',
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green11',
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green12',
      difficulty: 'easy',
      color:'green'
    },
    {
      id: 'green13',
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green14',
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green15',
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green16',
      difficulty: 'easy',
      color:'green'
    },
    {
      id: 'green17',
      difficulty: 'easy',
      color:'green'
    },
    {
      id: 'green18',
      difficulty: 'easy',
      color:'green'
    },
  ]