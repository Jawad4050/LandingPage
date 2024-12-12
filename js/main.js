$('#owl-review').owlCarousel({
  items:1,
  nav:true,
  loop:false,
  margin:46,
  responsive: {
      0: {
          items: 1,
          margin: 0, // No margin on small screens
          dots:false,
      },
      600: {
          items: 3,
          dots:false,
          margin: 0, // No margin on small screens
      },
      1000: {
          items: 3,
          dots:true,
      },
  },
});