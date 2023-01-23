<template>
     <div class = "border-dashed border-4 rounded-2xl border-rose-300 w-80 h-45 mx-auto">
          <video id = "displayVideo" src = "" hidden class = "w-80 mx-auto rounded-2xl" controls></video>
     </div>

     <div id = "inputArea" class = "flex justify-center items-center my-8 cursor-pointer 
                                        bg-rose-700 hover:bg-rose-800  active:bg-rose-900  drop-shadow-lg 
                                        hover:drop-shadow-md rounded-lg border-rose-300 w-80 h-10 mx-auto">
          <p class = "text-xl text-white font-momo">input video</p>
          <input type = "file" hidden id = "target" accept=".mp4">
     </div>

</template>

<script lang = "ts">
     import fi from "@/fileinput";

     export default {
          name: 'VideoView',
          mounted() {
               fi.methods.myMethod();
          }
     };
</script>