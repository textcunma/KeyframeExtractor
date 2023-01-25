
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
     video.src = blobUrl;
     video.hidden = false;
     console.log(video.src);

     video.addEventListener('durationchange', function() {
          console.log("video.videoHeight: ", video.videoHeight);
          console.log("video.videoWidth: ", video.videoWidth);
          if (video.videoHeight > video.videoWidth) {
               console.log("toFalse");
               console.log("flg: ", landportFlg.value);
               landportFlg.value = false;
          } else {
               console.log("toTrue");
               console.log("flg: ", landportFlg.value);
               landportFlg.value = true;
          }
     }, {once: true});
}

function pushInputBtn () {
     // 入力ダイアログを起動
     const inputFile = document.getElementById('inputBtn') as HTMLInputElement;
     inputFile.click();
}


export default {
     pushInputBtn,
     onFileSelected
}