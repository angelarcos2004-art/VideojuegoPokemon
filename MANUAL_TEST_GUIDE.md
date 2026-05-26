# 🧪 GUÍA DE PRUEBAS MANUALES

**Servidor:** http://localhost:4200 ✓ ACTIVO  
**Última actualización:** 2026-05-26 14:50

---

## 📋 Preparación Inicial

### Usuario de Prueba
```
Email: eric.arcos@hotmail.com
Password: Password123!
```

Si no existe, puedes crear uno en `/register`:
- Email válido
- Password: Abcd1234! (debe tener 8+ chars, mayúscula, número, especial)
- Confirmar password

---

## 🎯 Prueba 1: Efectos de Cartas Mágicas

### 1.1 Activación de Poción (Heal +1000 HP)

**Flujo:**
1. Login a `/login` con credenciales
2. Click "Jugar vs CPU" en `/menu`
3. Esperar que cargue el juego (`/game/cpu`)
4. En tu mano, localizar "Poción" (carta con emoji 💊)
5. Click en "Poción" → se coloca face-down en spellZone
6. Click en la carta face-down en spellZone (debajo del playmat)
7. Observar:
   - ✅ Toast popup: "¡Poción usada! +1000 HP"
   - ✅ Tu HP aumenta en 1000 (visible en UI)
   - ✅ Carta desaparece de spellZone

**Resultado Esperado:** VERDE / PASS

---

### 1.2 Activación de Boost ATK (+200 ATK a criaturas)

**Flujo:**
1. Desde mismo juego, tener al menos 1 monstruo en campo
2. Localizar "Boost ATK" en mano
3. Click en "Boost ATK" → se coloca face-down
4. Click en carta face-down para activar
5. Observar:
   - ✅ Toast: "¡Boost ATK! +200 ATK a tus criaturas"
   - ✅ ATK de TODOS tus monstruos aumenta en 200
   - ✅ Stats visibles en cada carta muestran nuevo ATK
   - ✅ Carta se mueve a graveyard

**Resultado Esperado:** VERDE / PASS

---

### 1.3 Activación de Boost DEF (+300 DEF)

**Flujo:**
1. Desde mismo juego, tener monstruos en campo
2. Localizar "Armadura Defensiva" (id 2007, puede estar en mano o necesitas en un nuevo juego)
3. Si no está en mano actual, crear nuevo mazo en `/cards/deck-builder`:
   - Agregar carta "Armadura Defensiva" al mazo
   - Marcar como activo
   - Volver a `/game/cpu`
4. En la mano, click "Armadura Defensiva" → face-down
5. Click para activar
6. Observar:
   - ✅ Toast: "¡Boost DEF! +300 DEF a tus criaturas"
   - ✅ DEF de TODOS los monstruos aumenta
   - ✅ Stats actualizadas visibles

**Resultado Esperado:** VERDE / PASS (NUEVO en esta sesión)

---

## 🛡️ Prueba 2: Activación de Trampas

### 2.1 Usuario NO puede activar trampa manualmente

**Flujo:**
1. En `/game/cpu`, colocar "Protección" (trap) en spellZone
2. Click en la trampa durante tu turno (fase principal)
3. Observar:
   - ✅ Toast: "Las trampas se activan automáticamente en respuesta a eventos."
   - ✅ Trampa NO se abre/activa
   - ✅ Trampa sigue face-down en spellZone

**Resultado Esperado:** VERDE / PASS

---

### 2.2 Trampa se activa automáticamente en ataque

**Flujo:**
1. En `/game/cpu`, colocar "Protección" face-down en spellZone del CPU
   - Nota: CPU coloca sus propias cartas automáticamente
2. En tu turno, ir a fase de batalla (End Main Phase)
3. Atacar al CPU (click en tu monstruo, luego click en CPU para ataque directo)
4. Observar:
   - ✅ Antes de completarse el ataque, trampa se activa automáticamente
   - ✅ Toast: "¡Tu trampa bloqueó el ataque!" O "¡Tu trampa bloquea el ataque del enemigo!"
   - ✅ Tu ataque es cancelado (CPU sigue con mismo HP)
   - ✅ Trampa desaparece de spellZone

**Resultado Esperado:** VERDE / PASS

---

## 🤖 Prueba 3: CPU Activa Cartas Mágicas

### 3.1 CPU invoca Poción automáticamente

**Flujo:**
1. En `/game/cpu`, ir a turno de CPU
2. Esperar a que CPU ejecute su turno
3. Durante "CPU: Fase Principal", observar:
   - ✅ Si CPU tiene "Poción" en mano, invoca automáticamente
   - ✅ Toast muestra: "CPU: ¡Poción usada! +1000 HP"
   - ✅ HP del CPU aumenta visualmente
   - ✅ Carta desaparece de spellZone del CPU

**Resultado Esperado:** VERDE / PASS (NUEVO en esta sesión)

---

## ✅ Prueba 4: Validación de Entrada

### 4.1 Login - Email inválido

**Flujo:**
1. Navegar a `/login`
2. En campo "Email", ingresar: `usuariosinaro.com` (sin @)
3. En campo "Password", ingresar: `password123`
4. Observar:
   - ✅ Botón "Iniciar Sesión" está **DESHABILITADO** (gris)
   - ✅ Error bajo email: "Email inválido (ejemplo: usuario@dominio.com)"
   - ✅ Form NO se puede enviar

5. Cambiar email a: `usuario@dominio.com`
6. Observar:
   - ✅ Error desaparece
   - ✅ Botón se habilita (amarillo)

**Resultado Esperado:** VERDE / PASS

---

### 4.2 Register - Password strength indicator

**Flujo:**
1. Navegar a `/register`
2. Rellenar email: `testuser123@example.com`

3. **Test Débil:**
   - Password: `abc`
   - Observar:
     - ✅ Barra de strength roja (muy baja)
     - ✅ Badge: "⚠️ Débil"
     - ✅ Error: "Mínimo 8 caracteres"
     - ✅ Botón deshabilitado

4. **Test Aceptable:**
   - Password: `Abcd1234`
   - Observar:
     - ✅ Barra ~60% (amarilla)
     - ✅ Badge: "📊 Aceptable"
     - ✅ Error desaparece

5. **Test Buena:**
   - Password: `Abcd1234!`
   - Observar:
     - ✅ Barra ~80% (verde)
     - ✅ Badge: "✓ Buena"

6. **Test Muy Fuerte:**
   - Password: `Abcd1234!@#`
   - Observar:
     - ✅ Barra 100% (azul)
     - ✅ Badge: "🔒 Muy fuerte"

**Resultado Esperado:** VERDE / PASS

---

### 4.3 Register - Password mismatch

**Flujo:**
1. En `/register`, llenar:
   - Email: `testuser456@example.com`
   - Password: `Abcd1234!`
   - Confirm Password: `Abcd1234a` (DIFERENTE)

2. Observar:
   - ✅ Error bajo "Confirmar Contraseña": "Las contraseñas no coinciden"
   - ✅ Botón "Registrarse" deshabilitado

3. Cambiar Confirm a: `Abcd1234!` (IGUAL)
4. Observar:
   - ✅ Error desaparece
   - ✅ Botón se habilita

**Resultado Esperado:** VERDE / PASS

---

## 🔐 Prueba 5: Recuperación de Contraseña

### 5.1 Envío de email de recuperación

**Flujo:**
1. Navegar a `/password-recovery`
2. Ingresar email registrado: `eric.arcos@hotmail.com`
3. Click "Enviar Enlace de Recuperación"
4. Observar:
   - ✅ Pantalla cambia a estado SUCCESS
   - ✅ Título: "Recuperar Contraseña" (todavía visible)
   - ✅ Mensaje verde: "✅ **Enlace enviado exitosamente**"
   - ✅ Texto: "Hemos enviado un enlace a **eric.arcos@hotmail.com**"
   - ✅ Instrucciones: "Revisa tu bandeja de entrada y haz clic en el enlace para resetear tu contraseña."
   - ✅ Nota: "📧 Si no ves el email, revisa tu carpeta de spam."
   - ✅ Botón "Volver a Iniciar Sesión" visible

5. Click "Volver a Iniciar Sesión"
6. Observar:
   - ✅ Navega a `/login`

**Resultado Esperado:** VERDE / PASS

---

### 5.2 Email inválido en recovery

**Flujo:**
1. Navegar a `/password-recovery`
2. Ingresar: `usuariosinaro.com` (sin @)
3. Click "Enviar Enlace"
4. Observar:
   - ✅ Botón deshabilitado por validación (no permite click)
   - ✅ Error rojo: "Email inválido"

**Resultado Esperado:** VERDE / PASS

---

## 📦 Prueba 6: Validación de Deck Activo

### 6.1 Usuario sin mazos intenta jugar

**Flujo:**
1. Crear usuario nuevo o borrar todos sus mazos en `/cards/deck-builder`
2. Navegar a `/game/cpu`
3. Observar:
   - ✅ Toast: "❌ No tienes mazos. Por favor, crea uno en el Constructor de Mazo."
   - ✅ Automática redirección a `/cards/deck-builder`
   - ✅ URL cambia a `localhost:4200/cards/deck-builder`
   - ✅ Juego NO inicia

**Resultado Esperado:** VERDE / PASS (NUEVO en esta sesión)

---

### 6.2 Auto-marcar primer deck como activo

**Flujo:**
1. En `/cards/deck-builder`, crear 3 mazos:
   - Mazo 1: "Fuego Rápido"
   - Mazo 2: "Agua Lenta"
   - Mazo 3: "Plantas"

2. Asegurarse de que NINGUNO esté marcado como "ACTIVO"
   - Revisa las tarjetas de mazos: No deben tener badge "ACTIVO"

3. Navegar a `/game/cpu`

4. Observar:
   - ✅ Toast: "✓ Mazo "Fuego Rápido" establecido como activo automáticamente."
   - ✅ Juego inicia normalmente
   - ✅ Si vuelves a `/cards/deck-builder`, "Fuego Rápido" ahora tiene badge "ACTIVO"

**Resultado Esperado:** VERDE / PASS (NUEVO en esta sesión)

---

### 6.3 Juego con deck activo seleccionado

**Flujo:**
1. En `/cards/deck-builder`, marcar un mazo como "ACTIVO" (click botón ✓ Usar)
2. Navegar a `/game/cpu`
3. Observar:
   - ✅ SIN redirecciones
   - ✅ Juego inicia normalmente
   - ✅ Tu mano muestra cartas del mazo activo
   - ✅ Primer toast: "¡Comienza el Duelo! Fase Principal: Invoca monstruos."

**Resultado Esperado:** VERDE / PASS

---

## 🚨 Prueba 7: Manejo Global de Errores

### 7.1 Error 401 - No autorizado

**Flujo (Simulado):**
1. En devtools (F12), ir a Application → Cookies
2. Eliminar la cookie de sesión
3. Intentar cualquier request autenticado (ej: navegar a `/menu`)
4. Observar:
   - ✅ Toast: "❌ No autorizado. Por favor inicia sesión."
   - ✅ Automática redirección a `/login`
   - ✅ Toast desaparece después de 5 segundos

**Resultado Esperado:** VERDE / PASS

---

### 7.2 Error 409 - Email duplicado

**Flujo:**
1. Navegar a `/register`
2. Ingresar email YA REGISTRADO: `eric.arcos@hotmail.com`
3. Ingresar password válida: `Abcd1234!`
4. Click "Registrarse"
5. Observar:
   - ✅ Toast error: "❌ Este email ya está registrado."
   - ✅ Form NO se envía
   - ✅ Link "¿Olvidaste tu contraseña?" visible

**Resultado Esperado:** VERDE / PASS

---

### 7.3 Error 0 - Conexión fallida

**Flujo (Simulado):**
1. Abrir DevTools (F12)
2. Ir a Network tab
3. Click ⊗ (offline)
4. Intentar hacer login o cualquier request
5. Observar:
   - ✅ Toast: "❌ No se puede conectar al servidor. Verifica tu conexión."
   - ✅ Mensaje claro, SIN detalles técnicos
   - ✅ Instrucción clara: "Verifica tu conexión."

6. Reactivar internet (click ⊗ nuevamente)

**Resultado Esperado:** VERDE / PASS

---

## 📊 Matriz de Pruebas

| # | Prueba | Status | Firma |
|---|--------|--------|-------|
| 1.1 | Poción (+1000 HP) | ⬜ | ___ |
| 1.2 | Boost ATK (+200 ATK) | ⬜ | ___ |
| 1.3 | Boost DEF (+300 DEF) | ⬜ | ___ |
| 2.1 | Usuario NO puede activar trampa | ⬜ | ___ |
| 2.2 | Trampa se activa en ataque | ⬜ | ___ |
| 3.1 | CPU invoca Poción | ⬜ | ___ |
| 4.1 | Login: Email inválido | ⬜ | ___ |
| 4.2 | Register: Strength indicator | ⬜ | ___ |
| 4.3 | Register: Password mismatch | ⬜ | ___ |
| 5.1 | Envío de email recovery | ⬜ | ___ |
| 5.2 | Email inválido en recovery | ⬜ | ___ |
| 6.1 | Usuario sin mazos | ⬜ | ___ |
| 6.2 | Auto-marcar primer deck | ⬜ | ___ |
| 6.3 | Deck activo seleccionado | ⬜ | ___ |
| 7.1 | Error 401 | ⬜ | ___ |
| 7.2 | Error 409 | ⬜ | ___ |
| 7.3 | Error 0 (offline) | ⬜ | ___ |

**Total:** 17 pruebas  
**Completadas:** ___ / 17  
**Resultado Final:** _______

---

## 🎓 Notas

- Todas las pruebas deben mostrar **toasts con mensajes específicos en español**
- Todas las validaciones son **client-side** (inmediatas)
- Los errores de servidor muestran **mensajes amigables**, no detalles técnicos
- Las **trampas NUNCA se pueden activar manualmente**, solo automáticamente
- La **CPU invoca cartas mágicas automáticamente**, no necesita intervención

---

**Servidor:** http://localhost:4200 ✓  
**Build:** Successful (5.558s)  
**Status:** Ready for Testing ✓
