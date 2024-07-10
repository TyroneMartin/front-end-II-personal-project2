const searchTemplate = `
<form id="searchForm">
    <div class="search-bar-title">
        <h2>Find deals for any season</h2>
        <p>From cozy bed & breakfasts to luxury hotels, we've got you covered.</p>
    </div>
    <div class="search-box">
        <input type="text" id="location" placeholder="Where are you going?" required>
        <input type="date" id="checkInDate" placeholder="Check-in Date" required>
        <input type="date" id="checkOutDate" placeholder="Check-out Date" required>
        <input type="number" id="adults" placeholder="Enter # of Adults" min="1" required>
        <input type="number" id="children" placeholder="Children" min="0" value="0">
        <input type="number" id="rooms" placeholder="Enter # of Rooms" min="1" required>
        <button type="submit">Search</button>
    </div>
</form>
`;

export { searchTemplate };
