  var string = document.location.pathname;
  var parts = string.split('/');
  var name = parts[parts.length - 1];
}
var data;
if(name == "index.html" ){
	data = "About ADHD";
}else if(name == "guide.html"){
  data = "Doctor Discussion Guide";
}else if(name == "about.html"){
  data = "About Vyvanse";
}else if(name  == "savings.html"){
  data = "Savings Offer";
}
_satellite.setVar('Data_QHA_PageView_Micro', data);
return data;
