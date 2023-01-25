import cv, { Mat } from "opencv-ts";

const channels = [0];
const histSize = [256];
const ranges = [0, 256];

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
     let similarity = 0.0;

     const hist: Mat = new cv.Mat(height, width, cv.CV_8UC1);
     let hist2: Mat = new cv.Mat(height, width, cv.CV_8UC1);

     const timeid = setInterval(function() {
          if(video.ended || duration - video.currentTime < 0.01){
               clearInterval(timeid);
               video.controls = true;
               hist.delete();
          }
          // 現在のフレームの読み込みが完了したら更新
          if (video.readyState > 3) {
               // console.log("state: ", video.readyState);
               // console.log("second: ", video.currentTime);
               
               const canvas = document.createElement('canvas');
               canvas.width = width;
               canvas.height = height;
               const context = canvas.getContext('2d', {willReadFrequently: true}) as CanvasRenderingContext2D;
     
               // link image
               context.drawImage(video, 0, 0, width, height);
                    
               // set
               const src: Mat = new cv.Mat(height, width, cv.CV_8UC4);
               src.data.set(context.getImageData(0, 0, width, height).data);
                              
               // RGBA -> GRAY
               const gray: Mat = new cv.Mat(height, width, cv.CV_8UC1);
               cv.cvtColor(src, gray, cv.COLOR_RGBA2GRAY);

               // calc Histgram
               const matVector = new cv.MatVector();
               matVector.push_back(gray);          
               cv.calcHist(matVector, channels, new cv.Mat(), hist, histSize, ranges);
               cv.normalize(hist, hist, 1, 0, cv.NORM_L1);
               matVector.delete();

               // transform
               if (i > 1) {
                    similarity = cv.compareHist(hist, hist2, 0);
                    // console.log("similarity: ", similarity);
               } else {
                    hist2 = hist.clone();
               }
     
               // save image
               if (i == 1 || similarity < 0.70){
                    // draw image
                    hist2 = hist.clone();

                    // add frame number
                    context.fillStyle = 'rgb(0, 0, 0)';
                    context.fillRect(width * 0.9, height * 0.9, 
                                        width * 0.95, height * 0.95);
                    context.font = '10px serif';
                    context.fillStyle = 'rgb(255, 255, 255)';
                    context.fillText(String(i), width * 0.92 , height * 0.98);
                    src.data.set(context.getImageData(0, 0, width, height).data);

                    cv.imshow(canvas, src);
                    result.appendChild(canvas);
               }

               // delete image
               src.delete();
               gray.delete();

               // update
               video.currentTime += delay;
               i += 1;
          }
     }, 0);  
     hist2.delete();  
}

export default {
     mainprocess
}