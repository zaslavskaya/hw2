
(function() {

    var app = {

        initialize: function() {
            this.modules();
            this.setUpListeners();
        },

        modules: function() {

        },

        setUpListeners: function() {
            $('form').on('submit', app.submitForm);
            $('form').on('keydown', 'input, textarea ', app.removeError);
        },

        submitForm: function(e) {
            e.preventDefault();

            var form = $(this);

            if (app.validateForm(form) === false) return false;

        },

        validateForm: function(form) {
            var inputs = form.find('input.inputs'),
                inputsl = form.find('input.leftInput, textarea.leftInput'), 
                valid = true;

            inputs.tooltip('destroy');

            $.each(inputs, function(index, val) {
                var input = $(val),
                    val = input.val(),
                    formGroup = input.parents('.parent_form'),
                    label = formGroup.find('label').text().toLowerCase(),
                    textError = 'Введите  ' + label;

                if (val.length === 0) {
                    formGroup.addClass('has-error').removeClass('has-success');
                    input.tooltip({
                        trigger: 'manual',
                        placement: 'right',
                        title: textError
                    }).tooltip('show');
                    valid = false;
                } else {
                    formGroup.addClass('has-success').removeClass('has-error');
                }

            });

            $.each(inputsl, function(index, val) {
                var input = $(val),
                    val = input.val(),
                    formGroup = input.parents('.parent_form'),
                    label = formGroup.find('label').text().toLowerCase(),
                    textError = 'Введите  ' + label;

                if (val.length === 0) {
                    formGroup.addClass('has-error').removeClass('has-success');
                    input.tooltip({
                        trigger: 'manual',
                        placement: 'left',
                        title: textError
                    }).tooltip('show');
                    valid = false;
                } else {
                    formGroup.addClass('has-success').removeClass('has-error');
                }

            });

            return valid;
        },

        removeError: function() {
            $(this).tooltip('destroy').parents('.parent_form').removeClass('has-error');
        }

    };

    app.initialize();

}());