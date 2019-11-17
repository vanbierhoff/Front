import  Canvas from './canvas'
let cnv = document.querySelector('.main-canvas-screen-history');



let app = new Vue({


    el: '.main-container',
    data: {
      getVideo: false,
      constraints: {
            audio: true,
            video: true,
      
      },
      textButton: 'Open Camera',
      ShowImg:[],
      clearHistory: 'Clear History',
      backButton: 'main-button__back',
      colorButton: 'main-button__grayColor',
      clear: false,
      getHistory: false,
      
     
    
      
},


    methods: {
    getUrlVideo (constraints) {
           
      navigator.mediaDevices.getUserMedia(constraints)
      .then(function(mediaStream) {
       
        let video = document.querySelector('.main-video');
        video.srcObject = mediaStream;
        video.onloadedmetadata = 
        async function(e) {
          app.$data.getVideo  = true;
          await  video.play();
           app.$data.textButton = 'capture'
           app.$data.clearHistory ='Back'
           app.$data.colorButton = 'main-button__whiteColor' 
          app.positionSvg()
          
        
        };
      
       
      })
      
      .catch(function(err) { console.log(err + ": " + err.message); });
  
        
            
         
    },

    /**
     * 
     * Метод проверяет статус кнопки:
     *  если button.dataset.button === capture - сохраняет снимок экрана
     * если button.dataset.button === Open Camera - вызывает метод getUrlVideo - для запуска камеры
     * 
     * @param {class} cnv  -содержит объект canvas, для отрисовки снимков экрана
     * @method saveScreen - метод объекта класса cnv - делает снимок экрана и возвращает его.
     * @param this.ShowImg {array } - хранит всех сохраненных изображений
     */
    saveScreens(cnv){
      let button = document.querySelector('.main-button__open-camera')
      button.addEventListener('click',()=>{
        if (button.dataset.button === "capture"){
        let dataImg= cnv.saveScreen()
       this.ShowImg.push(dataImg)
       this.getHistory = true;
             this.clear = true;
        } else if (button.dataset.button === "Open Camera"){
          this.getUrlVideo(this.constraints)
        }

     
       
      })
    
    },
      clearHistoryScreen(){
        if(this.clear === true){
          this.colorButton = 'main-button__grayColor'
          this.getHistory = false;
          this.ShowImg = []
         
        }

     },
     positionSvg(){
       let contour = document.querySelector('.main-green-contour')
      positionCenter(contour);
     },

     listenerBackButton(){
let button = document.querySelector('.main-button__back');
let video = document.querySelector('.main-video');
  button.addEventListener('click',()=>{
  if (this.clearHistory === 'Back'){
    this.videoStop(video)
  } else if (this.clear === true && this.clearHistory === 'Clear History'){
    this.clearHistoryScreen();
  }

  })

     },
    videoStop(video){
      video.srcObject = null ;
      this.callMethod = 'CheckStatusButton()';
     this.clearHistory = 'Clear History'
     this.getVideo = false;
     this.textButton = 'Open Camera';
     this.callMethod = 'CheckStatusButton()';
   if( this.ShowImg[0] != undefined){
            this.colorButton = 'main-button__redColor' 
          } else{
            this.colorButton = 'main-button__grayColor'
          }

     },
    
        

    
},
    
mounted: function(){
  cnv = new Canvas(cnv)
  this.saveScreens(cnv)
  this.listenerBackButton();
  
  
  
  
}


  })


  function positionCenter(){
    let elem = document.querySelector('.main-green-contour')
    function setPosition (el){
    let parrentEl =  document.querySelector('.video-wrapper'); 
    el.width.baseVal.value =  parrentEl.clientWidth*0.4
    el.height.baseVal.value = parrentEl.clientHeight*0.7
    let widthEl =  el.width.baseVal.value/2;
    let heightEl =  el.height.baseVal.value/2;
  
   let parrentWidth =  parrentEl.clientWidth/2;
   let parrentHeight = parrentEl.clientHeight/2;
    el.style.top = `${parrentHeight - heightEl}px`  
    el.style.left = `${parrentWidth - widthEl}px`  
      }
      setPosition(elem)
    window.addEventListener('resize',()=>{
setPosition(elem);
    })

    
  }


