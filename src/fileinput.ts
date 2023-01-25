function inputprocess() {
     const inputFile = document.getElementById('target') as HTMLInputElement;
     const element = document.getElementById('displayVideo') as HTMLVideoElement;

     inputFile.click();

     inputFile.addEventListener('change', function() {
          const result = document.getElementById("result") as HTMLDivElement;

          if (result.childNodes.length != 0) {
               result.innerHTML = "";
          }
          
          console.log(element.src);
          
          const fileList = this.files as FileList;
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