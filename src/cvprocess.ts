import cv, { Mat } from "opencv-ts";

const channels = [0];
const histSize = [256];
const ranges = [0, 256];

// フレーム番号を描画
function drawFrameNumber(width: number, height: number, frameNum: number, 
                         context: CanvasRenderingContext2D, src: Mat){
     context.fillStyle = 'rgb(0, 0, 0)';
     context.fillRect(width * 0.9, height * 0.9, 
                         width * 0.95, height * 0.95);
     context.font = '10px serif';
     context.fillStyle = 'rgb(255, 255, 255)';
     context.fillText(String(frameNum), width * 0.92 , height * 0.98);
     src.data.set(context.getImageData(0, 0, width, height).data);
     return src
}

// ヒストグラムを計算
function calcHistogram(width:number, height:number, src:Mat, hist: Mat) {
     // RGBA -> GRAY
     const gray: Mat = new cv.Mat(height, width, cv.CV_8UC1);
     cv.cvtColor(src, gray, cv.COLOR_RGBA2GRAY);

     // calc Histgram
     const matVector = new cv.MatVector();
     matVector.push_back(gray);          
     cv.calcHist(matVector, channels, new cv.Mat(), hist, histSize, ranges);
     cv.normalize(hist, hist, 1, 0, cv.NORM_L1);
     matVector.delete();
     gray.delete();

     return hist;
}

function mainprocess(){
     // 入力映像の有無を確認 | もし初期状態のhidden = trueであれば入力映像無し
     const video = document.getElementById('displayVideo') as HTMLVideoElement;
     if (video.hidden) {
          alert("入力映像が見つかりません");
          throw new Error('no input video');
     }

     // ラジオボタン確認
     // const radios = document.getElementsByName('style');
     // const radiosLength = radios.length;
     // let styleNum = 0;
     // for (styleNum = 0; styleNum < radiosLength; styleNum++){
     //      const radioInput = radios[styleNum] as HTMLInputElement;
     //      if (radioInput.checked){
     //           break;
     //      }
     // }

     // もしresult欄に既に記述されているなら削除
     const result = document.getElementById("result") as HTMLDivElement;
     if (result.childNodes.length != 0) {
          result.innerHTML = "";
     }     
     
     // 30 FPS(1s - 30frame)
     const delay = 0.0333;

     // 映像情報
     const videoInfo = video.getBoundingClientRect();
     const width = videoInfo.width;
     const height = videoInfo.height;
     const duration = video.duration;
     // console.log("duration: " ,duration);

     // スマホ表示におけるバグ対策
     video.play();
     video.pause();

     // 処理する前に映像を初期化 | 操作不能
     video.currentTime = 0.0;
     video.controls = false;
     
     let frameNum = 1;
     let similarity = 0.0;

     let hist: Mat = new cv.Mat(height, width, cv.CV_8UC1);
     let hist2: Mat = new cv.Mat(height, width, cv.CV_8UC1);

     const timeid = setInterval(function() {
          if(video.ended || duration - video.currentTime < 0.01){
               // console.log(hist);
               // console.log(hist2);

               // 結果に移動
               result.scrollIntoView({
                    behavior: "smooth",
               });

               hist.delete();
               hist2.delete();
               video.controls = true;
               clearInterval(timeid);
               return;
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
                    
               // set image
               const src: Mat = new cv.Mat(height, width, cv.CV_8UC4);
               src.data.set(context.getImageData(0, 0, width, height).data);

               // calc histgoram
               hist = calcHistogram(width, height, src, hist);

               // ヒストグラム類似度を計算
               if (frameNum > 1) {
                    similarity = cv.compareHist(hist, hist2, 0);
                    // console.log("similarity: ", similarity);
               }
     
               // save image (1フレーム目 もしくは 類似度が0.7未満のフレーム)
               if (frameNum < 2 || similarity < 0.70){
                    // copy hist2 from hist
                    hist2 = hist.clone();

                    // draw frame number
                    drawFrameNumber(width, height, frameNum, context, src);

                    cv.imshow(canvas, src);
                    result.appendChild(canvas);
               }

               // delete image
               src.delete();
               
               // update
               video.currentTime += delay;
               frameNum += 1;
          }
     }, 0);  

}

export default {
     mainprocess
}