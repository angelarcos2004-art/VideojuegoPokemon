# 🎮 Batalla de Cartas Pokémon - Videojuego Web

Videojuego interactivo de cartas por turnos inspirado en Pokémon y Yu-Gi-Oh!, desarrollado con **Angular 21**, **Supabase** y **SQLite**. Completamente en **español**.

## ✨ Características

- ✅ **Autenticación con Supabase** - Registro e inicio de sesión seguros
- ✅ **Colección de Cartas** - Navega y colecciona cartas Pokémon desde PokeAPI
- ✅ **Constructor de Mazo** - Arma mazos de 20 cartas (máx 2 copias por carta)
- ✅ **Juego vs CPU** - Batalla contra IA con turnos y habilidades especiales
- ✅ **Juego Multijugador** - Salas de juego en línea con Supabase Realtime
- ✅ **Historial de Juegos** - Estadísticas y registro de victorias/derrotas
- ✅ **Interfaz Completamente en Español**
- ✅ **Base de Datos Local** - SQLite con sql.js para caché offline
- ✅ **Seguridad RLS** - Row Level Security en todas las tablas

## 🛠️ Stack Tecnológico

| Capa | Tecnología |
|------|-----------|
| **Frontend** | Angular 21 (Standalone Components) |
| **Auth & BD Remota** | Supabase (PostgreSQL + Auth) |
| **BD Local** | sql.js (SQLite en WebAssembly) |
| **Cartas Pokémon** | PokeAPI v2 (https://pokeapi.co/api/v2) |
| **Estilos** | CSS3 Puro (Tema oscuro dorado) |

## 📦 Instalación

### Requisitos Previos
- **Node.js** 20+ y **npm** 11+
- **Git**
- Cuenta en **Supabase** con BD ya configurada

### Pasos

1. **Clonar y navegar al proyecto**
```bash
cd "C:\TESE\6 SEMESTRE\DESARROLLO WEB PRACTICAS\3er Departamental\Proyecto3erDept\VideojuegoPokemon"
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Verificar configuración de Supabase**
El archivo `src/environments/environment.ts` debe tener:
```typescript
export const environment = {
  production: false,
  supabase: {
    url: 'https://bwlezijlqunjmomrrrkh.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
  },
  pokeapi: {
    baseUrl: 'https://pokeapi.co/api/v2'
  }
};
```

## 🚀 Ejecutar la Aplicación

### Desarrollo (con hot reload)
```bash
npm start
```
Accede a `http://localhost:4200`

### Build para Producción
```bash
npm run build
```
Output en `dist/videojuego-pokemon/`

## 🎮 Cómo Jugar

1. **Registrarse** - Crea una cuenta con email y contraseña
2. **Coleccionar Cartas** - Navega la colección y agrega cartas
3. **Construir Mazo** - Crea un mazo de 20 cartas para jugar
4. **Jugar vs CPU** - Batalla automática contra la IA
5. **Ver Historial** - Revisa tus estadísticas y resultados

### Mecánicas
- **HP Inicial:** 4000 por jugador
- **Mazo:** 20 cartas (máx 2 copias iguales)
- **Campo:** Máximo 5 cartas activas
- **Turnos:** Robo → Principal → Batalla → Término
- **Daño:** `Ataque - Defensa` del oponente

## 📁 Estructura del Proyecto

```
src/app/
├── core/                          # Servicios y modelos
│   ├── services/
│   │   ├── supabase.service.ts   # BD remota
│   │   ├── auth.service.ts       # Autenticación
│   │   ├── pokemon.service.ts    # PokeAPI + caché
│   │   ├── game.service.ts       # Motor del juego
│   │   └── sqlite.service.ts     # BD local
│   ├── models/
│   │   ├── pokemon-card.model.ts
│   │   ├── game-state.model.ts
│   │   └── player.model.ts
│   └── guards/
│       └── auth.guard.ts         # Rutas protegidas
├── pages/                         # Componentes de página
│   ├── home/                     # Inicio
│   ├── auth/                     # Login/Registro
│   ├── menu/                     # Menú principal
│   ├── cards/                    # Colección y Deck
│   ├── game/                     # Juego CPU y Online
│   ├── history/                  # Historial
│   ├── results/                  # Resultados
│   └── rules/                    # Reglas
├── shared/
│   └── components/
│       └── navbar/               # Navegación
└── environments/                 # Configuración
```

## 🗄️ Base de Datos (Supabase)

### Tablas en Uso
- **profiles** - Usuarios
- **user_collection** - Preferencias de colección (opcional)
- **decks** - Mazos guardados (solo IDs de Pokémon)
- **deck_cards** - IDs de cartas en mazos
- **game_rooms** - Salas multijugador
- **game_state** - Estado de partidas
- **game_results** - Historial

### Tabla `pokemon_cards` (NO USADA)
- Se creó como parte del schema pero **no es necesaria**
- Los Pokémon se obtienen directamente de **PokeAPI v2**
- Se cachean localmente en **SQLite** para offline
- Si necesitas cartas especiales, puedes usarla

### Flujo de Datos
```
PokeAPI (898+ Pokémon)
    ↓
PokemonService (mapeo a PokemonCard)
    ↓
SQLite Cache (offline)
    ↓
Colección Supabase (guardar preferencias)
```

### Seguridad
- RLS habilitado en tablas de usuario
- Los usuarios solo ven sus propios datos
- Las partidas son privadas por jugador

## 🚀 Deployment

### Vercel (Recomendado)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist/videojuego-pokemon
```

### Render
- Conecta GitHub
- Build: `npm run build`
- Publish dir: `dist/videojuego-pokemon`

## 📊 Habilidades Implementadas

Las cartas tienen 7 tipos diferentes de habilidades especiales:

| Tipo | Habilidad | Efecto |
|------|-----------|--------|
| 🔥 Fuego | Quemar | Aumenta ataque +10 |
| 💧 Agua | Cura Acuática | Restaura 50 HP |
| 🌿 Planta | Escudo de Esporas | Bloquea ataque |
| ⚡ Eléctrico | Rayo | 50 daño directo |
| 👁️ Psíquico | Lectura Mental | Roba carta extra |
| ❄️ Hielo | Congelamiento | Reduce defensa -15 |
| 👻 Fantasma | Revivir | Restaura Pokémon |

## 🔧 Tecnologías Aprendidas

- ✅ Angular 21 standalone components
- ✅ RxJS Observables y reactive programming
- ✅ Supabase Auth y PostgreSQL
- ✅ Row Level Security (RLS)
- ✅ REST APIs e integración PokeAPI
- ✅ SQLite con sql.js (WASM)
- ✅ Gestión de estado con BehaviorSubject
- ✅ CSS3 avanzado y responsive design
- ✅ TypeScript interfaces y tipos
- ✅ Git y control de versiones

## 🐛 Solución de Problemas

| Problema | Solución |
|----------|----------|
| Puerto 4200 ocupado | `ng serve --port 4300` |
| Error de Supabase | Verifica `environment.ts` |
| Cartas no cargan | Revisa conexión a PokeAPI |
| RLS bloqueando datos | Inicia sesión en Supabase |

## 📝 Cartas Pokémon

**✨ IMPORTANTE:** No necesitas insertar datos.

- La aplicación descarga Pokémon directamente de **PokeAPI v2**
- Hay **898+ Pokémon** disponibles automáticamente
- Se cachean en **SQLite** la primera vez (offline)
- La tabla `pokemon_cards` no se usa en el flujo normal

### Obtener Cartas
1. Abre la app
2. Ve a **Colección**
3. Las cartas se cargan automáticamente desde PokeAPI
4. Busca, filtra y colecciona cualquier Pokémon

## 📞 Información del Proyecto

- **Asignatura:** Desarrollo de Aplicaciones Web (3er Departamental)
- **Institución:** Instituto Tecnológico
- **Estado:** ✅ Completado y Funcional
- **Fecha:** Mayo 2026
- **Licencia:** MIT

---

¡Disfruta el juego! 🎮⚡
