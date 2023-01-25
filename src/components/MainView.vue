<template>
     <div class = "border-dashed border-4 rounded-2xl border-rose-300 w-80 h-45 mx-auto">
          <video id = "displayVideo" src = "" hidden class = "mx-auto rounded-2xl" preload="auto" controls></video>
     </div>

     <button @click="fileinput" class = "flex justify-center items-center my-8 cursor-pointer 
                                        bg-rose-700 hover:bg-rose-800  active:bg-rose-900  drop-shadow-lg 
                                        hover:drop-shadow-md rounded-lg border-rose-300 w-80 h-10 mx-auto">
          <p class = "text-xl text-white font-momo">select video</p>
          <input type = "file" hidden id = "target" accept=".mp4">
     </button>     

     <button @click="cvprocess" class = "flex justify-center items-center my-8 cursor-pointer 
                                   bg-gradient-to-r from-indigo-500 via-rose-600 to-pink-500
                                   drop-shadow-lg text-white hover:text-gray-200 
                                   hover:drop-shadow-md rounded-lg border-rose-300 w-80 h-10 mx-auto">
          <p class = "text-2xl font-momo tracking-wider">run</p>
     </button>

     <div id = "result" class = "flex flex-row flex-wrap gap-1 lg:m-0 m-10"></div>

</template>

<script lang = "ts">
     import fi from "@/fileinput";
     import cp from "@/cvprocess";

     export default {
          name: 'VideoView',
          methods: {
               fileinput() {
                    fi.methods.myMethod();
               },
               cvprocess() {
                    cp.methods.myMethod();
               }
          },
     };
</script>