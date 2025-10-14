// Get all dropdown links for Gender
const genderDropdown = document.querySelector('.dropdown-content');
const genderButton = document.querySelector('.dropdown-button');

genderDropdown.addEventListener('click', function(e) {
  if (e.target.tagName === 'A') {
    e.preventDefault(); // Prevent default link behavior
    
    const selectedGender = e.target.textContent;
    
    // Update button text to show selection
    genderButton.textContent = selectedGender;
    
    // Store the value (you can use this later)
    genderButton.dataset.value = selectedGender;
    
    console.log('Selected gender:', selectedGender);
  }
});

// Similar functionality for Activity dropdown
const activityDropdown = document.querySelector('.dropdown-content2');
const activityButton = document.querySelector('.dropdown-button2');

activityDropdown.addEventListener('click', function(e) {
  if (e.target.tagName === 'A') {
    e.preventDefault();
    
    const selectedActivity = e.target.textContent;
    
    // Update button text
    activityButton.textContent = selectedActivity;
    
    // Store the value
    activityButton.dataset.value = selectedActivity;
    
    console.log('Selected activity:', selectedActivity);
  }
});
function collectFormData() {
  const name = document.querySelector('input[placeholder="Name"]').value;
  const height = document.querySelector('input[placeholder="Height(in cm)"]').value;
  const weight = document.querySelector('input[placeholder="Weight(in kg)"]').value;
  const age = document.querySelector('input[placeholder="Age"]').value;
  const gender = genderButton.dataset.value || 'Not selected';
  const activity = activityButton.dataset.value || 'Not selected';
  
  const userData = {
    name: name,
    height: height,
    weight: weight,
    gender: gender,
    age: age,
    activity: activity
  };
  
  console.log('Form Data:', userData);
  return userData;
}
const proceedButton = document.getElementById('proceed');
proceedButton.addEventListener('click', () => {
  const data = collectFormData();
  sessionStorage.setItem('userData', JSON.stringify(data));
  window.location.href = "Ahaar3.html";
});
