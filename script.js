function editSection(sectionId) {
    var section = document.getElementById(sectionId);
    var contentEditableElements = section.querySelectorAll('[contenteditable="false"]');
    // Toggle contenteditable attribute
    contentEditableElements.forEach(function (element) {
        element.setAttribute('contenteditable', 'true');
        element.focus();
    });
    // Add a listener to handle blur event to switch off contenteditable
    section.addEventListener('blur', function () {
        contentEditableElements.forEach(function (element) {
            element.setAttribute('contenteditable', 'false');
        });
    }, { once: true });
}
