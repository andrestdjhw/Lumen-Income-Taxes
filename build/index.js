/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Chatbot.js"
/*!***********************************!*\
  !*** ./src/components/Chatbot.js ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/data */ "./src/lib/data.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icon */ "./src/components/Icon.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




// Base del chatbot: por ahora ofrece accesos rápidos. La lógica conversacional se definirá más adelante.

function Chatbot() {
  const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const options = [{
    label: (0,_lib_data__WEBPACK_IMPORTED_MODULE_1__.t)("cta.book"),
    href: _lib_data__WEBPACK_IMPORTED_MODULE_1__.site.bookingUrl,
    icon: "calendar",
    external: true,
    track: "click_book"
  }, {
    label: (0,_lib_data__WEBPACK_IMPORTED_MODULE_1__.t)("cta.call", _lib_data__WEBPACK_IMPORTED_MODULE_1__.site.phone),
    href: _lib_data__WEBPACK_IMPORTED_MODULE_1__.site.phoneHref,
    icon: "phone",
    track: "click_call"
  }, {
    label: (0,_lib_data__WEBPACK_IMPORTED_MODULE_1__.t)("chat.faq"),
    href: _lib_data__WEBPACK_IMPORTED_MODULE_1__["default"].faqUrl,
    icon: "help"
  }, {
    label: (0,_lib_data__WEBPACK_IMPORTED_MODULE_1__.t)("chat.message"),
    href: _lib_data__WEBPACK_IMPORTED_MODULE_1__["default"].contactUrl && `${_lib_data__WEBPACK_IMPORTED_MODULE_1__["default"].contactUrl}#contact-form`,
    icon: "mail"
  }].filter(option => option.href);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "fixed right-4 bottom-20 z-50 flex flex-col items-end sm:right-6 sm:bottom-6",
    children: [open && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      id: "lumen-chat-panel",
      role: "dialog",
      "aria-label": (0,_lib_data__WEBPACK_IMPORTED_MODULE_1__.t)("chat.title"),
      className: "mb-3 w-[calc(100vw-2rem)] max-w-sm origin-bottom-right animate-pop-in overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-xl",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "bg-lumen px-5 py-4 text-white",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          className: "font-semibold",
          children: (0,_lib_data__WEBPACK_IMPORTED_MODULE_1__.t)("chat.title")
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "space-y-4 p-5",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          className: "rounded-xl rounded-tl-none bg-celeste-light p-3 text-sm text-lumen",
          children: (0,_lib_data__WEBPACK_IMPORTED_MODULE_1__.t)("chat.greeting")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("ul", {
          className: "space-y-2",
          children: options.map(option => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
              href: option.href,
              target: option.external ? "_blank" : undefined,
              rel: option.external ? "noopener" : undefined,
              "data-track": option.track,
              className: "flex items-center gap-3 rounded-lg border border-ink/10 px-4 py-3 text-sm font-medium text-lumen transition hover:border-cianotipo hover:text-cianotipo",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
                name: option.icon,
                className: "h-4 w-4 text-lumen"
              }), option.label]
            })
          }, option.icon))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          className: "text-xs text-ink/65",
          children: (0,_lib_data__WEBPACK_IMPORTED_MODULE_1__.t)("chat.note")
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("button", {
      type: "button",
      className: "btn-primary flex h-14 w-14 items-center justify-center rounded-full hover:scale-110",
      "aria-expanded": open,
      "aria-controls": "lumen-chat-panel",
      onClick: () => setOpen(value => !value),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
        name: open ? "x" : "message",
        className: "h-6 w-6"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
        className: "sr-only",
        children: open ? (0,_lib_data__WEBPACK_IMPORTED_MODULE_1__.t)("chat.close") : (0,_lib_data__WEBPACK_IMPORTED_MODULE_1__.t)("chat.open")
      })]
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Chatbot);

/***/ },

/***/ "./src/components/ContactForm.js"
/*!***************************************!*\
  !*** ./src/components/ContactForm.js ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/data */ "./src/lib/data.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icon */ "./src/components/Icon.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




// Formulario corto del brief (sección 09). No pedir SSN, W-2, datos bancarios ni archivos adjuntos.
// Props (desde data-* en PHP): interest (valor preseleccionado), variant ("compact" para el hero), source (origen del lead).

const interests = ["individual", "business", "irs", "other"];
const contactTimes = ["any", "morning", "afternoon"];
const inputClass = "mt-1 block w-full rounded-md border border-ink/20 bg-white px-3 py-2 short:py-1.5 text-sm text-ink shadow-sm transition focus:border-cianotipo focus:ring-2 focus:ring-cianotipo/20 focus:outline-none";
const labelClass = "block text-sm font-medium text-lumen";
function initialInterest(fallback) {
  const fromUrl = new URLSearchParams(window.location.search).get("interest");
  if (interests.includes(fromUrl)) return fromUrl;
  return interests.includes(fallback) ? fallback : "";
}
function ContactTimeSelect({
  id,
  value,
  onChange
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("label", {
      htmlFor: `${id}-contact-time`,
      className: labelClass,
      children: (0,_lib_data__WEBPACK_IMPORTED_MODULE_1__.t)("form.contact_time")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("select", {
      id: `${id}-contact-time`,
      name: "contact_time",
      value: value,
      onChange: onChange,
      className: inputClass,
      children: contactTimes.map(option => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
        value: option,
        children: (0,_lib_data__WEBPACK_IMPORTED_MODULE_1__.t)(`form.contact_time_${option}`)
      }, option))
    })]
  });
}
function ContactForm({
  interest,
  variant,
  source = "contact"
}) {
  const compact = variant === "compact";
  const id = (0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();
  const [values, setValues] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    name: "",
    phone: "",
    email: "",
    language: _lib_data__WEBPACK_IMPORTED_MODULE_1__["default"].lang || "en",
    interest: initialInterest(interest),
    contact_time: "any",
    message: "",
    consent: false,
    website: "",
    source
  });
  const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("idle");
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  function update(event) {
    const {
      name,
      value,
      type,
      checked
    } = event.target;
    setValues(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  }
  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const response = await fetch(_lib_data__WEBPACK_IMPORTED_MODULE_1__["default"].rest.contact, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.success) throw new Error(result.code || "generic");
      setStatus("success");
      (window.dataLayer = window.dataLayer || []).push({
        event: "form_submit_success",
        form: source
      });
    } catch (err) {
      const key = `form.error_${err.message}`;
      setStatus("error");
      setError((0,_lib_data__WEBPACK_IMPORTED_MODULE_1__.hasString)(key) ? (0,_lib_data__WEBPACK_IMPORTED_MODULE_1__.t)(key) : (0,_lib_data__WEBPACK_IMPORTED_MODULE_1__.t)("form.error_generic"));
    }
  }
  if (status === "success") {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "flex animate-pop-in gap-4 rounded-xl bg-celeste-light p-6",
      role: "status",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
        name: "check-circle",
        className: "h-7 w-7 text-lumen"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          className: "font-semibold text-lumen",
          children: (0,_lib_data__WEBPACK_IMPORTED_MODULE_1__.t)("form.success_title")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          className: "mt-1 text-sm text-ink/70",
          children: (0,_lib_data__WEBPACK_IMPORTED_MODULE_1__.t)("form.success_text")
        })]
      })]
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("form", {
    onSubmit: handleSubmit,
    className: compact ? "space-y-4 short:space-y-3" : "space-y-5",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: `grid items-end sm:grid-cols-2 ${compact ? "gap-4 short:gap-3" : "gap-5"}`,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("label", {
          htmlFor: `${id}-name`,
          className: labelClass,
          children: [(0,_lib_data__WEBPACK_IMPORTED_MODULE_1__.t)("form.name"), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
            className: "text-cianotipo",
            children: "*"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
          id: `${id}-name`,
          name: "name",
          type: "text",
          autoComplete: "name",
          required: true,
          value: values.name,
          onChange: update,
          className: inputClass
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("label", {
          htmlFor: `${id}-phone`,
          className: labelClass,
          children: [(0,_lib_data__WEBPACK_IMPORTED_MODULE_1__.t)("form.phone"), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
            className: "text-cianotipo",
            children: "*"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
          id: `${id}-phone`,
          name: "phone",
          type: "tel",
          autoComplete: "tel",
          required: true,
          value: values.phone,
          onChange: update,
          className: inputClass
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("label", {
          htmlFor: `${id}-email`,
          className: labelClass,
          children: (0,_lib_data__WEBPACK_IMPORTED_MODULE_1__.t)("form.email")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
          id: `${id}-email`,
          name: "email",
          type: "email",
          autoComplete: "email",
          value: values.email,
          onChange: update,
          className: inputClass
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("label", {
          htmlFor: `${id}-language`,
          className: labelClass,
          children: (0,_lib_data__WEBPACK_IMPORTED_MODULE_1__.t)("form.language")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("select", {
          id: `${id}-language`,
          name: "language",
          value: values.language,
          onChange: update,
          className: inputClass,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
            value: "en",
            children: (0,_lib_data__WEBPACK_IMPORTED_MODULE_1__.t)("form.language_en")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
            value: "es",
            children: (0,_lib_data__WEBPACK_IMPORTED_MODULE_1__.t)("form.language_es")
          })]
        })]
      })]
    }), compact ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "grid items-end gap-4 sm:grid-cols-2 short:gap-3",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("label", {
          htmlFor: `${id}-interest`,
          className: labelClass,
          children: (0,_lib_data__WEBPACK_IMPORTED_MODULE_1__.t)("form.interest")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("select", {
          id: `${id}-interest`,
          name: "interest",
          value: values.interest,
          onChange: update,
          className: inputClass,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
            value: "",
            children: (0,_lib_data__WEBPACK_IMPORTED_MODULE_1__.t)("form.select")
          }), interests.map(option => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
            value: option,
            children: (0,_lib_data__WEBPACK_IMPORTED_MODULE_1__.t)(`form.interest_${option}`)
          }, option))]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ContactTimeSelect, {
        id: id,
        value: values.contact_time,
        onChange: update
      })]
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("fieldset", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("legend", {
        className: labelClass,
        children: (0,_lib_data__WEBPACK_IMPORTED_MODULE_1__.t)("form.interest")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "mt-2 flex flex-wrap gap-x-5 gap-y-2",
        children: interests.map(option => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("label", {
          className: "flex items-center gap-2 text-sm text-ink/80",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
            type: "radio",
            name: "interest",
            value: option,
            checked: values.interest === option,
            onChange: update,
            className: "h-4 w-4 accent-cianotipo"
          }), (0,_lib_data__WEBPACK_IMPORTED_MODULE_1__.t)(`form.interest_${option}`)]
        }, option))
      })]
    }), !compact && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "sm:w-1/2 sm:pr-2.5",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ContactTimeSelect, {
        id: id,
        value: values.contact_time,
        onChange: update
      })
    }), !compact && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("label", {
        htmlFor: `${id}-message`,
        className: labelClass,
        children: (0,_lib_data__WEBPACK_IMPORTED_MODULE_1__.t)("form.message")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("textarea", {
        id: `${id}-message`,
        name: "message",
        rows: "3",
        maxLength: "1000",
        value: values.message,
        onChange: update,
        "aria-describedby": `${id}-message-hint`,
        className: inputClass
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
        id: `${id}-message-hint`,
        className: "mt-1 text-xs text-ink/65",
        children: (0,_lib_data__WEBPACK_IMPORTED_MODULE_1__.t)("form.message_hint")
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "hidden",
      "aria-hidden": "true",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("label", {
        htmlFor: `${id}-website`,
        children: "Website"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
        id: `${id}-website`,
        name: "website",
        type: "text",
        tabIndex: "-1",
        autoComplete: "off",
        value: values.website,
        onChange: update
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("label", {
      className: "flex items-start gap-3 text-xs text-ink/70",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
        type: "checkbox",
        name: "consent",
        required: true,
        checked: values.consent,
        onChange: update,
        className: "mt-0.5 h-4 w-4 shrink-0 accent-cianotipo"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
        children: (0,_lib_data__WEBPACK_IMPORTED_MODULE_1__.t)("form.consent")
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      "aria-live": "polite",
      children: status === "error" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
        className: "rounded-md bg-red-50 px-3 py-2 text-sm text-red-700",
        children: error
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("button", {
      type: "submit",
      className: `btn btn-primary w-full ${compact ? "short:py-2.5" : ""}`,
      disabled: status === "sending",
      children: [status === "sending" ? (0,_lib_data__WEBPACK_IMPORTED_MODULE_1__.t)("form.sending") : (0,_lib_data__WEBPACK_IMPORTED_MODULE_1__.t)("form.submit"), status !== "sending" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
        name: "arrow-right",
        className: "h-4 w-4"
      })]
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactForm);

/***/ },

/***/ "./src/components/Footer.js"
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/data */ "./src/lib/data.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icon */ "./src/components/Icon.js");
/* harmony import */ var _SocialLinks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SocialLinks */ "./src/components/SocialLinks.js");
/* harmony import */ var _lib_reveal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/reveal */ "./src/lib/reveal.js");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Logo */ "./src/components/Logo.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







function FooterColumn({
  title,
  children
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2", {
      className: "font-sans text-sm font-semibold text-white",
      children: title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "mt-4 space-y-2 text-sm",
      children: children
    })]
  });
}
function LinkList({
  links = []
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("ul", {
    className: "space-y-2",
    children: links.filter(link => link.url).map(link => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("li", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a", {
        href: link.url,
        className: "inline-block transition hover:translate-x-1 hover:text-white",
        children: link.label
      })
    }, link.url))
  });
}
function Footer() {
  const footer = _lib_data__WEBPACK_IMPORTED_MODULE_1__["default"].footer || {};
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("footer", {
    className: "bg-ink text-celeste",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "container-site grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "lg:col-span-4",
        ...(0,_lib_reveal__WEBPACK_IMPORTED_MODULE_4__.reveal)("up"),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a", {
          href: _lib_data__WEBPACK_IMPORTED_MODULE_1__["default"].homeUrl,
          className: "text-white",
          "aria-label": _lib_data__WEBPACK_IMPORTED_MODULE_1__.site.name,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Logo__WEBPACK_IMPORTED_MODULE_5__["default"], {
            light: true
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
          className: "mt-4 max-w-xs text-sm",
          children: (0,_lib_data__WEBPACK_IMPORTED_MODULE_1__.t)("footer.tagline")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_SocialLinks__WEBPACK_IMPORTED_MODULE_3__["default"], {
          className: "mt-5 -ml-1.5",
          itemClassName: "text-white"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "lg:col-span-2",
        ...(0,_lib_reveal__WEBPACK_IMPORTED_MODULE_4__.reveal)("up", 1),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(FooterColumn, {
          title: (0,_lib_data__WEBPACK_IMPORTED_MODULE_1__.t)("footer.services"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(LinkList, {
            links: footer.services
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "lg:col-span-2",
        ...(0,_lib_reveal__WEBPACK_IMPORTED_MODULE_4__.reveal)("up", 2),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(FooterColumn, {
          title: (0,_lib_data__WEBPACK_IMPORTED_MODULE_1__.t)("footer.company"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(LinkList, {
            links: footer.company
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "lg:col-span-2",
        ...(0,_lib_reveal__WEBPACK_IMPORTED_MODULE_4__.reveal)("up", 3),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(FooterColumn, {
          title: (0,_lib_data__WEBPACK_IMPORTED_MODULE_1__.t)("footer.visit"),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("address", {
            className: "not-italic",
            children: [_lib_data__WEBPACK_IMPORTED_MODULE_1__.site.addressLine1, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br", {}), _lib_data__WEBPACK_IMPORTED_MODULE_1__.site.addressLine2]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a", {
            href: _lib_data__WEBPACK_IMPORTED_MODULE_1__.site.directionsUrl,
            className: "inline-block text-capa hover:text-white",
            target: "_blank",
            rel: "noopener",
            "data-track": "click_directions",
            children: (0,_lib_data__WEBPACK_IMPORTED_MODULE_1__.t)("cta.directions")
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "lg:col-span-2",
        ...(0,_lib_reveal__WEBPACK_IMPORTED_MODULE_4__.reveal)("up", 4),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(FooterColumn, {
          title: (0,_lib_data__WEBPACK_IMPORTED_MODULE_1__.t)("footer.contact"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("ul", {
            className: "space-y-2",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("li", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a", {
                href: _lib_data__WEBPACK_IMPORTED_MODULE_1__.site.phoneHref,
                className: "flex items-center gap-2 hover:text-white",
                "data-track": "click_call",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
                  name: "phone",
                  className: "h-4 w-4"
                }), _lib_data__WEBPACK_IMPORTED_MODULE_1__.site.phone]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("li", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a", {
                href: _lib_data__WEBPACK_IMPORTED_MODULE_1__.site.bookingUrl,
                className: "flex items-center gap-2 hover:text-white",
                target: "_blank",
                rel: "noopener",
                "data-track": "click_book",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
                  name: "calendar",
                  className: "h-4 w-4"
                }), (0,_lib_data__WEBPACK_IMPORTED_MODULE_1__.t)("cta.book")]
              })
            })]
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "border-t border-white/10",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "container-site flex flex-col gap-3 py-6 pb-20 text-xs sm:flex-row sm:items-center sm:justify-between sm:pb-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
          children: ["\xA9 ", _lib_data__WEBPACK_IMPORTED_MODULE_1__["default"].year, " ", _lib_data__WEBPACK_IMPORTED_MODULE_1__.site.name, ". ", (0,_lib_data__WEBPACK_IMPORTED_MODULE_1__.t)("footer.rights")]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6",
          children: [footer.legal && footer.legal.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("nav", {
            "aria-label": (0,_lib_data__WEBPACK_IMPORTED_MODULE_1__.t)("footer.legal"),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("ul", {
              className: "flex flex-wrap gap-4",
              children: footer.legal.map(link => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("li", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a", {
                  href: link.url,
                  className: "hover:text-white",
                  children: link.label
                })
              }, link.url))
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
            children: [(0,_lib_data__WEBPACK_IMPORTED_MODULE_1__.t)("footer.credit"), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a", {
              href: "https://828marketingsolutions.com",
              className: "font-semibold text-white underline-offset-4 transition-colors hover:text-capa hover:underline",
              target: "_blank",
              rel: "noopener",
              children: ["828 Marketing Solutions", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
                className: "sr-only",
                children: [" ", (0,_lib_data__WEBPACK_IMPORTED_MODULE_1__.t)("topbar.new_tab")]
              })]
            })]
          })]
        })]
      })
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ },

/***/ "./src/components/Icon.js"
/*!********************************!*\
  !*** ./src/components/Icon.js ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_icons_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/icons.json */ "./assets/icons.json");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



// Íconos de apoyo de la marca (assets/icons.json, compartido con PHP).
// 'data-hatch' se convierte en el rayado de marca; la máscara #lumen-hatch la imprime lumen_icon_defs() en PHP.

const hatch = 'fill="currentColor" stroke="none" mask="url(#lumen-hatch)"';
function Icon({
  name,
  className = "h-5 w-5"
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
    className: `lumen-icon ${className} shrink-0`,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    focusable: "false",
    dangerouslySetInnerHTML: {
      __html: (_assets_icons_json__WEBPACK_IMPORTED_MODULE_1__[name] || "").replaceAll("data-hatch", hatch)
    }
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);

/***/ },

/***/ "./src/components/Logo.js"
/*!********************************!*\
  !*** ./src/components/Logo.js ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/data */ "./src/lib/data.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



// Wordmark oficial (assets/brand/wordmark.png). light: versión blanca para fondos oscuros.

function Logo({
  light = false,
  className = "h-10 w-auto sm:h-11"
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
    src: _lib_data__WEBPACK_IMPORTED_MODULE_1__["default"].logos?.wordmark,
    alt: _lib_data__WEBPACK_IMPORTED_MODULE_1__.site.name,
    width: "720",
    height: "213",
    className: `${className} ${light ? "logo-white" : ""}`,
    decoding: "async"
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logo);

/***/ },

/***/ "./src/components/Navbar.js"
/*!**********************************!*\
  !*** ./src/components/Navbar.js ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/data */ "./src/lib/data.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icon */ "./src/components/Icon.js");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Logo */ "./src/components/Logo.js");
/* harmony import */ var _Topbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Topbar */ "./src/components/Topbar.js");
/* harmony import */ var _SocialLinks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SocialLinks */ "./src/components/SocialLinks.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







function LanguageSwitch({
  className = ""
}) {
  const links = _lib_data__WEBPACK_IMPORTED_MODULE_1__["default"].langLinks || {};
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
    className: `items-center gap-1 text-sm font-semibold ${className}`,
    "aria-label": (0,_lib_data__WEBPACK_IMPORTED_MODULE_1__.t)("nav.language"),
    role: "group",
    children: ["es", "en"].map((lang, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
      children: [index > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
        className: "text-celeste",
        children: "|"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a", {
        href: links[lang] || "#",
        hrefLang: lang,
        lang: lang,
        "aria-current": _lib_data__WEBPACK_IMPORTED_MODULE_1__["default"].lang === lang ? "true" : undefined,
        className: `rounded px-1.5 py-1 ${_lib_data__WEBPACK_IMPORTED_MODULE_1__["default"].lang === lang ? "text-cianotipo" : "text-ink/65 hover:text-lumen"}`,
        "data-track": "language_switch",
        children: lang.toUpperCase()
      })]
    }, lang))
  });
}

// Mega menú de escritorio: abre con hover (solo mouse) o con clic/teclado; cierra con Escape, clic fuera o al salir el foco.
function MegaMenu({
  item
}) {
  const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const buttonRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const closeTimer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const panelId = `lumen-mega-${item.key}`;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!open) return;
    const onKeyDown = event => {
      if (event.key !== "Escape") return;
      setOpen(false);
      buttonRef.current.focus();
    };
    const onPointerDown = event => !ref.current.contains(event.target) && setOpen(false);
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => () => clearTimeout(closeTimer.current), []);
  function show(event) {
    if (event.pointerType !== "mouse") return;
    clearTimeout(closeTimer.current);
    setOpen(true);
  }
  function hide(event) {
    if (event.pointerType !== "mouse") return;
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("li", {
    ref: ref,
    className: "flex h-full items-center",
    onPointerEnter: show,
    onPointerLeave: hide,
    onBlur: event => !event.currentTarget.contains(event.relatedTarget) && setOpen(false),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
      ref: buttonRef,
      type: "button",
      "aria-expanded": open,
      "aria-controls": panelId,
      onClick: () => setOpen(value => !value),
      className: `flex h-full items-center gap-1 transition-colors hover:text-cianotipo ${open || item.current ? "text-cianotipo" : ""}`,
      children: [item.label, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
        name: "chevron-down",
        className: `h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      id: panelId,
      className: `absolute inset-x-0 top-full border-t border-ink/5 bg-white shadow-xl transition duration-300 ease-out-soft ${open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"}`,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "container-site grid gap-6 py-8 lg:grid-cols-12",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("ul", {
          className: "grid gap-4 lg:col-span-8 lg:grid-cols-3",
          children: item.children.map((child, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("li", {
            className: `transition duration-500 ease-out-soft ${open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`,
            style: {
              transitionDelay: open ? `${index * 70}ms` : "0ms"
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a", {
              href: child.url || "#",
              "aria-current": child.current ? "page" : undefined,
              onClick: () => setOpen(false),
              className: "group flex h-full flex-col rounded-xl border border-ink/10 p-5 transition duration-300 hover:-translate-y-1 hover:border-cianotipo hover:bg-celeste-light hover:shadow-lg hover:shadow-lumen/10",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                className: "flex h-11 w-11 items-center justify-center rounded-full text-lumen icon-chip group-hover:scale-110",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
                  name: child.icon,
                  className: "h-5 w-5"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                className: "mt-4 font-semibold whitespace-normal text-lumen",
                children: child.label
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                className: "mt-1 text-sm font-normal whitespace-normal text-ink/70",
                children: child.text
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                className: "mt-auto pt-4 text-cianotipo",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
                  name: "arrow-right",
                  className: "h-4 w-4 transition-transform group-hover:translate-x-1"
                })
              })]
            })
          }, child.key))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: `flex flex-col justify-between rounded-xl bg-lumen p-6 whitespace-normal text-white transition duration-500 ease-out-soft lg:col-span-4 ${open ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"}`,
          style: {
            transitionDelay: open ? "200ms" : "0ms"
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
              className: "text-xl font-bold",
              children: (0,_lib_data__WEBPACK_IMPORTED_MODULE_1__.t)("nav.mega_title")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
              className: "mt-2 text-sm font-normal text-celeste",
              children: (0,_lib_data__WEBPACK_IMPORTED_MODULE_1__.t)("nav.mega_text")
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "mt-6 flex flex-col gap-3",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a", {
              href: _lib_data__WEBPACK_IMPORTED_MODULE_1__.site.bookingUrl,
              className: "btn btn-primary",
              target: "_blank",
              rel: "noopener",
              "data-track": "click_book",
              children: [(0,_lib_data__WEBPACK_IMPORTED_MODULE_1__.t)("cta.book"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
                name: "calendar",
                className: "h-4 w-4"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a", {
              href: _lib_data__WEBPACK_IMPORTED_MODULE_1__.site.phoneHref,
              className: "btn btn-light",
              "data-track": "click_call",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
                name: "phone",
                className: "h-4 w-4"
              }), (0,_lib_data__WEBPACK_IMPORTED_MODULE_1__.t)("cta.call", _lib_data__WEBPACK_IMPORTED_MODULE_1__.site.phone)]
            })]
          })]
        })]
      })
    })]
  });
}

// Grupo desplegable (acordeón) del menú móvil.
function MobileGroup({
  item,
  onNavigate
}) {
  const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(item.current);
  const panelId = `lumen-mobile-${item.key}`;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("li", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
      type: "button",
      "aria-expanded": open,
      "aria-controls": panelId,
      onClick: () => setOpen(value => !value),
      className: `flex w-full items-center justify-between py-3 text-base font-medium ${item.current ? "text-cianotipo" : "text-lumen"}`,
      children: [item.label, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
        name: "chevron-down",
        className: `h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("ul", {
      id: panelId,
      hidden: !open,
      className: "animate-slide-down space-y-1 pb-3",
      children: item.children.map(child => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("li", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a", {
          href: child.url || "#",
          "aria-current": child.current ? "page" : undefined,
          onClick: onNavigate,
          className: "flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-ink/80 hover:bg-celeste-light",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
            name: child.icon,
            className: "h-5 w-5 text-lumen"
          }), child.label]
        })
      }, child.key))
    })]
  });
}
function Navbar() {
  const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [scrolled, setScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [topbarVisible, setTopbarVisible] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const nav = _lib_data__WEBPACK_IMPORTED_MODULE_1__["default"].nav || [];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // El topbar se oculta al bajar y reaparece al subir (o al volver arriba del todo).
    // Solo se cuenta un cambio de dirección tras 12px acumulados, y el header usa umbrales distintos para
    // compactarse (40px) y expandirse (4px): así el scroll lento no hace que el estado cambie de ida y vuelta.
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(prev => prev ? y > 4 : y > 40);
      if (y < 40) {
        setTopbarVisible(true);
        lastY = y;
      } else if (Math.abs(y - lastY) >= 12) {
        setTopbarVisible(y < lastY);
        lastY = y;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // El navbar sube la altura del topbar en lugar de plegarlo: su alto no cambia, así el contenido de la página
  // no se mueve (un cambio de alto activaba el "scroll anchoring" del navegador y provocaba el rebote).
  const showTopbar = topbarVisible || open;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const wrapper = document.getElementById("lumen-navbar");
    const topbar = wrapper && wrapper.firstElementChild;
    if (wrapper && topbar) wrapper.style.setProperty("--topbar-offset", showTopbar ? "0px" : `${topbar.offsetHeight}px`);
  }, [showTopbar]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKeyDown = event => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Topbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
      visible: showTopbar
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("header", {
      className: `relative bg-white/95 backdrop-blur transition-shadow duration-300 ${scrolled ? "shadow-md" : "border-b border-ink/5"}`,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "container-site flex h-20 items-center justify-between gap-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a", {
          href: _lib_data__WEBPACK_IMPORTED_MODULE_1__["default"].homeUrl,
          className: `origin-left text-lumen transition-transform duration-300 ease-out-soft ${scrolled ? "scale-[0.88]" : ""}`,
          "aria-label": `${_lib_data__WEBPACK_IMPORTED_MODULE_1__.site.name} — ${(0,_lib_data__WEBPACK_IMPORTED_MODULE_1__.t)("nav.home")}`,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Logo__WEBPACK_IMPORTED_MODULE_3__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("nav", {
          "aria-label": (0,_lib_data__WEBPACK_IMPORTED_MODULE_1__.t)("nav.main"),
          className: "hidden h-full lg:block",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("ul", {
            className: "flex h-full items-center gap-7 text-sm font-medium whitespace-nowrap text-ink/80",
            children: nav.map(item => item.children ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(MegaMenu, {
              item: item
            }, item.key) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("li", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a", {
                href: item.url || "#",
                "aria-current": item.current ? "page" : undefined,
                className: `relative py-2 transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:rounded-full after:bg-cianotipo after:transition-transform after:duration-300 hover:text-cianotipo hover:after:scale-x-100 ${item.current ? "text-cianotipo after:scale-x-100" : "after:scale-x-0"}`,
                children: item.label
              })
            }, item.key))
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "flex items-center gap-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(LanguageSwitch, {
            className: "hidden sm:flex"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a", {
            href: _lib_data__WEBPACK_IMPORTED_MODULE_1__.site.phoneHref,
            className: "btn btn-outline hidden px-4 whitespace-nowrap xl:inline-flex",
            "data-track": "click_call",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
              name: "phone",
              className: "h-4 w-4"
            }), _lib_data__WEBPACK_IMPORTED_MODULE_1__.site.phone]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a", {
            href: _lib_data__WEBPACK_IMPORTED_MODULE_1__.site.bookingUrl,
            className: "btn btn-primary hidden px-4 whitespace-nowrap sm:inline-flex",
            target: "_blank",
            rel: "noopener",
            "data-track": "click_book",
            children: [(0,_lib_data__WEBPACK_IMPORTED_MODULE_1__.t)("cta.book"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
              name: "calendar",
              className: "h-4 w-4"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
            type: "button",
            className: "rounded-md p-2 text-lumen hover:bg-celeste-light lg:hidden",
            "aria-expanded": open,
            "aria-controls": "lumen-mobile-menu",
            onClick: () => setOpen(value => !value),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
              name: open ? "x" : "menu",
              className: `h-6 w-6 transition-transform duration-300 ${open ? "rotate-90" : ""}`
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              className: "sr-only",
              children: open ? (0,_lib_data__WEBPACK_IMPORTED_MODULE_1__.t)("nav.close") : (0,_lib_data__WEBPACK_IMPORTED_MODULE_1__.t)("nav.menu")
            })]
          })]
        })]
      }), open && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        id: "lumen-mobile-menu",
        className: "animate-slide-down max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-ink/5 bg-white lg:hidden",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("nav", {
          "aria-label": (0,_lib_data__WEBPACK_IMPORTED_MODULE_1__.t)("nav.main"),
          className: "container-site py-4",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("ul", {
            className: "divide-y divide-ink/5",
            children: nav.map(item => item.children ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(MobileGroup, {
              item: item,
              onNavigate: () => setOpen(false)
            }, item.key) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("li", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a", {
                href: item.url || "#",
                "aria-current": item.current ? "page" : undefined,
                className: `block py-3 text-base font-medium ${item.current ? "text-cianotipo" : "text-lumen"}`,
                onClick: () => setOpen(false),
                children: item.label
              })
            }, item.key))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "mt-4 flex items-center justify-between gap-4 border-t border-ink/5 pt-4",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(LanguageSwitch, {
              className: "flex"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "sm:hidden",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_SocialLinks__WEBPACK_IMPORTED_MODULE_5__["default"], {
                itemClassName: "text-lumen hover:bg-celeste-light"
              })
            })]
          })]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-ink/10 bg-white p-2 shadow-[0_-4px_12px_rgba(0,0,0,0.06)] sm:hidden",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a", {
        href: _lib_data__WEBPACK_IMPORTED_MODULE_1__.site.phoneHref,
        className: "btn btn-outline px-3",
        "data-track": "click_call",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
          name: "phone",
          className: "h-4 w-4"
        }), (0,_lib_data__WEBPACK_IMPORTED_MODULE_1__.t)("cta.call_short")]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a", {
        href: _lib_data__WEBPACK_IMPORTED_MODULE_1__.site.bookingUrl,
        className: "btn btn-primary px-3",
        target: "_blank",
        rel: "noopener",
        "data-track": "click_book",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
          name: "calendar",
          className: "h-4 w-4"
        }), (0,_lib_data__WEBPACK_IMPORTED_MODULE_1__.t)("cta.book")]
      })]
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

/***/ },

/***/ "./src/components/SocialLinks.js"
/*!***************************************!*\
  !*** ./src/components/SocialLinks.js ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/data */ "./src/lib/data.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icon */ "./src/components/Icon.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




// Íconos de redes sociales (topbar y footer). Las redes sin URL todavía se muestran igual, pero sin enlace.

function SocialLinks({
  className = "",
  itemClassName = ""
}) {
  const social = _lib_data__WEBPACK_IMPORTED_MODULE_1__.site.social || [];
  const newTab = (0,_lib_data__WEBPACK_IMPORTED_MODULE_1__.t)("topbar.new_tab");
  const base = `flex h-8 w-8 items-center justify-center rounded-full ${itemClassName}`;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("ul", {
    className: `flex items-center gap-1 ${className}`,
    "aria-label": (0,_lib_data__WEBPACK_IMPORTED_MODULE_1__.t)("topbar.social"),
    children: social.map(link => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
      children: link.url ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
        href: link.url,
        className: `${base} transition duration-300 hover:-translate-y-0.5 hover:bg-white/10`,
        target: "_blank",
        rel: "noopener",
        "aria-label": `${link.label} ${newTab}`,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
          name: link.key,
          className: "h-4 w-4"
        })
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
        className: base,
        title: link.label,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
          name: link.key,
          className: "h-4 w-4"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
          className: "sr-only",
          children: link.label
        })]
      })
    }, link.key))
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SocialLinks);

/***/ },

/***/ "./src/components/Topbar.js"
/*!**********************************!*\
  !*** ./src/components/Topbar.js ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/data */ "./src/lib/data.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icon */ "./src/components/Icon.js");
/* harmony import */ var _SocialLinks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SocialLinks */ "./src/components/SocialLinks.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





// Barra superior del navbar: contacto (izquierda), dirección (centro) y redes sociales (derecha).
// En móvil (<640px) muestra solo correo y ubicación: el teléfono está en la barra fija inferior y las redes en el menú.
// Navbar controla `visible`: al ocultarse, el navbar completo sube su altura (ver --topbar-offset en src/index.css).

function Topbar({
  visible
}) {
  const newTab = (0,_lib_data__WEBPACK_IMPORTED_MODULE_1__.t)("topbar.new_tab");
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    className: "bg-linear-to-r from-ink to-lumen text-celeste",
    "aria-hidden": !visible,
    inert: visible ? undefined : "",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "container-site flex h-10 items-center justify-between gap-4 text-xs sm:text-sm",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("ul", {
          className: "flex items-center gap-5",
          "aria-label": (0,_lib_data__WEBPACK_IMPORTED_MODULE_1__.t)("topbar.contact"),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
            className: "hidden sm:block",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
              href: _lib_data__WEBPACK_IMPORTED_MODULE_1__.site.phoneHref,
              className: "flex items-center gap-2 transition-colors hover:text-white",
              "data-track": "click_call",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
                name: "phone",
                className: "h-4 w-4 text-white"
              }), _lib_data__WEBPACK_IMPORTED_MODULE_1__.site.phone]
            })
          }), _lib_data__WEBPACK_IMPORTED_MODULE_1__.site.email && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
            className: "sm:hidden md:block",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
              href: `mailto:${_lib_data__WEBPACK_IMPORTED_MODULE_1__.site.email}`,
              className: "flex items-center gap-2 transition-colors hover:text-white",
              "data-track": "click_email",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
                name: "mail",
                className: "h-4 w-4 text-white"
              }), _lib_data__WEBPACK_IMPORTED_MODULE_1__.site.email]
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
          href: _lib_data__WEBPACK_IMPORTED_MODULE_1__.site.mapsUrl,
          className: "flex items-center gap-1.5 transition-colors hover:text-white sm:hidden",
          target: "_blank",
          rel: "noopener",
          title: (0,_lib_data__WEBPACK_IMPORTED_MODULE_1__.t)("topbar.address"),
          "data-track": "click_directions",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
            name: "map-pin",
            className: "h-4 w-4 text-white"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
            className: "whitespace-nowrap",
            children: [_lib_data__WEBPACK_IMPORTED_MODULE_1__.site.addressLine2.replace(/ \d{5}$/, ""), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              className: "hidden min-[400px]:inline",
              children: _lib_data__WEBPACK_IMPORTED_MODULE_1__.site.addressLine2.match(/ \d{5}$/)?.[0]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "sr-only",
            children: newTab
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
          href: _lib_data__WEBPACK_IMPORTED_MODULE_1__.site.mapsUrl,
          className: "hidden items-center gap-2 transition-colors hover:text-white lg:flex",
          target: "_blank",
          rel: "noopener",
          title: (0,_lib_data__WEBPACK_IMPORTED_MODULE_1__.t)("topbar.address"),
          "data-track": "click_directions",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
            name: "map-pin",
            className: "h-4 w-4 text-white"
          }), _lib_data__WEBPACK_IMPORTED_MODULE_1__.site.address, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "sr-only",
            children: newTab
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "hidden sm:block",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_SocialLinks__WEBPACK_IMPORTED_MODULE_3__["default"], {
            itemClassName: "text-white"
          })
        })]
      })
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Topbar);

/***/ },

/***/ "./src/lib/carousel.js"
/*!*****************************!*\
  !*** ./src/lib/carousel.js ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initCarousels: () => (/* binding */ initCarousels)
/* harmony export */ });
// Carrusel con desplazamiento nativo (se puede deslizar con el dedo), flechas, puntos y avance automático.
// Marcado: [data-carousel] > [data-carousel-track] > [data-carousel-slide], más [data-carousel-dot], [data-carousel-prev] y [data-carousel-next].
// Se pausa con el mouse encima, con el foco dentro o con la pestaña oculta; no avanza solo si el usuario prefiere reducir el movimiento.
const INTERVAL = 4500;
function initCarousels() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.querySelectorAll("[data-carousel]").forEach(root => {
    const track = root.querySelector("[data-carousel-track]");
    const slides = [...root.querySelectorAll("[data-carousel-slide]")];
    const dots = [...root.querySelectorAll("[data-carousel-dot]")];
    if (!track || slides.length < 2) return;
    let paused = false;
    const slideWidth = () => slides[0].offsetWidth;
    const index = () => Math.round(track.scrollLeft / slideWidth());
    // Posiciones reales: con 2 tarjetas visibles y 4 en total hay 3 posiciones (y 3 puntos).
    const positions = () => slides.length - Math.max(1, Math.round(track.clientWidth / slideWidth())) + 1;
    const goTo = target => {
      const count = positions();
      const i = (target + count) % count;
      track.scrollTo({
        left: i * slideWidth(),
        behavior: reduceMotion ? "auto" : "smooth"
      });
    };
    const next = () => goTo(index() + 1);
    const prev = () => goTo(index() - 1);
    root.querySelector("[data-carousel-next]")?.addEventListener("click", next);
    root.querySelector("[data-carousel-prev]")?.addEventListener("click", prev);
    dots.forEach((dot, i) => dot.addEventListener("click", () => goTo(i)));
    const updateDots = () => {
      const count = positions();
      const active = Math.min(index(), count - 1);
      dots.forEach((dot, i) => {
        dot.hidden = i >= count;
        dot.setAttribute("aria-current", i === active ? "true" : "false");
      });
    };
    track.addEventListener("scroll", () => window.requestAnimationFrame(updateDots), {
      passive: true
    });
    window.addEventListener("resize", updateDots);
    updateDots();
    root.addEventListener("pointerenter", () => paused = true);
    root.addEventListener("pointerleave", () => paused = false);
    root.addEventListener("focusin", () => paused = true);
    root.addEventListener("focusout", event => !root.contains(event.relatedTarget) && (paused = false));
    track.addEventListener("touchstart", () => paused = true, {
      passive: true
    });
    if (!reduceMotion) {
      setInterval(() => {
        if (!paused && !document.hidden) next();
      }, INTERVAL);
    }
  });
}

/***/ },

/***/ "./src/lib/data.js"
/*!*************************!*\
  !*** ./src/lib/data.js ***!
  \*************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   hasString: () => (/* binding */ hasString),
/* harmony export */   site: () => (/* binding */ site),
/* harmony export */   t: () => (/* binding */ t)
/* harmony export */ });
// Datos que PHP inyecta en window.lumenData (ver lumen_js_data() en inc/helpers.php).
const data = window.lumenData || {};
const site = data.site || {};
function hasString(key) {
  return Boolean(data.strings && data.strings[key]);
}

// Traducción por clave; los %s se reemplazan en orden por los valores recibidos.
function t(key, ...values) {
  let text = data.strings && data.strings[key] || key;
  values.forEach(value => {
    text = text.replace("%s", value);
  });
  return text;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data);

/***/ },

/***/ "./src/lib/hero-video.js"
/*!*******************************!*\
  !*** ./src/lib/hero-video.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initHeroVideo: () => (/* binding */ initHeroVideo)
/* harmony export */ });
// Video de fondo del hero ([data-hero-video]). Elige 1080p en escritorio y 720p en pantallas pequeñas.
// No se carga si el usuario prefiere reducir el movimiento o tiene activado el ahorro de datos: queda el poster.
// Se pausa cuando sale de la pantalla o la pestaña se oculta, para no gastar batería.
function initHeroVideo() {
  const video = document.querySelector("[data-hero-video]");
  if (!video) return;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const saveData = navigator.connection && navigator.connection.saveData;
  if (reduceMotion || saveData) return;
  video.src = window.matchMedia("(min-width: 1024px)").matches ? video.dataset.srcDesktop : video.dataset.srcMobile;
  let inView = true;
  const update = () => inView && !document.hidden ? video.play().catch(() => {}) : video.pause();
  new IntersectionObserver(([entry]) => {
    inView = entry.isIntersecting;
    update();
  }).observe(video);
  document.addEventListener("visibilitychange", update);
}

/***/ },

/***/ "./src/lib/reveal.js"
/*!***************************!*\
  !*** ./src/lib/reveal.js ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initReveal: () => (/* binding */ initReveal),
/* harmony export */   reveal: () => (/* binding */ reveal)
/* harmony export */ });
// Animaciones al entrar en pantalla (atributo data-reveal, estilos en src/index.css).
// Se reinician cada vez que el elemento sale de la pantalla y vuelve a entrar.
const selector = "[data-reveal]";
function reveal(type = "up", index = 0) {
  return {
    "data-reveal": type,
    style: index ? {
      "--reveal-delay": `${index * 110}ms`
    } : undefined
  };
}
function initReveal() {
  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.15) entry.target.classList.add("is-visible");else if (!entry.isIntersecting) entry.target.classList.remove("is-visible");
    });
  }, {
    threshold: [0, 0.15]
  });
  const observeAll = root => {
    if (root.matches?.(selector)) observer.observe(root);
    root.querySelectorAll?.(selector).forEach(el => observer.observe(el));
  };
  document.documentElement.classList.add("reveal-on");
  observeAll(document);

  // Los componentes de React se montan después: también se observan sus elementos.
  new MutationObserver(mutations => {
    mutations.forEach(mutation => mutation.addedNodes.forEach(node => node.nodeType === 1 && observeAll(node)));
  }).observe(document.body, {
    childList: true,
    subtree: true
  });
}

/***/ },

/***/ "./src/lib/slideshow.js"
/*!******************************!*\
  !*** ./src/lib/slideshow.js ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initSlideshows: () => (/* binding */ initSlideshows)
/* harmony export */ });
// Slideshow con fundido para fondos con varias imágenes ([data-slideshow] > img[data-slide]).
// Se pausa con la pestaña oculta y no corre si el usuario prefiere reducir el movimiento.
const INTERVAL = 6000;
function initSlideshows() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  document.querySelectorAll("[data-slideshow]").forEach(container => {
    const slides = [...container.querySelectorAll("[data-slide]")];
    if (slides.length < 2) return;
    let current = 0;
    setInterval(() => {
      if (document.hidden) return;
      slides[current].classList.add("opacity-0");
      current = (current + 1) % slides.length;
      slides[current].loading = "eager";
      slides[current].classList.remove("opacity-0");
    }, INTERVAL);
  });
}

/***/ },

/***/ "./src/lib/tilt.js"
/*!*************************!*\
  !*** ./src/lib/tilt.js ***!
  \*************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initTilt: () => (/* binding */ initTilt)
/* harmony export */ });
// Inclinación 3D que sigue al puntero en las tarjetas [data-tilt] (estilos .tilt-card en src/index.css).
// Solo con mouse; con teclado o pantalla táctil la tarjeta aparece sin inclinarse. Desactivado con "reducir movimiento".
const MAX_TILT = 10; // grados

function initTilt() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  document.querySelectorAll("[data-tilt]").forEach(card => {
    card.addEventListener("pointermove", event => {
      if (event.pointerType !== "mouse") return;
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width; // 0 a 1
      const y = (event.clientY - rect.top) / rect.height;
      card.style.setProperty("--tilt-x", `${(0.5 - y) * MAX_TILT * 2}deg`);
      card.style.setProperty("--tilt-y", `${(x - 0.5) * MAX_TILT * 2}deg`);
      card.style.setProperty("--glare-x", `${x * 100}%`);
      card.style.setProperty("--glare-y", `${y * 100}%`);
    });
    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--tilt-x", "0deg");
      card.style.setProperty("--tilt-y", "0deg");
    });
  });
}

/***/ },

/***/ "react"
/*!************************!*\
  !*** external "React" ***!
  \************************/
(module) {

module.exports = window["React"];

/***/ },

/***/ "react-dom/client"
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
(module) {

module.exports = window["ReactDOM"];

/***/ },

/***/ "react/jsx-runtime"
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
(module) {

module.exports = window["ReactJSXRuntime"];

/***/ },

/***/ "./assets/icons.json"
/*!***************************!*\
  !*** ./assets/icons.json ***!
  \***************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"_info":"Íconos de apoyo de Lumen (retícula 24x24, línea de 2px). \'data-hatch\' marca la zona rayada; PHP (lumen_icon_svg) y React (Icon.js) la convierten en el rayado de marca.","phone":"<path data-hatch d=\\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\\"/><path d=\\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\\"/>","mail":"<path data-hatch d=\\"M3.5 5h17L12 12Z\\"/><rect x=\\"2\\" y=\\"4\\" width=\\"20\\" height=\\"16\\" rx=\\"2\\"/><path d=\\"m2.5 5.5 9.5 7.5 9.5-7.5\\"/>","map-pin":"<circle data-hatch cx=\\"12\\" cy=\\"10\\" r=\\"3.5\\"/><path d=\\"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z\\"/><circle cx=\\"12\\" cy=\\"10\\" r=\\"3.5\\"/>","calendar":"<path data-hatch d=\\"M5 4h14a2 2 0 0 1 2 2v4H3V6a2 2 0 0 1 2-2Z\\"/><rect x=\\"3\\" y=\\"4\\" width=\\"18\\" height=\\"17\\" rx=\\"2\\"/><path d=\\"M3 10h18M8 2v4M16 2v4M8 14h.01M12 14h.01M16 14h.01M8 17.5h.01M12 17.5h.01M16 17.5h.01\\"/>","user":"<path data-hatch d=\\"M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1Z\\"/><circle cx=\\"12\\" cy=\\"7\\" r=\\"4\\"/><path d=\\"M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1Z\\"/>","users":"<path data-hatch d=\\"M7 21v-2a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v2Z\\"/><circle cx=\\"12\\" cy=\\"7.5\\" r=\\"3\\"/><path d=\\"M7 21v-2a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v2Z\\"/><circle cx=\\"5\\" cy=\\"9.5\\" r=\\"2\\"/><circle cx=\\"19\\" cy=\\"9.5\\" r=\\"2\\"/><path d=\\"M1.5 19.5v-1a3 3 0 0 1 3-3H6M22.5 19.5v-1a3 3 0 0 0-3-3H18\\"/>","briefcase":"<path data-hatch d=\\"M4 7h16a2 2 0 0 1 2 2v3H2V9a2 2 0 0 1 2-2Z\\"/><rect x=\\"2\\" y=\\"7\\" width=\\"20\\" height=\\"14\\" rx=\\"2\\"/><path d=\\"M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M2 12h20\\"/>","store":"<path data-hatch d=\\"M4.5 4h15L22 9H2Z\\"/><path d=\\"M4.5 4h15L22 9H2Z\\"/><path d=\\"M4 9v11h16V9M10 20v-5h4v5\\"/>","message":"<path data-hatch d=\\"M21 14a2 2 0 0 1-2 2H8l-4 4V6a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2Z\\"/><path d=\\"M21 14a2 2 0 0 1-2 2H8l-4 4V6a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2Z\\"/>","folder":"<path data-hatch d=\\"M2 9V5a2 2 0 0 1 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v2Z\\"/><path d=\\"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z\\"/><path d=\\"M2 9h20\\"/>","file-text":"<path data-hatch d=\\"M14 2v6h6Z\\"/><path d=\\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z\\"/><path d=\\"M14 2v6h6M8 13h8M8 17h5\\"/>","file-dollar":"<path data-hatch d=\\"M14 2v6h6Z\\"/><path d=\\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z\\"/><path d=\\"M14 2v6h6M12 10.5v1.2M12 18.3v1.2M14.4 12.9a2.2 2.2 0 0 0-2.1-1.2h-.7a1.8 1.8 0 0 0 0 3.6h.8a1.8 1.8 0 0 1 0 3.6h-.8a2.2 2.2 0 0 1-2-1.2\\"/>","id-card":"<rect data-hatch x=\\"5.5\\" y=\\"8.5\\" width=\\"5\\" height=\\"6.5\\" rx=\\"1\\"/><rect x=\\"2\\" y=\\"4\\" width=\\"20\\" height=\\"16\\" rx=\\"2\\"/><rect x=\\"5.5\\" y=\\"8.5\\" width=\\"5\\" height=\\"6.5\\" rx=\\"1\\"/><path d=\\"M14 10h4M14 14h4\\"/>","heart":"<path data-hatch d=\\"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z\\"/><path d=\\"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z\\"/>","star":"<path data-hatch d=\\"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z\\"/><path d=\\"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z\\"/>","shield":"<path data-hatch d=\\"M4 6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v3.5H4Z\\"/><path d=\\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\\"/><path d=\\"m9 13.5 2 2 4-4\\"/>","scale":"<path data-hatch d=\\"m6 7-3 7a3 3 0 0 0 6 0Z\\"/><path data-hatch d=\\"m18 7-3 7a3 3 0 0 0 6 0Z\\"/><path d=\\"M12 3v18M7 21h10M3 7h18\\"/><path d=\\"m6 7-3 7a3 3 0 0 0 6 0Z\\"/><path d=\\"m18 7-3 7a3 3 0 0 0 6 0Z\\"/>","search":"<circle data-hatch cx=\\"11\\" cy=\\"11\\" r=\\"7\\"/><circle cx=\\"11\\" cy=\\"11\\" r=\\"7\\"/><path d=\\"m21 21-4.35-4.35\\"/>","check-circle":"<circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"m8.5 12 2.5 2.5 5-5\\"/>","help":"<circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01\\"/>","laptop":"<rect data-hatch x=\\"4\\" y=\\"4\\" width=\\"16\\" height=\\"11\\" rx=\\"1.5\\"/><rect x=\\"4\\" y=\\"4\\" width=\\"16\\" height=\\"11\\" rx=\\"1.5\\"/><path d=\\"M2 19h20l-1.5-4h-17Z\\"/>","car":"<path data-hatch d=\\"M6.5 7h11l2 5h-15Z\\"/><path d=\\"M5 17v2M19 17v2\\"/><path d=\\"M3 12.5 5.6 6.4A2 2 0 0 1 7.4 5h9.2a2 2 0 0 1 1.8 1.4L21 12.5V17H3Z\\"/><path d=\\"M3 12h18M7 14.5h.01M17 14.5h.01\\"/>","home":"<path data-hatch d=\\"M10 21v-6h4v6Z\\"/><path d=\\"M3 10.5 12 3l9 7.5\\"/><path d=\\"M5 9v12h14V9\\"/><path d=\\"M10 21v-6h4v6\\"/>","wrench":"<path data-hatch d=\\"M14.7 6.3a4 4 0 0 0 5 5L21.6 9.4a6 6 0 0 1-7.3-7.3l-1.9 1.9a4 4 0 0 0 2.3 2.3Z\\"/><path d=\\"M14.7 6.3a4 4 0 0 0 5 5l-8.9 8.9a2.1 2.1 0 0 1-3-3Z\\"/><path d=\\"M14.7 6.3 18 3a6 6 0 0 1 3 3l-3.3 3.3\\"/>","receipt":"<path data-hatch d=\\"M8 8h8v4H8Z\\"/><path d=\\"M4 2v20l3-2 3 2 3-2 3 2 3-2 3 2V2l-3 2-3-2-3 2-3-2-3 2Z\\"/><path d=\\"M8 8h8M8 12h8M8 16h5\\"/>","box":"<path data-hatch d=\\"M12 12 3.5 7.2 12 2.5l8.5 4.7Z\\"/><path d=\\"M21 7.5v9L12 21.5l-9-5v-9L12 2.5Z\\"/><path d=\\"m3.5 7.2 8.5 4.8 8.5-4.8M12 12v9.5\\"/>","image":"<rect x=\\"3\\" y=\\"3\\" width=\\"18\\" height=\\"18\\" rx=\\"2\\"/><circle cx=\\"9\\" cy=\\"9\\" r=\\"2\\"/><path d=\\"m21 15-3.09-3.09a2 2 0 0 0-2.82 0L6 21\\"/>","facebook":"<path d=\\"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z\\"/>","instagram":"<circle data-hatch cx=\\"12\\" cy=\\"12\\" r=\\"4\\"/><rect x=\\"2.5\\" y=\\"2.5\\" width=\\"19\\" height=\\"19\\" rx=\\"5.5\\"/><circle cx=\\"12\\" cy=\\"12\\" r=\\"4\\"/><path d=\\"M17.5 6.5h.01\\"/>","tiktok":"<path d=\\"M14.5 3c.4 2.6 2.1 4.3 5 4.6v3.3a8.3 8.3 0 0 1-5-1.6v5.9a5.7 5.7 0 1 1-5.7-5.7h.7V13a2.5 2.5 0 1 0 1.8 2.4V3Z\\"/>","linkedin":"<rect data-hatch x=\\"2.5\\" y=\\"9\\" width=\\"4\\" height=\\"12\\" rx=\\"1\\"/><rect x=\\"2.5\\" y=\\"9\\" width=\\"4\\" height=\\"12\\" rx=\\"1\\"/><circle cx=\\"4.5\\" cy=\\"4.5\\" r=\\"2\\"/><path d=\\"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v1.5A5.5 5.5 0 0 1 16 8Z\\"/>","google":"<path d=\\"M19.2 6.4A8.5 8.5 0 1 0 20.5 12h-8\\"/>","bbb":"<rect x=\\"1.5\\" y=\\"5\\" width=\\"21\\" height=\\"14\\" rx=\\"3\\"/><text x=\\"12\\" y=\\"15.3\\" fill=\\"currentColor\\" stroke=\\"none\\" font-family=\\"Albert Sans, sans-serif\\" font-size=\\"8\\" font-weight=\\"800\\" text-anchor=\\"middle\\" letter-spacing=\\"-0.3\\">BBB</text>","arrow-right":"<path d=\\"M5 12h14\\"/><path d=\\"m12 5 7 7-7 7\\"/>","check":"<path d=\\"M20 6 9 17l-5-5\\"/>","plus":"<path d=\\"M5 12h14M12 5v14\\"/>","chevron-down":"<path d=\\"m6 9 6 6 6-6\\"/>","menu":"<path d=\\"M4 6h16M4 12h16M4 18h16\\"/>","x":"<path d=\\"M18 6 6 18M6 6l12 12\\"/>"}');

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		const getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.hasOwn(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "react-dom/client");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Navbar */ "./src/components/Navbar.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Footer */ "./src/components/Footer.js");
/* harmony import */ var _components_ContactForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ContactForm */ "./src/components/ContactForm.js");
/* harmony import */ var _components_Chatbot__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Chatbot */ "./src/components/Chatbot.js");
/* harmony import */ var _lib_reveal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/reveal */ "./src/lib/reveal.js");
/* harmony import */ var _lib_slideshow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/slideshow */ "./src/lib/slideshow.js");
/* harmony import */ var _lib_carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/carousel */ "./src/lib/carousel.js");
/* harmony import */ var _lib_hero_video__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/hero-video */ "./src/lib/hero-video.js");
/* harmony import */ var _lib_tilt__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/tilt */ "./src/lib/tilt.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);












// Monta un componente de React en cada elemento que coincida con el selector.
// Los atributos data-* del elemento se pasan como props (ej. data-interest="business").

function mount(selector, Component) {
  document.querySelectorAll(selector).forEach(el => react_dom_client__WEBPACK_IMPORTED_MODULE_1___default().createRoot(el).render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(Component, {
    ...el.dataset
  })));
}
mount("#lumen-navbar", _components_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"]);
mount("#lumen-footer", _components_Footer__WEBPACK_IMPORTED_MODULE_3__["default"]);
mount("[data-component='contact-form']", _components_ContactForm__WEBPACK_IMPORTED_MODULE_4__["default"]);
mount("#lumen-chatbot", _components_Chatbot__WEBPACK_IMPORTED_MODULE_5__["default"]);
(0,_lib_reveal__WEBPACK_IMPORTED_MODULE_6__.initReveal)();

// Alto del navbar para que el hero + cinta ocupen exactamente la pantalla (.hero-screen en src/index.css).
// Solo se mide arriba del todo: así el hero no cambia de tamaño cuando el topbar se oculta al hacer scroll.
const navbar = document.getElementById("lumen-navbar");
if (navbar && "ResizeObserver" in window) {
  new ResizeObserver(() => {
    if (window.scrollY < 10) document.documentElement.style.setProperty("--nav-h", `${navbar.offsetHeight}px`);
  }).observe(navbar);
}
;(0,_lib_slideshow__WEBPACK_IMPORTED_MODULE_7__.initSlideshows)();
(0,_lib_carousel__WEBPACK_IMPORTED_MODULE_8__.initCarousels)();
(0,_lib_hero_video__WEBPACK_IMPORTED_MODULE_9__.initHeroVideo)();
(0,_lib_tilt__WEBPACK_IMPORTED_MODULE_10__.initTilt)();

// Eventos GA4 sugeridos en el brief (click_call, click_book, click_directions, language_switch).
document.addEventListener("click", event => {
  const el = event.target.closest("[data-track]");
  if (el) (window.dataLayer = window.dataLayer || []).push({
    event: el.dataset.track
  });
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map