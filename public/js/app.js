$('.m-nav-toggle').click(function(e) {
    e.preventDefault();  // Empêche le comportement par défaut du clic sur le lien

    $('.m-right').toggleClass('is-open');  // Bascule la classe 'is-open' de l'élément avec la classe '.m-right'
    $('.m-nav-toggle').toggleClass('is-open');  // Bascule la classe 'is-open' de l'élément avec la classe '.m-nav-toggle'
})