// Add a hover effect to the photos
document.querySelectorAll('.photo').forEach(photo => {
	photo.addEventListener('mouseover', () => {
		photo.style.transform = 'scale(1.1)';
	});
	photo.addEventListener('mouseout', () => {
		photo.style.transform = 'scale(1)';
	});
});