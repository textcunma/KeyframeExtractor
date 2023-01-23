<template>
     <div id = "runArea" class = "flex justify-center items-center my-8 cursor-pointer 
                                   bg-gradient-to-r from-indigo-500 via-rose-600 to-pink-500
                                   drop-shadow-lg text-white hover:text-gray-200 
                                   hover:drop-shadow-md rounded-lg border-rose-300 w-80 h-10 mx-auto">
          <p class = "text-2xl font-momo tracking-wider">run</p>
     </div>

     <canvas id = "canvas001" class = "w-80 h-45 mx-auto">

     </canvas>
</template>


<script lang = "ts">
     import cp from "@/cvprocess";

     export default {
          name: 'VideoView',
          mounted() {
               cp.methods.myMethod();
          }
     };
</script>