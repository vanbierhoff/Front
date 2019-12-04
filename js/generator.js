class Generator {
  constructor(Array) {

    this.generation = {
      name: {

        ManName: ['Иван', "Андрей", "Вася", "Петр", "Роман", "Олег"],
        ManTwoName: ["Авдеев", "Леондиов", "Васильев", "Петров", "Безруков"],
        MaleName: ["Света", "Наталья", "Оксана", "Мария", "Рита"],
        MaleTwoName: ["Николаева", "Андреева", "Русская", "Смольная"]
      },
        objects: {
        object: ["Альфа 1 блок", "ЛС 1Б", "13 район", "Альфа 3 блок", "Бета 2"],
        axis: ["АЫ-26", "АР-13", "БУ-15", "БЗ-15", "АЫ-20", "УВ-20"],
        square: [35, 45, 47, 65,50,55,24,100,61],
        number: '+7'


      }
    }
    this.name = '';
    this.obj = {};
    this.pattern = {
      male: /male/i,
      man: /man/i,
      number: /^[+]?\d{1}\(?\d{3}\)?[\d\-]{3,6}[\-\d]{3,6}$/i,
      name: /^[a-zа-я]{2,30}/i,

    }
    this.divContactor = document.querySelector('.form-contractor')
    this.input = document.querySelectorAll('.form-input')
    this.btnSend = document.querySelector('.form-button__send')
    this.loadBtn = document.querySelector('.form-button__load')
    this.tableTdSpan = document.querySelectorAll('.table-td-span__square')
    this.btnSortDowm = document.querySelector('.img-sort-down')
    this.__getListener()


  }

  __getName() {
    let min = 1
    let max = 2
    min = Math.ceil(min);
    max = Math.floor(max);
    let score = `${Math.floor(Math.random() * (max - min + 1)) + min}` //генерерирует рандомное число 
    this.name = ''
    if (score === '1') {
      this.MaleName()
    } else if (score === '2') {
      this.ManName()
    } else if (score === undefined || score === null) {
      console.log('Ошибка генератора чисел')
    }



  }

  ManName() {

    for (var key in this.generation.name) {
      if (this.pattern.man.test(key)) {
        let min = 0
        let max = this.generation.name[key].length
        let name = this.generation.name[key][this.randomNumber(max)]
        this.name += `${name} `
      }


    }



  }
  MaleName() {
    for (var key in this.generation.name) {
      if (this.pattern.male.test(key)) {
        let min = 0
        let max = this.generation.name[key].length
        let name = this.generation.name[key][this.randomNumber(max)]
        this.name += `${name} `

      }

    }

  }



  randomNumber(lenght) {
    let min = 0
    let max = lenght - 1
    return `${Math.floor(Math.random() * (max - min + 1)) + min}`
  }

  getPhone() {
    let i = 0
    for (i = 0; i <= 7; i++) {
      this.obj.number += this.randomNumber(9)

    }

  }


  getObj() {
    for (var key in this.generation.objects) {
      let max = this.generation.objects[key].length
      this.obj[key] = this.generation.objects[key][this.randomNumber(max)]

    }
    this.obj['numberHome'] = `${this.randomNumber(1001)}`
  }


  __getListener() {
    this.input.forEach((el) => {
      if (el.dataset.input === 'phone') {
        this.testPhone(el)
      } else if (el.dataset.input === 'name')
        this.testName(el)
    })

    this.btnSortDowm.addEventListener('click',()=>{

    this.spoiler()

    })

  }

  testPhone(el) {
    el.addEventListener('input', () => {
      if (this.pattern.number.test(el.value)) {
        el.classList.toggle('green-border', true)

      } else {
        el.classList.toggle('green-border', false)
      }


    })

  }

  testName(el) {
    el.addEventListener('input', () => {
      if (this.pattern.name.test(el.value)) {
        el.classList.toggle('green-border', true)

      } else {
        el.classList.toggle('green-border', false)
      }

    })


  }
  
  spoiler(){
  
    let squareTable = document.querySelector('.square-table')
    squareTable.classList.toggle('display-none') 

  }



}


 module.exports = Generator