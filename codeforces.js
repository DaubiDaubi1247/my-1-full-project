var date = readline().split(' ');
var temp = (Math.max(date[0], date[1]) - date[2]) * (Math.min(date[0], date[1]));
print(1 + temp / date[2]);