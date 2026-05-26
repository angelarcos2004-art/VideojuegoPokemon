import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  private errorSubject = new BehaviorSubject<string | null>(null);
  public error$ = this.errorSubject.asObservable();

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '❌ Error desconocido. Intenta de nuevo.';

        if (error.error instanceof ErrorEvent) {
          // Error del cliente
          errorMessage = `❌ Error: ${error.error.message}`;
        } else {
          // Error del servidor
          switch (error.status) {
            case 0:
              errorMessage = '❌ No se puede conectar al servidor. Verifica tu conexión.';
              break;
            case 400:
              errorMessage = error.error?.message || '❌ Solicitud inválida.';
              break;
            case 401:
              errorMessage = '❌ No autorizado. Por favor inicia sesión.';
              break;
            case 403:
              errorMessage = '❌ Acceso denegado.';
              break;
            case 404:
              errorMessage = '❌ Recurso no encontrado.';
              break;
            case 409:
              errorMessage = error.error?.message || '❌ Este email ya está registrado.';
              break;
            case 422:
              errorMessage = error.error?.message || '❌ Datos inválidos. Verifica tu información.';
              break;
            case 500:
              errorMessage = '❌ Error del servidor. Intenta más tarde.';
              break;
            case 503:
              errorMessage = '❌ Servidor no disponible. Intenta más tarde.';
              break;
            default:
              errorMessage = `❌ Error ${error.status}: ${error.statusText}`;
          }
        }

        // Emitir el error para que la UI lo muestre
        console.error('HTTP Error:', error);
        this.errorSubject.next(errorMessage);

        // Limpiar mensaje después de 5 segundos
        setTimeout(() => this.errorSubject.next(null), 5000);

        return throwError(() => ({
          message: errorMessage,
          status: error.status,
          original: error
        }));
      })
    );
  }

  clearError(): void {
    this.errorSubject.next(null);
  }
}
