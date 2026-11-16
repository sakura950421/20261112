
const BASE_W = 1366;
const BASE_H = 768;

let sceneScale = 1;
let offsetX = 0;
let offsetY = 0;

const characterScale = 2.4;
const sakuraScale = 2.4;
const wolfScale = 2.4;

// ==================== 圖片 ====================

let standImg, startImg, flyImg, landingImg;
let attackImg, cardImg, blockImg, moonFallImg;

let sakuraStandImg, sakuraWalkImg;
let sakuraFallImg, sakuraCardImg;

let wolfStandImg, wolfAttackImg;
let wolfLightningImg, wolfFlyImg;

// ==================== 月 ====================

let characterX, characterY;
let facing = -1;
let moveSpeed = 4 * characterScale;

let characterState = "stand";
let stateStartTime = 0;

const animationSpeed = 150;

let spaceHeld = false;
let cardHeld = false;
let moonBlocking = false;

let attackStartTime = 0;
let cardStartTime = 0;
let lastAttackCycle = -1;

const attackFrameCount = 5;
const attackFrameSpeed = 120;
const attackPauseTime = 350;

const cardFrameCount = 7;
const cardFrameSpeed = 120;
const cardPauseTime = 350;

// 月跌倒：667 × 156，共四格
const moonFallFrameCount = 4;
const moonFallFrameHeight = 156;
const moonFallFrameSpeed = 150;

let moonFallStartTime = 0;

// ==================== 櫻 ====================

let sakuraX, sakuraY;
let sakuraFacing = 1;
let sakuraSpeed = 4 * sakuraScale;

let sakuraState = "stand";
let sakuraStateStartTime = 0;
let sakuraIsMoving = false;

let sakuraManualCard = false;
let sakuraDefense = false;

const sakuraStandFrameCount = 4;
const sakuraWalkFrameCount = 3;
const sakuraFallFrameCount = 3;
const sakuraCardFrameCount = 11;

const sakuraStandFrameHeight = 95;
const sakuraWalkFrameHeight = 92;
const sakuraFallFrameHeight = 98;
const sakuraCardFrameHeight = 133;

const sakuraAnimationSpeed = 150;

// ==================== 小狼 ====================

let wolfX, wolfY;
let wolfFacing = 1;

const wolfFollowDistance = 220;
const wolfFollowSpeed = 0.18;

let wolfState = "stand";
let wolfStateStartTime = 0;

const wolfStandFrameCount = 10;
const wolfAttackFrameCount = 13;
const wolfLightningFrameCount = 6;
const wolfFlyFrameCount = 3;

const wolfStandFrameSpeed = 120;
const wolfAttackFrameSpeed = 120;
const wolfFlyFrameSpeed = 120;

let wolfAttackStartTime = 0;
let wolfAttackSequence = [];
let wolfWasAttacking = false;

let wolfFlyStartTime = 0;
let wolfFlyLandTime = 0;

// ==================== 遊戲 ====================

let gameState = "play";

const WIN_SCORE = 5;
const COLLISION_DISTANCE = 115;
const RESULT_DURATION = 3000;

let sakuraScore = 0;
let moonScore = 0;

let collisionReady = true;

let currentQuestion = null;
let lastQuestionIndex = -1;

let sakuraChoice = 0;
let moonChoice = 0;

let sakuraAnswered = false;
let moonAnswered = false;

let sakuraWrong = false;
let moonWrong = false;

let resultMessage = "";
let resultStartTime = 0;
let resultHasWinner = false;
let roundWinner = "";

let gameWinner = "";

// 【修改】獨立管理跌倒動畫
// 播放完成後就站起來，不必等三秒
let moonResultFalling = false;
let sakuraResultFalling = false;

// ==================== 震動 ====================

const SHAKE_DURATION = 500;
const SHAKE_POWER = 16;

let shakeStartTime = -10000;

// ==================== 彩帶 ====================

let confettiParticles = [];

const confettiColors = [
  "#FF91C4",
  "#78C6FF",
  "#FFE17B",
  "#B9A2FF",
  "#FFFFFF",
  "#9DE8CB"
];

// ==================== 題庫 ====================

const questionBank = [
  {
    question: "一年有幾個月？",
    options: ["10 個", "11 個", "12 個", "13 個"],
    answer: 2
  },
  {
    question: "下列哪一個是哺乳類動物？",
    options: ["鯊魚", "海豚", "章魚", "水母"],
    answer: 1
  },
  {
    question: "太陽從哪個方向升起？",
    options: ["東方", "西方", "南方", "北方"],
    answer: 0
  },
  {
    question: "下列哪一個是質數？",
    options: ["9", "15", "17", "21"],
    answer: 2
  },
  {
    question: "水在標準大氣壓下幾度沸騰？",
    options: ["50°C", "80°C", "100°C", "120°C"],
    answer: 2
  },
  {
    question: "三角形的內角和是多少度？",
    options: ["90°", "180°", "270°", "360°"],
    answer: 1
  },
  {
    question: "哪個行星最接近太陽？",
    options: ["地球", "火星", "金星", "水星"],
    answer: 3
  },
  {
    question: "Apple 的中文是什麼？",
    options: ["蘋果", "香蕉", "葡萄", "橘子"],
    answer: 0
  },
  {
    question: "1 公里等於多少公尺？",
    options: ["10", "100", "1000", "10000"],
    answer: 2
  },
  {
    question: "臺灣最高的山是哪一座？",
    options: ["陽明山", "雪山", "玉山", "阿里山"],
    answer: 2
  },
  {
    question: "24 ÷ 6 等於多少？",
    options: ["3", "4", "5", "6"],
    answer: 1
  },
  {
    question: "植物透過什麼作用製造養分？",
    options: [
      "呼吸作用",
      "蒸散作用",
      "光合作用",
      "分解作用"
    ],
    answer: 2
  }
];

// ==================== 載入圖片 ====================

function preload() {
  standImg = loadImage("月/stand/stand.png");
  startImg = loadImage("月/jump/起步.png");
  flyImg = loadImage("月/jump/飛行.png");
  landingImg = loadImage("月/jump/降落.png");
  attackImg = loadImage("月/手刀/手刀.png");
  cardImg = loadImage("月/使用卡牌/使用卡牌.png");
  blockImg = loadImage("月/擋/擋.png");
  moonFallImg = loadImage("月/跌倒/跌倒.png");

  sakuraStandImg = loadImage("櫻/站著/站.png");
  sakuraWalkImg = loadImage("櫻/走路/走路.png");
  sakuraFallImg = loadImage("櫻/跌倒/跌倒.png");
  sakuraCardImg = loadImage("櫻/使用卡牌/使用卡牌.png");

  wolfStandImg = loadImage("小狼/站立/站立.png");
  wolfAttackImg = loadImage("小狼/攻擊/攻擊.png");
  wolfLightningImg = loadImage("小狼/雷/雷.png");
  wolfFlyImg = loadImage("小狼/飛/飛.png");
}

// ==================== 初始化 ====================

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);

  resetCharacterPositions();
  createWolfAttackSequence();
  calculateScale();
}

// ==================== 角色回到初始位置 ====================

function resetCharacterPositions() {
  sakuraX = BASE_W * 0.3;
  sakuraY = BASE_H / 2;

  characterX = BASE_W * 0.7;
  characterY = BASE_H / 2;

  sakuraFacing = 1;
  facing = -1;

  wolfX = sakuraX - wolfFollowDistance;
  wolfY = sakuraY;
  wolfFacing = 1;

  sakuraState = "stand";
  characterState = "stand";
  wolfState = "stand";

  sakuraStateStartTime = millis();
  stateStartTime = millis();
  wolfStateStartTime = millis();

  sakuraIsMoving = false;
}

// ==================== 縮放 ====================

function calculateScale() {
  sceneScale = min(
    windowWidth / BASE_W,
    windowHeight / BASE_H
  );

  offsetX =
    (windowWidth - BASE_W * sceneScale) / 2;

  offsetY =
    (windowHeight - BASE_H * sceneScale) / 2;
}

// ==================== 背景 ====================

function drawBackground() {
  let topColor = color("#101C45");
  let bottomColor = color("#39265C");

  for (let y = 0; y < BASE_H; y++) {
    stroke(
      lerpColor(topColor, bottomColor, y / BASE_H)
    );
    line(0, y, BASE_W, y);
  }

  noStroke();
}

// ==================== 共用動畫函式 ====================

function drawSpriteFrame(
  img,
  frame,
  frameCount,
  frameHeight,
  x,
  y,
  scaleValue,
  direction
) {
  if (!img) return;

  let frameWidth = img.width / frameCount;

  frame = constrain(
    floor(frame),
    0,
    frameCount - 1
  );

  push();
  translate(x, y);

  if (direction === -1) {
    scale(-1, 1);
  }

  image(
    img,
    0,
    0,
    frameWidth * scaleValue,
    frameHeight * scaleValue,
    frame * frameWidth,
    0,
    frameWidth,
    frameHeight
  );

  pop();
}

// ==================== 月移動 ====================

function isMoving() {
  return (
    keyIsDown(LEFT_ARROW) ||
    keyIsDown(RIGHT_ARROW)
  );
}

function updateMovement() {
  if (keyIsDown(LEFT_ARROW)) {
    characterX -= moveSpeed;
    facing = -1;
  } else if (keyIsDown(RIGHT_ARROW)) {
    characterX += moveSpeed;
    facing = 1;
  }

  characterX = constrain(
    characterX,
    70 * characterScale,
    BASE_W - 70 * characterScale
  );
}

// ==================== 月狀態 ====================

function updateCharacterState() {
  if (moonBlocking || cardHeld || spaceHeld) return;

  let moving = isMoving();
  let elapsed = millis() - stateStartTime;

  if (characterState === "stand") {
    if (moving) {
      characterState = "start";
      stateStartTime = millis();
    }
  } else if (characterState === "start") {
    if (elapsed >= animationSpeed * 2) {
      characterState = moving ? "fly" : "landing";
      stateStartTime = millis();
    }
  } else if (characterState === "fly") {
    if (!moving) {
      characterState = "landing";
      stateStartTime = millis();
    }
  } else if (characterState === "landing") {
    if (moving) {
      characterState = "start";
      stateStartTime = millis();
    } else if (elapsed >= animationSpeed) {
      characterState = "stand";
      stateStartTime = millis();
    }
  }
}

// ==================== 月站立 ====================

function drawStand() {
  let frame =
    floor(millis() / animationSpeed) % 3;

  drawSpriteFrame(
    standImg, frame, 3, 136,
    characterX, characterY,
    characterScale, facing
  );
}

// ==================== 月起步 ====================

function drawStart() {
  let frame = min(
    floor((millis() - stateStartTime) / animationSpeed),
    1
  );

  drawSpriteFrame(
    startImg, frame, 2, 134,
    characterX, characterY,
    characterScale, facing
  );
}

// ==================== 月飛行 ====================

function drawFly() {
  drawSpriteFrame(
    flyImg, 0, 1, 134,
    characterX, characterY,
    characterScale, facing
  );
}

// ==================== 月降落 ====================

function drawLanding() {
  drawSpriteFrame(
    landingImg, 0, 1, 129,
    characterX, characterY,
    characterScale, facing
  );
}

// ==================== 月手刀 ====================

function drawAttack() {
  let animationDuration =
    attackFrameCount * attackFrameSpeed;

  let cycleDuration =
    animationDuration + attackPauseTime;

  let totalElapsed = millis() - attackStartTime;
  let cycle = floor(totalElapsed / cycleDuration);
  let elapsed = totalElapsed % cycleDuration;

  let frame = attackFrameCount - 1;

  if (elapsed < animationDuration) {
    frame = floor(elapsed / attackFrameSpeed);
  }

  if (
    frame >= 2 &&
    frame <= 3 &&
    cycle !== lastAttackCycle
  ) {
    lastAttackCycle = cycle;
    checkAttackHit();
  }

  drawSpriteFrame(
    attackImg, frame, attackFrameCount, 170,
    characterX, characterY,
    characterScale, facing
  );
}

// ==================== 月卡牌 ====================

function drawCard() {
  let animationDuration =
    cardFrameCount * cardFrameSpeed;

  let cycleDuration =
    animationDuration + cardPauseTime;

  let elapsed =
    (millis() - cardStartTime) % cycleDuration;

  let frame = cardFrameCount - 1;

  if (elapsed < animationDuration) {
    frame = floor(elapsed / cardFrameSpeed);
  }

  drawSpriteFrame(
    cardImg, frame, cardFrameCount, 144,
    characterX, characterY,
    characterScale, facing
  );
}

// ==================== 月格擋 ====================

function drawBlock() {
  drawSpriteFrame(
    blockImg, 1, 2, 124,
    characterX, characterY,
    characterScale, facing
  );
}

// ==================== 月跌倒 ====================

function drawMoonFall() {
  let elapsed = millis() - moonFallStartTime;

  let frame = min(
    floor(elapsed / moonFallFrameSpeed),
    moonFallFrameCount - 1
  );

  drawSpriteFrame(
    moonFallImg,
    frame,
    moonFallFrameCount,
    moonFallFrameHeight,
    characterX,
    characterY,
    characterScale,
    facing
  );
}

// ==================== 月動畫顯示 ====================

function drawCharacter() {

  if (gameState === "quiz") {
    drawStand();
    return;
  }

  if (gameState === "result") {

    // 【修改】跌倒播完就站起來
    if (moonResultFalling) {
      drawMoonFall();
    } else {
      drawStand();
    }

    return;
  }

  if (gameState === "over") {
    drawStand();
    return;
  }

  if (moonBlocking) {
    drawBlock();
  } else if (cardHeld) {
    drawCard();
  } else if (spaceHeld) {
    drawAttack();
  } else if (characterState === "start") {
    drawStart();
  } else if (characterState === "fly") {
    drawFly();
  } else if (characterState === "landing") {
    drawLanding();
  } else {
    drawStand();
  }
}

// ==================== 手刀命中 ====================

function checkAttackHit() {
  if (gameState !== "play") return;
  if (sakuraState === "fall") return;
  if (sakuraState === "card") return;

  let distanceBetween =
    abs(characterX - sakuraX);

  if (
    distanceBetween <= 125 * characterScale
  ) {
    sakuraState = "fall";
    sakuraStateStartTime = millis();

    sakuraManualCard = false;
    sakuraDefense = false;
  }
}

// ==================== 櫻移動 ====================

function updateSakuraMovement() {
  sakuraIsMoving = false;

  if (sakuraState === "fall") return;
  if (sakuraState === "card") return;

  let moving = false;

  if (keyIsDown(65)) {
    sakuraX -= sakuraSpeed;
    sakuraFacing = -1;
    moving = true;
  } else if (keyIsDown(68)) {
    sakuraX += sakuraSpeed;
    sakuraFacing = 1;
    moving = true;
  }

  sakuraX = constrain(
    sakuraX,
    70 * sakuraScale,
    BASE_W - 70 * sakuraScale
  );

  sakuraIsMoving = moving;

  if (moving) {
    if (sakuraState !== "walk") {
      sakuraState = "walk";
      sakuraStateStartTime = millis();
    }
  } else if (sakuraState === "walk") {
    sakuraState = "stand";
    sakuraStateStartTime = millis();
  }
}

// ==================== 櫻狀態 ====================

function updateSakuraState() {
  let elapsed = millis() - sakuraStateStartTime;

  if (sakuraDefense) {
    sakuraState = "card";
    sakuraFacing = characterX < sakuraX ? -1 : 1;
    return;
  }

  if (sakuraManualCard) {
    sakuraState = "card";
    return;
  }

  if (sakuraState === "fall") {
    if (
      elapsed >=
      sakuraFallFrameCount * sakuraAnimationSpeed
    ) {
      sakuraState = "stand";
      sakuraStateStartTime = millis();
    }
  } else if (sakuraState === "card") {
    sakuraState = "stand";
    sakuraStateStartTime = millis();
  }
}

// ==================== 櫻站立 ====================

function drawSakuraStand() {
  let frame =
    floor(millis() / sakuraAnimationSpeed) %
    sakuraStandFrameCount;

  drawSpriteFrame(
    sakuraStandImg, frame,
    sakuraStandFrameCount,
    sakuraStandFrameHeight,
    sakuraX, sakuraY,
    sakuraScale, sakuraFacing
  );
}

// ==================== 櫻走路 ====================

function drawSakuraWalk() {
  let frame =
    floor(
      (millis() - sakuraStateStartTime) /
      sakuraAnimationSpeed
    ) % sakuraWalkFrameCount;

  drawSpriteFrame(
    sakuraWalkImg, frame,
    sakuraWalkFrameCount,
    sakuraWalkFrameHeight,
    sakuraX, sakuraY,
    sakuraScale, sakuraFacing
  );
}

// ==================== 櫻跌倒 ====================

function drawSakuraFall() {
  let elapsed = millis() - sakuraStateStartTime;

  let frame = min(
    floor(elapsed / sakuraAnimationSpeed),
    sakuraFallFrameCount - 1
  );

  drawSpriteFrame(
    sakuraFallImg, frame,
    sakuraFallFrameCount,
    sakuraFallFrameHeight,
    sakuraX, sakuraY,
    sakuraScale, sakuraFacing
  );
}

// ==================== 櫻卡牌 ====================

function drawSakuraCard() {
  let frame =
    floor(
      (millis() - sakuraStateStartTime) /
      sakuraAnimationSpeed
    ) % sakuraCardFrameCount;

  drawSpriteFrame(
    sakuraCardImg, frame,
    sakuraCardFrameCount,
    sakuraCardFrameHeight,
    sakuraX, sakuraY,
    sakuraScale, sakuraFacing
  );
}

// ==================== 櫻動畫顯示 ====================

function drawSakura() {

  if (gameState === "quiz") {
    drawSakuraStand();
    return;
  }

  if (gameState === "result") {

    // 【修改】跌倒播完就站起來
    if (sakuraResultFalling) {
      drawSakuraFall();
    } else {
      drawSakuraStand();
    }

    return;
  }

  if (gameState === "over") {
    drawSakuraStand();
    return;
  }

  if (sakuraState === "fall") {
    drawSakuraFall();
  } else if (sakuraState === "card") {
    drawSakuraCard();
  } else if (sakuraState === "walk") {
    drawSakuraWalk();
  } else {
    drawSakuraStand();
  }
}

// ==================== 櫻防禦 ====================

function updateSakuraDefense() {
  if (!cardHeld) {
    sakuraDefense = false;
    return;
  }

  let moonFacingSakura =
    (characterX < sakuraX && facing === 1) ||
    (characterX > sakuraX && facing === -1);

  sakuraDefense =
    moonFacingSakura &&
    sakuraState !== "fall";
}

// ==================== 月格擋 ====================

function updateMoonBlock() {
  if (
    !sakuraManualCard ||
    sakuraState === "fall"
  ) {
    moonBlocking = false;
    return;
  }

  let sakuraFacingMoon =
    (sakuraX > characterX && sakuraFacing === -1) ||
    (sakuraX < characterX && sakuraFacing === 1);

  moonBlocking = sakuraFacingMoon;

  if (moonBlocking) {
    facing = sakuraX > characterX ? 1 : -1;
  }
}

// ==================== 小狼攻擊順序 ====================

function createWolfAttackSequence() {
  wolfAttackSequence = [];

  for (let i = 0; i < 11; i++) {
    wolfAttackSequence.push(i);
  }

  for (let i = 0; i < 4; i++) {
    wolfAttackSequence.push(11);
    wolfAttackSequence.push(12);
  }
}

// ==================== 小狼跟隨 ====================

function updateWolfPosition() {
  let targetX =
    sakuraX - sakuraFacing * wolfFollowDistance;

  wolfX = lerp(
    wolfX,
    targetX,
    wolfFollowSpeed
  );

  wolfY = lerp(
    wolfY,
    sakuraY,
    wolfFollowSpeed
  );

  wolfFacing = sakuraFacing;
}

// ==================== 小狼飛行 ====================

function updateWolfFlight() {
  if (sakuraManualCard) return;

  if (sakuraIsMoving) {
    if (
      wolfState !== "flyStart" &&
      wolfState !== "flyLoop"
    ) {
      wolfState = "flyStart";
      wolfFlyStartTime = millis();
    }

    if (wolfState === "flyStart") {
      if (
        millis() - wolfFlyStartTime >=
        wolfFlyFrameSpeed * 2
      ) {
        wolfState = "flyLoop";
      }
    }
  } else {
    if (
      wolfState === "flyStart" ||
      wolfState === "flyLoop"
    ) {
      wolfState = "flyLand";
      wolfFlyLandTime = millis();
    }

    if (wolfState === "flyLand") {
      if (
        millis() - wolfFlyLandTime >=
        wolfFlyFrameSpeed * 3
      ) {
        wolfState = "stand";
        wolfStateStartTime = millis();
      }
    }
  }
}

// ==================== 小狼攻擊 ====================

function updateWolfAttack() {
  let shouldAttack =
    sakuraManualCard &&
    sakuraState !== "fall";

  if (shouldAttack) {
    if (!wolfWasAttacking) {
      wolfAttackStartTime = millis();
      wolfWasAttacking = true;
    }

    wolfState = "attack";
    wolfFacing = characterX < wolfX ? -1 : 1;
  } else if (wolfWasAttacking) {
    wolfWasAttacking = false;
    wolfState =
      sakuraIsMoving ? "flyLoop" : "stand";
    wolfStateStartTime = millis();
  }
}

// ==================== 小狼攻擊影格 ====================

function getWolfAttackFrame() {
  let elapsed = millis() - wolfAttackStartTime;

  let duration =
    wolfAttackSequence.length *
    wolfAttackFrameSpeed;

  let sequenceTime = elapsed % duration;

  let index = floor(
    sequenceTime / wolfAttackFrameSpeed
  );

  return {
    frame: wolfAttackSequence[index],
    sequenceIndex: index,
    sequenceTime: sequenceTime
  };
}

// ==================== 小狼站立 ====================

function drawWolfStand() {
  let frame =
    floor(millis() / wolfStandFrameSpeed) %
    wolfStandFrameCount;

  drawSpriteFrame(
    wolfStandImg, frame,
    wolfStandFrameCount, 86,
    wolfX, wolfY,
    wolfScale, wolfFacing
  );
}

// ==================== 小狼飛行 ====================

function drawWolfFly() {
  let frame = 0;

  if (wolfState === "flyStart") {
    frame = min(
      floor(
        (millis() - wolfFlyStartTime) /
        wolfFlyFrameSpeed
      ),
      1
    );
  } else if (wolfState === "flyLoop") {
    frame = 2;
  } else if (wolfState === "flyLand") {
    frame = 2 - min(
      floor(
        (millis() - wolfFlyLandTime) /
        wolfFlyFrameSpeed
      ),
      2
    );
  }

  drawSpriteFrame(
    wolfFlyImg, frame,
    wolfFlyFrameCount, 157,
    wolfX, wolfY,
    wolfScale, wolfFacing
  );
}

// ==================== 小狼攻擊動畫 ====================

function drawWolfAttack() {
  let data = getWolfAttackFrame();

  drawSpriteFrame(
    wolfAttackImg,
    data.frame,
    wolfAttackFrameCount,
    130,
    wolfX, wolfY,
    wolfScale, wolfFacing
  );
}

// ==================== 小狼雷擊 ====================

function getWolfLightningFrame() {
  let data = getWolfAttackFrame();

  if (data.sequenceIndex < 11) {
    return min(
      floor(data.sequenceIndex / 4),
      2
    );
  }

  let elapsed =
    data.sequenceTime -
    11 * wolfAttackFrameSpeed;

  let loopDuration =
    3 * wolfAttackFrameSpeed;

  return 3 + floor(
    (elapsed % loopDuration) /
    wolfAttackFrameSpeed
  );
}

function drawWolfLightning() {
  if (gameState !== "play") return;
  if (!wolfWasAttacking) return;

  drawSpriteFrame(
    wolfLightningImg,
    getWolfLightningFrame(),
    wolfLightningFrameCount,
    184,
    characterX,
    characterY - 45 * characterScale,
    wolfScale,
    1
  );
}

// ==================== 小狼顯示 ====================

function drawWolf() {
  if (gameState !== "play") {
    drawWolfStand();
    return;
  }

  if (wolfState === "attack") {
    drawWolfAttack();
  } else if (
    wolfState === "flyStart" ||
    wolfState === "flyLoop" ||
    wolfState === "flyLand"
  ) {
    drawWolfFly();
  } else {
    drawWolfStand();
  }
}

// ==================== 碰撞 ====================

function checkCharacterCollision() {
  if (gameState !== "play") return;
  if (!collisionReady) return;
  if (sakuraState === "fall") return;

  if (
    abs(characterX - sakuraX) <=
    COLLISION_DISTANCE
  ) {
    collisionReady = false;
    startQuiz();
  }
}

// ==================== 開始答題 ====================

function startQuiz() {
  gameState = "quiz";

  spaceHeld = false;
  cardHeld = false;
  sakuraManualCard = false;
  sakuraDefense = false;
  moonBlocking = false;
  wolfWasAttacking = false;

  // 碰撞後立即退回原本位置
  resetCharacterPositions();

  sakuraChoice = 0;
  moonChoice = 0;

  sakuraAnswered = false;
  moonAnswered = false;

  sakuraWrong = false;
  moonWrong = false;

  moonResultFalling = false;
  sakuraResultFalling = false;

  resultMessage = "";
  resultHasWinner = false;
  roundWinner = "";

  let index = floor(
    random(questionBank.length)
  );

  if (questionBank.length > 1) {
    while (index === lastQuestionIndex) {
      index = floor(
        random(questionBank.length)
      );
    }
  }

  lastQuestionIndex = index;
  currentQuestion = questionBank[index];
}

// ==================== 選擇答案 ====================

function moveQuizChoice(player, direction) {
  if (gameState !== "quiz") return;

  if (
    player === "sakura" &&
    sakuraAnswered
  ) return;

  if (
    player === "moon" &&
    moonAnswered
  ) return;

  if (player === "sakura") {
    sakuraChoice =
      (sakuraChoice + direction + 4) % 4;
  } else {
    moonChoice =
      (moonChoice + direction + 4) % 4;
  }
}

// ==================== 震動 ====================

function triggerScreenShake() {
  shakeStartTime = millis();
}

// ==================== 確認答案 ====================

function submitQuizAnswer(player) {
  if (gameState !== "quiz") return;

  let selectedAnswer;

  if (player === "sakura") {
    if (sakuraAnswered) return;
    selectedAnswer = sakuraChoice;
  } else {
    if (moonAnswered) return;
    selectedAnswer = moonChoice;
  }

  let isCorrect =
    selectedAnswer === currentQuestion.answer;

  // 答對：加一分
  if (isCorrect) {
    resultHasWinner = true;
    roundWinner = player;

    if (player === "sakura") {
      sakuraScore++;
      resultMessage = "櫻答對了！+1 分";
    } else {
      moonScore++;
      resultMessage = "月答對了！+1 分";
    }

    finishQuiz();
    return;
  }

  // 答錯：扣一分，可以負分
  triggerScreenShake();

  if (player === "sakura") {
    sakuraScore--;
    sakuraWrong = true;
    sakuraAnswered = true;
  } else {
    moonScore--;
    moonWrong = true;
    moonAnswered = true;
  }

  // 兩人都答錯
  if (
    sakuraAnswered &&
    moonAnswered
  ) {
    resultHasWinner = false;
    roundWinner = "";

    resultMessage =
      "雙方都答錯！各扣 1 分";

    finishQuiz();
  }
}

// ==================== 產生彩帶 ====================

function createConfetti() {
  confettiParticles = [];

  for (let i = 0; i < 180; i++) {
    confettiParticles.push({
      x: random(0, BASE_W),
      y: random(-BASE_H, -20),
      vx: random(-1.5, 1.5),
      vy: random(2, 5),
      w: random(6, 13),
      h: random(10, 22),
      color: random(confettiColors),
      angle: random(TWO_PI),
      rotationSpeed: random(-0.08, 0.08)
    });
  }
}

// ==================== 彩帶顯示 ====================

function drawConfetti() {
  if (gameState !== "result") return;
  if (!resultHasWinner) return;

  push();
  rectMode(CENTER);
  noStroke();

  for (let particle of confettiParticles) {
    particle.x += particle.vx;
    particle.y += particle.vy;
    particle.angle += particle.rotationSpeed;

    if (particle.y > BASE_H + 20) {
      particle.y = random(-100, -20);
      particle.x = random(0, BASE_W);
    }

    push();
    translate(particle.x, particle.y);
    rotate(particle.angle);

    fill(particle.color);

    rect(
      0, 0,
      particle.w,
      particle.h,
      2
    );

    pop();
  }

  pop();
}

// ==================== 答題結束 ====================

function finishQuiz() {
  gameState = "result";
  resultStartTime = millis();

  spaceHeld = false;
  cardHeld = false;
  sakuraManualCard = false;
  sakuraDefense = false;
  moonBlocking = false;
  wolfWasAttacking = false;

  if (resultHasWinner) {
    createConfetti();
  } else {
    confettiParticles = [];
  }

  // 【修改】決定誰要跌倒
  // 月答錯，或櫻答對，月跌倒
  moonResultFalling =
    moonWrong || roundWinner === "sakura";

  // 櫻答錯，或月答對，櫻跌倒
  sakuraResultFalling =
    sakuraWrong || roundWinner === "moon";

  // 重新計算跌倒動畫起點
  if (moonResultFalling) {
    moonFallStartTime = millis();
  }

  if (sakuraResultFalling) {
    sakuraState = "fall";
    sakuraStateStartTime = millis();
  } else {
    sakuraState = "stand";
  }

  wolfState = "stand";
  wolfStateStartTime = millis();
}

// ==================== 更新答題結果 ====================

function updateQuizResult() {
  if (gameState !== "result") return;

  let now = millis();

  // 【重點修改】
  // 月的四格跌倒動畫播放完成後，
  // 立即恢復站立姿勢
  if (moonResultFalling) {
    let moonFallDuration =
      moonFallFrameCount * moonFallFrameSpeed;

    if (
      now - moonFallStartTime >=
      moonFallDuration
    ) {
      moonResultFalling = false;
      characterState = "stand";
      stateStartTime = now;
    }
  }

  // 【重點修改】
  // 櫻的三格跌倒動畫播放完成後，
  // 立即恢復站立姿勢
  if (sakuraResultFalling) {
    let sakuraFallDuration =
      sakuraFallFrameCount *
      sakuraAnimationSpeed;

    if (
      now - sakuraStateStartTime >=
      sakuraFallDuration
    ) {
      sakuraResultFalling = false;
      sakuraState = "stand";
      sakuraStateStartTime = now;
    }
  }

  // 彩帶／結果總共持續三秒
  if (
    now - resultStartTime <
    RESULT_DURATION
  ) {
    return;
  }

  confettiParticles = [];

  moonResultFalling = false;
  sakuraResultFalling = false;

  resetCharacterPositions();

  sakuraWrong = false;
  moonWrong = false;

  sakuraAnswered = false;
  moonAnswered = false;

  if (sakuraScore >= WIN_SCORE) {
    gameWinner = "櫻";
    gameState = "over";
    return;
  }

  if (moonScore >= WIN_SCORE) {
    gameWinner = "月";
    gameState = "over";
    return;
  }

  gameState = "play";
  collisionReady = true;
}

// ==================== 分數 ====================

function drawScores() {
  push();

  textStyle(BOLD);
  textSize(30);

  textAlign(LEFT, CENTER);
  fill("#FFB4D5");

  text(
    "櫻  " + sakuraScore + "/" + WIN_SCORE,
    35, 45
  );

  textAlign(RIGHT, CENTER);
  fill("#A9D9FF");

  text(
    "月  " + moonScore + "/" + WIN_SCORE,
    BASE_W - 35, 45
  );

  pop();
}

// ==================== 答題頭像 ====================

function drawQuizAvatar(player, x, y) {
  let img;
  let frameCount;
  let frameHeight;

  if (player === "sakura") {
    img = sakuraStandImg;
    frameCount = sakuraStandFrameCount;
    frameHeight = sakuraStandFrameHeight;
  } else {
    img = standImg;
    frameCount = 3;
    frameHeight = 136;
  }

  let frameWidth = img.width / frameCount;

  push();

  stroke(
    player === "sakura"
      ? "#FF9AC8"
      : "#8FCBFF"
  );

  strokeWeight(3);
  fill("#FFFFFF");
  ellipse(x, y, 68, 68);

  let avatarScale = min(
    58 / frameWidth,
    58 / frameHeight
  );

  image(
    img,
    x, y,
    frameWidth * avatarScale,
    frameHeight * avatarScale,
    0, 0,
    frameWidth,
    frameHeight
  );

  pop();
}

// ==================== 答題畫面 ====================

function drawQuiz() {
  if (gameState !== "quiz") return;

  push();

  noStroke();
  fill(8, 13, 35, 190);

  rectMode(CORNER);
  rect(0, 0, BASE_W, BASE_H);

  rectMode(CENTER);

  fill("#FFFFFF");
  stroke("#D9D5FF");
  strokeWeight(4);

  rect(
    BASE_W / 2,
    135,
    850,
    125,
    22
  );

  noStroke();
  fill("#252342");

  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  textSize(28);

  text(
    currentQuestion.question,
    BASE_W / 2,
    135,
    790,
    105
  );

  drawPlayerQuizPanel("sakura", 355, 420);
  drawPlayerQuizPanel("moon", 1011, 420);

  pop();
}

// ==================== 玩家選項 ====================

function drawPlayerQuizPanel(player, x, y) {
  let isSakura = player === "sakura";

  let borderColor =
    isSakura ? "#FF91C4" : "#78C6FF";

  let selectedColor =
    isSakura ? "#FFD4E7" : "#CDEBFF";

  let selectedIndex =
    isSakura ? sakuraChoice : moonChoice;

  let alreadyAnswered =
    isSakura ? sakuraAnswered : moonAnswered;

  push();

  rectMode(CENTER);

  stroke(borderColor);
  strokeWeight(4);
  fill("#FFFFFF");

  rect(x, y, 460, 450, 24);

  drawQuizAvatar(
    player,
    x - 170,
    y - 172
  );

  noStroke();
  fill("#292344");

  textAlign(LEFT, CENTER);
  textSize(24);
  textStyle(BOLD);

  text(
    isSakura ? "櫻的答案" : "月的答案",
    x - 125,
    y - 172
  );

  for (let i = 0; i < 4; i++) {
    let optionY = y - 90 + i * 75;

    if (i === selectedIndex) {
      fill(selectedColor);
      stroke(borderColor);
      strokeWeight(4);
    } else {
      fill("#F7F7FC");
      stroke("#DDDEEA");
      strokeWeight(2);
    }

    rect(x, optionY, 390, 59, 12);

    noStroke();
    fill("#292344");

    textSize(20);
    textStyle(NORMAL);
    textAlign(CENTER, CENTER);

    text(
      currentQuestion.options[i],
      x, optionY,
      360, 52
    );
  }

  noStroke();
  fill("#44445F");

  textAlign(CENTER, CENTER);
  textSize(17);

  if (alreadyAnswered) {
    text(
      "答錯！-1 分，等待另一方",
      x,
      y + 196
    );
  } else {
    text(
      isSakura
        ? "W / S 選擇　A / D 確認"
        : "↑ / ↓ 選擇　空白鍵確認",
      x,
      y + 196
    );
  }

  pop();
}

// ==================== 結果文字 ====================

function drawQuizResult() {
  if (gameState !== "result") return;

  push();

  rectMode(CENTER);

  stroke(
    resultHasWinner ? "#E3DAFF" : "#FF9A9A"
  );

  strokeWeight(4);
  fill("#FFFFFF");

  rect(
    BASE_W / 2,
    145,
    750,
    115,
    20
  );

  noStroke();

  fill(
    resultHasWinner ? "#292344" : "#B93C4B"
  );

  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  textSize(30);

  text(
    resultMessage,
    BASE_W / 2,
    145
  );

  pop();
}

// ==================== 勝利畫面 ====================

function drawGameOver() {
  if (gameState !== "over") return;

  push();

  rectMode(CORNER);
  noStroke();
  fill(8, 10, 30, 210);

  rect(0, 0, BASE_W, BASE_H);

  textAlign(CENTER, CENTER);
  textStyle(BOLD);

  fill("#FFF0B0");
  textSize(55);

  text(
    gameWinner + "獲得勝利！",
    BASE_W / 2,
    BASE_H / 2 - 85
  );

  fill("#FFFFFF");
  textSize(32);

  text(
    "櫻 " + sakuraScore +
    "　：　" +
    moonScore + " 月",
    BASE_W / 2,
    BASE_H / 2
  );

  textStyle(NORMAL);
  textSize(22);

  text(
    "按 R 重新開始遊戲",
    BASE_W / 2,
    BASE_H / 2 + 90
  );

  pop();
}

// ==================== 重新開始 ====================

function restartGame() {
  sakuraScore = 0;
  moonScore = 0;

  gameState = "play";
  gameWinner = "";

  resultMessage = "";
  resultHasWinner = false;
  roundWinner = "";

  sakuraChoice = 0;
  moonChoice = 0;

  sakuraAnswered = false;
  moonAnswered = false;

  sakuraWrong = false;
  moonWrong = false;

  moonResultFalling = false;
  sakuraResultFalling = false;

  currentQuestion = null;
  lastQuestionIndex = -1;

  spaceHeld = false;
  cardHeld = false;

  sakuraManualCard = false;
  sakuraDefense = false;
  moonBlocking = false;

  wolfWasAttacking = false;

  confettiParticles = [];
  shakeStartTime = -10000;

  collisionReady = true;

  resetCharacterPositions();
}

// ==================== 操作說明 ====================

function drawControls() {
  let panelWidth = 220;
  let panelHeight = 120;
  let margin = 25;

  push();

  rectMode(CORNER);
  noStroke();

  fill(10, 15, 40, 175);

  rect(
    margin,
    BASE_H - panelHeight - margin,
    panelWidth,
    panelHeight,
    14
  );

  fill("#FFFFFF");
  textAlign(LEFT, TOP);

  textSize(18);
  textStyle(BOLD);

  text(
    "櫻｜操作",
    margin + 16,
    BASE_H - panelHeight - margin + 12
  );

  textStyle(NORMAL);
  textSize(14);

  text(
    "A　向左移動\nD　向右移動\nS　使用卡牌",
    margin + 16,
    BASE_H - panelHeight - margin + 42
  );

  fill(10, 15, 40, 175);

  rect(
    BASE_W - panelWidth - margin,
    BASE_H - panelHeight - margin,
    panelWidth,
    panelHeight,
    14
  );

  fill("#FFFFFF");
  textStyle(BOLD);
  textSize(18);

  text(
    "月｜操作",
    BASE_W - panelWidth - margin + 16,
    BASE_H - panelHeight - margin + 12
  );

  textStyle(NORMAL);
  textSize(14);

  text(
    "← →　移動\n↑　手刀\n空白鍵　使用卡牌",
    BASE_W - panelWidth - margin + 16,
    BASE_H - panelHeight - margin + 42
  );

  pop();
}

// ==================== 鍵盤按下 ====================

function keyPressed() {

  if (gameState === "over") {
    if (key === "r" || key === "R") {
      restartGame();
    }
    return false;
  }

  if (gameState === "quiz") {

    if (keyCode === UP_ARROW) {
      moveQuizChoice("moon", -1);
    } else if (keyCode === DOWN_ARROW) {
      moveQuizChoice("moon", 1);
    } else if (keyCode === 32) {
      submitQuizAnswer("moon");
    } else if (
      key === "w" ||
      key === "W"
    ) {
      moveQuizChoice("sakura", -1);
    } else if (
      key === "s" ||
      key === "S"
    ) {
      moveQuizChoice("sakura", 1);
    } else if (
      key === "a" ||
      key === "A" ||
      key === "d" ||
      key === "D"
    ) {
      submitQuizAnswer("sakura");
    }

    return false;
  }

  if (gameState === "result") {
    return false;
  }

  if (keyCode === LEFT_ARROW) {
    facing = -1;
  }

  if (keyCode === RIGHT_ARROW) {
    facing = 1;
  }

  if (keyCode === UP_ARROW) {
    if (!spaceHeld) {
      spaceHeld = true;
      attackStartTime = millis();
      lastAttackCycle = -1;
    }
  }

  if (keyCode === 32) {
    if (!cardHeld) {
      cardHeld = true;
      cardStartTime = millis();
    }
  }

  if (
    key === "s" ||
    key === "S"
  ) {
    if (
      !sakuraManualCard &&
      !sakuraDefense &&
      sakuraState !== "fall"
    ) {
      sakuraManualCard = true;
      sakuraState = "card";
      sakuraStateStartTime = millis();
    }
  }

  if (
    keyCode === LEFT_ARROW ||
    keyCode === RIGHT_ARROW ||
    keyCode === UP_ARROW ||
    keyCode === DOWN_ARROW ||
    keyCode === 32
  ) {
    return false;
  }
}

// ==================== 鍵盤放開 ====================

function keyReleased() {
  if (gameState !== "play") return false;

  if (keyCode === UP_ARROW) {
    spaceHeld = false;
  }

  if (keyCode === 32) {
    cardHeld = false;
    sakuraDefense = false;
  }

  if (
    key === "s" ||
    key === "S"
  ) {
    sakuraManualCard = false;
    wolfWasAttacking = false;

    wolfState =
      sakuraIsMoving ? "flyLoop" : "stand";

    wolfStateStartTime = millis();
  }

  if (
    keyCode === LEFT_ARROW ||
    keyCode === RIGHT_ARROW ||
    keyCode === UP_ARROW ||
    keyCode === DOWN_ARROW ||
    keyCode === 32
  ) {
    return false;
  }
}

// ==================== 畫面震動 ====================

function getShakeOffset() {
  let elapsed = millis() - shakeStartTime;

  if (elapsed >= SHAKE_DURATION) {
    return { x: 0, y: 0 };
  }

  let strength =
    SHAKE_POWER *
    (1 - elapsed / SHAKE_DURATION);

  return {
    x: random(-strength, strength),
    y: random(-strength, strength)
  };
}

// ==================== 主程式 ====================

function draw() {
  background("#101C45");
  calculateScale();

  if (gameState === "play") {
    updateMovement();
    updateCharacterState();

    updateSakuraMovement();
    updateSakuraDefense();
    updateSakuraState();

    updateMoonBlock();

    updateWolfPosition();
    updateWolfAttack();
    updateWolfFlight();

    checkCharacterCollision();
  } else if (gameState === "result") {
    updateQuizResult();
  }

  push();

  translate(offsetX, offsetY);
  scale(sceneScale);

  let shake = getShakeOffset();
  translate(shake.x, shake.y);

  drawBackground();

  drawCharacter();
  drawWolf();
  drawSakura();

  drawWolfLightning();

  drawControls();
  drawScores();

  if (gameState === "quiz") {
    drawQuiz();
  }

  if (gameState === "result") {
    drawConfetti();
    drawQuizResult();
  }

  if (gameState === "over") {
    drawGameOver();
  }

  pop();
}

// ==================== 視窗縮放 ====================

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  calculateScale();
}
