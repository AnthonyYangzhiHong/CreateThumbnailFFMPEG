var exec = require('child_process').exec;
var child = exec('ffmpeg -i test1.mp4 -ss 00:00:00.000 -vframes 1 out.png');


