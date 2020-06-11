'use strict';Object.defineProperty(exports,'__esModule',{value:true});function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}//
//
//
//
var script = {
  name: 'bbIcon',
  props: {
    name: {
      type: String,
      required: true
    }
  }
};function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('i', {
    class: ['icon', _vm.name]
  }, []);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = undefined;
/* scoped */

var __vue_scope_id__ = "data-v-3513c16d";
/* module identifier */

var __vue_module_identifier__ = "data-v-3513c16d";
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);//
//
//
//
//
//
//
//
//
//
var script$1 = {
  name: 'bbForm',
  props: {
    action: {
      type: String,
      default: ''
    },
    method: {
      type: String,
      default: 'post'
    }
  },
  data: function data() {
    return {
      errors: []
    };
  },
  methods: {
    validate: function validate() {
      this.errors = [];
      this.recursiveValidate(this.$children);
      if (this.errors.length > 0) return false;
      return true;
    },
    recursiveValidate: function recursiveValidate(children) {
      var _this = this;

      children.forEach(function (child) {
        _this.validateInput(child);

        if (child.$children.length > 0) _this.recursiveValidate(child.$children);
      });
    },
    validateInput: function validateInput(input) {
      if (typeof input.validate === 'function') {
        if (['bb-checkbox', 'bb-switch'].includes(input.$options._componentTag)) {
          input.validate(input.$props.checked);
          this.handleInputErrors(input.$data.errors);
        } else {
          input.validate(input.$props.value);
          this.handleInputErrors(input.$data.errors);
        }
      }
    },
    handleInputErrors: function handleInputErrors(errors) {
      if (errors && errors.length > 0) {
        var _this$errors;

        (_this$errors = this.errors).push.apply(_this$errors, _toConsumableArray(errors));
      }
    }
  }
};/* script */
var __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('form', {
    attrs: {
      "action": _vm.action,
      "method": _vm.method
    },
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.$emit('submit');
      }
    }
  }, [_vm._t("default")], 2);
};

var __vue_staticRenderFns__$1 = [];
/* style */

var __vue_inject_styles__$1 = undefined;
/* scoped */

var __vue_scope_id__$1 = "data-v-c0f413d0";
/* module identifier */

var __vue_module_identifier__$1 = "data-v-c0f413d0";
/* functional template */

var __vue_is_functional_template__$1 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$1 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, undefined, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$2 = {
  name: 'bbBtn',
  props: {
    tag: {
      type: String,
      default: 'button'
    },
    size: {
      type: String,
      default: 'md'
    },
    color: {
      type: String,
      default: 'primary'
    },
    rounded: {
      type: Boolean,
      default: false
    },
    outline: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    flat: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String
    }
  },
  computed: {
    listeners: function listeners() {
      return _objectSpread2({}, this.$listeners);
    },
    classes: function classes() {
      return [this.defaultClass, this.sizeClass, this.shapeClass, this.bgClass, this.textColorClass, this.borderClass, this.shadowClass, this.displayClass, this.cursorClass];
    },
    defaultClass: function defaultClass() {
      return 'bb-btn font-medium border-2';
    },
    sizeClass: function sizeClass() {
      if (this.circle) {
        switch (this.size) {
          case 'lg':
            return 'w-12 h-12 text-2xl';

          case 'sm':
            return 'w-6 h-6 text-lg';

          case 'xs':
            return 'w-4 h-4 text-xs';

          default:
            return 'w-10 h-10 text-base';
        }
      } else {
        switch (this.size) {
          case 'lg':
            return 'px-12 h-16 text-2xl';

          case 'sm':
            return 'px-4 h-8 text-xs';

          case 'xs':
            return 'px-2 h-6 text-xs';

          default:
            return 'px-8 h-12 text-base';
        }
      }
    },
    shapeClass: function shapeClass() {
      if (this.circle) return 'rounded-full';

      switch (this.rounded) {
        case 'full':
          return 'rounded-full';

        case 'none':
          return 'rounded-none';

        default:
          return 'rounded';
      }
    },
    bgClass: function bgClass() {
      switch (this.color) {
        case 'white':
          if (this.flat) return this.disabled ? 'bg-white bg-opacity-25' : 'bg-white bg-opacity-25 hover:bg-opacity-50';
          if (this.outline) return 'bg-transparent';
          if (this.disabled) return 'bg-gray-200';
          return 'bg-white hover:bg-gray-100';

        case 'gray':
          if (this.flat) return this.disabled ? 'bg-gray-100' : 'bg-gray-100 hover:bg-gray-200';
          if (this.outline) return 'bg-transparent';
          if (this.disabled) return 'bg-gray-400';
          return 'bg-gray-500 hover:bg-gray-600';

        default:
          if (this.flat) return this.disabled ? 'bg-primary-100' : 'bg-primary-100 hover:bg-primary-200';
          if (this.outline) return 'bg-transparent';
          if (this.disabled) return 'bg-primary-400';
          return 'bg-primary-500 hover:bg-primary-600';
      }
    },
    borderClass: function borderClass() {
      switch (this.color) {
        case 'white':
          if (this.flat) return 'border-transparent';
          if (this.disabled) return 'border-gray-100';
          return 'border-white hover:border-gray-100';

        case 'gray':
          if (this.flat) return this.disabled ? 'border-gray-100' : 'border-gray-100 hover:border-gray-200';
          if (this.disabled) return 'border-gray-400';
          return 'border-gray-500 hover:border-gray-600';

        default:
          if (this.flat) return this.disabled ? 'border-primary-100' : 'border-primary-100 hover:border-primary-200';
          if (this.disabled) return 'border-primary-400';
          return 'border-primary-500 hover:border-primary-600';
      }
    },
    textColorClass: function textColorClass() {
      switch (this.color) {
        case 'white':
          if (this.outline || this.flat) return 'text-white';
          return 'text-primary-500';

        case 'gray':
          if (this.outline || this.flat) return 'text-gray-500';
          return 'text-white';

        default:
          if (this.outline || this.flat) return 'text-primary-500';
          return 'text-white';
      }
    },
    loadingColorClass: function loadingColorClass() {
      switch (this.color) {
        case 'white':
          if (this.outline || this.flat) return 'white';
          return 'primary';

        default:
          if (this.outline || this.flat) return 'primary';
          return 'white';
      }
    },
    shadowClass: function shadowClass() {
      if (this.outline || this.flat || this.disabled) return '';
      return 'shadow-lg hover:shadow-none';
    },
    displayClass: function displayClass() {
      if (this.circle) return 'flex justify-center items-center';
      if (this.block) return 'block w-full';
      return 'inline-block';
    },
    cursorClass: function cursorClass() {
      if (this.disabled) return 'cursor-not-allowed';
      return 'cursor-pointer';
    },
    iconSize: function iconSize() {
      if (this.circle) {
        switch (this.size) {
          case 'lg':
            return 'text-2xl';

          case 'sm':
            return 'text-lg';

          case 'xs':
            return 'text-xs';

          default:
            return 'text-base';
        }
      } else {
        switch (this.size) {
          case 'lg':
            return 'text-2xl';

          case 'sm':
            return 'text-xs';

          case 'xs':
            return 'text-xs';

          default:
            return 'text-base';
        }
      }
    }
  }
};function createInjectorSSR(context) {
    if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
    }
    if (!context)
        return () => { };
    if (!('styles' in context)) {
        context._styles = context._styles || {};
        Object.defineProperty(context, 'styles', {
            enumerable: true,
            get: () => context._renderStyles(context._styles)
        });
        context._renderStyles = context._renderStyles || renderStyles;
    }
    return (id, style) => addStyle(id, style, context);
}
function addStyle(id, css, context) {
    const group =  css.media || 'default' ;
    const style = context._styles[group] || (context._styles[group] = { ids: [], css: '' });
    if (!style.ids.includes(id)) {
        style.media = css.media;
        style.ids.push(id);
        let code = css.source;
        style.css += code + '\n';
    }
}
function renderStyles(styles) {
    let css = '';
    for (const key in styles) {
        const style = styles[key];
        css +=
            '<style data-vue-ssr-id="' +
                Array.from(style.ids).join(' ') +
                '"' +
                (style.media ? ' media="' + style.media + '"' : '') +
                '>' +
                style.css +
                '</style>';
    }
    return css;
}/* script */
var __vue_script__$2 = script$2;
/* template */

var __vue_render__$2 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c(_vm.tag, _vm._g(_vm._b({
    tag: "component",
    class: _vm.classes,
    attrs: {
      "disabled": _vm.disabled
    }
  }, 'component', _vm.$attrs, false), _vm.listeners), [_c('div', {
    staticClass: "flex justify-center items-center w-full h-full"
  }, [_vm.loading ? _c('bb-loading-icon', {
    staticClass: "mr-2",
    attrs: {
      "size": _vm.size,
      "color": _vm.loadingColorClass
    }
  }) : _c('div', {
    staticClass: "leading-none"
  }, [_vm.icon ? _c('bb-icon', {
    class: [_vm.textColorClass, _vm.iconSize, {
      'mr-2': !_vm.circle
    }],
    attrs: {
      "name": _vm.icon
    }
  }) : _vm._e(), _vm._v(" "), _vm._t("default")], 2)], 1)]);
};

var __vue_staticRenderFns__$2 = [];
/* style */

var __vue_inject_styles__$2 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-f6874498_0", {
    source: ".bb-btn[data-v-f6874498]{transition:all .2s ease;-webkit-transition:all .2s ease;-moz-transition:all .2s ease;-o-transition:all .2s ease;-ms-transition:all .2s ease;text-decoration:none!important;line-height:0}.bb-btn[data-v-f6874498]:active,.bb-btn[data-v-f6874498]:focus{outline:0!important}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$2 = "data-v-f6874498";
/* module identifier */

var __vue_module_identifier__$2 = "data-v-f6874498";
/* functional template */

var __vue_is_functional_template__$2 = false;
/* style inject shadow dom */

var __vue_component__$2 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, undefined, createInjectorSSR, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$3 = {
  name: 'bbTextInput',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: [String, Number],
      default: ''
    },
    label: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: 'input'
    },
    required: {
      type: Boolean,
      default: false
    },
    prepend: {
      type: Boolean,
      default: false
    },
    append: {
      type: Boolean,
      default: false
    },
    raised: {
      type: Boolean,
      default: false
    },
    uppercase: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    rules: {
      type: Array
    },
    validateOn: {
      type: String,
      default: 'blur'
    },
    noMargin: {
      type: Boolean,
      default: false
    },
    transparentDark: {
      type: Boolean,
      default: false
    },
    hint: {
      type: String
    },
    size: {
      type: String,
      default: 'medium',
      validator: function validator(value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      }
    }
  },
  data: function data() {
    return {
      focussed: false,
      errors: []
    };
  },
  computed: {
    listeners: function listeners() {
      var _this = this;

      var vm = this;
      return _objectSpread2(_objectSpread2({}, this.$listeners), {}, {
        input: function input(event) {
          vm.$emit('input', event.target.value);
          if (_this.validateOn === 'input') vm.validate(event.target.value);
        },
        paste: function paste(event) {
          vm.$emit('input', event.target.value);
          if (_this.validateOn === 'input') vm.validate(event.target.value);
        },
        focus: function focus() {
          vm.$emit('focus');
          vm.focussed = true;
        },
        blur: function blur(event) {
          vm.$emit('blur');
          vm.focussed = false;
          if (_this.validateOn === 'blur') vm.validate(event.target.value);
        }
      });
    },
    hasError: function hasError() {
      return this.errors.length > 0;
    },
    classes: function classes() {
      return [];
    },
    inputClasses: function inputClasses() {
      return [this.bgClasses, this.shapeClasses, this.sizeClasses, this.inputBorderClasses, this.textColorClasses, this.textClasses, this.cursorClasses, this.shadowClasses, this.textSize];
    },
    labelClasses: function labelClasses() {
      return [this.textSize, this.textColorClasses];
    },
    prependClasses: function prependClasses() {
      var borderClasses = 'border-t border-b border-l';
      var borderColor = 'border-gray-300';
      if (this.raised) borderColor = 'border-white';
      if (this.transparentDark) borderColor = 'border-black border-opacity-0';
      if (this.hasError) borderColor = 'border-red-500';
      return [borderClasses, borderColor, this.bgClasses, this.shadowClasses, this.textSize];
    },
    appendClasses: function appendClasses() {
      var borderClasses = 'border-t border-b border-r';
      var borderColor = 'border-gray-300';
      if (this.raised) borderColor = 'border-white';
      if (this.transparentDark) borderColor = 'border-black border-opacity-0';
      if (this.hasError) borderColor = 'border-red-500';
      return [borderClasses, borderColor, this.bgClasses, this.shadowClasses, this.textSize];
    },
    bgClasses: function bgClasses() {
      if (this.hasError) {
        if (this.transparentDark) return 'bg-black bg-opacity-25';
        return 'bg-red-100';
      }

      if (this.focussed && !this.raised) {
        if (this.transparentDark) return 'bg-black bg-opacity-25';
        return 'bg-gray-100';
      }

      if (this.raised) return 'bg-white';
      if (this.transparentDark) return 'bg-black bg-opacity-25';
      return 'bg-gray-300';
    },
    inputBorderClasses: function inputBorderClasses() {
      if (this.hasError) {
        if (this.prepend && this.append) return 'border-t border-b border-red-500';
        if (this.prepend) return 'border-t border-b border-r border-red-500';
        if (this.append) return 'border-t border-b border-l border-red-500';
        return 'border border-red-500';
      } else if (this.raised) {
        return 'border border-white';
      } else if (this.transparentDark) {
        if (this.prepend && this.append) return "border-t border-b border-black border-opacity-0";
        if (this.prepend) return "border-t border-b border-r border-black border-opacity-0";
        if (this.append) return "border-t border-b border-l border-black border-opacity-0";
        return "border border-black border-opacity-0";
      } else {
        if (this.prepend && this.append) return "border-t border-b border-gray-300";
        if (this.prepend) return "border-t border-b border-r border-gray-300";
        if (this.append) return "border-t border-b border-l border-gray-300";
        return "border border-gray-300";
      }
    },
    shapeClasses: function shapeClasses() {
      if (this.prepend && this.append) return '';
      if (this.prepend) return 'rounded-r';
      if (this.append) return 'rounded-l';
      return 'rounded';
    },
    textColorClasses: function textColorClasses() {
      if (this.hasError) return 'text-red-500';
      if (this.transparentDark) return 'text-white';
      return '';
    },
    textClasses: function textClasses() {
      if (this.disabled) return 'text-gray-600';
      if (this.uppercase) return 'uppercase';
      return '';
    },
    cursorClasses: function cursorClasses() {
      if (this.disabled) return 'cursor-not-allowed';
      return '';
    },
    shadowClasses: function shadowClasses() {
      if (this.raised) return 'shadow';
      return '';
    },
    textSize: function textSize() {
      switch (this.size) {
        case 'large':
          return 'text-lg';

        case 'small':
          return 'text-sm';

        default:
          return 'text-base';
      }
    },
    sizeClasses: function sizeClasses() {
      switch (this.size) {
        case 'large':
          return 'h-16 px-4';

        case 'small':
          return 'h-8 px-4';

        default:
          return 'h-12 px-4';
      }
    }
  },
  methods: {
    validate: function validate(val) {
      var _this2 = this;

      this.errors = [];
      if (this.rules && this.rules.length > 0) this.rules.forEach(function (rule) {
        var result = rule(val);
        if (typeof result === 'string') _this2.errors.push(result);
      });
    }
  }
};/* script */
var __vue_script__$3 = script$3;
/* template */

var __vue_render__$3 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    class: _vm.classes.concat([{
      'mb-6': !_vm.noMargin
    }])
  }, [_vm._ssrNode("<div data-v-38e756fe>", "</div>", [_vm.label ? _vm._ssrNode("<label" + _vm._ssrAttr("for", _vm.name) + _vm._ssrClass(null, _vm.labelClasses) + " data-v-38e756fe>", "</label>", [_vm._ssrNode(_vm._ssrEscape(_vm._s(_vm.label) + "\n      ") + (_vm.required ? "<span data-v-38e756fe>*</span>" : "<!---->"))], 2) : _vm._ssrNode("<label" + _vm._ssrAttr("for", _vm.name) + _vm._ssrClass(null, _vm.labelClasses) + " data-v-38e756fe>", "</label>", [_vm._t("label")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"flex\" data-v-38e756fe>", "</div>", [_vm.prepend ? _vm._ssrNode("<div" + _vm._ssrClass(null, ["prepend rounded-l"].concat(_vm.prependClasses)) + " data-v-38e756fe>", "</div>", [_vm._ssrNode("<div class=\"flex items-center justify-center h-full\" data-v-38e756fe>", "</div>", [_vm._t("prepend")], 2)]) : _vm._e(), _vm._ssrNode(" <div class=\"flex-1\" data-v-38e756fe><input" + _vm._ssrAttr("type", _vm.type) + _vm._ssrAttr("name", _vm.name) + _vm._ssrAttr("disabled", _vm.disabled) + _vm._ssrAttr("value", _vm.value) + _vm._ssrAttrs(_vm.$attrs) + _vm._ssrClass(null, ['w-full leading-none'].concat(_vm.inputClasses)) + " data-v-38e756fe></div> "), _vm.append ? _vm._ssrNode("<div" + _vm._ssrClass(null, ["append rounded-r"].concat(_vm.appendClasses)) + " data-v-38e756fe>", "</div>", [_vm._ssrNode("<div class=\"flex items-center justify-center h-full\" data-v-38e756fe>", "</div>", [_vm._t("append")], 2)]) : _vm._e()], 2)], 2), _vm._ssrNode(" <div" + _vm._ssrClass(null, ['relative'].concat(_vm.labelClasses)) + " data-v-38e756fe><div class=\"text-red-500 text-sm absolute\"" + _vm._ssrStyle(null, null, {
    display: _vm.hasError ? '' : 'none'
  }) + " data-v-38e756fe>" + _vm._ssrEscape("\n      " + _vm._s(_vm.errors[0]) + "\n    ") + "</div> <div class=\"text-gray-500 text-sm absolute\"" + _vm._ssrStyle(null, null, {
    display: !_vm.hasError && !!_vm.hint ? '' : 'none'
  }) + " data-v-38e756fe>" + _vm._ssrEscape("\n      " + _vm._s(_vm.hint) + "\n    ") + "</div></div>")], 2);
};

var __vue_staticRenderFns__$3 = [];
/* style */

var __vue_inject_styles__$3 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-38e756fe_0", {
    source: ".append[data-v-38e756fe],.prepend[data-v-38e756fe],input[data-v-38e756fe]{transition:all .3s ease;-webkit-appearance:none;-moz-appearance:none;appearance:none}input[data-v-38e756fe]:focus{outline:0}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$3 = "data-v-38e756fe";
/* module identifier */

var __vue_module_identifier__$3 = "data-v-38e756fe";
/* functional template */

var __vue_is_functional_template__$3 = false;
/* style inject shadow dom */

var __vue_component__$3 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$3,
  staticRenderFns: __vue_staticRenderFns__$3
}, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, false, undefined, createInjectorSSR, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$4 = {
  name: "bbSelectInput",
  props: {
    options: {
      type: Array,
      required: true
    },
    value: {
      type: [String, Number],
      default: ""
    },
    label: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: "select"
    },
    noMargin: {
      type: Boolean,
      default: false
    },
    rules: {
      type: Array
    },
    validateOn: {
      type: String,
      default: "change"
    },
    defaultText: {
      type: String
    },
    size: {
      type: String,
      default: "medium",
      validator: function validator(value) {
        return ["small", "medium", "large"].indexOf(value) !== -1;
      }
    }
  },
  data: function data() {
    return {
      errors: []
    };
  },
  computed: {
    listeners: function listeners() {
      var vm = this;
      return _objectSpread2(_objectSpread2({}, this.$listeners), {}, {
        input: function input(event) {
          vm.$emit("input", event.target.value);
          vm.validate(event.target.value);
        }
      });
    },
    hasError: function hasError() {
      return this.errors.length > 0;
    },
    textSize: function textSize() {
      switch (this.size) {
        case "large":
          return "text-lg";

        case "small":
          return "text-sm";

        default:
          return "text-base";
      }
    },
    inputClasses: function inputClasses() {
      return ['block appearance-none w-full pr-8 rounded leading-none focus:outline-none', this.bgClasses, this.shapeClasses, this.sizeClasses, this.borderClasses, this.textColorClasses, this.textClasses, this.cursorClasses, this.textSize];
    },
    bgClasses: function bgClasses() {
      if (this.hasError) return "bg-red-100";
      if (this.focussed) return "bg-gray-100";
      return "bg-gray-300";
    },
    borderClasses: function borderClasses() {
      if (this.hasError) return "border border-red-500";
      return "border border-gray-300";
    },
    shapeClasses: function shapeClasses() {
      return "rounded";
    },
    sizeClasses: function sizeClasses() {
      switch (this.size) {
        case "large":
          return "h-16 px-4";

        case "small":
          return "h-8 px-4";

        default:
          return "h-12 px-4";
      }
    },
    textColorClasses: function textColorClasses() {
      if (this.hasError) return "text-red-500";
      return "";
    },
    textClasses: function textClasses() {
      if (this.disabled) return "text-gray-600";
      if (this.uppercase) return "uppercase";
      return "";
    },
    cursorClasses: function cursorClasses() {
      if (this.disabled) return "cursor-not-allowed";
      return "";
    },
    labelClasses: function labelClasses() {
      return [this.textSize];
    }
  },
  methods: {
    valFor: function valFor(option) {
      if (typeof option === "string" || option instanceof String) return option;
      return option.value;
    },
    textFor: function textFor(option) {
      if (typeof option === "string" || option instanceof String) return option;
      return option.text;
    },
    validate: function validate(val) {
      var _this = this;

      this.errors = [];
      if (this.rules && this.rules.length > 0) this.rules.forEach(function (rule) {
        var result = rule(val);
        if (typeof result === "string") _this.errors.push(result);
      });
    }
  }
};/* script */
var __vue_script__$4 = script$4;
/* template */

var __vue_render__$4 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    class: [{
      'mb-6': !_vm.noMargin
    }]
  }, [_vm._ssrNode((_vm.label ? "<label" + _vm._ssrAttr("for", _vm.name) + _vm._ssrClass(null, _vm.labelClasses) + " data-v-7f7c4f0a>" + _vm._ssrEscape("\n    " + _vm._s(_vm.label) + "\n  ") + "</label>" : "<!---->") + " <div class=\"relative\" data-v-7f7c4f0a><select" + _vm._ssrAttr("name", _vm.name) + _vm._ssrAttr("value", _vm.value) + _vm._ssrAttrs(_vm.$attrs) + _vm._ssrClass(null, _vm.inputClasses) + " data-v-7f7c4f0a>" + (_vm.defaultText ? "<option value hidden=\"hidden\" data-v-7f7c4f0a>" + _vm._ssrEscape(_vm._s(_vm.defaultText)) + "</option>" : "<!---->") + " " + _vm._ssrList(_vm.options, function (option, i) {
    return "<option" + _vm._ssrAttr("value", _vm.valFor(option)) + " data-v-7f7c4f0a>" + _vm._ssrEscape("\n        " + _vm._s(_vm.textFor(option)) + "\n      ") + "</option>";
  }) + "</select> <div class=\"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700\" data-v-7f7c4f0a><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" class=\"fill-current h-4 w-4\" data-v-7f7c4f0a><path d=\"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z\" data-v-7f7c4f0a></path></svg></div></div> <div class=\"relative\" data-v-7f7c4f0a><div class=\"g-text-field-error text-red-500 text-sm absolute\"" + _vm._ssrStyle(null, null, {
    display: _vm.hasError ? '' : 'none'
  }) + " data-v-7f7c4f0a>" + _vm._ssrEscape("\n      " + _vm._s(_vm.errors[0]) + "\n    ") + "</div></div>")]);
};

var __vue_staticRenderFns__$4 = [];
/* style */

var __vue_inject_styles__$4 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-7f7c4f0a_0", {
    source: ".bb-select-input[data-v-7f7c4f0a]{display:block;box-sizing:border-box;box-shadow:none;outline:0;text-shadow:0 0 0 #000}.bb-select-input[data-v-7f7c4f0a]:active,.bb-select-input[data-v-7f7c4f0a]:focus{-moz-appearance:none;-webkit-appearance:none;appearance:none;box-sizing:border-box;box-shadow:none;outline:0;text-shadow:0 0 0 #000}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$4 = "data-v-7f7c4f0a";
/* module identifier */

var __vue_module_identifier__$4 = "data-v-7f7c4f0a";
/* functional template */

var __vue_is_functional_template__$4 = false;
/* style inject shadow dom */

var __vue_component__$4 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$4,
  staticRenderFns: __vue_staticRenderFns__$4
}, __vue_inject_styles__$4, __vue_script__$4, __vue_scope_id__$4, __vue_is_functional_template__$4, __vue_module_identifier__$4, false, undefined, createInjectorSSR, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$5 = {
  name: 'bbTextarea',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: [String, Number],
      default: ''
    },
    label: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: 'input'
    },
    required: {
      type: Boolean,
      default: false
    },
    uppercase: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    rules: {
      type: Array
    },
    validateOn: {
      type: String,
      default: 'blur'
    },
    noMargin: {
      type: Boolean,
      default: false
    },
    hint: {
      type: String
    },
    size: {
      type: String,
      default: 'medium',
      validator: function validator(value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      }
    }
  },
  data: function data() {
    return {
      focussed: false,
      errors: []
    };
  },
  computed: {
    listeners: function listeners() {
      var _this = this;

      var vm = this;
      return _objectSpread2(_objectSpread2({}, this.$listeners), {}, {
        input: function input(event) {
          vm.$emit('input', event.target.value);
          if (_this.validateOn === 'input') vm.validate(event.target.value);
        },
        focus: function focus() {
          vm.$emit('focus');
          vm.focussed = true;
        },
        blur: function blur(event) {
          vm.$emit('blur');
          vm.focussed = false;
          if (_this.validateOn === 'blur') vm.validate(event.target.value);
        }
      });
    },
    hasError: function hasError() {
      return this.errors.length > 0;
    },
    classes: function classes() {
      return [];
    },
    inputClasses: function inputClasses() {
      return [this.bgClasses, this.shapeClasses, this.sizeClasses, this.inputBorderClasses, this.textColorClasses, this.textClasses, this.cursorClasses, this.textSize];
    },
    labelClasses: function labelClasses() {
      return [this.textSize];
    },
    bgClasses: function bgClasses() {
      if (this.hasError) return 'bg-red-100';
      if (this.focussed) return 'bg-gray-100';
      return 'bg-gray-300';
    },
    inputBorderClasses: function inputBorderClasses() {
      if (this.hasError) return 'border border-red-500';
      return 'border border-gray-300';
    },
    shapeClasses: function shapeClasses() {
      return 'rounded';
    },
    textColorClasses: function textColorClasses() {
      if (this.hasError) return 'text-red-500';
      return '';
    },
    textClasses: function textClasses() {
      if (this.disabled) return 'text-gray-600';
      if (this.uppercase) return 'uppercase';
      return '';
    },
    cursorClasses: function cursorClasses() {
      if (this.disabled) return 'cursor-not-allowed';
      return '';
    },
    textSize: function textSize() {
      switch (this.size) {
        case 'large':
          return 'text-lg';

        case 'small':
          return 'text-sm';

        default:
          return 'text-base';
      }
    },
    sizeClasses: function sizeClasses() {
      switch (this.size) {
        case 'large':
          return 'px-4 py-2';

        case 'small':
          return 'px-4 py-2';

        default:
          return 'px-4 py-2';
      }
    }
  },
  methods: {
    validate: function validate(val) {
      var _this2 = this;

      this.errors = [];
      if (this.rules && this.rules.length > 0) this.rules.forEach(function (rule) {
        var result = rule(val);
        if (typeof result === 'string') _this2.errors.push(result);
      });
    }
  }
};/* script */
var __vue_script__$5 = script$5;
/* template */

var __vue_render__$5 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    class: _vm.classes.concat([{
      'mb-6': !_vm.noMargin
    }])
  }, [_vm._ssrNode("<div data-v-2756bb14>", "</div>", [_vm.label ? _vm._ssrNode("<label" + _vm._ssrAttr("for", _vm.name) + _vm._ssrClass(null, _vm.labelClasses) + " data-v-2756bb14>", "</label>", [_vm._ssrNode(_vm._ssrEscape(_vm._s(_vm.label) + "\n      ") + (_vm.required ? "<span data-v-2756bb14>*</span>" : "<!---->"))], 2) : _vm._ssrNode("<label" + _vm._ssrAttr("for", _vm.name) + _vm._ssrClass(null, _vm.labelClasses) + " data-v-2756bb14>", "</label>", [_vm._t("label")], 2), _vm._ssrNode(" <textarea" + _vm._ssrAttr("type", _vm.type) + _vm._ssrAttr("name", _vm.name) + _vm._ssrAttr("disabled", _vm.disabled) + _vm._ssrAttr("value", _vm.value) + _vm._ssrAttrs(_vm.$attrs) + _vm._ssrClass(null, ['w-full'].concat(_vm.inputClasses)) + " data-v-2756bb14></textarea>")], 2), _vm._ssrNode(" <div" + _vm._ssrClass(null, ['relative'].concat(_vm.labelClasses)) + " data-v-2756bb14><div class=\"text-red-500 text-sm absolute\"" + _vm._ssrStyle(null, null, {
    display: _vm.hasError ? '' : 'none'
  }) + " data-v-2756bb14>" + _vm._ssrEscape("\n      " + _vm._s(_vm.errors[0]) + "\n    ") + "</div> <div class=\"text-gray-500 text-sm absolute\"" + _vm._ssrStyle(null, null, {
    display: !_vm.hasError && !!_vm.hint ? '' : 'none'
  }) + " data-v-2756bb14>" + _vm._ssrEscape("\n      " + _vm._s(_vm.hint) + "\n    ") + "</div></div>")], 2);
};

var __vue_staticRenderFns__$5 = [];
/* style */

var __vue_inject_styles__$5 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-2756bb14_0", {
    source: "textarea[data-v-2756bb14]{transition:all .3s ease;-webkit-appearance:none;-moz-appearance:none;appearance:none}textarea[data-v-2756bb14]:focus{outline:0}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$5 = "data-v-2756bb14";
/* module identifier */

var __vue_module_identifier__$5 = "data-v-2756bb14";
/* functional template */

var __vue_is_functional_template__$5 = false;
/* style inject shadow dom */

var __vue_component__$5 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$5,
  staticRenderFns: __vue_staticRenderFns__$5
}, __vue_inject_styles__$5, __vue_script__$5, __vue_scope_id__$5, __vue_is_functional_template__$5, __vue_module_identifier__$5, false, undefined, createInjectorSSR, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$6 = {
  name: 'bbCopyBtn',
  props: {
    text: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: 'gray'
    },
    size: {
      type: String,
      default: 'md'
    }
  },
  data: function data() {
    return {
      copied: false
    };
  },
  computed: {
    colorClass: function colorClass() {
      switch (this.color) {
        case 'primary':
          return 'text-primary-500 hover:text-primary-600';

        default:
          return 'text-gray-500 hover:text-gray-600';
      }
    },
    sizeClass: function sizeClass() {
      switch (this.size) {
        case 'lg':
          return 'text-lg';

        case 'sm':
          return 'text-sm';

        default:
          return 'text-base';
      }
    }
  },
  methods: {
    copyToClipboard: function copyToClipboard() {
      var _this = this;

      var textarea = document.createElement('textarea');
      textarea.textContent = this.text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('cut');
      document.body.removeChild(textarea);
      this.copied = true;
      this.baseSleep(2000).then(function () {
        _this.copied = false;
      });
    }
  }
};/* script */
var __vue_script__$6 = script$6;
/* template */

var __vue_render__$6 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', [_c('transition', {
    attrs: {
      "name": "switch",
      "mode": "out-in"
    }
  }, [_vm.copied ? _c('bb-icon', {
    key: "check",
    class: ["cursor-pointer", _vm.colorClass, _vm.sizeClass],
    attrs: {
      "name": "fas fa-check-circle"
    }
  }) : _c('bb-icon', {
    key: "copy",
    class: ["cursor-pointer", _vm.colorClass, _vm.sizeClass],
    attrs: {
      "name": "far fa-clone"
    },
    nativeOn: {
      "click": function click($event) {
        return _vm.copyToClipboard($event);
      }
    }
  })], 1)], 1);
};

var __vue_staticRenderFns__$6 = [];
/* style */

var __vue_inject_styles__$6 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-62ca6bd9_0", {
    source: ".switch-enter-active[data-v-62ca6bd9],.switch-leave-active[data-v-62ca6bd9]{transition:all .1s}.switch-enter[data-v-62ca6bd9],.switch-leave-to[data-v-62ca6bd9]{opacity:0;transform:scale(0)}.input[data-v-62ca6bd9]{width:0;height:0;resize:none;border:none;outline:0}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$6 = "data-v-62ca6bd9";
/* module identifier */

var __vue_module_identifier__$6 = "data-v-62ca6bd9";
/* functional template */

var __vue_is_functional_template__$6 = false;
/* style inject shadow dom */

var __vue_component__$6 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$6,
  staticRenderFns: __vue_staticRenderFns__$6
}, __vue_inject_styles__$6, __vue_script__$6, __vue_scope_id__$6, __vue_is_functional_template__$6, __vue_module_identifier__$6, false, undefined, createInjectorSSR, undefined);//
//
//
//
//
//
//
var script$7 = {
  name: 'bbLoadingIcon',
  props: {
    color: {
      type: String,
      default: 'primary'
    },
    size: {
      type: String,
      default: 'md',
      validator: function validator(value) {
        return ['sm', 'md', 'lg'].indexOf(value) !== -1;
      }
    }
  },
  computed: {
    sizeClasses: function sizeClasses() {
      switch (this.size) {
        case 'lg':
          return 'lg';

        case 'sm':
          return 'sm';

        default:
          return 'md';
      }
    },
    colorClass: function colorClass() {
      switch (this.color) {
        case 'white':
          return 'bg-white';

        default:
          return 'bg-primary-500';
      }
    }
  }
};/* script */
var __vue_script__$7 = script$7;
/* template */

var __vue_render__$7 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    class: ['spinner', _vm.sizeClasses]
  }, [_vm._ssrNode("<div" + _vm._ssrClass(null, "double-bounce1 " + _vm.colorClass) + " data-v-4f6345d5></div> <div" + _vm._ssrClass(null, "double-bounce2 " + _vm.colorClass) + " data-v-4f6345d5></div>")]);
};

var __vue_staticRenderFns__$7 = [];
/* style */

var __vue_inject_styles__$7 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-4f6345d5_0", {
    source: ".spinner[data-v-4f6345d5]{position:relative}.sm[data-v-4f6345d5]{width:16px;height:16px}.md[data-v-4f6345d5]{width:24px;height:24px}.lg[data-v-4f6345d5]{width:48px;height:48px}.double-bounce1[data-v-4f6345d5],.double-bounce2[data-v-4f6345d5]{width:100%;height:100%;border-radius:50%;opacity:.6;position:absolute;top:0;left:0;-webkit-animation:sk-bounce-data-v-4f6345d5 2s infinite ease-in-out;animation:sk-bounce-data-v-4f6345d5 2s infinite ease-in-out}.double-bounce2[data-v-4f6345d5]{-webkit-animation-delay:-1s;animation-delay:-1s}@-webkit-keyframes sk-bounce-data-v-4f6345d5{0%,100%{-webkit-transform:scale(0)}50%{-webkit-transform:scale(1)}}@keyframes sk-bounce-data-v-4f6345d5{0%,100%{transform:scale(0);-webkit-transform:scale(0)}50%{transform:scale(1);-webkit-transform:scale(1)}}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$7 = "data-v-4f6345d5";
/* module identifier */

var __vue_module_identifier__$7 = "data-v-4f6345d5";
/* functional template */

var __vue_is_functional_template__$7 = false;
/* style inject shadow dom */

var __vue_component__$7 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$7,
  staticRenderFns: __vue_staticRenderFns__$7
}, __vue_inject_styles__$7, __vue_script__$7, __vue_scope_id__$7, __vue_is_functional_template__$7, __vue_module_identifier__$7, false, undefined, createInjectorSSR, undefined);//
//
//
//
//
//
//
//
var script$8 = {
  name: 'bbChip',
  props: {
    textColor: {
      type: String,
      default: 'white'
    },
    color: {
      type: String,
      default: 'gray'
    },
    size: {
      type: String,
      default: 'sm',
      validator: function validator(value) {
        return ['sm', 'md', 'lg'].indexOf(value) !== -1;
      }
    },
    outline: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    listeners: function listeners() {
      return _objectSpread2({}, this.$listeners);
    },
    classes: function classes() {
      return [this.sizeClasses, this.colorClasses, this.textClasses];
    },
    sizeClasses: function sizeClasses() {
      switch (this.size) {
        case 'sm':
          return 'px-2 h-6 text-xs';

        case 'lg':
          return 'px-4 h-10 text-base';

        default:
          return 'px-3 h-8 text-sm';
      }
    },
    colorClasses: function colorClasses() {
      switch (this.color) {
        case 'primary':
          if (this.outline) return 'bg-primary-100 border border-primary-500';
          return 'bg-primary-200 border border-primary-200';

        default:
          if (this.outline) return 'bg-gray-100 border border-gray-500';
          return 'bg-gray-200 border border-gray-200';
      }
    },
    textClasses: function textClasses() {
      switch (this.color) {
        case 'primary':
          if (this.outline) return 'text-primary-500';
          return 'text-primary-600';

        default:
          if (this.outline) return 'text-gray-600';
          return 'text-gray-700';
      }
    }
  }
};/* script */
var __vue_script__$8 = script$8;
/* template */

var __vue_render__$8 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', _vm._g({
    class: ['inline-block whitespace-no-wrap rounded'].concat(_vm.classes)
  }, _vm.listeners), [_vm._ssrNode("<div class=\"flex items-center leading-none h-full\" data-v-70ed6eb8>", "</div>", [_vm._t("default")], 2)]);
};

var __vue_staticRenderFns__$8 = [];
/* style */

var __vue_inject_styles__$8 = undefined;
/* scoped */

var __vue_scope_id__$8 = "data-v-70ed6eb8";
/* module identifier */

var __vue_module_identifier__$8 = "data-v-70ed6eb8";
/* functional template */

var __vue_is_functional_template__$8 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$8 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$8,
  staticRenderFns: __vue_staticRenderFns__$8
}, __vue_inject_styles__$8, __vue_script__$8, __vue_scope_id__$8, __vue_is_functional_template__$8, __vue_module_identifier__$8, false, undefined, undefined, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$9 = {
  name: 'bbSnackbar',
  props: {
    label: {
      type: String,
      required: true
    },
    type: {
      type: String
    },
    persistant: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    icon: function icon() {
      switch (this.type) {
        case 'success':
          return 'fas fa-check-circle';

        case 'warning':
          return 'fas fa-exclamation-triangle';

        case 'error':
          return 'fas fa-exclamation-triangle';

        default:
          return 'fas fa-info-circle';
      }
    },
    classes: function classes() {
      switch (this.type) {
        case 'success':
          return 'bg-green-500 text-white';

        case 'warning':
          return 'bg-orange-500 text-white';

        case 'error':
          return 'bg-red-500 text-white';

        default:
          return 'bg-primary-500 text-white';
      }
    }
  }
};/* script */
var __vue_script__$9 = script$9;
/* template */

var __vue_render__$9 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "fixed bottom-0 left-0 z-50 w-full p-4 mb-20"
  }, [_vm._ssrNode("<div class=\"w-full sm:w-2/3 md:w-1/3 mx-auto flex items-center justify-between\" data-v-14bf1c67>", "</div>", [_vm._ssrNode("<div" + _vm._ssrClass(null, ['shadow-lg rounded w-full flex items-center justify-between p-4', _vm.classes]) + " data-v-14bf1c67>", "</div>", [_vm._ssrNode("<div class=\"flex items-center\" data-v-14bf1c67>", "</div>", [_c('bb-icon', {
    staticClass: "mr-4",
    attrs: {
      "name": _vm.icon,
      "size": "2xl"
    }
  }), _vm._ssrNode(" <h4 class=\"leading-none text-lg\" data-v-14bf1c67>" + _vm._ssrEscape("\n          " + _vm._s(_vm.label) + "\n        ") + "</h4>")], 2), _vm._ssrNode(" " + (!_vm.persistant ? "<div data-test=\"dismiss-snackbar\" class=\"cursor-pointer text-xs rounded font-medium uppercase\" data-v-14bf1c67>" + _vm._ssrEscape("\n        " + _vm._s(_vm.$t('labels.dismiss')) + "\n      ") + "</div>" : "<!---->"))], 2)])]);
};

var __vue_staticRenderFns__$9 = [];
/* style */

var __vue_inject_styles__$9 = undefined;
/* scoped */

var __vue_scope_id__$9 = "data-v-14bf1c67";
/* module identifier */

var __vue_module_identifier__$9 = "data-v-14bf1c67";
/* functional template */

var __vue_is_functional_template__$9 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$9 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$9,
  staticRenderFns: __vue_staticRenderFns__$9
}, __vue_inject_styles__$9, __vue_script__$9, __vue_scope_id__$9, __vue_is_functional_template__$9, __vue_module_identifier__$9, false, undefined, undefined, undefined);//
//
//
//
//
var script$a = {
  name: "bbCard",
  props: {
    bgClass: {
      type: String,
      default: "bg-white"
    },
    roundedClass: {
      type: String,
      default: "rounded"
    },
    shadowClass: {
      type: String,
      default: "shadow"
    }
  },
  computed: {
    classes: function classes() {
      return [this.bgClass, this.roundedClass, this.shadowClass];
    }
  }
};/* script */
var __vue_script__$a = script$a;
/* template */

var __vue_render__$a = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    class: _vm.classes
  }, [_vm._t("default")], 2);
};

var __vue_staticRenderFns__$a = [];
/* style */

var __vue_inject_styles__$a = undefined;
/* scoped */

var __vue_scope_id__$a = "data-v-8dea6958";
/* module identifier */

var __vue_module_identifier__$a = "data-v-8dea6958";
/* functional template */

var __vue_is_functional_template__$a = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$a = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$a,
  staticRenderFns: __vue_staticRenderFns__$a
}, __vue_inject_styles__$a, __vue_script__$a, __vue_scope_id__$a, __vue_is_functional_template__$a, __vue_module_identifier__$a, false, undefined, undefined, undefined);//
//
//
//
//
var script$b = {
  name: "bbCardContent"
};/* script */
var __vue_script__$b = script$b;
/* template */

var __vue_render__$b = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "p-4"
  }, [_vm._t("default")], 2);
};

var __vue_staticRenderFns__$b = [];
/* style */

var __vue_inject_styles__$b = undefined;
/* scoped */

var __vue_scope_id__$b = "data-v-1e4a788c";
/* module identifier */

var __vue_module_identifier__$b = "data-v-1e4a788c";
/* functional template */

var __vue_is_functional_template__$b = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$b = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$b,
  staticRenderFns: __vue_staticRenderFns__$b
}, __vue_inject_styles__$b, __vue_script__$b, __vue_scope_id__$b, __vue_is_functional_template__$b, __vue_module_identifier__$b, false, undefined, undefined, undefined);//
//
//
//
//
//
//
var script$c = {
  name: "bbCardTitle",
  props: {
    center: {
      type: Boolean,
      default: false
    },
    headerClass: {
      type: String,
      default: "text-2xl font-medium"
    }
  },
  computed: {
    classes: function classes() {
      return {
        "justify-center": this.center,
        "justify-between": !this.center
      };
    }
  }
};/* script */
var __vue_script__$c = script$c;
/* template */

var __vue_render__$c = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "px-4 pt-4 pb-2"
  }, [_vm._ssrNode("<h3" + _vm._ssrClass(null, ['m-0 flex items-center w-full', _vm.classes, _vm.headerClass]) + ">", "</h3>", [_vm._t("default")], 2)]);
};

var __vue_staticRenderFns__$c = [];
/* style */

var __vue_inject_styles__$c = undefined;
/* scoped */

var __vue_scope_id__$c = undefined;
/* module identifier */

var __vue_module_identifier__$c = "data-v-2eba0120";
/* functional template */

var __vue_is_functional_template__$c = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$c = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$c,
  staticRenderFns: __vue_staticRenderFns__$c
}, __vue_inject_styles__$c, __vue_script__$c, __vue_scope_id__$c, __vue_is_functional_template__$c, __vue_module_identifier__$c, false, undefined, undefined, undefined);//
//
//
//
//
var script$d = {
  name: "bbCardActions",
  props: {
    left: {
      type: Boolean,
      default: false
    },
    flat: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes: function classes() {
      return {
        "justify-end": !this.left,
        "p-4": !this.flat,
        "p-2": this.flat
      };
    }
  }
};/* script */
var __vue_script__$d = script$d;
/* template */

var __vue_render__$d = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    class: ['flex', _vm.classes]
  }, [_vm._t("default")], 2);
};

var __vue_staticRenderFns__$d = [];
/* style */

var __vue_inject_styles__$d = undefined;
/* scoped */

var __vue_scope_id__$d = undefined;
/* module identifier */

var __vue_module_identifier__$d = "data-v-58011e83";
/* functional template */

var __vue_is_functional_template__$d = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$d = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$d,
  staticRenderFns: __vue_staticRenderFns__$d
}, __vue_inject_styles__$d, __vue_script__$d, __vue_scope_id__$d, __vue_is_functional_template__$d, __vue_module_identifier__$d, false, undefined, undefined, undefined);/* eslint-disable import/prefer-default-export */var components=/*#__PURE__*/Object.freeze({__proto__:null,bbIcon: __vue_component__,bbForm: __vue_component__$1,bbBtn: __vue_component__$2,bbTextInput: __vue_component__$3,bbSelectInput: __vue_component__$4,bbTextarea: __vue_component__$5,bbCopyBtn: __vue_component__$6,bbLoadingIcon: __vue_component__$7,bbChip: __vue_component__$8,bbSnackbar: __vue_component__$9,bbCard: __vue_component__$a,bbCardContent: __vue_component__$b,bbCardTitle: __vue_component__$c,bbCardActions: __vue_component__$d});var install = function installComponents(Vue) {
  if (install.installed) return;
  install.installed = true;
  Object.entries(components).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        componentName = _ref2[0],
        component = _ref2[1];

    Vue.component(componentName, component);
  });
}; // Create module definition for Vue.use()


var plugin = {
  install: install
}; // To auto-install on non-es builds, when vue is found
// eslint-disable-next-line no-redeclare

/* global window, global */

{
  var GlobalVue = null;

  if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
  } else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
  }

  if (GlobalVue) {
    GlobalVue.use(plugin);
  }
} // Default export is library as a whole, registered via Vue.use()
exports.bbBtn=__vue_component__$2;exports.bbCard=__vue_component__$a;exports.bbCardActions=__vue_component__$d;exports.bbCardContent=__vue_component__$b;exports.bbCardTitle=__vue_component__$c;exports.bbChip=__vue_component__$8;exports.bbCopyBtn=__vue_component__$6;exports.bbForm=__vue_component__$1;exports.bbIcon=__vue_component__;exports.bbLoadingIcon=__vue_component__$7;exports.bbSelectInput=__vue_component__$4;exports.bbSnackbar=__vue_component__$9;exports.bbTextInput=__vue_component__$3;exports.bbTextarea=__vue_component__$5;exports.default=plugin;