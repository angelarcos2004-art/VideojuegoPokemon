# 🧪 INSTRUCCIONES DE TESTING COMPLETO

**Fecha:** 2026-05-26  
**Servidor:** http://localhost:4200 ✓ ACTIVO  
**Status:** Listo para Testing  

---

## 🚀 INICIO RÁPIDO

### 1. Verificar que el servidor está corriendo

```powershell
# Abrir PowerShell y ejecutar:
Invoke-WebRequest -Uri "http://localhost:4200" -UseBasicParsing
# Debe retornar Status 200
```

Si no está corriendo:
```powershell
cd "C:\TESE\6 SEMESTRE\DESARROLLO WEB PRACTICAS\3er Departamental\Proyecto3erDept\VideojuegoPokemon"
npm start
```

### 2. Abrir navegador

```
URL: http://localhost:4200
```

---

## 📋 DOCUMENTOS DE REFERENCIA

### Documento 1: TEST_REPORT.md
**Contenido:** Verificación técnica de código  
**Audiencia:** Desarrolladores, Code Review  
**Verifica:**
- ✓ Cada feature está implementado en el código
- ✓ No hay syntax errors
- ✓ Tipos TypeScript correctos
- ✓ Lógica coincide con especificación

**Cómo leer:**
1. Cada sección muestra el código exacto que fue modificado
2. Verde (✓) = implementado correctamente
3. Referencias a números de línea específicas

---

### Documento 2: MANUAL_TEST_GUIDE.md
**Contenido:** Pasos para testing manual en navegador  
**Audiencia:** QA Testers, Usuarios Finales  
**Verifica:**
- ✓ Features funcionan en la UI
- ✓ Mensajes se muestran correctamente
- ✓ Validaciones previenen entrada inválida
- ✓ Flujos completos funcionan end-to-end

**Cómo usar:**
1. Sigue cada sección paso a paso
2. Marca ✓ cuando cada prueba pasa
3. Anota cualquier comportamiento inesperado

---

## 🎯 PLAN DE TESTING (4 pasos)

### PASO 1: Setup (5 min)

```
□ Servidor corriendo en http://localhost:4200
□ Abrir navegador (Chrome/Firefox/Edge)
□ Limpiar cookies/cache (Ctrl+Shift+Delete)
□ Ir a http://localhost:4200
```

### PASO 2: Crear usuario de prueba (5 min)

**Opción A: Usar usuario existente**
```
Email: eric.arcos@hotmail.com
Password: Password123!
```

**Opción B: Crear nuevo usuario**
1. Click en `/register`
2. Email: `testuser[timestamp]@example.com`
3. Password: `Testpassword123!` (debe tener 8+, mayús, número, especial)
4. Confirmar password
5. Click "Registrarse"

### PASO 3: Testing por grupo (20 min)

Seguir la sección correspondiente en `MANUAL_TEST_GUIDE.md`:

| Grupo | Tiempo | Link |
|-------|--------|------|
| 1️⃣ Efectos Mágicos | 5 min | MANUAL_TEST_GUIDE.md#prueba-1 |
| 2️⃣ Trampas | 3 min | MANUAL_TEST_GUIDE.md#prueba-2 |
| 3️⃣ CPU AI | 3 min | MANUAL_TEST_GUIDE.md#prueba-3 |
| 4️⃣ Validación Input | 4 min | MANUAL_TEST_GUIDE.md#prueba-4 |
| 5️⃣ Password Recovery | 3 min | MANUAL_TEST_GUIDE.md#prueba-5 |
| 6️⃣ Deck Validation | 4 min | MANUAL_TEST_GUIDE.md#prueba-6 |
| 7️⃣ Error Handling | 3 min | MANUAL_TEST_GUIDE.md#prueba-7 |

### PASO 4: Reporte de resultados (2 min)

Llenar matriz en MANUAL_TEST_GUIDE.md:
```
| # | Prueba | Status | Firma |
|-|--------|--------|-------|
| 1.1 | ... | ✅ PASS | ___ |
```

Total esperado: **17/17 PASS** ✅

---

## 🎬 GUÍA RÁPIDA POR FEATURE

### Feature 1: Efectos de Cartas Mágicas

**¿Qué probar?**
- Poción suma 1000 HP
- Boost ATK suma 200 ATK a todas criaturas
- Boost DEF suma 300 DEF (NUEVO)

**¿Dónde?**
- Juego: `/game/cpu`
- Spellzone abajo del playmat

**¿Qué buscar?**
- Toast con mensaje específico
- Stats se actualizan en pantalla
- Carta desaparece a graveyard

---

### Feature 2: Trampas (Automáticas)

**¿Qué probar?**
- Usuario NO puede activar trampa manualmente
- Trampa se activa automática en ataque

**¿Dónde?**
- Juego: `/game/cpu`
- Durante batalla

**¿Qué buscar?**
- Mensaje: "Las trampas se activan automáticamente..."
- Ataque es bloqueado
- Trampa desaparece

---

### Feature 3: CPU Activa Cartas

**¿Qué probar?**
- CPU invoca Poción en su turno
- CP aumenta su HP

**¿Dónde?**
- Juego: `/game/cpu`
- Durante turno de CPU

**¿Qué buscar?**
- Toast: "CPU: ¡Poción usada! +1000 HP"
- HP de CPU sube en playmat

---

### Feature 4: Validación de Input

**¿Qué probar?**
- Email inválido muestra error
- Password débil muestra warning
- Passwords no coinciden

**¿Dónde?**
- Login: `/login`
- Register: `/register`
- Password Recovery: `/password-recovery`

**¿Qué buscar?**
- Errores en rojo debajo de inputs
- Strength bar (register)
- Botón deshabilitado si form inválido

---

### Feature 5: Password Recovery

**¿Qué probar?**
- Email válido envía enlace
- Email inválido rechazado

**¿Dónde?**
- `/password-recovery`

**¿Qué buscar?**
- Dos estados: form → success
- Mensaje verde con instrucciones
- Nota sobre carpeta spam

---

### Feature 6: Validación de Deck

**¿Qué probar?**
- Sin mazos → redirige a deck-builder
- Sin active → auto-marca primer deck
- Con active → juego inicia

**¿Dónde?**
- `/game/cpu` o `/game/online`

**¿Qué buscar?**
- Toasts informativos
- Redirecciones cuando aplica
- Badge "ACTIVO" en deck-builder

---

### Feature 7: Manejo de Errores

**¿Qué probar?**
- Error 401 (no autorizado)
- Error 409 (email duplicado)
- Error 0 (sin conexión)

**¿Dónde?**
- Cualquier formulario
- DevTools para simular errores

**¿Qué buscar?**
- Toasts con mensajes españoles
- Emojis para claridad
- Auto-limpieza después 5s

---

## 📊 CHECKLIST DE VERIFICACIÓN

```
ANTES DE TESTING:
□ Servidor corriendo en http://localhost:4200
□ Browser limpio (cache/cookies borrados)
□ Usuario creado o logueable
□ Consola de DevTools abierta (F12)

DURANTE TESTING:
□ Tomar notas de cualquier comportamiento inesperado
□ Revisar Network tab si hay errores
□ Revisar Console si hay JS errors
□ Tomar screenshots de estados importantes

DESPUÉS DE TESTING:
□ Llenar matriz de resultados
□ Documentar cualquier issue encontrado
□ Commit de resultados si aplica
```

---

## 🐛 TROUBLESHOOTING

### Problema: Servidor no inicia

**Solución:**
```powershell
# 1. Kill existing processes
Get-Process node -ErrorAction SilentlyContinue | Stop-Process -Force

# 2. Clear npm cache
npm cache clean --force

# 3. Reinstall dependencies
npm install

# 4. Start again
npm start
```

---

### Problema: Cartas no aparecen en mano

**Solución:**
```
1. Refresh página (F5)
2. Esperar 2-3 segundos a que cargue deck
3. Si persiste, crear mazo nuevo en deck-builder
4. Marcar como activo
5. Reiniciar juego
```

---

### Problema: Errores de "Not logged in"

**Solución:**
```
1. DevTools → Application → Cookies
2. Borrar todas las cookies del sitio
3. F5 para refresh
4. Login nuevamente
```

---

### Problema: Toast no aparece

**Solución:**
```
1. Revisar Console (F12) por errores JS
2. Verificar que el componente tiene showToast() implementado
3. Check browser console para mensajes de error
```

---

## 📞 CONTACTO / SOPORTE

**Servidor:** http://localhost:4200  
**Build:** `npm run build`  
**Start:** `npm start`  
**Test:** Seguir MANUAL_TEST_GUIDE.md  
**Issues:** Revisar servidor logs y browser console  

---

## ✅ CRITERIO DE ACEPTACIÓN

**PASS GLOBAL si:**
```
✅ 17/17 pruebas pasan
✅ No hay errores de JavaScript en console
✅ Todas las validaciones funcionan
✅ Todos los toasts muestran mensajes españoles correctos
✅ CPU juega sin errores
✅ Redirecciones automáticas funcionan
✅ Deck validation previene nullref errors
```

**FAIL si:**
```
❌ Cualquier prueba no pasa
❌ Errores en consola JavaScript
❌ Validación no funciona como se especifica
❌ Mensajes no están en español
```

---

**Generado:** 2026-05-26 14:50  
**Status:** ✅ LISTO PARA TESTING  
**Deadline:** 2026-05-28 12:00 (37 horas restantes)
