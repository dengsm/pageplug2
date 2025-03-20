export default {
	 
	onPageNoOrPageSizeChange: ()=>{
	log_select.run();
},
 	onPageNoOrPageSizeChange_config: ()=>{
	log_select.run();
},
faillog_search: ()=>{
		storeValue('searchtxt','fail').then(()=>{
				log_select.run();
		});
},
successlog_search: ()=>{
		storeValue('searchtxt','success').then(	() => {
     log_select.run();
    });
}
}