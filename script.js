
document.addEventListener("DOMContentLoaded", function() {
    fetchData();
});

async function fetchData() {
    try {
        const response = await fetch("http://localhost:3000/data"); 
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function displayData(data) {
    const container = document.getElementById("dataContainer");
    if (data.length === 0) {
        container.innerHTML = "<p>No data available</p>";
    } else {
        const listItems = data.map(item => {
            return `<div>
                        <p><strong>URL:</strong> ${item.url}</p>
                        <p><strong>Method:</strong> ${item.method}</p>
                        <p><strong>Resource Type:</strong> ${item.resourceType}</p>
                    </div>`;
        }).join("");
        container.innerHTML = listItems;
    }
}
