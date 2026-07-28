async function updateUsernameDisplay() {
                        const usernameDisplay = document.getElementById("usernameDisplay");
                        if (!usernameDisplay) return;

                        try {
                            const response = await fetch("/session");
                            if (!response.ok) throw new Error("Not authenticated");
                            const data = await response.json();
                            usernameDisplay.textContent = data.username ? `👤 ${data.username}` : "👤 User";
                        } catch (error) {
                            usernameDisplay.textContent = "👤 User";
                        }
                    }

                    updateUsernameDisplay();