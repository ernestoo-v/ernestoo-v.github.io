# Instalador y Configuración de la Antena WiFi Realtek RTL8188EUS

Este repositorio contiene los drivers para la antena WiFi **Realtek RTL8188EUS** y una serie de scripts que facilitan su instalación y configuración en sistemas Linux.  
**Importante:** Los drivers que se encuentran en la carpeta `drivers` fueron obtenidos del repositorio original de https://github.com/aircrack-ng/rtl8188eus.

[![Monitor mode](https://img.shields.io/badge/monitor%20mode-supported-brightgreen.svg)](#)
[![Compatibilidad Linux](https://img.shields.io/badge/Linux-supported-brightgreen.svg)](#)

---
## Contenido del Repositorio

- **drivers/**  
  Carpeta que contiene los drivers obtenidos de la fuente original.

- **install_linux_headers.sh**  

- **setup.sh**

- **startWifi.sh**

---

## Requisitos

- Distribución Linux basada en Debian/Ubuntu (se utiliza `apt` para la instalación de paquetes).
- Permisos de superusuario (`sudo`).
- Conexión a internet para actualizar paquetes y descargar dependencias.

---

## Instrucciones de Instalación y Uso

### 1. Clonar el Repositorio

```bash
git clone https://github.com/ernestoo-v/Realtek-RTL8188EUS-drivers.git
```

### 2. Acceder al Directorio del Repositorio

```bash
cd REALTEK-RTL8188EUS
```

### 3. Asignar Permisos de Ejecución a los Scripts

```bash
chmod +x install_linux_headers.sh setup.sh startWifi.sh
```

### 4. Ejecutar el Script para Instalar los Linux Headers

```bash
./install_linux_headers.sh
```
> :warning: **Advertencia**: La instalación de `linux-headers-generic` modifica componentes críticos del sistema necesarios para compilar módulos del kernel. Asegúrate de que los headers instalados correspondan a tu versión actual del kernel. Si se instala una versión incompatible, podrías experimentar problemas de compilación o funcionamiento en el sistema.


### 5. Reiniciar el Sistema
Después de instalar los headers, reinicia tu ordenador para que los cambios surtan efecto.


### 6. Ejecutar el Script de Configuración y Compilación de los Drivers

```bash
./setup.sh
```
- Script encargado de: 
  - Actualiza la lista de paquetes.
  - Verifica e instala los linux headers específicos si es necesario.
  - Elimina cualquier módulo conflictivo.
  - Compila e instala el driver contenido en la carpeta `drivers`.
  - Configura el sistema para evitar conflictos mediante la creación de un archivo de blacklist.

### 7. Ejecutar el Script de Configuración de la Antena WiFi

```bash
./startWifi.sh
```
- Script que realiza la configuración de la antena WiFi: 
  - Carga el módulo `8188eu` para el chipset Realtek RTL8188EUS.
  - Reinicia el servicio `NetworkManager`.
  - Solicita al usuario desconectar y reconectar el adaptador WiFi USB.
  - Espera a que la interfaz `wlan0` aparezca.
  - Finaliza procesos que puedan interferir y activa el modo monitor en la interfaz.


## Créditos y Agradecimientos

**Drivers**: Los drivers contenidos en la carpeta `drivers` fueron obtenidos del repositorio original de https://github.com/aircrack-ng/rtl8188eus.git. ¡Gracias por compartir y contribuir a la comunidad!

**Desarrollo de Scripts**: Ernesto Villar
