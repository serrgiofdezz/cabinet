// Function to update the links for last and next month
function updateNavigationLinks() {
    const path = window.location.pathname;
    const pathParts = path.split('/');

    if (pathParts.length >= 5 && !isNaN(pathParts[3]) && !isNaN(pathParts[4])) {
        let year = parseInt(pathParts[3]);
        let month = parseInt(pathParts[4]);

        // Get current date information
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth() + 1; // Months are zero-based

        // Calculate last month
        let lastMonth = month - 1;
        let lastMonthYear = year;
        if (lastMonth < 1) {
            lastMonth = 12;
            lastMonthYear -= 1;
        }

        // Calculate next month
        let nextMonth = month + 1;
        let nextMonthYear = year;
        if (nextMonth > 12) {
            nextMonth = 1;
            nextMonthYear += 1;
        }

        // Update the href attributes of the links
        document.getElementById('last-month').href = `/xaspos/talk/${lastMonthYear}/${String(lastMonth).padStart(2, '0')}`;

        // Only allow navigating to the next month if not exceeding the current month in the current year
        if (!(year === currentYear && month >= currentMonth)) {
            document.getElementById('next-month').href = `/xaspos/talk/${nextMonthYear}/${String(nextMonth).padStart(2, '0')}`;
        } else {
            document.getElementById('next-month').href = '#'; // Disable the next month link
            document.getElementById('next-month').style.pointerEvents = 'none'; // Optional: Disable clicking on the link
        }
    }
}

// Call the function to update the links
updateNavigationLinks();
