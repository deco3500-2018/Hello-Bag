window.onload = function(){
    var bigDiv1 = document.getElementById("bigDiv1");
    var bigDiv2 = document.getElementById("bigDiv2");
    var bigDiv3 = document.getElementById("bigDiv3");
    var loginButton = document.getElementById("login");
    var choosePetDog = document.getElementById("choosePetDog");
    var choosePetCat = document.getElementById("choosePetCat");
    var choosePetDone = document.getElementById("choosePetDone");
    var rankButtonGuide = document.getElementById("rankButtonGuide");
    var runButtonGuide = document.getElementById("runButtonGuide");
    var petButtonGuide = document.getElementById("petButtonGuide");
    var portButtonGuide = document.getElementById("portButtonGuide");
    var bigDiv3Run = document.getElementById("bigDiv3Run");
    var bigDiv3Rank = document.getElementById("bigDiv3Rank");
    var bigDiv3Port = document.getElementById("bigDiv3Port");
    var bigDiv3Pet = document.getElementById("bigDiv3Pet");
    var petItemStore = document.getElementById("bigDiv3PetStore");
    var dailyRewards = document.getElementById("bigDiv3DailyRewards");
    var storeButton = document.getElementById("storeButton");
    var closeButtonForPort = document.getElementById("closeButtonForPort");
    var dailyRewardsButton = document.getElementById("dailyRewardsButton");
    var backButtonForStore = document.getElementById("backButtonForStore");
    var backButtonForDW = document.getElementById("backButtonForDW");
    var receiveRwards = document.getElementById("receiveRwards");
    var currencyForStore = document.getElementById("currencyForStore");
    var showPet = document.getElementById("showPet");
    var petImage = document.getElementById("petImage");
    var sportVolumBar = document.getElementById("sportVolumeBar");
    var exerciseVolumToShow = document.getElementById("exerciseVolumToShow");
    var timeSpentToShow = document.getElementById("timeSpentToShow");
    var runYellowButton = document.getElementById("runYellowButton");
    var foodBarYellow = document.getElementById("foodBarYellow");
    var actBarYellow = document.getElementById("actBarYellow");
    var sportTarget = document.getElementById("sportTarget");
    var shade = document.getElementById("shade");
    var portfolio = document.getElementById("portfolio");
    var achieveTarget = document.getElementById("achieveTarget");
    var purchaseSuccess = document.getElementById("purchaseSuccess");
    var purchaseFail = document.getElementById("purchaseFail");
    var portWindow = document.getElementById("portWindow");
    var portfolio = document.getElementById("portfolio");
    var choosePetForPort = document.getElementById("choosePetForPort");
    var logOutForPort = document.getElementById("logOutForPort");
    var okOne = document.getElementById("okOne");
    var okTwo = document.getElementById("okTwo");
    var okThree = document.getElementById("okThree");
    var coinPlus1 = document.getElementById("coinPlus1");
    var coinPlus2 = document.getElementById("coinPlus2");
    var coinPlus3 = document.getElementById("coinPlus3");
    var coinPlus4 = document.getElementById("coinPlus4");
    var coinPlus5 = document.getElementById("coinPlus5");
    var coinPlus6 = document.getElementById("coinPlus6");
    var greenTick = document.getElementById("greenTick");
    var purchaseFood = document.getElementById("purchaseFood");
    var purchaseBall = document.getElementById("purchaseBall");
    var purchaseShit = document.getElementById("purchaseShit");
    var purchaseNiddle = document.getElementById("purchaseNiddle");
    var welcomeUser = document.getElementById("welcomeUser");
    var time;
    var timeStore;
    var t;
    var foodValue = new Number(300);
    var activityValue = new Number(300);
    var timeSpentVolum = new Number(0);
    var exerciseVolum = new Number(0);
    var currency = new Number(0);
    var foodQuantity = new Number(0);
    var ballQuantity = new Number(0);
    var shitQuantity = new Number(0);
    var niddleQuantity = new Number(0);
    var numnumOfFood = document.getElementById("numOfFood");
    var numOfBall = document.getElementById("numOfBall");
    var numOfShit = document.getElementById("numOfShit");
    var numOfNiddle = document.getElementById("numOfNiddle");
    var petItemFood = document.getElementById("petItemFood");
    var petItemBall = document.getElementById("petItemBall");
    var petItemShit = document.getElementById("petItemShit");
    var petItemNiddle = document.getElementById("petItemNiddle");
    var userPetNameToShow = document.getElementById("userPetNameToShow");
    var whetherStartExercise = new Boolean(false);
    var userName = new String("Kitty");
    var welcomeUser = document.getElementById("welcomeUser");
    var chosenPet = new String("none");

    reset();
    bigDiv1.style.display = "block";

    function reset(){
        bigDiv1.style.display = "none";
        bigDiv2.style.display = "none";
        bigDiv3.style.display = "none";
    }

    function choosePetReset(){
        choosePetDog.style.border = "none";
        choosePetDog.style.borderRadius = "none";
        choosePetCat.style.border = "none";
        choosePetCat.style.borderRadius = "none";
    }

    function bigDiv3Reset(){
        bigDiv3Run.style.display = "none";
        bigDiv3Rank.style.display = "none";
        bigDiv3Port.style.display = "none";
        bigDiv3Pet.style.display = "none";
        petItemStore.style.display = "none";
        dailyRewards.style.display = "none";
    }

    function guideBarReset(){
        rankButtonGuide.src = "guideBarButtons/rankGrey.png"
        runButtonGuide.src = "guideBarButtons/runGrey.png";
        portButtonGuide.src = "guideBarButtons/portfolioGrey.png";
        petButtonGuide.src = "guideBarButtons/petGrey.png"
    }

    function showPetFunc(){
        if(window.chosenPet === "dog"){
            window.showPet.src = "pets/imaginaryBigDog.png";
            petImage.src = "pets/dogNormal.png";
        }
        else if(window.chosenPet === "cat"){
            window.showPet.src = "pets/imaginaryBigCat.png";
            //petImage.src = "other/20181017220245.gif";
            petImage.src = "pets/catNormal.png";
        }
    }

    function startCount(){
            if(timeSpentVolum < 60){
                if(timeSpentVolum >= 10){
                    timeSpentToShow.innerText = "0:" + timeSpentVolum + " MIN";
                    timeSpentVolum = timeSpentVolum + 1;
                }
                else{
                    timeSpentToShow.innerText = "0:0" + timeSpentVolum + " MIN";
                    timeSpentVolum = timeSpentVolum + 1;
                }
                time = setTimeout(startCount, 1000);
            }
            else if(timeSpentVolum >= 60){
                if(timeSpentVolum%60 < 10){
                    timeSpentToShow.innerText = parseInt(timeSpentVolum/60) + ":" + "0" + timeSpentVolum % 60 + " MIN";
                    timeSpentVolum += 1;
                    time = setTimeout(startCount, 1000);
                }
                else{
                    timeSpentToShow.innerText = parseInt(timeSpentVolum/60) + ":" + timeSpentVolum % 60 + " MIN";
                    timeSpentVolum += 1;
                    time = setTimeout(startCount, 1000);
                }
            }
    }

    function lifeCircle(){
        if(foodValue > 0 && activityValue > 0){
            foodValue -= 1;
            activityValue -= 1;
            actBarYellow.style.width = activityValue + "px";
            foodBarYellow.style.width = foodValue + "px";
            if(foodValue <= 40 && activityValue <= 40){
                foodBarYellow.style.backgroundColor = "#D42323";
                actBarYellow.style.backgroundColor = "#D42323";
                if(window.chosenPet === "dog"){
                    petImage.src = "pets/dogSleepy.png"
                }
                else if(window.chosenPet == "cat"){
                    petImage.src = "pets/catSleeping.png"
                }
            }
            else if(foodValue <= 40 && activityValue > 40){
                foodBarYellow.style.backgroundColor = "#D42323";
                if(window.chosenPet === "dog"){
                    petImage.src = "pets/dogHungry.png"
                }
                else if(window.chosenPet === "cat"){
                    petImage.src = "pets/catHungry.png";
                }

            }
            else if(activityValue <= 40 && foodValue > 40){
                actBarYellow.style.backgroundColor = "#D42323";
                if(window.chosenPet === "dog"){
                    petImage.src = "pets/dogSleepy.png"
                }
                else if(window.chosenPet == "cat"){
                    petImage.src = "pets/catSleeping.png"
                }
            }
            t = setTimeout(lifeCircle, 2000);
        }

        else if(activityValue >0){
            activityValue -= 1;
            actBarYellow.style.width = actBarYellow + "px";
            if(activityValue <= 40){
                actBarYellow.style.backgroundColor = "#D42323";
                if(window.chosenPet === "dog"){
                    petImage.src = "pets/dogSleepy.png"
                }
                else if(window.chosenPet == "cat"){
                    petImage.src = "pets/catSleeping.png"
                }
            }
            t = setTimeout(lifeCircle, 2000);
        }

        else if(foodValue >0){
            foodValue -= 1;
            foodBarYellow.style.width = foodValue + "px";
            if(foodValue <= 40){
                actBarYellow.style.backgroundColor = "#D42323";
                if(window.chosenPet === "dog"){
                    petImage.src = "pets/dogHungry.png"
                }
                else if(window.chosenPet === "cat"){
                    petImage.src = "catHungry.png";
                }
            }
            t = setTimeout(lifeCircle, 2000);
        }



    }

    loginButton.ontouchstart = function(){
        reset();
        userName = document.getElementById("userName").value;
        welcomeUser.innerText = "Welcome, " + userName + "!"
        userPetNameToShow.innerText = userName;
        bigDiv2.style.display = "block";
    }

    loginButton.onclick = function(){
        reset();
        userName = document.getElementById("userName").value;
        welcomeUser.innerText = "Welcome, " + userName + "!"
        userPetNameToShow.innerText = userName;
        bigDiv2.style.display = "block";
    }

    closeButtonForPort.ontouchstart = function(){
        shade.style.display = "none";
        portWindow.style.display = "none";
    }

    closeButtonForPort.onclick = function(){
        shade.style.display = "none";
        portWindow.style.display = "none";
    }

    logOutForPort.ontouchstart = function(){
        reset();
        bigDiv1.style.display = "block";
        shade.style.display = "none";
        portWindow.style.display = "none";
    }

    logOutForPort.onclick = function(){
        reset();
        bigDiv1.style.display = "block";
        shade.style.display = "none";
        portWindow.style.display = "none";
    }

    choosePetForPort.ontouchstart = function(){
        reset();
        bigDiv2.style.display = "block";
        shade.style.display = "none";
        portWindow.style.display = "none";
    }

    choosePetForPort.onclick = function(){
        reset();
        bigDiv2.style.display = "block";
        shade.style.display = "none";
        portWindow.style.display = "none";
    }

    portfolio.ontouchstart = function(){
        shade.style.display = "block";
        portWindow.style.display = "block";
    }

    portfolio.onclick = function(){
        shade.style.display = "block";
        portWindow.style.display = "block";
    }

    choosePetDog.onclick = function(){
        choosePetReset();
        this.style.border = "white solid 2px";
        this.style.borderRadius = "10px";
        window.chosenPet = "dog";
    }

    choosePetDog.ontouchstart = function(){
        choosePetReset();
        this.style.border = "white solid 2px";
        this.style.borderRadius = "10px";
        window.chosenPet = "dog";
    }

    choosePetCat.onclick = function(){
        choosePetReset();
        this.style.border = "white solid 2px";
        this.style.borderRadius = "10px";
        window.chosenPet = "cat";
    }

    choosePetCat.ontouchstart = function(){
        choosePetReset();
        this.style.border = "white solid 2px";
        this.style.borderRadius = "10px";
        window.chosenPet = "cat";
    }

    choosePetDone.onclick = function(){
        reset();
        bigDiv3.style.display = "block";
        showPetFunc();
    }

    choosePetDone.ontouchstart = function(){
        reset();
        bigDiv3.style.display = "block";
        showPetFunc();
    }

    portfolio.ontouchstart = function(){
        guideBarReset()
        rankButtonGuide.src = "guideBarButtons/rankYellow.png";
        bigDiv3Reset();
        bigDiv3Rank.style.display = "block";
    }

    portButtonGuide.onclick = function(){
        guideBarReset()
        rankButtonGuide.src = "guideBarButtons/rankYellow.png";
        bigDiv3Reset();
        bigDiv3Rank.style.display = "block";
    }

    rankButtonGuide.ontouchstart = function(){
        guideBarReset()
        rankButtonGuide.src = "guideBarButtons/rankYellow.png";
        bigDiv3Reset();
        bigDiv3Rank.style.display = "block";
    }

    rankButtonGuide.onclick = function(){
        guideBarReset()
        rankButtonGuide.src = "guideBarButtons/rankYellow.png";
        bigDiv3Reset();
        bigDiv3Rank.style.display = "block";
    }

    petButtonGuide.ontouchstart = function(){
        guideBarReset()
        petButtonGuide.src = "guideBarButtons/petYellow.png";
        bigDiv3Reset();
        bigDiv3Pet.style.display = "block";
        clearTimeout(t);
        lifeCircle();
    }

    petButtonGuide.onclick = function(){
        guideBarReset()
        petButtonGuide.src = "guideBarButtons/petYellow.png";
        bigDiv3Reset();
        bigDiv3Pet.style.display = "block";
        clearTimeout(t);
        lifeCircle();
    }

    storeButton.ontouchstart = function(){
        bigDiv3Reset();
        petItemStore.style.display = "block";
        currencyForStore.innerText = "$ " + currency;
    }

    storeButton.onclick = function(){
        bigDiv3Reset();
        petItemStore.style.display = "block";
        currencyForStore.innerText = "$ " + currency;
    }

    dailyRewardsButton.ontouchstart = function(){
        bigDiv3Reset();
        dailyRewards.style.display = "block";
    }

    dailyRewardsButton.onclick = function(){
        bigDiv3Reset();
        dailyRewards.style.display = "block";
    }

    backButtonForStore.ontouchstart = function(){
        bigDiv3Reset();
        bigDiv3Pet.style.display = "block";
    }

    backButtonForStore.onclick = function(){
        bigDiv3Reset();
        bigDiv3Pet.style.display = "block";
    }

    backButtonForDW.ontouchstart = function(){
        bigDiv3Reset();
        bigDiv3Pet.style.display = "block";
    }

    backButtonForDW.onclick = function(){
        bigDiv3Reset();
        bigDiv3Pet.style.display = "block";
    }


    /** Rewards button (249-260)**/
    receiveRwards.ontouchmove = function(){
        greenTick.style.display = "block";
        coinPlus6.innerText = "+5";
        coinPlus6.style.left = "50px";
        coinPlus6.style.top = "200px";
        coinPlus6.style.fontSize = "36px";
        coinPlus6.style.color = "transparent";
        currency += 5;
    }

    receiveRwards.onclick = function(){
        greenTick.style.display = "block";
        coinPlus6.innerText = "+5";
        coinPlus6.style.left = "50px";
        coinPlus6.style.top = "200px";
        coinPlus6.style.fontSize = "36px";
        coinPlus6.style.color = "transparent";
        currency += 5;
    }

    /** Purchase buttons in store interface (start 321-434) **/
    purchaseFood.ontouchmove = function(){
        if (currency >= 5){
            shade.style.display = "block";
            purchaseSuccess.style.display = "block";
            currency -= 5;
            currencyForStore.innerText = "$ " + currency;
            foodQuantity += 1;
            numnumOfFood.innerText = foodQuantity;
        }
        else{
            shade.style.display = "block";
            purchaseFail.style.display = "block";
        }
    }

    purchaseFood.onclick = function(){
        if (currency >= 5){
            shade.style.display = "block";
            purchaseSuccess.style.display = "block";
            currency -= 5;
            currencyForStore.innerText = "$ " + currency;
            foodQuantity += 1;
            numnumOfFood.innerText = foodQuantity;
        }
        else{
            shade.style.display = "block";
            purchaseFail.style.display = "block";
        }
    }

    purchaseBall.ontouchmove = function(){
        if (currency >= 10){
            shade.style.display = "block";
            purchaseSuccess.style.display = "block";
            currency -= 10;
            currencyForStore.innerText = "$ " + currency;
            ballQuantity += 1;
            numOfBall.innerText = ballQuantity;
        }
        else{
            shade.style.display = "block";
            purchaseFail.style.display = "block";
        }
    }

    purchaseBall.onclick = function(){
        if (currency >= 10){
            shade.style.display = "block";
            purchaseSuccess.style.display = "block";
            currency -= 10;
            currencyForStore.innerText = "$ " + currency;
            ballQuantity += 1;
            numOfBall.innerText = ballQuantity;
        }
        else{
            shade.style.display = "block";
            purchaseFail.style.display = "block";
        }
    }

    purchaseNiddle.ontouchmove = function(){
        if (currency >= 20){
            shade.style.display = "block";
            purchaseSuccess.style.display = "block";
            currency -= 20;
            currencyForStore.innerText = "$ " + currency;
            niddleQuantity += 1;
            numOfNiddle.innerText = niddleQuantity;
        }
        else{
            shade.style.display = "block";
            purchaseFail.style.display = "block";
        }
    }

    purchaseNiddle.onclick = function(){
        if (currency >= 20){
            shade.style.display = "block";
            purchaseSuccess.style.display = "block";
            currency -= 20;
            currencyForStore.innerText = "$ " + currency;
            niddleQuantity += 1;
            numOfNiddle.innerText = niddleQuantity;
        }
        else{
            shade.style.display = "block";
            purchaseFail.style.display = "block";
        }
    }

    purchaseShit.ontouchmove = function(){
        if (currency >= 5){
            shade.style.display = "block";
            purchaseSuccess.style.display = "block";
            currency -= 5;
            currencyForStore.innerText = "$ " + currency;
            shitQuantity += 1;
            numOfShit.innerText = shitQuantity;
        }
        else{
            shade.style.display = "block";
            purchaseFail.style.display = "block";
        }
    }

    purchaseShit.onclick = function(){
        if (currency >= 5){
            shade.style.display = "block";
            purchaseSuccess.style.display = "block";
            currency -= 5;
            currencyForStore.innerText = "$ " + currency;
            shitQuantity += 1;
            numOfShit.innerText = shitQuantity;
        }
        else{
            shade.style.display = "block";
            purchaseFail.style.display = "block";
        }
    }
    /** Purchase buttons in store interface (finish 321-434) **/

    runButtonGuide.onclick = function(){
        guideBarReset()
        runButtonGuide.src = "guideBarButtons/runYellow.png";
        bigDiv3Reset();
        bigDiv3Run.style.display = "block";
    }

    runButtonGuide.ontouchstart = function(){
        guideBarReset()
        runButtonGuide.src = "guideBarButtons/runYellow.png";
        bigDiv3Reset();
        bigDiv3Run.style.display = "block";
    }

    portButtonGuide.onclick = function(){
        guideBarReset()
        portButtonGuide.src = "guideBarButtons/portfolioYellow.png";
        bigDiv3Reset();
        bigDiv3Port.style.display = "block";
    }

    portButtonGuide.ontouchstart = function(){
        guideBarReset()
        portButtonGuide.src = "guideBarButtons/portfolioYellow.png";
        bigDiv3Reset();
        bigDiv3Port.style.display = "block";
    }

    runYellowButton.onclick = function(){
        if(whetherStartExercise != true){
            runYellowButton.innerText = "STOP";
            runYellowButton.style.backgroundColor = "#6A8DBF";
            runYellowButton.style.border = "4px solid #506A8F";
            whetherStartExercise = true;
            startCount();
            sportTarget.style.display = "block";

        }
        else{
            runYellowButton.innerText = "START";
            runYellowButton.style.backgroundColor = "#F3B442";
            runYellowButton.style.border = "4px solid #4E3E46";
            whetherStartExercise = false;
            clearTimeout(time);
            timeSpentVolum = 0;
            timeSpentToShow.innerText = "0:00 MIN";
            sportTarget.style.display = "none";
        }
    }

    runYellowButton.ontouchmove = function(){
        if(whetherStartExercise != true){
            runYellowButton.innerText = "STOP";
            runYellowButton.style.backgroundColor = "#6A8DBF";
            runYellowButton.style.border = "4px solid #506A8F";
            whetherStartExercise = true;
            startCount();
            sportTarget.style.display = "block";

        }
        else{
            runYellowButton.innerText = "START";
            runYellowButton.style.backgroundColor = "#F3B442";
            runYellowButton.style.border = "4px solid #4E3E46";
            whetherStartExercise = false;
            clearTimeout(time);
            timeSpentVolum = 0;
            timeSpentToShow.innerText = "0:00 MIN";
            sportTarget.style.display = "none";
        }
    }

    //ok buttons start(470-499)
    okOne.onclick = function(){
        shade.style.display = "none";
        achieveTarget.style.display = "none";
    }

    okOne.ontouchstart = function(){
        shade.style.display = "none";
        achieveTarget.style.display = "none";
    }

    okTwo.onclick = function(){
        shade.style.display = "none";
        purchaseSuccess.style.display = "none";
    }

    okTwo.ontouchstart = function(){
        shade.style.display = "none";
        purchaseSuccess.style.display = "none";
    }

    okThree.onclick = function(){
        shade.style.display = "none";
        purchaseFail.style.display = "none";
    }

    okThree.ontouchstart = function(){
        shade.style.display = "none";
        purchaseFail.style.display = "none";
    }
// ok buttons finish(470-499)

    /**click and touch of items in pet surface **/
    petItemBall.onclick  = function(){
        if(activityValue < 40){
            if(ballQuantity > 0){
                activityValue += 50;
                if(activityValue >= 300){
                    activityValue = 300;
                }
                if(activityValue >40){
                    actBarYellow.style.backgroundColor = "#F3B442";
                    lifeCircle();
                }
                actBarYellow.style.width = activityValue + "px";
                ballQuantity -= 1;
                numOfBall.innerText = ballQuantity;
                if(window.chosenPet === "dog"){
                    petImage.src = "pets/dogPlaying.png"
                }
                else if(window.chosenPet === "cat"){
                    petImage.src = "pets/catPlaying.png";
                }
            }
        }
        else {
            if (ballQuantity > 0) {
                activityValue += 50;
                if (activityValue >= 300) {
                    activityValue = 300;
                }
                actBarYellow.style.width = activityValue + "px";
                ballQuantity -= 1;
                numOfBall.innerText = ballQuantity;
                if (window.chosenPet === "dog") {
                    petImage.src = "pets/dogPlaying.png"
                }
                else if (window.chosenPet === "cat") {
                    petImage.src = "pets/catPlaying.png";
                }
            }
        }
    }

    petItemBall.ontouchmove = function(){
        if(activityValue < 40){
            if(ballQuantity > 0){
                activityValue += 50;
                if(activityValue >= 300){
                    activityValue = 300;
                }
                if(activityValue >40){
                    actBarYellow.style.backgroundColor = "#F3B442";
                    lifeCircle();
                }
                actBarYellow.style.width = activityValue + "px";
                ballQuantity -= 1;
                numOfBall.innerText = ballQuantity;
                if(window.chosenPet === "dog"){
                    petImage.src = "pets/dogPlaying.png"
                }
                else if(window.chosenPet === "cat"){
                    petImage.src = "pets/catPlaying.png";
                }
            }
        }
        else {
            if (ballQuantity > 0) {
                activityValue += 50;
                if (activityValue >= 300) {
                    activityValue = 300;
                }
                actBarYellow.style.width = activityValue + "px";
                ballQuantity -= 1;
                numOfBall.innerText = ballQuantity;
                if (window.chosenPet === "dog") {
                    petImage.src = "pets/dogPlaying.png"
                }
                else if (window.chosenPet === "cat") {
                    petImage.src = "pets/catPlaying.png";
                }
            }
        }
    }

    petItemFood.onclick = function(){
        if(foodValue < 40){
            if(foodQuantity > 0){
                foodValue += 50;
                if(foodValue > 300){
                    foodValue = 300;
                }
                if(foodValue > 40){
                    foodBarYellow.style.backgroundColor = "#F3B442";
                    lifeCircle();
                }
                if(foodValue > 40 && activityValue >40){
                    if(window.chosenPet === "cat"){
                        petImage.src = "pets/catNormal.png"
                    }
                    else if(window.chosenPet === "dog")
                        petImage.src = "pets/dogNormal.png"
                }
                foodBarYellow.style.width = foodValue + "px";
                foodQuantity -= 1;
                numnumOfFood.innerText = foodQuantity;
            }
        }
        else{
            if(foodQuantity > 0){
                foodValue += 50;
                if(foodValue > 300){
                    foodValue = 300;
                }
                if(foodValue > 40 && activityValue >40){
                    if(window.chosenPet === "cat"){
                        petImage.src = "pets/catNormal.png"
                    }
                    else if(window.chosenPet === "dog")
                        petImage.src = "pets/dogNormal.png"
                }
                foodBarYellow.style.width = foodValue + "px";
                foodQuantity -= 1;
                numnumOfFood.innerText = foodQuantity;
            }
        }

    }

    petItemFood.ontouchmove = function(){
        if(foodValue < 40){
            if(foodQuantity > 0){
                foodValue += 50;
                if(foodValue > 300){
                    foodValue = 300;
                }
                if(foodValue > 40){
                    foodBarYellow.style.backgroundColor = "#F3B442";
                    lifeCircle();
                }
                if(foodValue > 40 && activityValue >40){
                    if(window.chosenPet === "cat"){
                        petImage.src = "pets/catNormal.png"
                    }
                    else if(window.chosenPet === "dog")
                        petImage.src = "pets/dogNormal.png"
                }
                foodBarYellow.style.width = foodValue + "px";
                foodQuantity -= 1;
                numnumOfFood.innerText = foodQuantity;
            }
        }
        else{
            if(foodQuantity > 0){
                foodValue += 50;
                if(foodValue > 300){
                    foodValue = 300;
                }
                if(foodValue > 40 && activityValue >40){
                    if(window.chosenPet === "cat"){
                        petImage.src = "pets/catNormal.png"
                    }
                    else if(window.chosenPet === "dog")
                        petImage.src = "pets/dogNormal.png"
                }
                foodBarYellow.style.width = foodValue + "px";
                foodQuantity -= 1;
                numnumOfFood.innerText = foodQuantity;
            }
        }
    }

    petItemShit.onclick = function(){
        if(activityValue < 40){
            if(shitQuantity > 0){
                activityValue += 25;
                if(activityValue > 300){
                    activityValue = 300;
                }
                if(activityValue > 40){
                    actBarYellow.style.backgroundColor = "#F3B442";
                    lifeCircle();
                }
                actBarYellow.style.width = activityValue + "px";
                shitQuantity -= 1;
                numOfShit.innerText = shitQuantity;
            }
        }
        else{
            if(shitQuantity > 0){
                activityValue += 25;
                if(activityValue > 300){
                    activityValue = 300;
                }
                if(activityValue > 40){
                    actBarYellow.style.backgroundColor = "#F3B442";
                }
                actBarYellow.style.width = activityValue + "px";
                shitQuantity -= 1;
                numOfShit.innerText = shitQuantity;
            }
        }

    }

    petItemShit.ontouchmove = function(){
        if(activityValue < 40){
            if(shitQuantity > 0){
                activityValue += 25;
                if(activityValue > 300){
                    activityValue = 300;
                }
                if(activityValue > 40){
                    actBarYellow.style.backgroundColor = "#F3B442";
                }
                actBarYellow.style.width = activityValue + "px";
                shitQuantity -= 1;
                numOfShit.innerText = shitQuantity;
                lifeCircle();
            }
        }
        else{
            if(shitQuantity > 0){
                activityValue += 25;
                if(activityValue > 300){
                    activityValue = 300;
                }
                if(activityValue > 40){
                    actBarYellow.style.backgroundColor = "#F3B442";
                }
                actBarYellow.style.width = activityValue + "px";
                shitQuantity -= 1;
                numOfShit.innerText = shitQuantity;
            }
        }
    }

    petItemNiddle.onclick = function(){
        if(activityValue < 40){
            if(niddleQuantity > 0){
                activityValue += 100;
                if(activityValue > 300){
                    activityValue = 300;
                }
                if(activityValue > 40){
                    actBarYellow.style.backgroundColor = "#F3B442";
                    lifeCircle();
                }
                actBarYellow.style.width = activityValue + "px";
                niddleQuantity -= 1;
                numOfNiddle.innerText = niddleQuantity;
            }
        }
        else{
            if(niddleQuantity > 0){
                activityValue += 100;
                if(activityValue > 300){
                    activityValue = 300;
                }
                actBarYellow.style.width = activityValue + "px";
                niddleQuantity -= 1;
                numOfNiddle.innerText = niddleQuantity;
            }
        }
    }

    petItemNiddle.ontouchmove = function(){
        if(activityValue < 40){
            if(niddleQuantity > 0){
                activityValue += 100;
                if(activityValue > 300){
                    activityValue = 300;
                }
                if(activityValue > 40){
                    actBarYellow.style.backgroundColor = "#F3B442";
                    lifeCircle();
                }
                actBarYellow.style.width = activityValue + "px";
                niddleQuantity -= 1;
                numOfNiddle.innerText = niddleQuantity;
            }
        }
        else{
            if(niddleQuantity > 0){
                activityValue += 100;
                if(activityValue > 300){
                    activityValue = 300;
                }
                actBarYellow.style.width = activityValue + "px";
                niddleQuantity -= 1;
                numOfNiddle.innerText = niddleQuantity;
            }
        }
    }

    //items click and touch finishe ,start from 556

    document.onkeypress = function(e){
        if(e.which === 32){
            if(whetherStartExercise === true){
                if (exerciseVolum <= 295) {
                    exerciseVolum++;
                    sportVolumBar.style.width = exerciseVolum + "px";
                    exerciseVolumToShow.innerText = exerciseVolum*9 + " M";
                    if(exerciseVolum === 40){
                        coinPlus1.innerText = "+5";
                        coinPlus1.style.top = "155px";
                        coinPlus1.style.fontSize = "24px";
                        coinPlus1.style.color = "transparent";
                        currency += 5;
                    }
                    else if(exerciseVolum === 90){
                        coinPlus2.innerText = "+5";
                        coinPlus2.style.top = "155px";
                        coinPlus2.style.fontSize = "24px";
                        coinPlus2.style.color = "transparent";
                        currency += 5;
                    }
                    else if(exerciseVolum === 143){
                        coinPlus3.innerText = "+5";
                        coinPlus3.style.top = "155px";
                        coinPlus3.style.fontSize = "24px";
                        coinPlus3.style.color = "transparent";
                        currency += 5;
                    }
                    else if(exerciseVolum === 193){
                        coinPlus4.innerText = "+5";
                        coinPlus4.style.top = "155px";
                        coinPlus4.style.fontSize = "24px";
                        coinPlus4.style.color = "transparent";
                        currency += 5;
                    }
                    else if(exerciseVolum === 244){
                        coinPlus5.innerText = "+5";
                        coinPlus5.style.top = "155px";
                        coinPlus5.style.fontSize = "24px";
                        coinPlus5.style.color = "transparent";
                        currency += 5;
                    }

                    else if(exerciseVolum === 278){
                        shade.style.display = "block";
                        achieveTarget.style.display = "block";
                        currency += 5;
                    }
                }
            }
        }
    }




}