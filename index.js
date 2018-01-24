var intervals = {
	0.43: 8,
	3.46: 9, 
	6.51: 10,
	9.54: 12,
	12.59: 4,
	13.16: 6,
	13.73: 12,
	14.30: 24,
	14.46: 12,
	15.62: 6,
	16.21: 4,
	16.77: 3,
	17.34: 2,
	17.52: 8,
	18.66: 2,
	19.24: 9,
	19.81: 6,
	20.36: 8,
	20.56: 5,
	21.51: 12,
	21.70: 24,
	22.27: 25,
	22.84: 11,
	23.40: 4,
	23.57: 7,
	24.73: 2,
	25.32: 5,
	25.87: 8,
	26.46: 12,
	26.63: 25,
	27.01: 10,
	27.78: 5,
	28.35: 7,
	28.91: 5,
	29.49: 9,
	29.68: 12,
	30.06: 16,
	30.44: 12,
	30.82: 8,
	31.39: 11,
	31.95: 4,
	32.52: 8,
	32.72: 6,
	33.10: 12,
	33.84: 2,
	34.43: 8,
	34.99: 6,
	35.56: 12,
	35.75: 20,
	36.87: 18,
	37.46: 15,
	38.04: 6,
	38.60: 8,
	38.79: 12,
	39.17: 16,
	39.93: 12,
	40.50: 8,
	41.06: 10,
	41.64: 24,
	41.84: 12,
	42.21: 14,
	42.60: 5,
	42.98: 7,
	43.51: 8,
	44.10: 5,
	44.67: 4,
	44.86: 3,
	45.26: 12,
	46.01: 14,
	46.57: 10,
	47.16: 5,
	47.73: 8,
	47.91: 5,
	48.28: 13,
	49.04: 8,
	49.62: 16,
	50.17: 12,
	50.75: 10,
	50.94: 14,
	51.32: 8,
	52.08: 24,
	52.65: 20,
	53.21: 18,
	53.79: 16,
	53.97: 5,
	54.37: 14,
	54.75: 11,
	55.12: 8,
	55.67: 3,
	56.26: 15,
	56.83: 5,
	57.01: 12,
	57.41: 24,
	58.16: 8,
	61.20: 4,
}

window.mobileAndTabletcheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

function load() {

	console.log("LOADED!");
	
	var audio = document.getElementById("vape_nation"); 
	audio.volume = 0.3;

	if (window.mobileAndTabletcheck()) {
		var onClick = function() {
    			audio.play(); // audio will load and then play
		};
		document.body.addEventListener('click', onClick, false);
	} else {
		audio.play();
	}
	
	setInterval(function(){
		var time = (audio.currentTime).toFixed(2)
		//console.log("interval: " + time);
		if (intervals[time] != undefined) document.getElementsByTagName("body")[0].style.backgroundSize=(intervals[time]) + "%";
	}, 0.1);

};
