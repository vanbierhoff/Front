

 
class Canvas {
    constructor(canvas){
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.button = document.querySelector('.main-button__open-camera');
    this.context.setTransform(1, 0, 0, 1, 0, 0); // убираем все кастомные трансформации canvas
    this.video = document.querySelector('.main-video');
    this.canvas.width = this.WCanvas;
    this.canvas.height = this.HCanvas;


    }
 // геттер на размеры canvas в зависимости от размеров экрана.
    get WCanvas (){

     return this.canvas.width = this.video.clientWidth
              
    


    }

    get HCanvas (){
        return this.canvas.height= this.video.clientHeight
    }

    saveScreen(){

      this.context.setTransform(1, 0, 0, 1, 0, 0); // убираем все кастомные трансформации canvas
      let img = new Image(this.context.drawImage(this.video, 0, 0, this.WCanvas, this.HCanvas));
      let dataURL = this.canvas.toDataURL('image/png')
      img.src = dataURL;
      return img;
    
    
   }
    
  

    }
   







 
export default Canvas;