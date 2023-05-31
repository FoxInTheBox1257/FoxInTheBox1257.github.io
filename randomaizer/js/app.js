function getRandonNumber() {
    var now = new Date().getTime();
    var result = now % 85;
    console.log("Случайное число: " + result);
    alert("Ваше блюдо под номером "+ result);
};


// <button id="random" onClick="return getRandonNumber();">Выбрать случайное блюдо</button>



// lesson 17 of 95 Метки для break/continue 
