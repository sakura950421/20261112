---
title: 20261112.md

---

---
title: Untitled

---

# 20261112作業製作
---

### 1 ASU 畫面

📷 **貼上 ASU 自動切圖後的畫面**（紅框／框選範圍）：

![image](https://hackmd.io/_uploads/B1M8JWdRGe.png)
![image](https://hackmd.io/_uploads/SkoD1-_Azl.png)
![image](https://hackmd.io/_uploads/rys_J-OCfg.png)
![image](https://hackmd.io/_uploads/SkntyWd0fg.png)


✏️ 有沒有使用 **Split（剪刀）**？切了哪裡？為什麼？
> ![image](https://hackmd.io/_uploads/SyLh-j_pzg.png)

切了最後一張圖片，因為她跌倒動作可能因為太靠近，都判定成一張

### 2 每個動作切了幾張

| 動作 | 資料夾 | 張數 | 順序是否正確 |
|---|---|---|---|
| 停止 stop | 月/stand/stand.png | 3 | ☑ 是 |
|飛行起步 | 月/jump/起步.png | 2 | ☑ 是 |
| 飛行 fly | 月/jump/飛行.png | 1 | ☑ 是 |
| 降落 landing | 月/jump/降落.png | 1 | ☑ 是 |
| 手刀 attack | 月/手刀/手刀.png | 5 | ☑ 是 |
| 使用卡牌 card | 月/使用卡牌/使用卡牌.png | 7 | ☑ 是 |

📷 **貼上其中一個動作匯出後的小圖**（例如 stop 資料夾內的 0.png～n.png）：

![image](https://hackmd.io/_uploads/rk2QfodpMe.png)0

### 暫停![stand](https://hackmd.io/_uploads/BJJPgZuRze.png)


### 走路![降落](https://hackmd.io/_uploads/ByrtgW_Aze.png)
![飛行](https://hackmd.io/_uploads/HkEce-OAGe.png)
![起步](https://hackmd.io/_uploads/SJ2qgZO0Mg.png)
因應動作需求而切割成三張照片

---

## 3. SpriteTracer 合併紀錄

> 順序提醒：**Settings 設透明 → Open（Shift 全選）→ Balance → Combine → 存檔**

📷 **貼上 Settings 勾選 Transparent 的畫面**：

![image](https://hackmd.io/_uploads/H1So-Zd0zl.png)
![image](https://hackmd.io/_uploads/H1wC-ZOAMg.png)
![image](https://hackmd.io/_uploads/Byf-f-_AGl.png)
![image](https://hackmd.io/_uploads/r1S7GbuCMg.png)



### 3-1 每個動作的合併過程

#### 動作：飛

📷 **合併後的長條圖**：

![降落](https://hackmd.io/_uploads/BkzEUoOpfx.png)
![飛行](https://hackmd.io/_uploads/H1Y4Lj_aMg.png)
![起步](https://hackmd.io/_uploads/ByJHUoupGg.png)
因動作需求所以是分開的

#### 動作：站立

📷 **合併後的長條圖**：

![stand](https://hackmd.io/_uploads/rJKULo_Tfl.png)


#### 動作：push（發功）

📷 **合併後的長條圖**：

![手刀](https://hackmd.io/_uploads/Hy5DUsd6zg.png)


#### 動作：to（特效）

📷 **合併後的長條圖**：

![使用卡牌](https://hackmd.io/_uploads/Skqu8iuafe.png)


> 其他動作（run、smile、fall、touch…）請自行複製上面的格式新增。

### 3-2 ⭐ 最重要：合併後的尺寸表

> 把滑鼠移到合併圖上可看到尺寸。**這張表就是下一步給 AI 的資料**。

| 動作 | 圖檔路徑（從 sketch.js 角度） | 總寬 | 高 | 張數 | 單格寬（總寬 ÷ 張數） |
|---|---|---|---|---|---|
| 站立 | `1/站立/站立.png` | 376 | 136 | 4| 94 |
| 跳躍 | `1/跳躍/起步.png`、`1/跳躍/飛行.png`、`1/跳躍/降落.png` | 219、107、103 | 134、134、129 | 2、1、1 | 109.5、107、103 |
| 手刀 | `1/手刀/手刀.png` | 705 | 170 | 5 | 141 |
| 使用卡牌 | `1/使用卡牌/使用卡牌.png` | 1192 | 144 | 4 | 298 |
| 擋 | `1/擋/擋.png` | 189 | 124 | 3 | 63 |

✏️ 檢查：單格寬是否為整數？（不是整數＝張數或寬度記錯了）

> 是

---

## 4. 與 AI 對話紀錄

> 每個步驟都要記錄：**我問了什麼、AI 產生什麼、結果如何**。
> 使用 `:::spoiler` 做下拉選單，內容多時更整齊。


#### 詢問AI_1

:::spoiler 
```TE!

要出現對話框，可能兩個人碰撞到就說出問題這樣，那我在想小櫻和月碰撞到就跳出問題，右邊是月的，左邊是櫻的，讓兩個人比賽誰先答出答案。然後唯要改的就是操控提示欄要左右交換，月在右邊櫻在左邊，然後初始佔位也交換，月在右邊櫻在左邊。然後兩個人碰到會停在原地，跳出題目，在畫面中間上方，然後有四個選項，月的是藍色框框，然後月的頭像在框框旁邊，藉由上鍵和下鍵上下選擇答案，空白鍵表示確認，櫻則是粉色框框，然後旁邊有櫻的頭像代表櫻的框框，然後按w代表上，案s代表下，以此來選擇答案，案a或d表示確定，記得，此時腳色都只能跑stand(站著)的樣子，，不能走動攻擊。最先答對的得一分，然後畫面就回到原本的，另外，左上和右上顯示各自的分數，用0/5的方式，當有一方達到五分，遊戲及結束。答錯的那方要表現出被擊敗的動作，月是用擋，櫻是用跌倒，答完題維持被擊敗動作三秒，當答錯者回到站立姿勢，雙方才能繼續操控。已經貼上我目前代碼

```

:::

#### 詢問AI_2
:::spoiler 
```tex!
答對了新增噴灑彩帶，答錯了畫面要震動並扣分，分數可以負分

```
:::
#### 詢問AI_3
:::spoiler 
```tex!
碰在一起跳出題目的同時，角色要自動退回原本位置，然後櫻答對時，月跌倒改用月資料夾裡的跌倒資料夾的跌倒。667*156，四張圖片

```
:::

#### 詢問AI_程式碼_1

:::spoiler 

```javascript=


// ======================================================
// 月、櫻、小狼｜雙人競速答題遊戲
// 保留原有動畫、攻擊、防禦、跟隨與雷擊功能
// 新增碰撞答題、雙人選項、計分、勝負與懲罰
// ======================================================

// ======================================================
// 1. 畫面設定（保留原本數值）
// ======================================================

const BASE_W = 1366;
const BASE_H = 768;

let sceneScale = 1;
let offsetX = 0;
let offsetY = 0;

let characterScale = 2.4;
let sakuraScale = 2.4;
let wolfScale = 2.4;


// ======================================================
// 2. 月的圖片與基本設定（保留）
// ======================================================

let standImg, startImg, flyImg, landingImg;
let attackImg, cardImg, blockImg;

let characterX, characterY;
let moveSpeed = 4 * characterScale;
let facing = 1;

let characterState = "stand";
let stateStartTime = 0;
let animationSpeed = 150;

// 月的手刀
let spaceHeld = false;
let attackStartTime = 0;
let attackFrameCount = 5;
let attackFrameWidth = 705 / 5;
let attackFrameHeight = 170;
let attackFrameSpeed = 120;
let attackPauseTime = 350;
let lastAttackCycle = -1;

// 月的卡牌
let cardHeld = false;
let cardStartTime = 0;
let cardFrameCount = 7;
let cardFrameWidth = 1192 / 7;
let cardFrameHeight = 144;
let cardFrameSpeed = 120;
let cardPauseTime = 350;

// 月的格擋
let moonBlocking = false;
let moonDialogue = "";


// ======================================================
// 3. 櫻的圖片與基本設定（保留）
// ======================================================

let sakuraStandImg, sakuraWalkImg;
let sakuraFallImg, sakuraCardImg;

let sakuraX, sakuraY;
let sakuraFacing = -1;
let sakuraSpeed = 4 * sakuraScale;

let sakuraState = "stand";
let sakuraStateStartTime = 0;
let sakuraIsMoving = false;

let sakuraStandFrameCount = 4;
let sakuraStandFrameHeight = 95;

let sakuraWalkFrameCount = 3;
let sakuraWalkFrameHeight = 92;

let sakuraFallFrameCount = 3;
let sakuraFallFrameHeight = 98;

let sakuraCardFrameCount = 11;
let sakuraCardFrameHeight = 133;

let sakuraAnimationSpeed = 150;

let sakuraManualCard = false;
let sakuraDefense = false;
let sakuraDialogue = "";


// ======================================================
// 4. 小狼的圖片與動畫設定（保留）
// ======================================================

let wolfStandImg, wolfAttackImg;
let wolfLightningImg, wolfFlyImg;

let wolfX, wolfY;
let wolfFacing = -1;

let wolfFollowDistance = 220;
let wolfFollowSpeed = 0.18;

let wolfState = "stand";
let wolfStateStartTime = 0;

let wolfStandFrameCount = 10;
let wolfStandFrameWidth = 835 / 10;
let wolfStandFrameHeight = 86;
let wolfStandFrameSpeed = 120;

let wolfAttackFrameCount = 13;
let wolfAttackFrameWidth = 1347 / 13;
let wolfAttackFrameHeight = 130;
let wolfAttackFrameSpeed = 120;
let wolfAttackRepeatCount = 4;
let wolfAttackStartTime = 0;
let wolfAttackSequence = [];
let wolfWasAttacking = false;

let wolfLightningFrameCount = 6;
let wolfLightningFrameWidth = 637 / 6;
let wolfLightningFrameHeight = 184;

let wolfFlyFrameCount = 3;
let wolfFlyFrameWidth = 262 / 3;
let wolfFlyFrameHeight = 157;
let wolfFlyFrameSpeed = 120;
let wolfFlyStartTime = 0;
let wolfFlyLandTime = 0;


// ======================================================
// 5.【新增】答題遊戲設定
// ======================================================

// 遊戲狀態：
// play   = 正常操作
// quiz   = 雙人答題
// result = 答題結束，等待懲罰動畫
// over   = 遊戲結束
let gameState = "play";

// 雙方目前分數
let sakuraScore = 0;
let moonScore = 0;

// 先得到 5 分的人獲勝
const WIN_SCORE = 5;

// 兩人碰撞判定距離
const COLLISION_DISTANCE = 115;

// 答錯後等待 3000 毫秒，也就是 3 秒
const PENALTY_TIME = 3000;

// 記錄答題結束的時間
let resultStartTime = 0;

// 記錄目前的題目
let currentQuestion = null;

// 記錄上一題的編號，避免連續重複
let lastQuestionIndex = -1;

// 雙方目前選擇的選項，0 代表第一個
let sakuraChoice = 0;
let moonChoice = 0;

// 記錄是否已答錯
let sakuraWrong = false;
let moonWrong = false;

// 記錄是否已提交答案
let sakuraAnswered = false;
let moonAnswered = false;

// 記錄本題誰獲得分數
let roundWinner = "";

// 記錄最終勝利者
let gameWinner = "";

// 顯示答題結果
let resultMessage = "";

// 避免兩人重疊後連續觸發題目
let collisionReady = true;

// 【新增】固定角色面向對方時的初始方向
// 月在右側，所以面向左邊
// 櫻在左側，所以面向右邊


// ======================================================
// 6.【新增】四選一題庫
// ======================================================

// question：題目
// options：四個答案，依序由上到下
// answer：正確答案編號
// 0 = 第一個、1 = 第二個、2 = 第三個、3 = 第四個

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
    question: "下列哪個行星最接近太陽？",
    options: ["地球", "火星", "金星", "水星"],
    answer: 3
  },
  {
    question: "英文 Apple 的意思是什麼？",
    options: ["蘋果", "香蕉", "葡萄", "橘子"],
    answer: 0
  },
  {
    question: "1 公里等於多少公尺？",
    options: ["10", "100", "1000", "10000"],
    answer: 2
  },
  {
    question: "下列哪個是臺灣最高的山？",
    options: ["陽明山", "雪山", "玉山", "阿里山"],
    answer: 2
  },
  {
    question: "24 ÷ 6 等於多少？",
    options: ["3", "4", "5", "6"],
    answer: 1
  },
  {
    question: "植物主要透過什麼作用製造養分？",
    options: ["呼吸作用", "蒸散作用", "光合作用", "分解作用"],
    answer: 2
  }
];


// ======================================================
// 7. 載入圖片（完全沿用原本路徑）
// ======================================================

function preload() {

  // 月
  standImg = loadImage("月/stand/stand.png");
  startImg = loadImage("月/jump/起步.png");
  flyImg = loadImage("月/jump/飛行.png");
  landingImg = loadImage("月/jump/降落.png");
  attackImg = loadImage("月/手刀/手刀.png");
  cardImg = loadImage("月/使用卡牌/使用卡牌.png");
  blockImg = loadImage("月/擋/擋.png");

  // 櫻
  sakuraStandImg = loadImage("櫻/站著/站.png");
  sakuraWalkImg = loadImage("櫻/走路/走路.png");
  sakuraFallImg = loadImage("櫻/跌倒/跌倒.png");
  sakuraCardImg = loadImage("櫻/使用卡牌/使用卡牌.png");

  // 小狼
  wolfStandImg = loadImage("小狼/站立/站立.png");
  wolfAttackImg = loadImage("小狼/攻擊/攻擊.png");
  wolfLightningImg = loadImage("小狼/雷/雷.png");
  wolfFlyImg = loadImage("小狼/飛/飛.png");
}


// ======================================================
// 8. 建立畫布
// ======================================================

function setup() {

  // 全螢幕畫布
  createCanvas(windowWidth, windowHeight);

  // 圖片以中心點定位
  imageMode(CENTER);

  // 【修改】櫻改在左邊，月改在右邊
  sakuraX = BASE_W * 0.3;
  characterX = BASE_W * 0.7;

  // 保留原本垂直位置
  characterY = BASE_H / 2;
  sakuraY = BASE_H / 2;

  // 【修改】兩人一開始面向對方
  facing = -1;
  sakuraFacing = 1;

  // 小狼維持在櫻的後方
  wolfX = sakuraX - sakuraFacing * wolfFollowDistance;
  wolfY = sakuraY;

  createWolfAttackSequence();
  calculateScale();
}


// ======================================================
// 9. 建立小狼攻擊順序（保留）
// ======================================================

function createWolfAttackSequence() {

  wolfAttackSequence = [];

  // 第 1 到第 11 張各播放一次
  for (let i = 0; i < 11; i++) {
    wolfAttackSequence.push(i);
  }

  // 第 12、13 張重複 4 次
  for (let i = 0; i < wolfAttackRepeatCount; i++) {
    wolfAttackSequence.push(11);
    wolfAttackSequence.push(12);
  }
}


// ======================================================
// 10. 畫面縮放（保留）
// ======================================================

function calculateScale() {

  sceneScale = min(
    windowWidth / BASE_W,
    windowHeight / BASE_H
  );

  offsetX = (windowWidth - BASE_W * sceneScale) / 2;
  offsetY = (windowHeight - BASE_H * sceneScale) / 2;
}


// ======================================================
// 11. 漸層背景（保留原本顏色）
// ======================================================

function drawBackground() {

  let topColor = color("#101C45");
  let bottomColor = color("#39265C");

  for (let y = 0; y < BASE_H; y++) {

    let amount = map(y, 0, BASE_H, 0, 1);
    let currentColor = lerpColor(
      topColor,
      bottomColor,
      amount
    );

    stroke(currentColor);
    line(0, y, BASE_W, y);
  }

  noStroke();
}


// ======================================================
// 12. 月的移動與狀態（保留）
// ======================================================

function isMoving() {
  return keyIsDown(LEFT_ARROW) || keyIsDown(RIGHT_ARROW);
}

function updateMovement() {

  if (keyIsDown(LEFT_ARROW)) {
    characterX -= moveSpeed;
    facing = -1;
  }

  else if (keyIsDown(RIGHT_ARROW)) {
    characterX += moveSpeed;
    facing = 1;
  }

  characterX = constrain(
    characterX,
    70 * characterScale,
    BASE_W - 70 * characterScale
  );
}

function updateCharacterState() {

  if (moonBlocking || cardHeld || spaceHeld) return;

  let moving = isMoving();
  let elapsedTime = millis() - stateStartTime;

  if (characterState === "stand") {

    if (moving) {
      characterState = "start";
      stateStartTime = millis();
    }
  }

  else if (characterState === "start") {

    if (elapsedTime >= animationSpeed * 2) {
      characterState = moving ? "fly" : "landing";
      stateStartTime = millis();
    }
  }

  else if (characterState === "fly") {

    if (!moving) {
      characterState = "landing";
      stateStartTime = millis();
    }
  }

  else if (characterState === "landing") {

    if (moving) {
      characterState = "start";
      stateStartTime = millis();
    }

    else if (elapsedTime >= animationSpeed) {
      characterState = "stand";
      stateStartTime = millis();
    }
  }
}


// ======================================================
// 13. 月的精靈圖片繪製（保留）
// ======================================================

function drawMoonSprite(
  img, sourceX, sourceY,
  sourceWidth, sourceHeight,
  drawWidth, drawHeight
) {

  push();

  translate(characterX, characterY);

  // 向左時水平翻轉
  if (facing === -1) {
    scale(-1, 1);
  }

  image(
    img,
    0, 0,
    drawWidth * characterScale,
    drawHeight * characterScale,
    sourceX, sourceY,
    sourceWidth, sourceHeight
  );

  pop();
}


// ======================================================
// 14. 月的站立、飛行與降落（保留）
// ======================================================

function drawStand() {

  let frame = floor(millis() / animationSpeed) % 3;
  let frameWidth = 376 / 3;

  drawMoonSprite(
    standImg,
    frame * frameWidth, 0,
    frameWidth, 136,
    frameWidth, 136
  );
}

function drawStart() {

  let elapsedTime = millis() - stateStartTime;
  let frame = min(floor(elapsedTime / animationSpeed), 1);
  let frameWidth = 219 / 2;

  drawMoonSprite(
    startImg,
    frame * frameWidth, 0,
    frameWidth, 134,
    frameWidth, 134
  );
}

function drawFly() {

  drawMoonSprite(
    flyImg,
    0, 0,
    107, 134,
    107, 134
  );
}

function drawLanding() {

  drawMoonSprite(
    landingImg,
    0, 0,
    103, 129,
    103, 129
  );
}


// ======================================================
// 15. 月的手刀、卡牌、格擋（保留）
// ======================================================

function drawAttack() {

  let animationDuration =
    attackFrameCount * attackFrameSpeed;

  let cycleDuration =
    animationDuration + attackPauseTime;

  let totalElapsed = millis() - attackStartTime;
  let cycle = floor(totalElapsed / cycleDuration);
  let elapsedTime = totalElapsed % cycleDuration;

  let frame = attackFrameCount - 1;

  if (elapsedTime < animationDuration) {
    frame = floor(elapsedTime / attackFrameSpeed);
  }

  if (
    frame >= 2 &&
    frame <= 3 &&
    cycle !== lastAttackCycle
  ) {
    lastAttackCycle = cycle;
    checkAttackHit();
  }

  drawMoonSprite(
    attackImg,
    frame * attackFrameWidth, 0,
    attackFrameWidth, attackFrameHeight,
    attackFrameWidth, attackFrameHeight
  );
}

function drawCard() {

  let animationDuration =
    cardFrameCount * cardFrameSpeed;

  let cycleDuration =
    animationDuration + cardPauseTime;

  let elapsedTime =
    (millis() - cardStartTime) % cycleDuration;

  let frame = cardFrameCount - 1;

  if (elapsedTime < animationDuration) {
    frame = floor(elapsedTime / cardFrameSpeed);
  }

  drawMoonSprite(
    cardImg,
    frame * cardFrameWidth, 0,
    cardFrameWidth, cardFrameHeight,
    cardFrameWidth, cardFrameHeight
  );
}

function drawBlock() {

  // 原本格擋圖片的第二格
  let frame = 1;
  let blockFrameWidth = 189 / 2;

  drawMoonSprite(
    blockImg,
    frame * blockFrameWidth, 0,
    blockFrameWidth, 124,
    blockFrameWidth, 124
  );
}


// ======================================================
// 16.【修改】月的動畫顯示
// ======================================================

function drawCharacter() {

  // 【新增】答題期間只能站立
  if (gameState === "quiz") {
    drawStand();
    return;
  }

  // 【新增】答錯懲罰期間顯示格擋
  if (gameState === "result" && moonWrong) {
    drawBlock();
    return;
  }

  // 【新增】其他非遊玩狀態固定站立
  if (gameState !== "play") {
    drawStand();
    return;
  }

  // 以下保留原本的動畫優先順序
  if (moonBlocking) {
    drawBlock();
  }

  else if (cardHeld) {
    drawCard();
  }

  else if (spaceHeld) {
    drawAttack();
  }

  else if (characterState === "stand") {
    drawStand();
  }

  else if (characterState === "start") {
    drawStart();
  }

  else if (characterState === "fly") {
    drawFly();
  }

  else if (characterState === "landing") {
    drawLanding();
  }
}


// ======================================================
// 17. 月的手刀命中判定（保留）
// ======================================================

function checkAttackHit() {

  // 【新增】答題或結算時禁止攻擊
  if (gameState !== "play") return;

  if (sakuraState === "fall") return;
  if (sakuraState === "card") return;

  let distanceBetween = abs(characterX - sakuraX);
  let hitDistance = 125 * characterScale;

  if (distanceBetween <= hitDistance) {

    sakuraState = "fall";
    sakuraStateStartTime = millis();
    sakuraDialogue = "好痛";

    sakuraManualCard = false;
    sakuraDefense = false;
  }
}


// ======================================================
// 18. 櫻的移動（保留）
// ======================================================

function updateSakuraMovement() {

  sakuraIsMoving = false;

  if (sakuraState === "fall") return;
  if (sakuraState === "card") return;

  let moving = false;

  if (keyIsDown(65)) {

    sakuraX -= sakuraSpeed;
    sakuraFacing = -1;
    moving = true;
  }

  else if (keyIsDown(68)) {

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
  }

  else if (sakuraState === "walk") {

    sakuraState = "stand";
    sakuraStateStartTime = millis();
  }
}


// ======================================================
// 19. 櫻的動畫狀態（保留）
// ======================================================

function updateSakuraState() {

  let elapsedTime = millis() - sakuraStateStartTime;

  if (sakuraDefense) {

    sakuraState = "card";

    if (characterX < sakuraX) {
      sakuraFacing = -1;
    } else {
      sakuraFacing = 1;
    }

    return;
  }

  if (sakuraManualCard) {
    sakuraState = "card";
    return;
  }

  if (sakuraState === "fall") {

    if (
      elapsedTime >=
      sakuraFallFrameCount * sakuraAnimationSpeed
    ) {
      sakuraState = "stand";
      sakuraStateStartTime = millis();
      sakuraDialogue = "";
    }
  }

  else if (sakuraState === "card") {

    sakuraState = "stand";
    sakuraStateStartTime = millis();
  }
}


// ======================================================
// 20. 櫻的精靈圖片繪製（保留）
// ======================================================

function drawSakuraSprite(
  img, frame, frameCount,
  frameHeight, drawScale
) {

  let frameWidth = img.width / frameCount;

  push();

  translate(sakuraX, sakuraY);

  if (sakuraFacing === -1) {
    scale(-1, 1);
  }

  image(
    img,
    0, 0,
    frameWidth * drawScale,
    frameHeight * drawScale,
    frame * frameWidth, 0,
    frameWidth, frameHeight
  );

  pop();
}


// ======================================================
// 21. 櫻的四種動畫（保留）
// ======================================================

function drawSakuraStand() {

  let frame =
    floor(millis() / sakuraAnimationSpeed) %
    sakuraStandFrameCount;

  drawSakuraSprite(
    sakuraStandImg,
    frame,
    sakuraStandFrameCount,
    sakuraStandFrameHeight,
    sakuraScale
  );
}

function drawSakuraWalk() {

  let elapsedTime = millis() - sakuraStateStartTime;

  let frame =
    floor(elapsedTime / sakuraAnimationSpeed) %
    sakuraWalkFrameCount;

  drawSakuraSprite(
    sakuraWalkImg,
    frame,
    sakuraWalkFrameCount,
    sakuraWalkFrameHeight,
    sakuraScale
  );
}

function drawSakuraFall() {

  let elapsedTime = millis() - sakuraStateStartTime;

  let frame = min(
    floor(elapsedTime / sakuraAnimationSpeed),
    sakuraFallFrameCount - 1
  );

  drawSakuraSprite(
    sakuraFallImg,
    frame,
    sakuraFallFrameCount,
    sakuraFallFrameHeight,
    sakuraScale
  );
}

function drawSakuraCard() {

  let elapsedTime = millis() - sakuraStateStartTime;

  let frame =
    floor(elapsedTime / sakuraAnimationSpeed) %
    sakuraCardFrameCount;

  drawSakuraSprite(
    sakuraCardImg,
    frame,
    sakuraCardFrameCount,
    sakuraCardFrameHeight,
    sakuraScale
  );
}


// ======================================================
// 22.【修改】櫻的動畫顯示
// ======================================================

function drawSakura() {

  // 答題時只能站立
  if (gameState === "quiz") {
    drawSakuraStand();
    return;
  }

  // 答錯後播放跌倒動畫
  if (gameState === "result" && sakuraWrong) {
    drawSakuraFall();
    return;
  }

  // 非正常操作狀態固定站立
  if (gameState !== "play") {
    drawSakuraStand();
    return;
  }

  // 以下維持原本優先順序
  if (sakuraState === "fall") {
    drawSakuraFall();
  }

  else if (sakuraState === "card") {
    drawSakuraCard();
  }

  else if (sakuraState === "walk") {
    drawSakuraWalk();
  }

  else {
    drawSakuraStand();
  }
}


// ======================================================
// 23. 原本的卡牌防禦（保留）
// ======================================================

function updateSakuraDefense() {

  if (cardHeld) {

    let moonFacingSakura =
      (characterX < sakuraX && facing === 1) ||
      (characterX > sakuraX && facing === -1);

    if (
      moonFacingSakura &&
      sakuraState !== "fall"
    ) {
      sakuraDefense = true;
      sakuraDialogue = "（防禦）";
    }

    else {
      sakuraDefense = false;
      sakuraDialogue = "";
    }
  }

  else {

    sakuraDefense = false;

    if (!sakuraManualCard) {
      sakuraDialogue = "";
    }
  }
}

function updateMoonBlock() {

  if (sakuraManualCard && sakuraState !== "fall") {

    let sakuraFacingMoon =
      (sakuraX > characterX && sakuraFacing === -1) ||
      (sakuraX < characterX && sakuraFacing === 1);

    if (sakuraFacingMoon) {

      moonBlocking = true;
      facing = sakuraX > characterX ? 1 : -1;
      moonDialogue = "可惡";
    }

    else {
      moonBlocking = false;
      moonDialogue = "";
    }
  }

  else {
    moonBlocking = false;
    moonDialogue = "";
  }
}


// ======================================================
// 24. 小狼跟隨（保留）
// ======================================================

function updateWolfPosition() {

  let targetX =
    sakuraX - sakuraFacing * wolfFollowDistance;

  let targetY = sakuraY;

  wolfX = lerp(wolfX, targetX, wolfFollowSpeed);
  wolfY = lerp(wolfY, targetY, wolfFollowSpeed);

  wolfFacing = sakuraFacing;
}


// ======================================================
// 25. 小狼飛行（保留）
// ======================================================

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

      let elapsed = millis() - wolfFlyStartTime;

      if (elapsed >= wolfFlyFrameSpeed * 2) {
        wolfState = "flyLoop";
      }
    }
  }

  else {

    if (
      wolfState === "flyStart" ||
      wolfState === "flyLoop"
    ) {
      wolfState = "flyLand";
      wolfFlyLandTime = millis();
    }

    if (wolfState === "flyLand") {

      let elapsed = millis() - wolfFlyLandTime;

      if (elapsed >= wolfFlyFrameSpeed * 3) {
        wolfState = "stand";
        wolfStateStartTime = millis();
      }
    }
  }
}


// ======================================================
// 26. 小狼攻擊（保留）
// ======================================================

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
  }

  else {

    if (wolfWasAttacking) {

      wolfWasAttacking = false;

      if (sakuraIsMoving) {
        wolfState = "flyLoop";
      }

      else {
        wolfState = "stand";
        wolfStateStartTime = millis();
      }
    }
  }
}

function getWolfAttackFrame() {

  let elapsed = millis() - wolfAttackStartTime;

  let sequenceDuration =
    wolfAttackSequence.length * wolfAttackFrameSpeed;

  let sequenceTime = elapsed % sequenceDuration;

  let sequenceIndex =
    floor(sequenceTime / wolfAttackFrameSpeed);

  return {
    frame: wolfAttackSequence[sequenceIndex],
    sequenceIndex: sequenceIndex,
    sequenceTime: sequenceTime
  };
}


// ======================================================
// 27. 小狼攻擊圖片（保留）
// ======================================================

function drawWolfAttack() {

  let attackData = getWolfAttackFrame();
  let frame = attackData.frame;

  push();

  translate(wolfX, wolfY);

  if (wolfFacing === -1) {
    scale(-1, 1);
  }

  image(
    wolfAttackImg,
    0, 0,
    wolfAttackFrameWidth * wolfScale,
    wolfAttackFrameHeight * wolfScale,
    frame * wolfAttackFrameWidth, 0,
    wolfAttackFrameWidth, wolfAttackFrameHeight
  );

  pop();
}


// ======================================================
// 28. 小狼雷擊（保留）
// ======================================================

function getWolfLightningFrame() {

  let attackData = getWolfAttackFrame();
  let sequenceIndex = attackData.sequenceIndex;

  if (sequenceIndex < 11) {
    return min(floor(sequenceIndex / 4), 2);
  }

  let lightningElapsed =
    attackData.sequenceTime -
    11 * wolfAttackFrameSpeed;

  let lightningLoopDuration =
    3 * wolfAttackFrameSpeed;

  let lightningTime =
    lightningElapsed % lightningLoopDuration;

  return 3 + floor(
    lightningTime / wolfAttackFrameSpeed
  );
}

function drawWolfLightning() {

  if (!wolfWasAttacking) return;

  // 【新增】答題時不顯示雷擊
  if (gameState !== "play") return;

  let lightningFrame = getWolfLightningFrame();

  push();

  image(
    wolfLightningImg,
    characterX,
    characterY - 45 * characterScale,
    wolfLightningFrameWidth * wolfScale,
    wolfLightningFrameHeight * wolfScale,
    lightningFrame * wolfLightningFrameWidth,
    0,
    wolfLightningFrameWidth,
    wolfLightningFrameHeight
  );

  pop();
}


// ======================================================
// 29. 小狼站立與飛行圖片（保留）
// ======================================================

function drawWolfStand() {

  let frame =
    floor(millis() / wolfStandFrameSpeed) %
    wolfStandFrameCount;

  push();

  translate(wolfX, wolfY);

  if (wolfFacing === -1) {
    scale(-1, 1);
  }

  image(
    wolfStandImg,
    0, 0,
    wolfStandFrameWidth * wolfScale,
    wolfStandFrameHeight * wolfScale,
    frame * wolfStandFrameWidth, 0,
    wolfStandFrameWidth, wolfStandFrameHeight
  );

  pop();
}

function drawWolfFly() {

  let frame = 0;

  if (wolfState === "flyStart") {

    let elapsed = millis() - wolfFlyStartTime;

    frame = min(
      floor(elapsed / wolfFlyFrameSpeed), 1
    );
  }

  else if (wolfState === "flyLoop") {
    frame = 2;
  }

  else if (wolfState === "flyLand") {

    let elapsed = millis() - wolfFlyLandTime;

    let landFrame = min(
      floor(elapsed / wolfFlyFrameSpeed), 2
    );

    frame = 2 - landFrame;
  }

  push();

  translate(wolfX, wolfY);

  if (wolfFacing === -1) {
    scale(-1, 1);
  }

  image(
    wolfFlyImg,
    0, 0,
    wolfFlyFrameWidth * wolfScale,
    wolfFlyFrameHeight * wolfScale,
    frame * wolfFlyFrameWidth, 0,
    wolfFlyFrameWidth, wolfFlyFrameHeight
  );

  pop();
}


// ======================================================
// 30.【修改】繪製小狼
// ======================================================

function drawWolf() {

  // 答題期間，小狼也停止攻擊與飛行
  if (gameState !== "play") {
    drawWolfStand();
    return;
  }

  if (wolfState === "attack") {
    drawWolfAttack();
  }

  else if (
    wolfState === "flyStart" ||
    wolfState === "flyLoop" ||
    wolfState === "flyLand"
  ) {
    drawWolfFly();
  }

  else {
    drawWolfStand();
  }
}


// ======================================================
// 31.【新增】偵測月和櫻是否碰撞
// ======================================================

function checkCharacterCollision() {

  // 只有正常遊戲時才能觸發題目
  if (gameState !== "play") return;

  // 使用兩人水平距離判斷碰撞
  let distanceBetween = abs(characterX - sakuraX);

  // 如果兩人已經分開，允許下一次碰撞
  if (distanceBetween > COLLISION_DISTANCE + 45) {
    collisionReady = true;
  }

  // 必須先分開，才能觸發新的一題
  if (!collisionReady) return;

  // 角色跌倒時不觸發題目
  if (sakuraState === "fall") return;

  // 距離小於碰撞範圍，就開始答題
  if (distanceBetween <= COLLISION_DISTANCE) {

    collisionReady = false;
    startQuiz();
  }
}


// ======================================================
// 32.【新增】開始答題
// ======================================================

function startQuiz() {

  // 切換成答題模式
  gameState = "quiz";

  // 清除原本正在進行的攻擊
  spaceHeld = false;
  cardHeld = false;
  sakuraManualCard = false;
  sakuraDefense = false;
  moonBlocking = false;
  wolfWasAttacking = false;

  // 雙方恢復站立
  characterState = "stand";
  sakuraState = "stand";

  // 小狼恢復站立
  wolfState = "stand";
  wolfStateStartTime = millis();

  // 清除原本對話
  moonDialogue = "";
  sakuraDialogue = "";

  // 重設雙方選項
  sakuraChoice = 0;
  moonChoice = 0;

  // 重設答題狀態
  sakuraWrong = false;
  moonWrong = false;
  sakuraAnswered = false;
  moonAnswered = false;

  roundWinner = "";
  resultMessage = "";

  // 隨機抽取題目，盡量避免與上一題相同
  let index = floor(random(questionBank.length));

  if (questionBank.length > 1) {

    while (index === lastQuestionIndex) {
      index = floor(random(questionBank.length));
    }
  }

  lastQuestionIndex = index;
  currentQuestion = questionBank[index];
}


// ======================================================
// 33.【新增】選擇答案
// ======================================================

function moveQuizChoice(player, direction) {

  // 只有答題模式可以選擇
  if (gameState !== "quiz") return;

  // 櫻已經答錯就不能繼續作答
  if (player === "sakura" && sakuraAnswered) return;

  // 月已經答錯就不能繼續作答
  if (player === "moon" && moonAnswered) return;

  // 四個選項以 0、1、2、3 表示
  // 加 4 再取餘數，讓選項能上下循環
  if (player === "sakura") {

    sakuraChoice = (
      sakuraChoice + direction + 4
    ) % 4;
  }

  else if (player === "moon") {

    moonChoice = (
      moonChoice + direction + 4
    ) % 4;
  }
}


// ======================================================
// 34.【新增】確認答案
// ======================================================

function submitQuizAnswer(player) {

  if (gameState !== "quiz") return;

  let selectedAnswer;

  if (player === "sakura") {

    if (sakuraAnswered) return;
    selectedAnswer = sakuraChoice;
  }

  else {

    if (moonAnswered) return;
    selectedAnswer = moonChoice;
  }

  // 判斷答案是否正確
  let isCorrect =
    selectedAnswer === currentQuestion.answer;

  // ------------------------------------------
  // 答對：立即得一分，結束本題
  // ------------------------------------------

  if (isCorrect) {

    roundWinner = player;

    if (player === "sakura") {
      sakuraScore++;
      resultMessage = "櫻答對了！獲得 1 分";
    }

    else {
      moonScore++;
      resultMessage = "月答對了！獲得 1 分";
    }

    finishQuiz();
    return;
  }

  // ------------------------------------------
  // 答錯：退出本題競答
  // ------------------------------------------

  if (player === "sakura") {

    sakuraWrong = true;
    sakuraAnswered = true;
  }

  else {

    moonWrong = true;
    moonAnswered = true;
  }

  // 如果雙方都答錯，無人得分
  if (sakuraAnswered && moonAnswered) {

    resultMessage = "雙方都答錯了！本題無人得分";
    finishQuiz();
  }
}


// ======================================================
// 35.【新增】結束本題
// ======================================================

function finishQuiz() {

  gameState = "result";
  resultStartTime = millis();

  // 清除所有攻擊與防禦
  spaceHeld = false;
  cardHeld = false;
  sakuraManualCard = false;
  sakuraDefense = false;
  moonBlocking = false;
  wolfWasAttacking = false;

  // 沒答錯的人保持站立
  characterState = "stand";
  sakuraState = "stand";

  // 答錯的櫻開始播放跌倒動畫
  if (sakuraWrong) {
    sakuraState = "fall";
    sakuraStateStartTime = millis();
  }

  // 月答錯時由 drawCharacter() 顯示格擋
}


// ======================================================
// 36.【新增】更新答題結果
// ======================================================

function updateQuizResult() {

  if (gameState !== "result") return;

  // 結算畫面固定維持 3 秒
  let elapsed = millis() - resultStartTime;

  if (elapsed < PENALTY_TIME) return;

  // 懲罰時間結束，恢復站立
  sakuraState = "stand";
  characterState = "stand";

  sakuraStateStartTime = millis();
  stateStartTime = millis();

  sakuraWrong = false;
  moonWrong = false;

  // 有人達到五分，進入結束畫面
  if (
    sakuraScore >= WIN_SCORE ||
    moonScore >= WIN_SCORE
  ) {

    gameWinner =
      sakuraScore >= WIN_SCORE ? "櫻" : "月";

    gameState = "over";
    return;
  }

  // 沒有達到五分，恢復遊戲
  gameState = "play";

  // 將兩人稍微分開，避免再次立即碰撞
  separateCharacters();

  // 等兩人再次分開後，才能觸發下一題
  collisionReady = false;
}


// ======================================================
// 37.【新增】答題後分開角色
// ======================================================

function separateCharacters() {

  // 保留雙方原本左右位置
  let centerX = (characterX + sakuraX) / 2;

  // 分開的距離大於碰撞判定距離
  let gap = COLLISION_DISTANCE + 90;

  // 櫻位於月左邊
  if (sakuraX <= characterX) {

    sakuraX = centerX - gap / 2;
    characterX = centerX + gap / 2;
  }

  // 櫻位於月右邊
  else {

    sakuraX = centerX + gap / 2;
    characterX = centerX - gap / 2;
  }

  // 限制角色仍在畫面內
  sakuraX = constrain(
    sakuraX, 70 * sakuraScale,
    BASE_W - 70 * sakuraScale
  );

  characterX = constrain(
    characterX, 70 * characterScale,
    BASE_W - 70 * characterScale
  );

  // 小狼重新回到櫻後方
  wolfX = sakuraX - sakuraFacing * wolfFollowDistance;
  wolfY = sakuraY;
}


// ======================================================
// 38.【新增】繪製雙方分數
// ======================================================

function drawScores() {

  push();

  textStyle(BOLD);
  textSize(30);
  textAlign(LEFT, CENTER);

  // 櫻：左上角粉色
  fill("#FFB4D5");

  text(
    "櫻  " + sakuraScore + "/" + WIN_SCORE,
    35, 45
  );

  // 月：右上角藍色
  fill("#A9D9FF");
  textAlign(RIGHT, CENTER);

  text(
    "月  " + moonScore + "/" + WIN_SCORE,
    BASE_W - 35, 45
  );

  pop();
}


// ======================================================
// 39.【新增】繪製角色頭像
// ======================================================

// 直接使用原本的站立精靈圖第一格
// 不需要新增頭像圖片

function drawQuizAvatar(player, x, y) {

  let img;
  let frameWidth;
  let frameHeight;

  if (player === "sakura") {

    img = sakuraStandImg;
    frameWidth = img.width / sakuraStandFrameCount;
    frameHeight = sakuraStandFrameHeight;
  }

  else {

    img = standImg;
    frameWidth = 376 / 3;
    frameHeight = 136;
  }

  push();

  // 頭像外框
  stroke(
    player === "sakura" ? "#FF9AC8" : "#8FCBFF"
  );

  strokeWeight(3);
  fill("#FFFFFF");
  ellipse(x, y, 68, 68);

  // 限制頭像顯示在圓形範圍
  // 這裡用繪圖遮罩裁切原本精靈圖片
  let avatarGraphics = createGraphics(68, 68);

  avatarGraphics.clear();
  avatarGraphics.imageMode(CENTER);

  // 保持原本圖片比例，避免頭像變形
  let avatarScale = min(
    58 / frameWidth,
    58 / frameHeight
  );

  avatarGraphics.image(
    img,
    34, 34,
    frameWidth * avatarScale,
    frameHeight * avatarScale,
    0, 0,
    frameWidth, frameHeight
  );

  // 建立圓形遮罩
  let maskGraphics = createGraphics(68, 68);
  maskGraphics.background(0);
  maskGraphics.noStroke();
  maskGraphics.fill(255);
  maskGraphics.circle(34, 34, 64);

  let avatarImage = avatarGraphics.get();
  avatarImage.mask(maskGraphics.get());

  image(avatarImage, x, y);

  // 釋放暫存繪圖資源
  avatarGraphics.remove();
  maskGraphics.remove();

  pop();
}


// ======================================================
// 40.【新增】繪製四選一答題畫面
// ======================================================

function drawQuiz() {

  if (gameState !== "quiz") return;

  push();

  // 半透明背景，讓題目更清楚
  noStroke();
  fill(8, 13, 35, 190);
  rect(0, 0, BASE_W, BASE_H);

  // 題目框
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

  // 題目文字
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

  // 櫻與月各自的答題框
  drawPlayerQuizPanel(
    "sakura",
    355,
    420
  );

  drawPlayerQuizPanel(
    "moon",
    1011,
    420
  );

  pop();
}


// ======================================================
// 41.【新增】繪製玩家專屬答題框
// ======================================================

function drawPlayerQuizPanel(player, x, y) {

  let isSakura = player === "sakura";

  // 櫻使用粉色，月使用藍色
  let borderColor =
    isSakura ? "#FF91C4" : "#78C6FF";

  let selectedColor =
    isSakura ? "#FFD4E7" : "#CDEBFF";

  let selectedIndex =
    isSakura ? sakuraChoice : moonChoice;

  let alreadyAnswered =
    isSakura ? sakuraAnswered : moonAnswered;

  push();

  // 答題區外框
  rectMode(CENTER);
  stroke(borderColor);
  strokeWeight(4);
  fill("#FFFFFF");

  rect(x, y, 460, 420, 24);

  // 頭像位置
  drawQuizAvatar(
    player,
    x - 170,
    y - 160
  );

  // 玩家名稱
  noStroke();
  fill("#292344");
  textAlign(LEFT, CENTER);
  textSize(24);
  textStyle(BOLD);

  text(
    isSakura ? "櫻的答案" : "月的答案",
    x - 125,
    y - 160
  );

  // 四個選項
  for (let i = 0; i < 4; i++) {

    let optionY = y - 75 + i * 77;

    // 目前選到的答案會變色
    if (i === selectedIndex) {
      fill(selectedColor);
      stroke(borderColor);
      strokeWeight(4);
    }

    else {
      fill("#F7F7FC");
      stroke("#DDDEEA");
      strokeWeight(2);
    }

    rect(
      x,
      optionY,
      390,
      62,
      12
    );

    // 選項文字
    noStroke();
    fill("#292344");
    textSize(20);
    textStyle(NORMAL);
    textAlign(CENTER, CENTER);

    text(
      currentQuestion.options[i],
      x,
      optionY,
      360,
      55
    );
  }

  // 底部操作說明
  noStroke();
  fill("#44445F");
  textAlign(CENTER, CENTER);
  textSize(17);

  if (alreadyAnswered) {

    text(
      "回答錯誤，等待另一方作答",
      x,
      y + 185
    );
  }

  else {

    text(
      isSakura
        ? "W / S 選擇　A / D 確認"
        : "↑ / ↓ 選擇　空白鍵確認",
      x,
      y + 185
    );
  }

  pop();
}


// ======================================================
// 42.【新增】繪製答題結果
// ======================================================

function drawQuizResult() {

  if (gameState !== "result") return;

  push();

  // 顯示中央結果框
  rectMode(CENTER);
  stroke("#E3DAFF");
  strokeWeight(4);
  fill("#FFFFFF");

  rect(
    BASE_W / 2,
    145,
    750,
    135,
    20
  );

  noStroke();
  fill("#292344");
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  textSize(30);

  text(
    resultMessage,
    BASE_W / 2,
    125
  );

  // 顯示剩餘等待秒數
  let remaining = max(
    0,
    ceil(
      (PENALTY_TIME -
      (millis() - resultStartTime)) / 1000
    )
  );

  textSize(19);
  textStyle(NORMAL);

  text(
    remaining + " 秒後恢復操作",
    BASE_W / 2,
    175
  );

  pop();
}


// ======================================================
// 43.【新增】遊戲結束畫面
// ======================================================

function drawGameOver() {

  if (gameState !== "over") return;

  push();

  // 深色半透明背景
  noStroke();
  fill(8, 10, 30, 210);
  rect(0, 0, BASE_W, BASE_H);

  textAlign(CENTER, CENTER);
  textStyle(BOLD);

  // 勝利標題
  fill("#FFF0B0");
  textSize(55);

  text(
    gameWinner + "獲得勝利！",
    BASE_W / 2,
    BASE_H / 2 - 85
  );

  // 最終分數
  fill("#FFFFFF");
  textSize(32);

  text(
    "櫻 " + sakuraScore +
    "　：　" +
    moonScore + " 月",
    BASE_W / 2,
    BASE_H / 2
  );

  // 重新開始提示
  textSize(22);
  textStyle(NORMAL);

  text(
    "按 R 重新開始遊戲",
    BASE_W / 2,
    BASE_H / 2 + 90
  );

  pop();
}


// ======================================================
// 44.【新增】重新開始遊戲
// ======================================================

function restartGame() {

  // 分數歸零
  sakuraScore = 0;
  moonScore = 0;

  // 重設遊戲狀態
  gameState = "play";
  gameWinner = "";
  roundWinner = "";

  // 重設角色位置
  sakuraX = BASE_W * 0.3;
  characterX = BASE_W * 0.7;

  // 重設面向
  sakuraFacing = 1;
  facing = -1;

  // 重設動畫
  sakuraState = "stand";
  characterState = "stand";
  wolfState = "stand";

  sakuraStateStartTime = millis();
  stateStartTime = millis();
  wolfStateStartTime = millis();

  // 清除攻擊狀態
  spaceHeld = false;
  cardHeld = false;
  sakuraManualCard = false;
  sakuraDefense = false;
  moonBlocking = false;
  wolfWasAttacking = false;

  // 清除答題紀錄
  sakuraWrong = false;
  moonWrong = false;
  sakuraAnswered = false;
  moonAnswered = false;

  currentQuestion = null;
  lastQuestionIndex = -1;
  collisionReady = true;

  // 小狼重新回到櫻後方
  wolfX = sakuraX - sakuraFacing * wolfFollowDistance;
  wolfY = sakuraY;
}


// ======================================================
// 45. 原本的角色對話（保留）
// ======================================================

function drawDialogues() {

  textAlign(CENTER, CENTER);
  textStyle(BOLD);

  if (sakuraDialogue !== "") {

    fill("#FFFFFF");
    stroke("#39265C");
    strokeWeight(4);
    textSize(24);

    text(
      sakuraDialogue,
      sakuraX,
      sakuraY - 85 * sakuraScale
    );
  }

  if (moonDialogue !== "") {

    fill("#FFFFFF");
    stroke("#39265C");
    strokeWeight(4);
    textSize(24);

    text(
      moonDialogue,
      characterX,
      characterY - 100 * characterScale
    );
  }

  noStroke();
  textStyle(NORMAL);
}


// ======================================================
// 46.【修改】操作提示欄左右交換
// ======================================================

function drawControls() {

  let panelWidth = 220;
  let panelHeight = 120;
  let margin = 25;

  // ------------------------------------------
  // 櫻：左下角
  // ------------------------------------------

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

  pop();

  // ------------------------------------------
  // 月：右下角
  // ------------------------------------------

  push();

  rectMode(CORNER);
  noStroke();
  fill(10, 15, 40, 175);

  rect(
    BASE_W - panelWidth - margin,
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


// ======================================================
// 47.【修改】鍵盤按下
// ======================================================

function keyPressed() {

  // ------------------------------------------
  // 遊戲結束：R 重新開始
  // ------------------------------------------

  if (gameState === "over") {

    if (key === "r" || key === "R") {
      restartGame();
    }

    return false;
  }

  // ------------------------------------------
  // 答題模式：接管鍵盤
  // ------------------------------------------

  if (gameState === "quiz") {

    // 月：上鍵選上一個
    if (keyCode === UP_ARROW) {
      moveQuizChoice("moon", -1);
    }

    // 月：下鍵選下一個
    else if (keyCode === DOWN_ARROW) {
      moveQuizChoice("moon", 1);
    }

    // 月：空白鍵確認
    else if (keyCode === 32) {
      submitQuizAnswer("moon");
    }

    // 櫻：W 選上一個
    else if (key === "w" || key === "W") {
      moveQuizChoice("sakura", -1);
    }

    // 櫻：S 選下一個
    else if (key === "s" || key === "S") {
      moveQuizChoice("sakura", 1);
    }

    // 櫻：A 或 D 確認
    else if (
      key === "a" || key === "A" ||
      key === "d" || key === "D"
    ) {
      submitQuizAnswer("sakura");
    }

    // 答題時不執行原本移動與攻擊
    return false;
  }

  // ------------------------------------------
  // 結算期間：禁止操作
  // ------------------------------------------

  if (gameState === "result") {
    return false;
  }

  // ------------------------------------------
  // 以下保留原本遊戲操作
  // ------------------------------------------

  // 月的方向
  if (keyCode === LEFT_ARROW) {
    facing = -1;
  }

  if (keyCode === RIGHT_ARROW) {
    facing = 1;
  }

  // 月的手刀
  if (keyCode === UP_ARROW) {

    if (!spaceHeld) {

      spaceHeld = true;
      attackStartTime = millis();
      lastAttackCycle = -1;
    }
  }

  // 月的卡牌
  if (keyCode === 32) {

    if (!cardHeld) {

      cardHeld = true;
      cardStartTime = millis();
    }
  }

  // 櫻的卡牌
  if (key === "s" || key === "S") {

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

  // 避免方向鍵捲動網頁
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


// ======================================================
// 48.【修改】鍵盤放開
// ======================================================

function keyReleased() {

  // 答題期間不處理原本攻擊動作
  if (gameState !== "play") {
    return false;
  }

  // 月停止手刀
  if (keyCode === UP_ARROW) {
    spaceHeld = false;
  }

  // 月停止卡牌
  if (keyCode === 32) {

    cardHeld = false;
    sakuraDefense = false;

    if (!sakuraManualCard) {
      sakuraDialogue = "";
    }
  }

  // 櫻停止卡牌
  if (key === "s" || key === "S") {

    sakuraManualCard = false;
    wolfWasAttacking = false;

    if (sakuraIsMoving) {
      wolfState = "flyLoop";
    }

    else {
      wolfState = "stand";
      wolfStateStartTime = millis();
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


// ======================================================
// 49.【修改】主程式
// ======================================================

function draw() {

  background("#101C45");

  calculateScale();

  push();

  translate(offsetX, offsetY);
  scale(sceneScale);

  // 原本漸層背景
  drawBackground();

  // ------------------------------------------
  // 正常遊戲：更新角色
  // ------------------------------------------

  if (gameState === "play") {

    // 月的移動與動畫
    updateMovement();
    updateCharacterState();

    // 櫻的移動與動畫
    updateSakuraMovement();
    updateSakuraDefense();
    updateSakuraState();

    // 月的格擋
    updateMoonBlock();

    // 小狼的跟隨、攻擊、飛行
    updateWolfPosition();
    updateWolfAttack();
    updateWolfFlight();

    // 【新增】檢查兩人是否碰撞
    checkCharacterCollision();
  }

  // ------------------------------------------
  // 結算期間：更新懲罰時間
  // ------------------------------------------

  else if (gameState === "result") {
    updateQuizResult();
  }

  // ------------------------------------------
  // 繪製原本角色
  // ------------------------------------------

  drawCharacter();
  drawWolf();
  drawSakura();

  // 小狼雷擊
  drawWolfLightning();

  // 原本對話
  if (gameState === "play") {
    drawDialogues();
  }

  // 原本操作提示欄
  drawControls();

  // 【新增】左上、右上分數
  drawScores();

  // 【新增】答題畫面
  if (gameState === "quiz") {
    drawQuiz();
  }

  // 【新增】答題結果
  if (gameState === "result") {
    drawQuizResult();
  }

  // 【新增】勝利畫面
  if (gameState === "over") {
    drawGameOver();
  }

  pop();
}


// ======================================================
// 50. 視窗大小改變（保留）
// ======================================================

function windowResized() {

  resizeCanvas(windowWidth, windowHeight);
  calculateScale();
}

```
:::

### 最終程式碼
:::spoiler 
```javascript=

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
```
:::