module.exports = function multiply(first, second) {
  let one = first.split('');
	let two = second.split('');
	let sum = Array(one.length + two.length).fill(0);

	for(let i = one.length-1; i > -1; i--){
		for(let j = two.length-1; j > -1; j--){
			
			let temp = (one[i] * two[j]) + sum[i+j+1];
			if(temp >= 10){
				sum[i+j+1] = temp%10;
				sum[i+j] += Math.floor(temp/10);
			}else sum[i+j+1] = temp;
		}
	}
	while(sum[0] === 0)sum.shift();
	return sum.join('');
}
