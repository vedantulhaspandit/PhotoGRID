function showStatus(msg,delay){
		$('.status').hide().html(msg).fadeIn(200).delay(delay).fadeOut(300);
}

function ajax(config){ // make an ajax call to the node js app on the back end and transfer the file
			this.method = config.method || 'GET';
			this.payload = config.payload || null;
			var xhr = new XMLHttpRequest();
			xhr.open(this.method, config.url, true);
			xhr.upload.addEventListener("progress", function(e){
				config.progress(e);
			});
			xhr.addEventListener("load", function(){
				config.success(xhr);
			});
			xhr.addEventListener("error", config.error);
			xhr.send(this.payload);
}

$(function(){ // form validation to check on images to be uploaded
		$(document).on('change', '.uploadPic', function(e){
			var ext = this.value.match(/\.([^\.]+)$/)[1].toLowerCase();
			var permit = ['jpg','jpeg','gif','png'];
			if(permit.indexOf(ext)>-1){
				showStatus('Ready to Upload !', 600);
			} else {
				showStatus('Your Chosen File Is Not Permitted !! Please pick JPG, GIF or PNG files only !', 4000);
				$(this).val('');
			}
		})


})
