<template>
     <div id = "inputArea" :class = "[ landportFlg ? 'landscape' : 'portrait']">
          <video id = "displayVideo" src = "" hidden class = "mx-auto rounded-2xl" preload = "auto" controls></video>
     </div>

     <button @mousedown = "pushInputBtn" class = "flex justify-center items-center my-8 cursor-pointer 
                                        bg-rose-700 hover:bg-rose-800  active:bg-rose-900  drop-shadow-lg 
                                        hover:drop-shadow-md rounded-lg border-rose-300 w-80 h-10 mx-auto">
          <p class = "text-xl text-white font-momo">select video</p>
          <input type = "file" hidden id = "inputBtn" accept=".mp4" @change = "onFileSelected">
     </button>     

     <button @mousedown = "cvprocess" class = "flex justify-center items-center my-8 cursor-pointer 
                                   bg-gradient-to-r from-indigo-500 via-rose-600 to-pink-500
                                   drop-shadow-lg text-white hover:text-gray-200 
                                   hover:drop-shadow-md rounded-lg border-rose-300 w-80 h-10 mx-auto">
          <p class = "text-2xl font-momo tracking-wider">run</p>
     </button>

     <!-- <form class = "flex justify-center m-8">
          <div class = "flex flex-col">
               <div class = "flex mb-4" v-for="(style, index) in styles" :key="index">
                    <div class="flex items-center h-5">
                         <input :id="'style' + (index + 1)" :aria-describedby="'subtext' + (index + 1)" type="radio" name="style" :checked = "style.check" class = "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500">
                    </div>

                    <div class="ml-2 text-sm">
                         <label :for="'style' + (index + 1)" class="font-medium text-gray-900 dark:text-gray-300">{{ style.name }}</label>
                         <p :id="'subtext' + (index + 1)" class="text-xs font-normal text-gray-500 dark:text-gray-300">{{ style.description }}</p>
                    </div>
               </div>
          </div>
     </form> -->

     <div id = "result" class = "flex flex-row flex-wrap gap-1 lg:m-0 justify-center"></div>

</template>

<script lang = "ts" setup>
     import fi from "@/fileinput";
     import cp from "@/cvprocess";
     import { ref } from 'vue';

     const landportFlg = ref(true);

     // const styles = ref(
     //      [
     //           { name: 'Style 1', description: 'only Histogram', check: true },
     //           { name: 'Style 2', description: 'Histgoram + Clustering', check: false } ,
     //      ]
     // );

     const onFileSelected = () => {
          fi.onFileSelected(landportFlg);
     }

     const pushInputBtn = () => {
          fi.pushInputBtn();
     }

     const cvprocess = () => {
          cp.mainprocess();
     }

</script>