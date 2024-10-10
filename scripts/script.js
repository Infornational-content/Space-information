		// Show/hide the Go to Top button
		window.onscroll = function () {
			const btn = document.getElementById("goTopBtn");
			if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
				btn.style.display = "block";
			} else {
				btn.style.display = "none";
			}
		};

		// Scroll to top function
		function scrollToTop() {
			document.body.scrollTop = 0; // For Safari
			document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
		}
