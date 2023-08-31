// Preview image from:  https://www.tutorialspoint.com/preview-an-image-before-it-is-uploaded-in-javascript
const previewImage = e => {
    const preview = document.getElementById('preview');
    preview.src = URL.createObjectURL(e.target.files[0]);
    preview.onload = () => URL.revokeObjectURL(preview.src);
 };
