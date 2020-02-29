// Run the init function when page finishes loading
$(init);

function init() {
    // Get all anchors that are the clickable tabs
    var tabAnchors = $(".tabTop");

    // Tell all tabs to run doTabClick when they are clicked
    tabAnchors.click(doTabClick);

    // Programmatically perform a "click" on the first tab
    tabAnchors.first().click();

    // Not part of the tabs, but shows how to count checkboxes
    $("button").click(orderSamples);
}

function orderSamples() {
    // jQuery, get me all the inputs where the name is sample
    // that are checked
    var checkedBoxes = $("input[name='sample']:checked");

    // Output the number of samples asked for
    $("#sampleCount").text("You asked for " + checkedBoxes.length + " samples");

    // Create an empty array to hold requested soap names (as strings)
    var soaps = [];

    // Push the value attribute of each checked box into the array
    checkedBoxes.each(function () {
        soaps.push(this.value);
    });

    // Concatenate the strings in the array with "comma space" in between them
    $("#sampleNames").text(soaps.join(", "));
}

function doTabClick() {
    // Get all of the divs that contain the tabs' contents
    var tabContainers = $(".tabBody");

    // Hide them all
    tabContainers.hide();

    // The hash is the part after the # in the href attribute
    tabContainers.filter(this.hash).show();

    // Get all anchors that are the clickable tabs
    var tabAnchors = $(".tabTop");

    // Remove the "selected" class from all tabs
    tabAnchors.removeClass("selected");

    // Add the "selected" class to just the tab that was clicked on
    $(this).addClass("selected");

    // Don't try to follow the link (because we're using <a> tags)
    return false;
}