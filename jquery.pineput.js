(function($) {
	$.fn.pineput = function() {
		var $this = $(this);
		for (var i = 0; i < $this.length; i++) {
			var $input_fields = $($this[i]).find('.input-field input:not([type="submit"]), .input-field textarea');

			// TODO: custom selector for input fields property
			// TODO: other form items like select, checkbox, radio button etc...

	        $input_fields.on('focus', function(e){
	            var $field = $(this).closest('.input-field');
	            $field.addClass('focus');
	        }).on('blur', function(e){
	            var $this = $(this);
	            var $field = $this.closest('.input-field');
	            $field.removeClass('focus');

	            var val = $this.val().trim();

	            if (val === '') {
	                $field.removeClass('active');
	            } else {
	                $field.addClass('active');
	            }
	        }).on('change', function(e){
	            var $this = $(this);
	            var $field = $this.closest('.input-field');
	            var val = $this.val().trim();

	            if (val === '') {
	                $field.removeClass('active');
	            } else {
	                $field.addClass('active');
	            }
	        });

	       	for (var j = 0; j < $input_fields.length; j++) {
	           	var $input_field = $($input_fields[j]);

	           	var $field = $input_field.closest('.input-field');
	           	var val = $input_field.val().trim();

	           	if (val === '') {
	               	$field.removeClass('active');
	           	} else {
	               	$field.addClass('active');
	           	}
	       	}

	       	$this.find('label').on('click', function(){
	           	$(this).closest('.input-field').find('input, textarea').trigger('focus');
	       	});

	       	$this.find('textarea').closest('.input-field').addClass('textarea');
		}
    }
})(jQuery);
