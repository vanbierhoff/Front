<template lang='html'> 
  <div class='slider'>
    <img class='slider-headLine' src='img/slider.png'>
      <div class='slider-wrapper-first__position slider-wrapper-line'> 
         <img class='img-first-level' src='img/end-line.png'>
            <span class='slider-level-txt'> Не владею </span>
      </div>

      <div class='slider-wrapper-two__positon slider-wrapper-line'>
         <img class='img-level-one img-level__ml' src='img/level-line.png'>
           <span class='slider-level-txt'> Использую готовые решения</span>
      </div>
       <div class='slider-wrapper-three__position slider-wrapper-line'> 
            <img class='-img-level-two img-level__ml' src='img/level-line.png'>
              <span class='slider-level-txt'>Использую готовые решения
              и умею их переделывать </span>
      </div>

        <div class='slider-wrapper-last__positon slider-wrapper-line'> 
          <img class='img-last-level img-level__ml' src='img/end-line.png'>
            <span class='slider-level-txt'> Пишу сложный JS с нуля</span>
       </div>
       
          <img class='silder-manipulator' src='img/manipulator.png' @click = "ActiveSlider">
          
  </div>
 
 

 </template>      



<script>
export default {
data() {
    return {
      manipulator: null,
      pageX: null,
    }
  },
  methods: {
   ActiveSlider(){
     debugger;
     this.manipulator.style.position = 'absolute';
    console.log("ЛОХ")
   }
  },

 

 

  mounted() {
   this.manipulator = document.querySelector('.silder-manipulator')
   this.pageX = this.manipulator.offsetLeft
  },
   
  
    
}

</script>