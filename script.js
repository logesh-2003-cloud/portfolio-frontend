 AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true
    });

    window.addEventListener('scroll', () => {
      const scrollBtn = document.querySelector('.scroll-top');
      scrollBtn.style.display = window.scrollY > 100 ? 'block' : 'none';
    });

    window.addEventListener('scroll', () => {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('.nav-link');

      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        if (pageYOffset >= sectionTop) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
          link.classList.add('active');
        }
        });
    });
    