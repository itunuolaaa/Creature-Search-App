const creatures = {
    "pyrolynx": {
      name: "PYROLYNX",
      id: 1,
      weight: 42,
      height: 32,
      types: ["FIRE"],
      stats: {
        hp: 65,
        attack: 80,
        defense: 50,
        specialAttack: 90,
        specialDefense: 55,
        speed: 100
      }
    },
    "aquoroc": {
      name: "AQUOROC",
      id: 2,
      weight: 220,
      height: 53,
      types: ["WATER", "ROCK"],
      stats: {
        hp: 85,
        attack: 90,
        defense: 120,
        specialAttack: 60,
        specialDefense: 70,
        speed: 40
      }
    }
  };
  
  document.getElementById("search-button").addEventListener("click", () => {
    const rawInput = document.getElementById("search-input").value.trim();
    let creature;
  
    if (!isNaN(rawInput)) {
      // Search by ID
      creature = Object.values(creatures).find(c => c.id == rawInput);
    } else {
      // Search by name (case-insensitive)
      creature = creatures[rawInput.toLowerCase()];
    }
  
    const typesEl = document.getElementById("types");
    typesEl.innerHTML = ""; // Clear previous types
  
    if (!creature) {
      alert("Creature not found");
      return;
    }
  
    document.getElementById("creature-name").textContent = creature.name;
    document.getElementById("creature-id").textContent = "#" + creature.id;
    document.getElementById("weight").textContent = creature.weight;
    document.getElementById("height").textContent = creature.height;
  
    // Add creature types as <span> elements
    creature.types.forEach(type => {
      const typeEl = document.createElement("span");
      typeEl.textContent = type;
      typesEl.appendChild(typeEl);
    });
  
    const stats = creature.stats;
    document.getElementById("hp").textContent = stats.hp;
    document.getElementById("attack").textContent = stats.attack;
    document.getElementById("defense").textContent = stats.defense;
    document.getElementById("special-attack").textContent = stats.specialAttack;
    document.getElementById("special-defense").textContent = stats.specialDefense;
    document.getElementById("speed").textContent = stats.speed;
  });