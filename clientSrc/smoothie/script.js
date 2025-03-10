document.getElementById('weightForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const weight = parseFloat(document.getElementById('weight').value);

    if (weight && weight > 0) {
        // Calculate Macronutrients
        const protein = weight * 1;  // 1g of protein per kg
        const carbs = weight * 5;    // 5g of carbs per kg
        const fat = weight * 1;      // 1g of fat per kg

        // Calculate Calories
        const calories = (protein * 4) + (carbs * 4) + (fat * 9); // Protein & Carbs = 4 cal/g, Fat = 9 cal/g

        // Display the results
        document.getElementById('nutritionInfo').innerHTML = `
          
            <p>your maintenance protein is: ${protein}g</p>
            <p>your maintenance carbs is: ${carbs}g</p>
            <p>your maintenance Fat is: ${fat}g</p>
            <p>your maintenance calories is: ${calories} kcal</p>
        `;
    } else {
        document.getElementById('nutritionInfo').textContent = 'Please enter a valid weight.';
    }
   
});
