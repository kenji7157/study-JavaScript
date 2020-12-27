// inputに入力データ全体が入る
function Main(input) {
	input = input.trim().split("\n");
	var [n,m,t] = input[0].split(" ").map(x=>parseInt(x));
	const fN = n;
	let fB = 0;
	for (let i=0; i<m; i++) {
		var [a,b] = input[i+1].split(" ").map(x=>parseInt(x));
		n = n - (a - fB);
		if (n <= 0) {
			console.log('No');
			return;
		}
		n = n + ( b - a);
		fB = b;
		if (n>fN){
			n=fN;
		}  
	}

	n = n - (t - b);

	console.log(n>0?'Yes':'No');
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require('fs').readFileSync('./sample.txt', 'utf8'));
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));