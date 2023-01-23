import cv, { Mat } from "opencv-ts";

function getVideo(){
     const runBtn = document.querySelectorAll('#runArea');

     runBtn.forEach((ele) => {
          ele.addEventListener('click', () => {
               const video = document.getElementById('displayVideo') as HTMLVideoElement;
               const canvas:any = document.getElementById('canvas001');
               const context = canvas.getContext('2d');
               const src: Mat = new cv.Mat(video.height, video.width, cv.CV_8UC4);
               const dst: Mat = new cv.Mat(video.height, video.width, cv.CV_8UC1);
               setInterval(function() {
                    context.drawImage(video, 0, 0, canvas.width, canvas.height);
                    // OpenCV.jsを使用して画像をグレースケールに変換
                    const src = cv.imread(canvas);
                    cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
                    cv.imshow(canvas, src);
                    src.delete();
               }, 50);
          })
     })




//     const intvl = setInterval(() => {
//         src.data.set(new Uint8Array(video.captureStream()));
//         cv.cvtColor(src, dst, cv.COLOR_RGBA2GRAY);
//         // Do something with the processed video frame
//     }, 20);
}

export default {
     name: 'cvprocess',
     methods: {
          myMethod() {
               getVideo();
          }
     }

}