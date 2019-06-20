import { async, TestBed } from '@angular/core/testing';
import { ZenThemeManagerModule } from './zen-theme-manager.module';

describe('ZenThemeManagerModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ZenThemeManagerModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ZenThemeManagerModule).toBeDefined();
  });
});
