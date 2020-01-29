import { TestBed } from '@angular/core/testing';

import { ComponentsLibraryService } from './components-library.service';

describe('ComponentsLibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComponentsLibraryService = TestBed.get(ComponentsLibraryService);
    expect(service).toBeTruthy();
  });
});
