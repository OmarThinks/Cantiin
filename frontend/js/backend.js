var backend_location="http://127.0.0.1:5000/"


function get_products(/*to_be_done,*/in_stock=true)
{
	if (in_stock==true)
	{	url = backend_location+"products?in_stock=true";}
	else
	{	url = backend_location+"products?in_stock=false"}
	var settings = {
	  "url": url,
	  "method": "GET",
	  "timeout": 0
	};
	var to_return="";
	return $.ajax(settings).done(function(response) {
	  //to_be_done(input=response);
	  to_return = response;
	});
}
/*
Example:
get_products().then(function(value) {console.log(value);});
it will console.log all the result
*/

let get_products_promise = new Promise
(
	function(myResolve, myReject)
		{

		}
)


function build_url(endpoint,query_inputs=Array())
{
	var to_return = backend_location + endpoint;
	if (query_inputs.length == 0)
		{return to_return;}
	to_return=to_return+"?";


	for (const property in query_inputs) {
  		to_return=to_return+`${property}=${query_inputs[property]}`+"&";
	}
	to_return=to_return.substring(0,to_return.length-1);
	return to_return;

	/*query_inputs.forEach(function (value, i) {
    	console.log("Looping");
    	to_return=to_return+i+"="+value+"&";
	});*/
	//To trim the last letter of the sting
	//to_return=to_return.substring(0,to_return.length-1);
}

/*
	Example:

  query_parameters={"stock_id":1,"user_id":5}
  console.log(build_url("products",query_inputs=
  query_parameters));

http://127.0.0.1:5000/products?stock_id=1&user_id=5

*/