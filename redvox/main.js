// Document ready function ensures the DOM is fully loaded before executing code
$(document).ready(() => {
  // Fetches album data and initializes the carousel once data is successfully loaded
  fetchAlbumData();

  // Sets up event listeners for navigation buttons for smooth scrolling
  initNavButtonListeners();
});

/**
 * Fetches album data from a JSON file and initializes the carousel.
 */
function fetchAlbumData() {
  $.getJSON('content/songlist.json', initializeAlbumCarousel)
    .fail((error) => {
      console.error('Error loading album data:', error);
    });
}

/**
 * Initializes navigation button listeners to enable smooth scrolling to sections.
 */
function initNavButtonListeners() {
  // Each button is assigned a click event listener to scroll to the respective section
  $('#nav-listen-btn').click((e) => {
    e.preventDefault();
    smoothScrollToSection('#featured-album-section');
  });

  $('#nav-about-btn').click((e) => {
    e.preventDefault();
    smoothScrollToSection('#about-section');
  });

  $('#nav-socials-btn').click((e) => {
    e.preventDefault();
    smoothScrollToSection('#socials-section');
  });

  $('#mobile-nav-listen-btn').click((e) => {
    e.preventDefault();
    smoothScrollToSection('#featured-album-section');
    $('#mobile-menu').removeClass('active');
  });

  $('#mobile-nav-about-btn').click((e) => {
    e.preventDefault();
    smoothScrollToSection('#about-section');
    $('#mobile-menu').removeClass('active');
  });

  $('#mobile-nav-socials-btn').click((e) => {
    e.preventDefault();
    smoothScrollToSection('#socials-section');
    $('#mobile-menu').removeClass('active');
  });

  $('#scroll-indicator').click(() => {
    smoothScrollToSection('#featured-album-section');
  });

  // Hamburger menu open and close
  let $mobileMenu = $('#mobile-menu');
  $('#hamburger-menu-open').click(() => {
    $('#mobile-menu').addClass('active');
  });

  $('#hamburger-menu-close').click(() => {
    $('#mobile-menu').removeClass('active');
  });
}

/**
 * Scrolls the page smoothly to the specified section.
 * @param {string} selector - The CSS selector of the section to scroll to.
 */
function smoothScrollToSection(selector) {
  $('html, body').animate({
    scrollTop: $(selector).offset().top
  }, 'smooth');
}

/**
 * Initializes the album carousel with data from the album JSON.
 * @param {Object} albumData - Data containing albums and their details.
 */
function initializeAlbumCarousel(albumData) {
  const $albumContainer = $('#album-carousel');
  $albumContainer.empty(); // Clears the album container before adding new content

  // Loops through each album in the data and creates an element for it
  $.each(albumData.albums, (index, album) => {
    const $albumDiv = createAlbumElement(album, index);
    $albumContainer.append($albumDiv);
  });

  // Initializes the carousel with Slick library settings\
  const $carousel = $('.carousel');
  $carousel.slick({
    accessibility: true,
    adaptiveHeight: true,
    arrows: true,
    draggable: false,
    infinite: false,
    appendArrows: $('#featured-album-section'),
    nextArrow: $('#prev-album-arrow'),
    prevArrow: $('#next-album-arrow'),
  });

  $('#next-album-arrow').hide();

  $carousel.on('afterChange', function (event, slick, currentSlide, nextSlide) {
    // Show both arrows
    $('#prev-album-arrow, #next-album-arrow').show();

    // If we're at the first slide, hide the next arrow
    if (currentSlide === 0) {
      $('#next-album-arrow').hide();
    }

    // If we're at the last slide, hide the previous arrow
    if (currentSlide === slick.slideCount - 1) {
      $('#prev-album-arrow').hide();
    }

    // Update the featured album title header with the title of the current album
    const currentAlbum = albumData.albums[currentSlide];
    $('#featured-album-title-header').text(currentAlbum.title);
  });
}

/**
 * Creates a DOM element for an album with its details and songs.
 * @param {Object} album - An object containing album details.
 * @param {number} index - The index of the album in the album data array.
 * @returns A jQuery object representing the album element.
 */
function createAlbumElement(album, index) {
  const $albumDiv = $('<div>', { class: 'featured-album-info', id: `album-${index}` });
  const $innerAlbumDiv = $('<div>', { class: 'featured-album-inner' });

  // Add album art if available
  if (album.album_art_url) {
    const $albumArtDiv = $('<div>', { class: 'featured-album-art' });
    const $albumImage = $('<img>', {
      src: album.album_art_url,
      alt: `Cover art for ${album.title}`
    });
    $albumArtDiv.append($albumImage);
    $innerAlbumDiv.append($albumArtDiv);
  }

  // Create a list of songs in the album
  const $songListUl = $('<ul>', { class: 'featured-song-list' });
  $.each(album.songlist, (songIndex, song) => {
    const $songLi = $('<li>', {
      class: 'featured-song',
      html: `${songIndex + 1}. <span class="featured-song-title">${song.name}</span>`
    }).click(() => updateIframe(song.spotify_embed_link));
    $songListUl.append($songLi);
  });

  $innerAlbumDiv.append($songListUl);
  $albumDiv.append($innerAlbumDiv);
  return $albumDiv;
}

/**
 * Updates the src attribute of the iframe to play a new song.
 * @param {string} embedLink - The Spotify embed link of the song to play.
 */
function updateIframe(embedLink) {
  $('#track-iframe').attr('src', embedLink);
}
