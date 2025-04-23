const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__fadeIn");
    }
  });
});
observer.observe(document.querySelector(".card-service"));
