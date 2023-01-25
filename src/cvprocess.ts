import cv, { Mat } from "opencv-ts";
import type {} from 'typed-query-selector/strict'

function mainprocess(){
     const video = document.getElementById('displayVideo') as HTMLVideoElement;
     const result = document.getElementById("result") as HTMLDivElement;
     const delay = 0.0333;   // 30 FPS(1[s]の内に30フレーム)

     if (result.childNodes.length != 0) {
          result.innerHTML = "";
     }

     const videoInfo = video.getBoundingClientRect();
     const width = videoInfo.width;
     const height = videoInfo.height;
     const duration = video.duration;
     console.log("duration: " ,duration);

     video.width = width;
     video.height = height;
     video.currentTime = 0.0;
     video.controls = false;
     
     let i = 1;

     const timeid = setInterval(function() {
          if(video.ended || duration - video.currentTime < 0.01){
               clearInterval(timeid);
               video.controls = true;
          }
          // 現在のフレームの読み込みが完了したら更新
          if (video.readyState > 3) {
               console.log("state: ", video.readyState);
               console.log("second: ", video.currentTime);
               
               const canvas = document.createElement('canvas');
               canvas.width = width;
               canvas.height = height;
               const context = canvas.getContext('2d', {willReadFrequently: true}) as CanvasRenderingContext2D;
     
               const src: Mat = new cv.Mat(height, width, cv.CV_8UC4);
     
               // link image
               context.drawImage(video, 0, 0, width, height);
     
               // add frame number
               context.fillStyle = 'rgb(0, 0, 0)';
               context.fillRect(width * 0.9, height * 0.9, 
                                   width * 0.95, height * 0.95);
               context.font = '10px serif';
               context.fillStyle = 'rgb(255, 255, 255)';
               context.fillText(String(i), width * 0.92 , height * 0.98);
               
               // set
               src.data.set(context.getImageData(0, 0, width, height).data);
               
               // transform
               cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
     
               // draw image
               cv.imshow(canvas, src);
     
               // delete image
               src.delete();
     
               // save image
               result.appendChild(canvas);
               
               // update
               video.currentTime += delay;
               i += 1;
          }
     }, 0);    
}

function getVideo(){
     const runBtn = document.querySelectorAll('#runArea');
     
     runBtn.forEach((ele) => {
          ele.addEventListener('click', mainprocess);
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