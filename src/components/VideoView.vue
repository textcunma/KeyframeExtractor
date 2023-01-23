<template>
     <div id = "inputArea" class = "cursor-pointer bg-white hover:bg-slate-100 active:bg-slate-200 drop-shadow-lg hover:drop-shadow-md border-dashed border-2 rounded-lg border-rose-300 w-80 h-60 mx-auto">
          <div id = "content" class = "text-center">
               <p class = "text-3xl font-momo mt-20">Input Video</p>
               <p class = "m-1">'Click' or 'Drag & Drop'</p>
          </div>
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