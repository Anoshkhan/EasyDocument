        //for making a on click navigation menu
        const mobBtn = document.getElementById('mobile-cta');
		const nav = document.querySelector('nav');
		const mobBtnExit = document.getElementById('mobile-exit');

		mobBtn.addEventListener('click',() =>{
			nav.classList.add('menu-btn');
		})
		mobBtnExit.addEventListener('click',() =>{
			nav.classList.remove('menu-btn');
		})