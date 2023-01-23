import type {} from 'typed-query-selector/strict'

/* eslint @typescript-eslint/no-explicit-any: 0 */
function component(blobUrl:string) {
     const element = document.createElement('video');
     element.controls = true;
     element.src=blobUrl;
     element.classList.add('videostyle');
     return element;
}
 
function inputprocess() {
     const inputArea = document.querySelectorAll('#inputArea');
     const inputFile = document.getElementById('target') as HTMLInputElement;
     const content = document.getElementById('content') as HTMLDivElement;

     inputArea.forEach((ele) => {
          ele.addEventListener('click', () => {
               inputFile.click();
          })
     })

     inputFile.addEventListener('change', function() {
          const fileList:any = this.files;
          content.innerHTML = '';
          const blobUrl: string = URL.createObjectURL(fileList);
          content.appendChild(component(blobUrl));

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