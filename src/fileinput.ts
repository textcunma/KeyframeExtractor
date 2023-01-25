/* eslint @typescript-eslint/no-explicit-any: 0 */
function inputprocess() {
     const inputBtn = document.querySelectorAll('#inputArea');
     const inputFile = document.getElementById('target') as HTMLInputElement;

     inputBtn.forEach((ele) => {
          ele.addEventListener('click', () => {
               inputFile.click();
          })
     })

     inputFile.addEventListener('change', function() {
          const element = document.getElementById('displayVideo') as HTMLVideoElement;
          const result = document.getElementById("result") as HTMLDivElement;
          if (result.childNodes.length != 0) {
               result.innerHTML = "";
          }
          
          console.log(element.src);
          const fileList: any = this.files;
          if (fileList.length < 1){
               return;
          }
          if (element.src) {
               element.src = "";
          }
          const blobUrl = URL.createObjectURL(fileList[0]);
          element.hidden = false;
          element.src = blobUrl;
     })
}

export default {
     name: 'fileinput',
     methods: {
          myMethod() {
               inputprocess();
          }
     }

}