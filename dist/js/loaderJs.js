
 let sectionFormLd =  new Vue ({
 
    el:".section-form-loader",
    data:{
       fileName: '',
        seen: false,
        wait:false,
        good: false,
        checked: false,
        fileSize: '',
        fileName: '',
        status: '',
        statusClass: 'style',



    },
    methods:{
     fetchOnServer(data){
        fetch("http://localhost:3005/loaders",{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
        
            .then(response => {
                if (response.status !== 200) {
                    console.log(data);
                    return Promise.reject();
                    
                } 
    
                return response.json();
    
            })
            .then((data) => {
                this.wait = false;
                if (data === "1"){
                    this.checked = false;
                    this.good = true
                    this.statusClass = 'status-good'
                    this.status = 'проверено'
                } else {
                this.statusClass ='status-reject'
                    this.status = 'отклонено'
                }
            })
            .catch((data)=>{
                this.wait = false;
                this.statusClass = 'status-reject'
                this.status = 'отклонено'
            
            })
      },
   // Ождиание загрузки файла и вызов метода проверки, если файл загружен
     waitLoad(){
        this.good = false
         this.checked = false;
        this.wait = true;
        this.status = "ожидание";
        this.statusClass = "status-wait"
        // имитация ожиданя загрузки, для показа анимации.
setTimeout(() => {
    let file = document.querySelector('#inputfile').files[0];
    if (file != undefined || file != null){
        this.seen = true;
      this.wait = false;  
      this.testFile(file);
    }
}, 2500);
      
     },

      
     // првоерка файлов
      testFile(file){
        this.checked = true;
        this.fileName = file.name;
        this.fileSize = file.size/1000;
        this.testformat =/.(png|jpg|pdf|jpeg)$/i,
        setTimeout(() => {
            let test =  this.testformat.test(file.type);
            if (this.fileSize < 5000 && test === true ){
                let data = [file.type, this.fileSize]
                this.fetchOnServer(data);
            }  else{
                this.wait = false;
                this.statusClass = "status-reject";
                this.status = 'отклонено'

            }
        }, 1500);
       
      
      }

        
        }
    



   



 })

 let Section = document.querySelector('.section-form-loader')
 let Width = Section.clientWidth;
let windowWidth = window.innerWidth;
Section.style = `margin-left: ${(windowWidth-Width)/2}px`

window.addEventListener('resize',()=>{
let Section = document.querySelector('.section-form-loader')
 let Width = Section.clientWidth;
let windowWidth = window.innerWidth;


 Section.style = `margin-left: ${(windowWidth-Width)/2}px`
}) 