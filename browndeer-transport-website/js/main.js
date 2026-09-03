(function () {
  "use strict";

  /* ---------- Header scroll state ---------- */
  var header = document.getElementById("siteHeader");
  var onScroll = function () {
    if (window.scrollY > 40) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile nav ---------- */
  var nav = document.getElementById("mainNav");
  var toggle = document.getElementById("navToggle");
  var closeBtn = document.getElementById("navClose");
  var backdrop = document.getElementById("navBackdrop");

  function openNav() {
    nav.classList.add("is-open");
    backdrop.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    closeBtn.style.display = "inline-flex";
    document.body.style.overflow = "hidden";
  }
  function closeNav() {
    nav.classList.remove("is-open");
    backdrop.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }
  toggle.addEventListener("click", function () {
    if (nav.classList.contains("is-open")) { closeNav(); } else { openNav(); }
  });
  closeBtn.addEventListener("click", closeNav);
  backdrop.addEventListener("click", closeNav);
  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeNav);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { closeNav(); }
  });

  /* ---------- Scroll reveal ---------- */
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduceMotion) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------- Quote form: validation + Netlify AJAX submit ---------- */
  var form = document.getElementById("quoteForm");
  if (form) {
    var successBox = document.getElementById("formSuccess");
    var errorBox = document.getElementById("formError");

    function encode(data) {
      return Object.keys(data)
        .map(function (key) { return encodeURIComponent(key) + "=" + encodeURIComponent(data[key]); })
        .join("&");
    }

    function validate() {
      var valid = true;
      var requiredFields = form.querySelectorAll("[required]");
      requiredFields.forEach(function (field) {
        var wrapper = field.closest(".field");
        var fieldValid = field.checkValidity();
        if (!fieldValid) {
          valid = false;
          if (wrapper) { wrapper.classList.add("has-error"); }
        } else if (wrapper) {
          wrapper.classList.remove("has-error");
        }
      });
      return valid;
    }

    form.querySelectorAll("[required]").forEach(function (field) {
      field.addEventListener("blur", function () {
        var wrapper = field.closest(".field");
        if (!wrapper) return;
        if (field.checkValidity()) { wrapper.classList.remove("has-error"); }
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      successBox.classList.remove("is-visible");
      errorBox.classList.remove("is-visible");

      if (!validate()) {
        var firstError = form.querySelector(".has-error input, .has-error select, .has-error textarea");
        if (firstError) { firstError.focus(); }
        return;
      }

      var submitBtn = form.querySelector("button[type=submit]");
      var originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending...";

      var formData = new FormData(form);
      var payload = {};
      formData.forEach(function (value, key) { payload[key] = value; });

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(payload)
      })
        .then(function (response) {
          if (response.ok) {
            successBox.classList.add("is-visible");
            successBox.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
            form.reset();
          } else {
            throw new Error("Form submission failed");
          }
        })
        .catch(function () {
          errorBox.classList.add("is-visible");
          errorBox.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
        })
        .finally(function () {
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
        });
    });
  }
})();
