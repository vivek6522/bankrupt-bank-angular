import { Observable, of } from 'rxjs';

export class MockTranslateService {
  get(key: string[] | string, interpolateParams?: object): Observable<string> {
    return of('');
  }
}
