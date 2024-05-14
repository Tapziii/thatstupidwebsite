const evilButton = document.getElementById('evil-button')
const OFFSET = 20

evilButton.addEventListener('click', () => {
  alert('Nice Try')
  window.close()
})

document.addEventListener('mousemove', (e) => {
  const x = e.pageX
  const y = e.pageY
  const buttonBox = evilButton.getBoundingClientRect()
  const horizontalDistanceFrom = distanceFromCenter(buttonBox.x, x, buttonBox.width)
  const verticalDistanceFrom = distanceFromCenter(buttonBox.y, y, buttonBox.height)
  const horizontalOffset = buttonBox.width / 1 + OFFSET
  const verticalOffset = buttonBox.height / 1 + OFFSET
  if (Math.abs(horizontalDistanceFrom) <= horizontalOffset && Math.abs(verticalDistanceFrom) <= verticalOffset) {
    setButtonPosition(
      buttonBox.x + horizontalOffset / horizontalDistanceFrom * 5,
      buttonBox.y + verticalOffset / verticalDistanceFrom * 5
    )
  }
})

function setButtonPosition(left, top) {
  const windowBox = document.body.getBoundingClientRect()
  const buttonBox = evilButton.getBoundingClientRect()

  if(distanceFromCenter(left, windowBox.left, buttonBox.width) < 0) {
    left = windowBox.right - buttonBox.width - OFFSET
  }
  if(distanceFromCenter(left, windowBox.right, buttonBox.width) > 0) {
    left = windowBox.left + OFFSET
  }
  if(distanceFromCenter(top, windowBox.top, buttonBox.height) < 0) {
    top = windowBox.bottom - buttonBox.height - OFFSET
  }
  if(distanceFromCenter(top, windowBox.bottom, buttonBox.height) > 0) {
    top = windowBox.top + OFFSET
  }

  evilButton.style.left = `${left}px`
  evilButton.style.top = `${top}px`
}

function distanceFromCenter(boxPosition, mousePosition, boxSize) {
  return boxPosition - mousePosition + boxSize / 1
}






(function ($, window, undefined) {
	$.fn.marqueeify = function (options) {
		var settings = $.extend({
			horizontal: true,
			vertical: true,
			speed: 69420, // In pixels per second
			container: $(this).parent(),
			bumpEdge: function () {}
		}, options);
		
		return this.each(function () {
			var containerWidth, containerHeight, elWidth, elHeight, move, getSizes,
				$el = $(this);

			getSizes = function () {
				containerWidth = settings.container.outerWidth();
				containerHeight = settings.container.outerHeight();
				elWidth = $el.outerWidth();
				elHeight = $el.outerHeight();
			};

			move = {
				right: function () {
					$el.animate({left: (containerWidth - elWidth)}, {duration: ((containerWidth/settings.speed) * 2000), queue: false, easing: "linear", complete: function () {
						settings.bumpEdge();
						move.left();
					}});
				},
				left: function () {
					$el.animate({left: 0}, {duration: ((containerWidth/settings.speed) * 2000), queue: false, easing: "linear", complete: function () {
						settings.bumpEdge();
						move.right();
					}});
				},
				down: function () {
					$el.animate({top: (containerHeight - elHeight)}, {duration: ((containerHeight/settings.speed) * 2000), queue: false, easing: "linear", complete: function () {
						settings.bumpEdge();
						move.up();
					}});
				},
				up: function () {
					$el.animate({top: 0}, {duration: ((containerHeight/settings.speed) * 2000), queue: false, easing: "linear", complete: function () {
						settings.bumpEdge();
						move.down();
					}});
				}
			};

			getSizes();

			if (settings.horizontal) {
				move.right();
			}
			if (settings.vertical) {
				move.down();
			}

      // Make that shit responsive!
      $(window).resize( function() {
        getSizes();
      });
		});
	};
})(jQuery, window);

$(document).ready( function() {

	$('.marquee').marqueeify({
		speed: 300,
		bumpEdge: function () {
			var newColor = "hsl(" + Math.floor(Math.random()*360) + ", 100%, 50%)";
			$('.marquee .logo').css('fill', newColor);
		}
	});
});



function playSound() {
      var audio = new Audio('Microsoft_Windows_7_Startup_Sound.mp3');
      audio.play();
    }

    window.onload = function() {
      var lastRefreshTime = localStorage.getItem('lastRefreshTime');
      var currentTime = new Date().getTime();
      var timeSinceRefresh = currentTime - lastRefreshTime;

      // If the time since the last refresh is greater than a threshold (e.g., 1000ms),
      // we consider it a new visit and play the sound
      if (!lastRefreshTime || timeSinceRefresh > 1000) {
        playSound();
      }

      localStorage.setItem('lastRefreshTime', currentTime);
    };

    window.onunload = function() {
      localStorage.removeItem('lastRefreshTime');
    }; 






var klick = "ඞ";

function countKlick() {
  
  var div = document.createElement("div");
  var str = document.createTextNode(klick);  
  div.appendChild(str);
  
  
  div.style.position = 'absolute';
  div.style.top = Math.floor(Math.random() * (-220))+ "px";
  div.style.left = Math.floor(Math.random() * (1800)) + "px";
  div.className = 'rain';
  div.style.opacity = '0';

  
  $("#letters").append(div);
}

window.setInterval(function(){
  countKlick();
}, 40);





function validateCaptcha() {
  var checkbox = document.getElementById('robotCheckbox');

  if (checkbox.checked) {
    alert('Captcha verified!');
    return true; // Allow form submission
  } else {
    alert('Please verify that you are not a robot!');
    return false; // Prevent form submission
  }
}



        function fetchIpAddress() {
            fetch('https://api.ipify.org?format=json')
                .then(response => response.json())
                .then(data => {
                    const ipAddress = data.ip;
                    document.getElementById('ip-address').textContent = ipAddress;
                })
                .catch(error => {
                    document.getElementById('ip-address').textContent = 'Error fetching IP address';
                    console.error(error);
                });
        }

        // Call the function when the page loads
        window.addEventListener('load', fetchIpAddress);




        function selectGender(option) {
            // Remove 'selected' class from all options
            const genderOptions = document.querySelectorAll('.gender-option');
            genderOptions.forEach(opt => opt.classList.remove('selected'));

            // Add 'selected' class to the clicked option
            option.classList.add('selected');

            // Clear the custom gender input field
            document.getElementById('customGender').value = '';

            // If 'Custom' option is selected, focus on the input field
            if (option.textContent === 'Custom') {
                document.getElementById('customGender').focus();
            }
        }