import type {} from 'typed-query-selector/strict'

/* eslint @typescript-eslint/no-explicit-any: 0 */
function component(blobUrl:string) {
     const element = document.getElementById('displayVideo') as HTMLVideoElement;
     element.hidden = false;
     element.src = blobUrl;
}
 
function inputprocess() {
     const inputBtn = document.querySelectorAll('#inputArea');
     const inputFile = document.getElementById('target') as HTMLInputElement;

     inputBtn.forEach((ele) => {
          ele.addEventListener('click', () => {
               inputFile.click();
          })
     })

     inputFile.addEventListener('change', function() {
          const fileList: any = this.files;
          const blobUrl = URL.createObjectURL(fileList[0]);
          component(blobUrl);

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