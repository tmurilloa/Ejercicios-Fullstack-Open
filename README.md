# 📘 Ejercicios Fullstack Open – Proyecto React + Vite

Este repositorio contiene ejercicios desarrollados durante el curso **Fullstack Open**, utilizando **React** junto con **Vite** como entorno de desarrollo moderno y rápido.

---

## 🚀 Pasos para crear y ejecutar un proyecto con React + Vite

### 1. Crear un nuevo proyecto

#### Con `npm` versión 6.x (aún en uso por algunos entornos):
```bash
npm create vite@latest "NOMBRE_PROYECTO" --template react
```
#### Con `npm` versión 7.x o superior (requiere -- antes del template):
```bash
npm create vite@latest "NOMBRE_PROYECTO" -- --template react
```

### 2. Acceder a la carpeta del proyecto 
```bash
cd "NOMBRE_PROYECTO"
```
### 3. Instalar las dependencias 
```bash
npm install
```
### 4. Iniciar el servidor de desarrollo
```bash
npm run dev
```

## Uso de JSON Server
Para simular una API REST de forma local usando un archivo db.json:
```bash
npx json-server --port 3001 --watch db.json
```
💡 Asegúrate de tener un archivo db.json válido en la raíz del proyecto para que el servidor funcione correctamente.
