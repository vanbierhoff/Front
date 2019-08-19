let pattern =/^([+]?[0-9\s-\(\)]{3,25})*$/i;let checkphone = false;let checkName =false;let checkCeckbox = false;let userName = document.getElementById("lgFormGroupInput");let submit = document.querySelector('.btn-click');let userPhone = document.getElementById("example-tel-input");let checkbox = document.getElementById("checkbox");/** * Метод addEventListener() регистрирует обработчик события для целевого объекта (eventTarget), для которого он будет вызываться при возникновении события. * type: "input" - тип регистрируемого события. В переводе  - Тип: ввод * Каждый раз при вводе данных в userName, Метод addEventListener использует описанную ниже функцию function(event) для проверки валидности вводимых данных.  * функция принимает принимает событие event, event содержит метод preventDefault(), данный метод останавливает все  дефолтные действия объекта.  * как только вводимые данные станут валидным поле ввода станет зеленым. *  Как только данные станут валидными checkName примет значение true. */userName.addEventListener("input", function (event) {    if (userName.value.length >= 2) {        checkName = true;        document.getElementById("lgFormGroupInput").style.border = "2px solid #00FF00"    } else {        document.getElementById("lgFormGroupInput").style.border = "2px solid #DC143C"    }});/** * Метод addEventListener() регистрирует обработчик события для целевого объекта (eventTarget), для которого он будет вызываться при возникновении события. * type: "input" - тип регистрируемого события. В переводе  - Тип: ввод * Каждый раз при вводе данных в userPhone, Метод addEventListener использует описанную ниже функцию function(event) для проверки валидности вводимых данных. * функция принимает принимает событие event, event содержит метод preventDefault(), данный метод останавливает все дефолтные действия объекта. * как только вводимые данные станут валидным поле ввода станет зеленым. *  Как только данные станут валидными переменная checkPhone примет значение true. */userPhone.addEventListener("input", function (event){    if (((pattern.test(userPhone.value))  == (true)) && ((userPhone.value.length) >= 5)) {        checkphone = true;        document.getElementById("example-tel-input").style.border = "2px solid #00FF00"    } else{        document.getElementById("example-tel-input").style.border = "2px solid #DC143C"    }   event.preventDefault();});submit.onclick = valid => {    event.preventDefault();    if ((checkbox.checked == true) && (checkphone === true) && (checkName === true)) {    AjaxPost();    } else if (checkbox.checked === false) {        alert("Требуется дать согласие на обратоку перснональных данных");        return;    } else {        alert("Правильно заполните поля выделенные красным")    }};function AjaxPost() {    let phpName = userName.value;    let phpPhone = userPhone.value;// Создаем экземпляр класса XMLHttpRequest    const request = new XMLHttpRequest();// Указываем путь до файла на сервере, который будет обрабатывать наш запрос    const url = "js/mailto.php";// Так же как и в GET составляем строку с данными, но уже без пути к файлу    let params = 'name=' + phpName + "&" + "phone" + phpPhone;    /* Указываем что соединение	у нас будет POST, говорим что путь к файлу в переменной url, и что запрос у нас    асинхронный, по умолчанию так и есть не стоит его указывать, еще есть 4-й параметр пароль авторизации, но этот        параметр тоже необязателен.*/    request.open("POST", url);//В заголовке говорим что тип передаваемых данных закодирован.    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");    request.addEventListener("readystatechange", () => {        if (request.readyState === 4 && request.status === 200) {            console.log(request.responseText);        }    });//	Вот здесь мы и передаем строку с данными, которую формировали выше. И собственно выполняем запрос.    request.send(params);}