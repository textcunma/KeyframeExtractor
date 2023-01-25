
import { Ref } from 'vue';

function onFileSelected(landportFlg: Ref<boolean>) {
     const inputFile = document.getElementById('inputBtn') as HTMLInputElement;
     const video = document.getElementById('displayVideo') as HTMLVideoElement;
     const result = document.getElementById("result") as HTMLDivElement;

     if (result.childNodes.length != 0) {
          result.innerHTML = "";
     }
     
     const fileList = inputFile.files as FileList;
     if (fileList.length < 1){
          return;
     }
     if (video.src) {
          video.src = "";
     }

     const blobUrl = URL.createObjectURL(fileList[0]);
     video.hidden = false;
     video.src = blobUrl;

     video.addEventListener('canplay', function() {
          if (video.videoHeight > video.videoWidth) {
               landportFlg.value = false;
          }
     })
}

function pushInputBtn (landportFlg: Ref<boolean>) {
     // もし映像が入力欄にあるならば隠す
     const video = document.getElementById('displayVideo') as HTMLVideoElement;
     video.hidden = true;

     // 横長の入力欄にする
     landportFlg.value = true;

     // 入力ダイアログを起動
     const inputFile = document.getElementById('inputBtn') as HTMLInputElement;
     inputFile.click();
}


export default {
     pushInputBtn,
     onFileSelected
}