import * as tf from '@tensorflow/tfjs';

// 传统 for 循环
const input = [1, 2, 3, 4];
const w = [[1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6], [4, 5, 6, 7]];
const output = [0, 0, 0, 0];

performance.mark("p1:start");
for (let index = 0; index < 10000; index++) {
   for (var i = 0; i < w.length; i++) {
     for (var j = 0; j < input.length; j++) {
       output[i] += input[j] * w[i][j];
     }
   }
}
performance.mark("p1:end");
console.log(output);

performance.mark("p2:start");
for (let index = 0; index < 10000; index++) {
const dot = tf.tensor(w).dot(tf.tensor(input));
}

performance.mark("p2:end");
performance.measure("p1", "p1:start", "p1:end");
performance.measure("p2", "p2:start", "p2:end");
const measures = performance.getEntriesByType("measure");
console.log('measures',measures);