function drawTree (row) {
  for (i=0; i<=row-1; i++){
    var star = '';
    for (j=0; j<=i; j++) {
      star += '*';
    }
    console.log(star)
  }
}
drawTree(5)