<template lang='html'> 

    <section class='info-interactive'> 
      <div class='container'>
          <p class='info-interactive__p'Расскажите о себе чекбоксами></p>
             <p class='info-interactive__txt'>Отметьте чекбоксами пункты, которые соответствуют вашим скиллам. 
         Отсутствие опыта не означает, что у вас меньше шансов стать одним из наших товарищей. 
         Это означает, что вы будете получать те задачи, с которыми гарантировано будете справляться.</p>
      </div>

    <div class='info-interactive__checkbox' >
      <div class='checkbox__html checkbox__flex'>
        
      <div class='wrapper-input'>
         <input type="checkbox" id="BEM" name="Методология БЭМ">
           <label for='BEM'>Методология БЭМ</label>
      </div>
         <div class='wrapper-input'>
         <input type="checkbox" id="jq" name="Jquery">
           <label for='jq'>Jquery</label>
      </div>

        <div class='wrapper-input'>
         <input type="checkbox" id="sass" name="SASS" checked>
           <label for='sass'>SASS(SCSS)</label>
      </div>

        <div class='wrapper-input'>
         <input type="checkbox" id="haml" name="haml">
           <label for='haml'> HAML </label>
        </div>
         
         
     </div>

         <div class='wrapper__prerpocc checkbox__flex'>  
           <div class='wrapper-input'>
             <input type="checkbox" id="less" name="LESS" checked>
              <label for='less'>LESS</label>
           </div>
            <div class='wrapper-input'>
              <input type="checkbox" id="Jade" name="Jade">
               <label for='Jade'>Jade</label>
           </div>
           <div class='wrapper-input'>
             <input type="checkbox" id="Stylus" name="Stylus">
              <label for='Stylus'>Stylus </label>
           </div>
          
         </div>
          
          
           <div class='wrapper_js checkbox__flex'>
               <div class='wrapper-input'>
                 <input type="checkbox" id="vue" name="vue" checked>
                 <label for='vue'>Знаю, изучаю vue.js </label>
               </div>
               <div class='wrapper-input'>
                   <input type="checkbox" id="adaptive" name="adaptive" checked>
                   <label for='adaptive'>Адаптивная верстка </label>
               </div>

               <div class='wrapper-input'>
                  <input type="checkbox" id="Webpack" name="Webpack" checked>
                  <label for='webpack'>Webpack </label>
              </div>
           </div>
     </div>
    </section>
 </template>      



<script>

export default {
 
 data: function () {
    return {
      constructor :  '',
      divContactor: '',
      showTable: true,
      dataObj:  {
        square: '',
        object: '',
        axis: '',
        numberHome: '',
      
            },

        }
    }
}

 

</script>