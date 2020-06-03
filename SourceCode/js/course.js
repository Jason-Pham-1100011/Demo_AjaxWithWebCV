$(document).ready(function(){
  
	var courses = $('div.course');
	var table = courses.append('<table></table>');

	table.append('<tr><th class="tb_id">ID</th><th class="tb_name">NAME</th></tr>')
	$.ajax({

		type: 'GET',
		url: 'http://demo6370041.mockable.io/getcourses',
		dataType: 'json',
		async: false,
		success: function(data) {
			$.each(data, function(index,item){
				$.each(item, function(key, value){
					var	row = table.append('<tr onclick="info()"></tr>');
					var col = '<td class="tb_id">'+value.id+'</td>'+'<td class="tb_name">'+value.name+'</td>';

					row.append(col);
					table.append(row);
					//alert(value.name);
				});
				courses.append('</br>');
			});
		} 
	});

});

