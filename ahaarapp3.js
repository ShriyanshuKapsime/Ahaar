// On page load
const userData = JSON.parse(sessionStorage.getItem('userData'));

function setupButtons(container) {
    // Add new item
    container.querySelectorAll('.add-item').forEach(button => {
      button.onclick = () => {
        const parent = button.closest('.food-items');
        const newFoodItem = document.createElement('div');
        newFoodItem.className = 'food-item';
        newFoodItem.innerHTML = `
          <input class="addcss food" list="foods" placeholder="Enter food item">
          <button type="button" class="add-item">+</button>
          <button type="button" class="remove-item">❌</button>
        `;
        parent.appendChild(newFoodItem);
        setupButtons(newFoodItem); // reapply event listeners
      };
    });

    // Remove item
    container.querySelectorAll('.remove-item').forEach(button => {
      button.onclick = () => {
        const foodItem = button.closest('.food-item');
        const parent = foodItem.parentElement;
        if (parent.children.length > 1) {
          foodItem.remove(); // remove only if there’s more than one item
        } else {
          foodItem.querySelector('input').value = ''; // clear input instead of removing
        }
      };
    });
  }

  document.querySelectorAll('.meal').forEach(setupButtons);

document.querySelector(".add-meal").addEventListener("click", () => {
  const extra = document.getElementById("Extra");
  extra.classList.toggle("hide");

  if (!extra.classList.contains("hide")) {
    setupButtons(extra);
  }
});



  const submitButton = document.querySelector(".submit");
      let isClicked = false;

      submitButton.addEventListener("click", () => {
        if (!isClicked) {
          // Toggle to gradient
          submitButton.style.background = "linear-gradient(to right, #807850, rgb(11, 45, 11))";
        } else {
          // Toggle back to brown
          submitButton.style.background = "#643401";
        }

        // Flip state
        isClicked = !isClicked;
  });
  submitButton.addEventListener("click", (e) => {
  e.preventDefault(); 
  });
const foodData = {
  "Rice - 200gm cooked": { calories: 300, protein: 5, vitaminB12: 0, vitaminD: 0, zinc: 0.8, iron: 1.8, folate: 90, magnesium: 12 },
  "Veg Pulao - 1 cup": { calories: 250, protein: 5, vitaminB12: 0, vitaminD: 0, zinc: 1, iron: 0.7, folate: 14, magnesium: 20 },
  "Fried Rice - 1 cup": { calories: 290, protein: 6, vitaminB12: 0, vitaminD: 0, zinc: 1.2, iron: 0.8, folate: 16, magnesium: 25 },
  "Dal Khichdi - 1 cup": { calories: 230, protein: 7, vitaminB12: 0, vitaminD: 0, zinc: 1.1, iron: 1.2, folate: 22, magnesium: 28 },
  "Wheat Roti - 3 pieces": { calories: 375, protein: 9, vitaminB12: 0, vitaminD: 0, zinc: 1.5, iron: 2.2, folate: 25, magnesium: 30 },
  "Aalo Paratha - 2 medium pieces": { calories: 400, protein: 10, vitaminB12: 0, vitaminD: 0, zinc: 1.3, iron: 2.4, folate: 28, magnesium: 35 },
  "Paneer Paratha - 2 medium pieces": { calories: 450, protein: 14, vitaminB12: 0.3, vitaminD: 0.2, zinc: 1.8, iron: 2.6, folate: 30, magnesium: 40 },
  "Poori - 3-4 pieces": { calories: 320, protein: 6, vitaminB12: 0, vitaminD: 0, zinc: 1, iron: 1.5, folate: 18, magnesium: 25 },
  "Besan Chilla - 1 medium piece": { calories: 180, protein: 8, vitaminB12: 0, vitaminD: 0, zinc: 1.2, iron: 1.7, folate: 36, magnesium: 40 },
  "Samosa - 2 pieces": { calories: 300, protein: 6, vitaminB12: 0, vitaminD: 0, zinc: 0.8, iron: 1.3, folate: 20, magnesium: 28 },
  "Idli - 3-4 pieces": { calories: 210, protein: 7, vitaminB12: 0, vitaminD: 0, zinc: 0.5, iron: 0.7, folate: 22, magnesium: 22 },
  "Dosa - 1 medium piece": { calories: 180, protein: 5, vitaminB12: 0, vitaminD: 0, zinc: 0.4, iron: 0.5, folate: 18, magnesium: 20 },
  "Uttapam - 2 medium pieces": { calories: 250, protein: 8, vitaminB12: 0, vitaminD: 0, zinc: 0.6, iron: 1, folate: 25, magnesium: 25 },
  "Vada - 2-3 pieces": { calories: 280, protein: 7, vitaminB12: 0, vitaminD: 0, zinc: 0.8, iron: 0.9, folate: 24, magnesium: 28 },
  "Curd Rice - 1 cup": { calories: 220, protein: 6, vitaminB12: 0, vitaminD: 0, zinc: 0.5, iron: 0.8, folate: 20, magnesium: 24 },
  "Lemon Rice - 1 cup": { calories: 240, protein: 5, vitaminB12: 0, vitaminD: 0, zinc: 0.6, iron: 0.9, folate: 22, magnesium: 25 },
  "Upma - 1 cup": { calories: 220, protein: 5, vitaminB12: 0, vitaminD: 0, zinc: 0.7, iron: 0.9, folate: 25, magnesium: 28 },
  "Poha - 1 cup": { calories: 200, protein: 4, vitaminB12: 0, vitaminD: 0, zinc: 0.5, iron: 1.2, folate: 30, magnesium: 30 },
  "Toor Dal - 1 cup cooked": { calories: 200, protein: 12, vitaminB12: 0, vitaminD: 0, zinc: 1.8, iron: 2.7, folate: 90, magnesium: 45 },
  "Moong Dal - 1 cup cooked": { calories: 180, protein: 14, vitaminB12: 0, vitaminD: 0, zinc: 1.5, iron: 2.4, folate: 85, magnesium: 40 },
  "Urad Dal - 1 cup cooked": { calories: 230, protein: 13, vitaminB12: 0, vitaminD: 0, zinc: 1.6, iron: 3, folate: 80, magnesium: 48 },
  "Rajma - 1 cup cooked": { calories: 260, protein: 14, vitaminB12: 0, vitaminD: 0, zinc: 1.8, iron: 3.2, folate: 75, magnesium: 50 },
  "Chhole - 1 cup cooked": { calories: 150, protein: 7, vitaminB12: 0, vitaminD: 0, zinc: 0.6, iron: 1.3, folate: 40, magnesium: 28 },
  "Kadhi - 1 cup": { calories: 180, protein: 4, vitaminB12: 0, vitaminD: 0, zinc: 0.4, iron: 1.1, folate: 35, magnesium: 25 },
  "Aalo Gobhi - 1 cup": { calories: 160, protein: 5, vitaminB12: 0, vitaminD: 0, zinc: 0.5, iron: 1.2, folate: 40, magnesium: 28 },
  "Gajar Matar - 1 cup": { calories: 280, protein: 13, vitaminB12: 0.6, vitaminD: 0.1, zinc: 1.4, iron: 2.8, folate: 60, magnesium: 40 },
  "Palak Paneer - 1 cup": { calories: 300, protein: 15, vitaminB12: 0.6, vitaminD: 0.1, zinc: 1.6, iron: 3, folate: 55, magnesium: 42 },
  "Matar Paneer - 1 cup": { calories: 170, protein: 4, vitaminB12: 0, vitaminD: 0, zinc: 0.4, iron: 1.1, folate: 35, magnesium: 26 },
  "Bhindi Masala - 1 cup": { calories: 100, protein: 3, vitaminB12: 0, vitaminD: 0, zinc: 0.3, iron: 0.7, folate: 25, magnesium: 18 },
  "Lauki Sabji- 1 cup": { calories: 180, protein: 6, vitaminB12: 0, vitaminD: 0, zinc: 0.5, iron: 1, folate: 40, magnesium: 30 },
  "Sambhar - 1 cup": { calories: 122, protein: 7, vitaminB12: 0.1, vitaminD: 0.1, zinc: 0.1, iron: 0.2, folate: 5, magnesium: 5 },
  "Tea - 1 cup": { calories: 100, protein: 1, vitaminB12: 0.2, vitaminD: 0.1, zinc: 0.1, iron: 0.3, folate: 5, magnesium: 7 },
  "Coffee - 1 cup": { calories: 98, protein: 1, vitaminB12: 0.4, vitaminD: 0.1, zinc: 0.4, iron: 0.1, folate: 25, magnesium: 20 },
  "Curd - 1 cup": { calories: 150, protein: 4, vitaminB12: 0.9, vitaminD: 2.4, zinc: 0.9, iron: 0.2, folate: 12, magnesium: 24 },
  "Milk - 250 ml": { calories: 200, protein: 8, vitaminB12: 0.9, vitaminD: 2.5, zinc: 2.5, iron: 2.7, folate: 50, magnesium: 90 },
  "Nuts (cashew, almonds, pistachio etc) - 30 g": { calories: 200, protein: 6, vitaminB12: 0, vitaminD: 0, zinc: 2.5, iron: 2.7, folate: 50, magnesium: 90 },
  "Fruits -  1 medium piece or 1 cup chopped": { calories: 80, protein: 1, vitaminB12: 0.1, vitaminD: 0.1, zinc: 0.3, iron: 0.4, folate: 30, magnesium: 20 }
};
let reccalories = 0;
let BMRM = (10*userData.weight)+(6.25*userData.height)-(5*userData.age)+5;
let BMRW = (10*userData.weight)+(6.25*userData.height)-(5*userData.age)-161;
switch(userData.activity) {
    case "Physically Active (6-7 days a week)":
      if (userData.gender=="Male") {
        reccalories = BMRM*1.725;
      } else {
        reccalories = BMRW*1.725;
      }
      break;
    case "Partially Active (3-5 days a week)":
      if (userData.gender=="Male") {
        reccalories = BMRM*1.55;
      } else {
        reccalories = BMRW*1.55;
      }
      break;
    case "Sedentary Lifestyle (0-2 days a week)":
      if (userData.gender=="Male") {
        reccalories = BMRM*1.2;
      } else {
        reccalories = BMRW*1.2;
      }
    default:
        recCalories = 2000;
}
let recprotein = 0;
switch(userData.activity) {
  case "Physically Active (6-7 days a week)":
    recprotein = 2*userData.weight;
    break;
  case "Partially Active (3-5 days a week)":
    recprotein = 1.5*userData.weight;
    break;
  case "Sedentary Lifestyle (0-2 days a week)":
    recprotein = 1.2*userData.weight;
    break;
}
let reciron = 0;
if (userData.gender == "Male") {
  if (userData.age < 1) {
    reciron = 11;
  }else if(userData.age >=1 && userData.age <=3 ) {
    reciron = 7;
  }else if(userData.age >=4 && userData.age <= 8) {
    reciron = 10;
  } else if(userData.age>=9 && userData.age <= 13) {
    reciron = 8;
  }else if(userData.age>=14 && userData.age<= 18) {
    reciron = 11;
  }else if(userData.age>=19 && userData.age<= 50) {
    reciron = 8;
  }else {
    reciron = 8;
  }
} else {
  if (userData.age < 1) {
    reciron = 11;
  }else if(userData.age >=1 && userData.age <=3 ) {
    reciron = 7;
  }else if(userData.age >=4 && userData.age <= 8) {
    reciron = 10;
  } else if(userData.age>=9 && userData.age <= 13) {
    reciron = 8;
  }else if(userData.age>=14 && userData.age<= 18) {
    reciron = 15;
  }else if(userData.age>=19 && userData.age<= 50) {
    reciron = 18;
  }else {
    reciron = 8;
  }
}
let reczinc = 0;
if (userData.gender == "Male") {
  if (userData.age < 1) {
    reczinc = 3;
  }else if(userData.age >=1 && userData.age <=3 ) {
    reczinc = 3;
  }else if(userData.age >=4 && userData.age <= 8) {
    reczinc = 5;
  } else if(userData.age>=9 && userData.age <= 13) {
    reczinc = 8;
  }else if(userData.age>=14 && userData.age<= 18) {
    reczinc = 11;
  }else {
    reczinc = 11;
  }
} else {
  if (userData.age < 1) {
    reczinc = 3;
  }else if(userData.age >=1 && userData.age <=3 ) {
    reczinc = 3;
  }else if(userData.age >=4 && userData.age <= 8) {
    reczinc = 5;
  } else if(userData.age>=9 && userData.age <= 13) {
    reczinc = 8;
  }else if(userData.age>=14 && userData.age<= 18) {
    reczinc = 9;
  }else {
    reczinc = 8;
  }
}
let recmagnesium = 0;
if (userData.gender == "Male") {
  if (userData.age < 1) {
    recmagnesium = 75;
  }else if(userData.age >=1 && userData.age <=3 ) {
    recmagnesium = 80;
  }else if(userData.age >=4 && userData.age <= 8) {
    recmagnesium = 130;
  } else if(userData.age>=9 && userData.age <= 13) {
    recmagnesium = 240;
  }else if(userData.age>=14 && userData.age<= 18) {
    recmagnesium = 410;
  }else if(userData.age>=19 && userData.age<= 30) {
    recmagnesium = 400;
  }else {
    recmagnesium = 420;
  }
} else {
  if (userData.age < 1) {
    recmagnesium = 75;
  }else if(userData.age >=1 && userData.age <=3 ) {
    recmagnesium = 80;
  }else if(userData.age >=4 && userData.age <= 8) {
    recmagnesium = 130;
  } else if(userData.age>=9 && userData.age <= 13) {
    recmagnesium = 240;
  }else if(userData.age>=14 && userData.age<= 18) {
    recmagnesium = 360;
  }else if(userData.age>=19 && userData.age<= 30) {
    recmagnesium = 310;
  }else {
    recmagnesium = 320;
  }
}
let recfolate = 0;
 if (userData.age < 1) {
    recfolate = 80;
  }else if(userData.age >=1 && userData.age <=3 ) {
    recfolate = 150;
  }else if(userData.age >=4 && userData.age <= 8) {
    recfolate = 200;
  } else if(userData.age>=9 && userData.age <= 13) {
    recfolate = 300;
  }else if(userData.age>=14 && userData.age<= 18) {
    recfolate = 400;
  }else {
    recfolate = 400;
  }
let recvitaminb12 = 0;
 if (userData.age < 1) {
    recvitaminb12 = 0.5;
  }else if(userData.age >=1 && userData.age <=3 ) {
    recvitaminb12 = 0.9;
  }else if(userData.age >=4 && userData.age <= 8) {
    recvitaminb12 = 1.2;
  } else if(userData.age>=9 && userData.age <= 13) {
    recvitaminb12 = 1.8;
  }else if(userData.age>=14 && userData.age<= 18) {
    recvitaminb12 = 2.4;
  }else {
    recvitaminb12 = 2.4;
  }
let recvitamind = 0;
if(userData.age <1) {
  recvitamind = 10;
} else if(userData.age>=1 && userData.age <= 18) {
  recvitamind = 15;
}else if(userData.age>=19 && userData.age<=70) {
  recvitamind = 15;
}else {
  recvitamind = 20;
} 

const recommended = {
  calories: reccalories,
  protein: recprotein,
  iron: reciron,
  vitaminD: recvitamind,
  zinc: reczinc,
  magnesium: recmagnesium,
  folate: recfolate,
  vitaminB12: recvitaminb12

};
document.querySelector(".submit").addEventListener("click", () => {
  let total = { calories: 0, protein: 0, iron: 0, vitaminD: 0, zinc: 0, magnesium: 0, folate: 0, vitaminB12: 0};
  document.querySelectorAll(".food").forEach(input => {
    const item = input.value.trim();
    if (foodData[item]) {
      const nutrients = foodData[item];
      for (let key in total) {
        total[key] += nutrients[key];
      }
    }
});

document.getElementById("Resulttable").style.display = "table"; 

document.getElementById("intcalories").textContent = total.calories + " kcal";
document.getElementById("intprotein").textContent = total.protein + " g";
document.getElementById("intiron").textContent = total.iron + " mg";
document.getElementById("intvitamind").textContent = total.vitaminD + " µg";
document.getElementById("intzinc").textContent = total.zinc + " mg";
document.getElementById("intmagnesium").textContent = total.magnesium + " mg";
document.getElementById("intfolate").textContent = total.folate + " µg";
document.getElementById("intvitaminb12").textContent = total.vitaminB12 + " µg";

// Recommended
document.getElementById("reccalories").textContent = recommended.calories + " kcal";
document.getElementById("recprotein").textContent = recommended.protein + " g";
document.getElementById("reciron").textContent = recommended.iron + " mg";
document.getElementById("recvitamind").textContent = recommended.vitaminD + " µg";
document.getElementById("reczinc").textContent = recommended.zinc + " mg";
document.getElementById("recmagnesium").textContent = recommended.magnesium + " mg";
document.getElementById("recfolate").textContent = recommended.folate + " µg";
document.getElementById("recvitaminb12").textContent = recommended.vitaminB12 + " µg";

function diff(intake, rec) {
    let val = intake - rec;
    return (val >= 0 ? "+" : "") + val.toFixed(1);
  }

  document.getElementById("diffcalories").textContent = diff(total.calories, recommended.calories);
  document.getElementById("diffprotein").textContent = diff(total.protein, recommended.protein);
  document.getElementById("diffiron").textContent = diff(total.iron, recommended.iron);
  document.getElementById("diffvitamind").textContent = diff(total.vitaminD, recommended.vitaminD);
  document.getElementById("diffzinc").textContent = diff(total.zinc, recommended.zinc);
  document.getElementById("diffmagnesium").textContent = diff(total.magnesium, recommended.magnesium);
  document.getElementById("difffolate").textContent = diff(total.folate, recommended.folate);
  document.getElementById("diffvitaminb12").textContent = diff(total.vitaminB12, recommended.vitaminB12);


});

if (userData) {
    console.log('User data from previous page:', userData);
    // Example: you can show name somewhere
    const heading = document.getElementById("heading");
    heading.alt = `Check your Ahaar, ${userData.name}`;
}



