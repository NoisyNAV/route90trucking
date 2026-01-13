(() => {
  const nav = document.getElementById("site-nav");
  const toggle = document.querySelector(".nav-toggle");
  const year = document.getElementById("year");

  if (year) year.textContent = String(new Date().getFullYear());

  if (!nav || !toggle) return;

  const setOpen = (open) => {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    document.body.style.overflow = open ? "hidden" : "";
  };

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.contains("is-open");
    setOpen(!isOpen);
  });

  // Close menu on link click (mobile)
  nav.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (!a) return;
    setOpen(false);
  });

  // Close on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setOpen(false);
  });

  // Desktop resize safety
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 900) setOpen(false);
  });

  // Highlight active link
  const path = location.pathname.split("/").pop() || "index.html";
  nav.querySelectorAll(".nav-link").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === path) link.classList.add("is-active");
  });
})();
