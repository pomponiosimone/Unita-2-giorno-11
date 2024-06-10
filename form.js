const form = document.querySelector("form");
class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
  static isSameAuthorStatic(pet1, pet2) {
    return pet1.ownerName === pet2.ownerName;
  }
}

const pets = [];

form.onsubmit = function (event) {
  event.preventDefault();

  const petName = document.getElementById("PetName").value;
  const ownerName = document.getElementById("OwnerName").value;
  const species = document.getElementById("Species").value;
  const breed = document.getElementById("Breed").value;

  const newPet = new Pet(petName, ownerName, species, breed);
  pets.push(newPet);

  console.log("PetName:", petName);
  console.log("OwnerName:", ownerName);
  console.log("Species:", species);
  console.log("Breed:", breed);

  const listItem = document.createElement("li");

  listItem.textContent = `Pet Name: ${petName}, Owner Name: ${ownerName}, Species: ${species}, Breed: ${breed}`;

  petList.appendChild(listItem);

  for (let i = 0; i < pets.length; i++) {
    const pet = pets[i];
    if (pet !== newPet && Pet.isSameAuthorStatic(pet, newPet)) {
      console.log(
        ` ${newPet.petName} e ${pet.petName} hanno lo stesso padrone : ${ownerName}`
      );
    }
  }

  form.reset();
};
