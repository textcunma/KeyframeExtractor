import cv, { Mat } from "opencv-ts";
import type {} from 'typed-query-selector/strict'

function component() {
     const element = document.createElement('canvas');
     return element;
}

function getVideo(){
     const runBtn = document.querySelectorAll('#runArea');
     const video = document.getElementById('displayVideo') as HTMLVideoElement;
     const result = document.getElementById("result") as HTMLDivElement;

     runBtn.forEach((ele) => {
          ele.addEventListener('click', () => {
               
               // const src: Mat = new cv.Mat(video.height, video.width, cv.CV_8UC4);
               // const dst: Mat = new cv.Mat(video.height, video.width, cv.CV_8UC1);
               let i = 0;
               setInterval(function() {
                    const canvas:any = component();
                    const context = canvas.getContext('2d');

                    context.drawImage(video, 0, 0, canvas.width, canvas.height);
                    context.fillStyle = 'rgb(0, 0, 0)';
                    context.fillRect(canvas.width * 0.9, canvas.height*0.9, canvas.width * 0.95, canvas.height * 0.95);
                    context.font = '10px serif';
                    context.fillStyle = 'rgb(255, 255, 255)';
                    context.fillText(String(i), canvas.width * 0.92 , canvas.height * 0.98);

                    // OpenCV.jsを使用して画像をグレースケールに変換
                    const src: Mat = cv.imread(canvas);
                    cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
                    cv.imshow(canvas, src);

                    src.delete();
                    result.appendChild(canvas);
                    i += 1

          }, 50);
          })
     })
}

export default {
     name: 'cvprocess',
     methods: {
          myMethod() {
               getVideo();
          }
     }

}