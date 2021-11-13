(function (f, e) {
	var a = '<a tabindex="0" class="wp-color-result" />',
		c = '<div class="wp-picker-holder" />',
		b = '<div class="wp-picker-container" />',
		g = '<input type="button" class="button button-small hidden" />';
	var d = {
		options: {
			defaultColor: false,
			change: false,
			clear: false,
			hide: true,
			palettes: true,
		},
		_create: function () {
			if (f.browser.msie && parseInt(f.browser.version, 10) < 8) {
				return;
			}
			var h = this;
			var i = h.element;
			f.extend(h.options, i.data());
			h.initialValue = i.val();
			i.addClass("wp-color-picker").hide().wrap(b);
			h.wrap = i.parent();
			h.toggler = f(a)
				.insertBefore(i)
				.css({ backgroundColor: h.initialValue })
				.attr("title", wpColorPickerL10n.pick)
				.attr("data-current", wpColorPickerL10n.current);
			h.pickerContainer = f(c).insertAfter(i);
			h.button = f(g);
			if (h.options.defaultColor) {
				h.button
					.addClass("wp-picker-default")
					.val(wpColorPickerL10n.defaultString);
			} else {
				h.button.addClass("wp-picker-clear").val(wpColorPickerL10n.clear);
			}
			i.wrap('<span class="wp-picker-input-wrap" />').after(h.button);
			i.iris({
				target: h.pickerContainer,
				hide: true,
				width: 255,
				mode: "hsv",
				palettes: h.options.palettes,
				change: function (j, k) {
					h.toggler.css({ backgroundColor: k.color.toString() });
					if (f.isFunction(h.options.change)) {
						h.options.change.call(this, j, k);
					}
				},
			});
			i.val(h.initialValue);
			h._addListeners();
			if (!h.options.hide) {
				h.toggler.click();
			}
		},
		_addListeners: function () {
			var h = this;
			h.toggler.click(function (i) {
				i.stopPropagation();
				h.element.toggle().iris("toggle");
				h.button.toggleClass("hidden");
				h.toggler.toggleClass("wp-picker-open");
				if (h.toggler.hasClass("wp-picker-open")) {
					f("body").on(
						"click",
						{ wrap: h.wrap, toggler: h.toggler },
						h._bodyListener
					);
				} else {
					f("body").off("click", h._bodyListener);
				}
			});
			h.element.change(function (j) {
				var i = f(this),
					k = i.val();
				if (k === "" || k === "#") {
					h.toggler.css("backgroundColor", "");
					if (f.isFunction(h.options.clear)) {
						h.options.clear.call(this, j);
					}
				}
			});
			h.toggler.on("keyup", function (i) {
				if (i.keyCode === 13 || i.keyCode === 32) {
					i.preventDefault();
					h.toggler.trigger("click").next().focus();
				}
			});
			h.button.click(function (j) {
				var i = f(this);
				if (i.hasClass("wp-picker-clear")) {
					h.element.val("");
					h.toggler.css("backgroundColor", "");
					if (f.isFunction(h.options.clear)) {
						h.options.clear.call(this, j);
					}
				} else {
					if (i.hasClass("wp-picker-default")) {
						h.element.val(h.options.defaultColor).change();
					}
				}
			});
		},
		_bodyListener: function (h) {
			if (!h.data.wrap.find(h.target).length) {
				h.data.toggler.click();
			}
		},
		color: function (h) {
			if (h === e) {
				return this.element.iris("option", "color");
			}
			this.element.iris("option", "color", h);
		},
		defaultColor: function (h) {
			if (h === e) {
				return this.options.defaultColor;
			}
			this.options.defaultColor = h;
		},
	};
	f.widget("wp.wpColorPicker", d);
})(jQuery);
