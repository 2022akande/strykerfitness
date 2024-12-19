document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("overlay");
    const startButton = document.getElementById("start-button");
    const gameContainer = document.querySelector(".game-container");

    // Create a dedicated container for dynamic UI
    const dynamicUIContainer = document.createElement("div");
    dynamicUIContainer.classList.add("dynamic-ui");
    gameContainer.appendChild(dynamicUIContainer); // Append it to the game container

    startButton.addEventListener("click", () => {
        // Reset the game state
        overlay.classList.add("hidden");
        dynamicUIContainer.innerHTML = ""; 

        let playerHitPoints = 0;
        let cpuHitPoints = 0;

        // Create a new container for the attack phase UI
        const attackUIContainer = document.createElement("div");
        attackUIContainer.classList.add("attack-ui");

        // Create and add the heading
        const attackPhaseHeading = document.createElement("h3");
        attackPhaseHeading.textContent = "Player Attack Phase";
        attackUIContainer.appendChild(attackPhaseHeading);

        // Function to handle attack logic
        const handlePlayerAttack = (attackType) => {
            const isHit = Math.random() < 0.5; 
            if (isHit) {
                cpuHitPoints++;
                alert(`You landed a ${attackType}! Your Points: ${cpuHitPoints}`);
            } else {
                alert(`Your ${attackType} missed!`);
            }

            // Check for game end
            if (cpuHitPoints >= 5) {
                alert("You win! Game Over.");
                resetGame();
                return;
            }

            // Trigger CPU's turn
            handleCpuAttack();
        };

        // Function to handle CPU's turn
        const handleCpuAttack = () => {
            const isHit = Math.random() < 0.5; 
            if (isHit) {
                playerHitPoints++;
                alert(`CPU landed a hit! CPU Points: ${playerHitPoints}`);
            } else {
                alert("CPU missed!");
            }

            // Check for game end
            if (playerHitPoints >= 5) {
                alert("CPU wins! Game Over.");
                resetGame();
            }
        };

        // Helper function to reset the game
        const resetGame = () => {
            overlay.classList.remove("hidden");
            dynamicUIContainer.innerHTML = ""; // Clear only dynamic UI
        };

        // Create and add the attack buttons
        const attacks = ["Punch", "Kick", "Clinch"];
        attacks.forEach((attack) => {
            const button = document.createElement("button");
            button.textContent = attack;
            button.addEventListener("click", () => handlePlayerAttack(attack));
            attackUIContainer.appendChild(button);
        });

        // Append the attack UI to the dynamic UI container
        dynamicUIContainer.appendChild(attackUIContainer);
    });
});
