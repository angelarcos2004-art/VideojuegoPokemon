# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a 3rd Department web development project (`Proyecto3erDept`). Requirements are documented in `descripcióon poryecto 3er departamental.pdf`.

**Current Status**: Project initialization phase.

## Suggested Technologies

Students may choose appropriate technologies while meeting project requirements. Suggested stack:

### Frontend
- **Angular** (recommended) - modern web framework
- HTML5, CSS3, JavaScript
- Other frameworks are permitted but student must understand and explain functionality

### Backend (if custom backend required)
- **Node.js** - only if project requires custom backend
- Otherwise, use external services/APIs

### Database Options
- **Supabase** - managed backend-as-a-service (recommended for simplicity)
- **SQLite** - lightweight relational database
- Project may also use existing APIs without custom database

### External APIs & Services
- **Pokémon API** - likely used in this project
- Other REST APIs as needed

### Version Control & Deployment
- **GitHub** - version control and collaboration
- **Deployment platforms**: Vercel, Netlify, or Render

## Initial Setup

### 1. Git Repository
```powershell
git init
git config user.name "Student Name"
git config user.email eric.arcos@hotmail.com
git remote add origin https://github.com/username/Proyecto3erDept
```

### 2. Angular Project (Recommended Frontend)
```powershell
npm install -g @angular/cli
ng new Proyecto3erDept
cd Proyecto3erDept
npm install
```

### 3. Project Structure
```
Proyecto3erDept/
├── src/
│   ├── app/              # Angular components, services, modules
│   │   ├── components/   # Reusable UI components
│   │   ├── services/     # Data services (API calls, etc.)
│   │   ├── models/       # TypeScript interfaces/classes
│   │   └── app.component.ts
│   ├── assets/           # Images, icons, static files
│   └── styles.css        # Global styles
├── .gitignore
├── package.json
├── angular.json
├── README.md
└── CLAUDE.md             # This file
```

### 4. .gitignore (Essential)
```
node_modules/
dist/
.angular/
.vscode/
.idea/
*.env
*.env.local
.DS_Store
```

## Common Development Commands

### Angular Development
```powershell
npm install              # Install dependencies
ng serve                 # Start dev server (http://localhost:4200)
ng build                 # Build for production
ng test                  # Run unit tests
ng lint                  # Check code style (if ESLint configured)
```

### If Using Custom Node.js Backend
```powershell
npm run dev              # Start development server
npm run build            # Compile/build
npm test                 # Run tests
npm start                # Run production server
```

### Deployment
```powershell
# For Vercel
npm install -g vercel
vercel

# For Netlify
npm install -g netlify-cli
netlify deploy

# For Render
# Use GitHub integration via Render dashboard
```

## Development Workflow

1. **Create feature branch** for each task:
   ```powershell
   git checkout -b feature/description
   ```

2. **Install dependencies** if needed and commit package-lock.json:
   ```powershell
   npm install <package-name>
   git add package.json package-lock.json
   git commit -m "Add dependency: package-name"
   ```

3. **Development**:
   - Run `ng serve` for local testing
   - Test in browser at `http://localhost:4200`
   - For API integration, test endpoints before integrating into components

4. **Commit with clear messages**:
   ```powershell
   git commit -m "Feature: Add Pokemon list component"
   ```

5. **Push and create Pull Request** for code review

## Key Architectural Patterns

### Angular Services Pattern
Use Angular services to centralize API calls and data management:
```typescript
// pokemon.service.ts
@Injectable()
export class PokemonService {
  constructor(private http: HttpClient) {}
  getPokemon(id: number) { ... }
}
```

### Component Hierarchy
Organize components hierarchically - reusable presentational components at the bottom, container components at the top.

### API Integration
If using Pokémon API or Supabase:
- Create dedicated service for each external API
- Handle errors gracefully
- Use environment variables for API keys (never commit `.env`)

## Important Requirements

- **GitHub commits**: Use clear commit messages; maintain clean history
- **Code quality**: Write readable, maintainable code; follow Angular style guide
- **Testing**: Test functionality in browser; verify API calls work correctly
- **Deployment**: Deploy to Vercel, Netlify, or Render before submission
- **Documentation**: Update README.md with setup instructions and project overview

## Resources to Review

1. Read full project requirements in PDF
2. Angular documentation: https://angular.io/docs
3. TypeScript basics: https://www.typescriptlang.org/docs/
4. Pokémon API docs (if using): https://pokeapi.co/
5. Deployment platform docs: Vercel, Netlify, or Render

## Next Steps for Future Instances

1. Review the PDF requirements thoroughly
2. Confirm which technologies were selected (Angular assumed for frontend)
3. Check if custom backend (Node.js) is needed or using external APIs/Supabase
4. Update this CLAUDE.md as project structure solidifies
5. Add API documentation section if applicable
6. Add deployment instructions once platform is chosen
