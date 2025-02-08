<script>
function toggleText(button) {
    let container = button.parentElement; // Get the parent div
    let paragraph = container.querySelector('.para'); // Select the paragraph inside
    let dots = paragraph.querySelector('.dots');
    let moreText = paragraph.querySelector('.more-text');

    if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "inline";
        dots.style.display = "none";
        button.innerText = "Read Less";
    } else {
        moreText.style.display = "none";
        dots.style.display = "inline";
        button.innerText = "Read More";
    }
}
</script>
