

class CreateObj{
constructor(){

    this.generation = {
        name: {
  
          ManName: ['Иван', "Андрей", "Вася", "Петр", "Роман", "Олег"],
          ManTwoName: ["Авдеев", "Леондиов", "Васильев", "Петров", "Безруков"],
          MaleName: ["Света", "Наталья", "Оксана", "Мария", "Рита"],
          MaleTwoName: ["Николаева", "Андреева", "Русская", "Смольная","Петрова","Жук"]
        },
          objects: {
          object: ["Альфа 1 блок", "ЛС 1Б", "13 район", "Альфа 3 блок", "Бета 2"],
          axis: ["АЫ-26", "АР-13", "БУ-15", "БЗ-15", "АЫ-20", "УВ-20"],
          square: ["35м2", "45м2", "47м2", "65м2","50м2","55м2","24м2","100м2","61м2"],
          numberHome: '',
         
        }
      }
      this.pattern = {
        male: /male/i,
        man: /man/i,
        number: /^[+]?\d{1}\(?\d{3}\)?[\d\-]{3,6}[\-\d]{3,6}$/i,
        name: /^[a-zа-я]{2,30}/i,
  
      }

     this.contactor = {
       name: '',
       number:''

     }

      this.object = { 
      }
}

getName() {
    this.contactor.name = ''
    let score = `${Math.floor(Math.random() * (2 - 1 + 1)) + 1}` //генерерирует рандомное число 
   
    if (score === '1') {
      this.MaleName()
    } else if (score === '2') {
      this.ManName()
    } else if (score === undefined || score === null) {
      console.log('Ошибка генератора чисел')
    }

    return  this.contactor.name

  }
   
  ManName() {
    for (let key in this.generation.name) {
      if (this.pattern.man.test(key)) {
        let max = this.generation.name[key].length-1
        let name = this.generation.name[key][this.randomNumber(0,max)]
        this.contactor.name += `${name} `
      }

    }

    

  } 
  MaleName() {
    for (let key in this.generation.name) {
      if (this.pattern.male.test(key)) {
        let max = this.generation.name[key].length-1
        let name = this.generation.name[key][this.randomNumber(0,max)]
        this.contactor.name += `${name} `

      }

    }
   

  }

  CreateObj (){
    for (let key in this.generation.objects){
      if (key != 'numberHome'){
        let max = this.generation.objects[key].length - 1
        this.object[key] = this.generation.objects[key][this.randomNumber(0,max)]
        }
        else if(key === 'numberHome'){
          this.object[key] = this.randomNumber(1,1000)

      }
    }  
    console.log(this.object)
    
      return  [this.object]

  }

    getNumber(){
    this.contactor.number = '+7'
      for (let i = 0; i <= 8;i++){
      this.contactor.number += this.randomNumber(0,9)
      }
      return this.contactor.number 
    }

 
      

    
  
  

  randomNumber(min, max) {
    max = max 
    return `${Math.floor(Math.random() * (max - min + 1)) + min}`
  }

}







module.exports = CreateObj