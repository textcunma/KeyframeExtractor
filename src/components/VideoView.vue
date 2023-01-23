<template>
     <div id = "inputBtn" class = "cursor-pointer bg-white hover:bg-slate-100 active:bg-slate-200 drop-shadow-lg hover:drop-shadow-md border-dashed border-2 rounded-lg border-rose-300 w-80 h-60 mx-auto">
          <div id = "content" class = "text-center">
               <p class = "text-3xl font-momo mt-20">Input Video</p>
               <p class = "m-1">'Click' or 'Drag & Drop'</p>
          </div>
          <input type="file" hidden id="target">
     </div>
</template>

<!-- <script lang="ts">
     /* eslint @typescript-eslint/no-explicit-any: 0 */
     function component(blobUrl: string) {
          const element = document.createElement('video');
          element.controls = true;
          element.src = blobUrl;
          element.classList.add('videostyle');
          return element;
     }

     const area = document.querySelectorAll<HTMLDivElement>('#inputBtn');
     const srcVideo = document.getElementById("target") as HTMLInputElement;
     const content = document.getElementById('content') as HTMLDivElement;

     area.forEach((ele) => {
          ele.addEventListener('click', () => {
               srcVideo.click();

          });
     });

     srcVideo.addEventListener("change", function() {
        // フォームで選択された全ファイルを取得
        const fileList: any = this.files;
        content.innerHTML = '';
        if (fileList.length > 2){
            alert("動画ファイルは1つだけ入力してください");
            return;
        }else{
            let blobUrl = URL.createObjectURL( fileList[0] ) ;
            content.appendChild(component(blobUrl));
        }
    } ) ;
</script> -->