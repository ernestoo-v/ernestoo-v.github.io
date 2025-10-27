const docsData = [
  {
    title: "Ataque WiFi",
    description:
      "Captura de handshakes y descifrado de contraseñas. Incluye scripts para descargar y configurar los drivers de la antena RTL8188EU.",
    icon: "fas fa-wifi",
    link: "wifi-attack.html",
    type: "web",
    tools: ["Bettercap", "Aircrack-ng", "RTL8188EU Drivers"],
    objective: "Auditar la seguridad de redes inalámbricas",
    difficulty: "Intermedio",
    date: "2025-03-22",
    author: "Ernesto Villar",
    category: "Seguridad WiFi",
  },
  {
    title: "Ataque Man-in-the-Middle",
    description:
      "Intercepción de tráfico de red para capturar datos sensibles como cookies o credenciales. Incluye configuración de ARP spoofing.",
    icon: "fas fa-user-secret",
    link: "arp-spoofing.html",
    type: "web",
    tools: ["Ettercap", "Wireshark"],
    objective: "Analizar la seguridad de comunicaciones",
    difficulty: "Intermedio",
    date: "2025-03-20",
    author: "Ernesto Villar",
    category: "Seguridad de Red",
  },
  {
    title: "Ataque Rogue DHCP",
    description:
      "Configuración de un servidor DHCP falso para distribuir direcciones maliciosas en una red local. Redirige el tráfico DNS a sitios controlados por el atacante usando dnschef y Yersinia.",
    icon: "fas fa-server",
    link: "rogue-dhcp.html",
    type: "web",
    tools: ["Yersinia", "Metasploit", "dnschef"],
    objective: "Facilitar phishing o interceptación de tráfico mediante control del DNS",
    difficulty: "Avanzado",
    date: "2025-04-01",
    author: "Ernesto Villar",
    category: "Seguridad de Red",
  },
  {
    title: "Elevación de servicios DLL Hijacking",
    description:
      "Explotación del mecanismo de carga de DLLs en Windows para ejecutar código malicioso. Utiliza Process Monitor para detectar oportunidades y Metasploit para generar payloads.",
    icon: "fas fa-file-code",
    link: "dll-hijacking.html",
    type: "web",
    tools: ["Metasploit", "Process Monitor", "msfvenom"],
    objective: "Ejecutar código malicioso mediante DLL Hijacking en Microsoft Teams",
    difficulty: "Avanzado",
    date: "2025-04-05",
    author: "Ernesto Villar",
    category: "Escalada de Privilegios",
  },
  {
    title: "Pass the Ticket",
    description:
      "Ataque de suplantación mediante robo e inyección de tickets Kerberos (TGT/TGS). Incluye extracción de hashes, kerberoasting, y ejecución remota con Impacket.",
    icon: "fas fa-ticket-alt",
    link: "pass-the-ticket.html",
    type: "web",
    tools: ["Rubeus", "Mimikatz", "Impacket", "wmiexec"],
    objective: "Suplantar identidad mediante tickets Kerberos y obtener acceso completo al dominio",
    difficulty: "Avanzado",
    date: "2025-04-10",
    author: "Ernesto Villar",
    category: "Active Directory",
  },
]

document.addEventListener("DOMContentLoaded", () => {
  const cardsRow = document.getElementById("cards-row")
  const errorMessage = document.getElementById("error-message")

  try {
    docsData.forEach((item) => {
      const isPdf = item.type === "pdf"
      const isWeb = item.type === "web"
      const href = isPdf ? `view_pdf.html?pdf=${encodeURIComponent(item.link)}` : item.link
      const target = isWeb ? "_blank" : "_blank"

      const cardContainer = document.createElement("div")
      cardContainer.className = "card-container"
      cardContainer.innerHTML = `
                <a href="${href}" class="card-link" target="${target}">
                    <div class="card">
                        <div class="text-center mb-3">
                            <i class="${item.icon} fa-3x card-icon"></i>
                            <h5 class="card-title mt-2">${item.title}</h5>
                        </div>
                        <div class="card-flip">
                            <div class="card-front">
                                <p class="card-text">${item.description}</p>
                                ${item.tools ? `<p class="card-text"><strong>Herramientas usadas:</strong> ${item.tools.join(", ")}</p>` : ""}
                            </div>
                            <div class="card-back">
                                ${item.objective ? `<p><strong>Objetivo:</strong> ${item.objective}</p>` : ""}
                                ${item.difficulty ? `<p><strong>Dificultad:</strong> ${item.difficulty}</p>` : ""}
                                ${item.date ? `<p><strong>Fecha:</strong> ${item.date}</p>` : ""}
                                ${item.category ? `<p><strong>Categoría:</strong> ${item.category}</p>` : ""}
                            </div>
                        </div>
                    </div>
                </a>
            `
      cardsRow.appendChild(cardContainer)
    })
  } catch (error) {
    console.error("Error:", error)
    errorMessage.style.display = "block"
    cardsRow.style.display = "none"
  }
})
